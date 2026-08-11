import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { emailLayout, detailTable, escapeHtml, escapeNewlines } from "@/lib/email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, role, message } =
      await request.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "We Are Globex <website@weareglobex.com>",
      to: "careers@weareglobex.com",
      replyTo: email,
      subject: `Job application — ${role || "Speculative Application"} (${firstName} ${lastName})`,
      html: emailLayout({
        preheader: "A new job application has been received.",
        content: `
          <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 20px; line-height: 1.3;">New Job Application</h2>
          <p style="margin: 0 0 20px 0; color: #9ca3af; font-size: 13px;">Received ${escapeHtml(new Date().toLocaleString())}</p>
          ${detailTable([
            ["Name", `${firstName} ${lastName}`],
            ["Email", email],
            ["Phone", phone || "Not provided"],
            ["Applying for", role || "Speculative Application"],
          ])}
          <h3 style="margin: 24px 0 8px 0; color: #111827; font-size: 15px;">Message</h3>
          <p style="margin: 0; padding: 16px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; color: #111827; font-size: 14px; line-height: 1.7;">${escapeNewlines(message)}</p>
        `,
      }),
    });

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.error("Error submitting career application:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
