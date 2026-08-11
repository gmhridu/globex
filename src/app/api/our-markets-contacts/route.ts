import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/db";
import { marketContactSubmission } from "@/db/schema";
import { desc } from "drizzle-orm";

// GET /api/our-markets-contacts - Get all market contact submissions (for admin dashboard)
export async function GET(request: NextRequest) {
  try {
    const allContacts = await db
      .select()
      .from(marketContactSubmission)
      .orderBy(desc(marketContactSubmission.submittedAt));

    const transformedContacts = allContacts.map((contact) => ({
      id: contact.id,
      name: contact.name,
      country: contact.country,
      sector: contact.sector,
      message: contact.message,
      status: contact.status,
      isRead: contact.isRead,
      submittedAt: contact.submittedAt.toISOString(),
      updatedAt: contact.updatedAt.toISOString(),
    }));

    return NextResponse.json(transformedContacts);
  } catch (error) {
    console.error("GET market contacts error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}