import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/db";
import { contactSubmission } from "@/db/schema";
import { desc } from "drizzle-orm";

// GET /api/contacts - Get all contact submissions (for admin dashboard)
export async function GET(request: NextRequest) {
  try {
    const allContacts = await db
      .select()
      .from(contactSubmission)
      .orderBy(desc(contactSubmission.submittedAt));

    // Transform the contact data to match the expected format
    const transformedContacts = allContacts.map(contact => ({
      id: contact.id,
      firstName: contact.firstName,
      lastName: contact.lastName,
      company: contact.company,
      email: contact.email,
      phone: contact.phone,
      description: contact.description,
      message: contact.message,
      status: contact.status,
      isRead: contact.isRead,
      submittedAt: contact.submittedAt.toISOString(),
      updatedAt: contact.updatedAt.toISOString(),
    }));

    return NextResponse.json(transformedContacts);
  } catch (error) {
    console.error("GET contacts error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
