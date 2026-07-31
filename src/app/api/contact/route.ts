import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.string().trim().email("Enter a valid email address."),
  projectType: z.string().trim().min(2, "Select a project type."),
  message: z.string().trim().min(10, "Message must be at least 10 characters.")
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const submission = {
    ...parsed.data,
    receivedAt: new Date().toISOString()
  };

  // In production, connect this to Resend, Supabase, MongoDB, or a CRM.
  console.info("New portfolio contact submission", submission);

  return NextResponse.json({
    ok: true,
    message: "Thanks. Your message was received successfully."
  });
}
