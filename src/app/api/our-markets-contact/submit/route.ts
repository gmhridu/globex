import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/db";
import { marketContactSubmission } from "@/db/schema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, country, sector, message } = await request.json();

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
        from: "Our Markets Enquiry <noreply@weareglobex.com>",
        to: "info@weareglobex.com",
        subject: `New Market Enquiry — ${sector} (${country})`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1f2937;">New Our Markets Enquiry</h2>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Country:</strong> ${country}</p>
              <p><strong>Sector:</strong> ${sector}</p>
            </div>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Message:</h3>
              <p style="white-space: pre-wrap;">${message || "No message provided."}</p>
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