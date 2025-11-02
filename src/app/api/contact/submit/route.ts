import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/db";
import { contactSubmission } from "@/db/schema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const {
      firstName,
      lastName,
      company,
      email,
      phone,
      description,
      message,
      recaptchaToken,
    } = await request.json();

    // Verify reCAPTCHA
    const recaptchaSecret = process.env.RECAPTCHA_SERVER_KEY;
    if (!recaptchaSecret) {
      console.error("RECAPTCHA_SERVER_KEY is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

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

    // Insert into database
    const result = await db.insert(contactSubmission).values({
      id: `contact_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      firstName,
      lastName,
      company,
      email,
      phone,
      description,
      message,
      status: "new",
      isRead: false,
    }).returning();

    const submission = result[0];

    // Send email to admin
    try {
      await resend.emails.send({
        from: "Contact Form <noreply@weareglobex.com>",
        to: "info@weareglobex.com",
        subject: "New Contact Form Submission",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1f2937;">New Contact Form Submission</h2>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Company:</strong> ${company}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Description:</strong> ${description}</p>
            </div>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Message:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <div style="background-color: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #1d4ed8;">
                <strong>Submitted at:</strong> ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        `,
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
        subject: "Thank you for contacting Globex",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1f2937;">Thank you for contacting Globex!</h2>
            <p>Dear ${firstName} ${lastName},</p>
            <p>Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.</p>

            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Your Message Summary:</h3>
              <p><strong>Company:</strong> ${company}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Topic:</strong> ${description}</p>
            </div>

            <p>If you have any additional information or questions, please don't hesitate to reply to this email.</p>

            <p>Best regards,<br>The Globex Team</p>

            <div style="background-color: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #1d4ed8;">
                <strong>Submitted at:</strong> ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        `,
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
