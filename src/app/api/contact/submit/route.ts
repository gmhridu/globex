import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/db";
import { contactSubmission } from "@/db/schema";
import { Resend } from "resend";
import {
  emailLayout,
  detailTable,
  escapeHtml,
  escapeNewlines,
} from "@/lib/email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const {
      firstName,
      lastName,
      company,
      email,
      phone,
      describes,
      description,
      message,
      recaptchaToken,
    } = await request.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA (optional — skipped when no token is provided)
    const recaptchaSecret = process.env.RECAPTCHA_SERVER_KEY;
    if (recaptchaToken && recaptchaSecret) {
      const recaptchaResponse = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`,
        {
          method: "POST",
        }
      );

      const recaptchaResult = await recaptchaResponse.json();

      if (!recaptchaResult.success) {
        return NextResponse.json(
          { error: "reCAPTCHA verification failed" },
          { status: 400 }
        );
      }
    } else if (recaptchaToken && !recaptchaSecret) {
      console.error("RECAPTCHA_SERVER_KEY is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const submittedAt = new Date().toLocaleString();

    // Resolve optional fields once so they are shared by the DB insert and the emails
    const companyValue = company || "Not provided";
    const phoneValue = phone || "Not provided";
    const topic = describes || description || "General enquiry";

    // Insert into database
    const result = await db.insert(contactSubmission).values({
      id: `contact_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      firstName,
      lastName,
      company: company || "",
      email,
      phone: phone || "",
      description: topic,
      message,
      status: "new",
      isRead: false,
    }).returning();

    const submission = result[0];

    // Send email to admin
    try {
      await resend.emails.send({
        from: "Globex Website <noreply@weareglobex.com>",
        to: "info@weareglobex.com",
        replyTo: email,
        subject: `New website enquiry from ${firstName} ${lastName}`,
        html: emailLayout({
          preheader: "A new contact form submission has been received.",
          content: `
            <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 20px; line-height: 1.3;">New Contact Form Submission</h2>
            <p style="margin: 0 0 4px 0; color: #374151;">A new enquiry was submitted through the website.</p>
            <p style="margin: 0 0 20px 0; color: #9ca3af; font-size: 13px;">Received ${escapeHtml(submittedAt)}</p>
            ${detailTable([
              ["Name", `${firstName} ${lastName}`],
              ["Company", companyValue],
              ["Email", email],
              ["Phone", phoneValue],
              ["Topic", topic],
            ])}
            <h3 style="margin: 24px 0 8px 0; color: #111827; font-size: 15px;">Message</h3>
            <p style="margin: 0; padding: 16px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; color: #111827; font-size: 14px; line-height: 1.7;">${escapeNewlines(message)}</p>
          `,
        }),
      });
    } catch (emailError) {
      console.error("Failed to send admin email:", emailError);
      // Don't fail the submission if email fails
    }

    // Send confirmation email to user
    try {
      await resend.emails.send({
        from: "Globex Team <noreply@weareglobex.com>",
        to: email,
        replyTo: "info@weareglobex.com",
        subject: "We've received your enquiry — We Are Globex",
        html: emailLayout({
          preheader: "Thank you for contacting We Are Globex. We'll be in touch shortly.",
          content: `
            <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 20px; line-height: 1.3;">Thank you for contacting Globex</h2>
            <p style="margin: 0 0 16px 0; color: #374151;">Dear ${escapeHtml(firstName)} ${escapeHtml(lastName)},</p>
            <p style="margin: 0 0 16px 0; color: #374151;">Thank you for reaching out. We have received your enquiry and one of our team members will get back to you within one business day.</p>
            ${detailTable([
              ["Company", companyValue],
              ["Phone", phoneValue],
              ["Topic", topic],
            ])}
            <p style="margin: 0 0 16px 0; color: #374151;">If you have any additional information, simply reply to this email and it will come straight to our team.</p>
            <p style="margin: 0; color: #374151;">Best regards,<br/><strong style="color: #111827;">The Globex Team</strong></p>
          `,
          footerNote: "You received this email because you submitted the contact form on weareglobex.com.",
        }),
      });
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
      // Don't fail the submission if email fails
    }

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      id: submission.id,
    });

  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
