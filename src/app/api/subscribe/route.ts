import { Resend } from "resend";
import { NextResponse } from "next/server";
import { WelcomeEmail } from "../../../../emails/welcome-email";

const resend = new Resend(process.env.RESEND_API_KEY);
const audienceId = process.env.RESEND_AUDIENCE_ID!;

export async function POST(request: Request) {
  try {
    // For testing purposes
    const testEmail = "delivered@resend.dev";
    
    // Get email from request body for production use
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Use test email for testing, real email for production
    const emailToUse = email//process.env.NODE_ENV === "development" ? testEmail : email;
    const existingContacts = await resend.contacts.list({ audienceId });
    const contactExists = existingContacts?.data?.data.some(
      (contact: { email: string }) => contact.email.toLowerCase() === emailToUse.toLowerCase()
    );

    console.log("contactExists", contactExists);

    if (contactExists) {
      return NextResponse.json(
        { message: "Successfully subscribed" },
        { status: 200 }
      );
    }

    await resend.contacts.create({
      email: emailToUse,
      audienceId: audienceId,
      unsubscribed: false
    });

    // Send welcome email
    await resend.emails.send({
      from: 'daniel <hi@dtb.danielpetho.com>',
      to: emailToUse,
      subject: 'welcome',
      react: WelcomeEmail({email: emailToUse}),
    });

    return NextResponse.json(
      { message: "Successfully subscribed" },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: "Error subscribing to newsletter" },
      { status: 500 }
    );
  }
}
