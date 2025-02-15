import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Here you would typically send the email using your preferred email service
    // For example, using Resend, SendGrid, or other email providers

    // Example with console log for now
    console.log("Contact form submission:", { name, email, message });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
