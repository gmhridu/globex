import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/db";
import { marketContactSubmission } from "@/db/schema";
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
    const { name, country, sector, message, email } = await request.json();

    if (!name || !country || !sector) {
      return NextResponse.json(
        { error: "Name, country and sector are required" },
        { status: 400 }
      );
    }

    // Insert into database
    const result = await db
      .insert(marketContactSubmission)
      .values({
        id: `market_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        name,
        country,
        sector,
        message: message || "",
        status: "new",
        isRead: false,
      })
      .returning();

    const submission = result[0];

    // Send email to admin
    try {
      await resend.emails.send({
        from: "Globex Website <website@weareglobex.com>",
        to: "info@weareglobex.com",
        replyTo: email || "info@weareglobex.com",
        subject: `New market enquiry — ${sector} (${country})`,
        html: emailLayout({
          preheader: "A new Our Markets enquiry has been received.",
          content: `
            <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 20px; line-height: 1.3;">New Our Markets Enquiry</h2>
            <p style="margin: 0 0 20px 0; color: #9ca3af; font-size: 13px;">Received ${escapeHtml(new Date().toLocaleString())}</p>
            ${detailTable([
              ["Name", name],
              ["Country", country],
              ["Sector", sector],
            ])}
            <h3 style="margin: 24px 0 8px 0; color: #111827; font-size: 15px;">Message</h3>
            <p style="margin: 0; padding: 16px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; color: #111827; font-size: 14px; line-height: 1.7;">${escapeNewlines(message || "No message provided.")}</p>
          `,
        }),
      });
    } catch (emailError) {
      console.error("Failed to send admin email:", emailError);
      // Don't fail the submission if email fails
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully",
      id: submission.id,
    });
  } catch (error) {
    console.error("Error submitting market enquiry:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry" },
      { status: 500 }
    );
  }
}