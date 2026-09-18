import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message } = payload;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    console.log("New contact message received:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been received. I will get back to you shortly."
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please email me directly." },
      { status: 500 }
    );
  }
}
