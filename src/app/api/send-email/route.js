
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });
}

export async function POST(request) {
  try {
    let body;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { message: "Invalid request body." },
        { status: 400 }
      );
    }

    const name =
      typeof body?.name === "string"
        ? body.name.replace(/[\r\n]/g, " ").trim()
        : "";

    const email =
      typeof body?.email === "string"
        ? body.email.trim()
        : "";

    const company =
      typeof body?.company === "string"
        ? body.company.trim()
        : "";

    const message =
      typeof body?.message === "string"
        ? body.message.trim()
        : "";

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Validate field lengths and email format
    if (
      name.length > 120 ||
      email.length > 254 ||
      company.length > 160 ||
      message.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { message: "Please enter valid contact details." },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const receiver =
      process.env.CONTACT_RECEIVER || emailUser;

    if (!emailUser || !emailPass) {
      console.error("Email environment variables missing.");

      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const port = Number(process.env.SMTP_PORT || 465);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port,
      secure: port === 465,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "Not provided");
    const safeMessage = escapeHtml(message);

    // EMAIL 1 - WEBSITE OWNER NOTIFICATION
    const ownerMail = {
      from: `"DeepCode Labs Website" <${emailUser}>`,
      to: receiver,
      replyTo: email,
      subject: `New Contact Form Submission - ${name}`,

      text: `
New contact form submission

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}

Message:
${message}

Sent from https://www.deepcodelabs.io/contact
      `,

      html: `
        <div style="font-family:Arial,sans-serif;background:#f4f6fb;padding:30px;">
          <div style="max-width:600px;margin:auto;background:#fff;border-radius:12px;overflow:hidden;">
            <div style="background:#05060a;padding:25px;text-align:center;">
              <h2 style="color:#4da3ff;margin:0;">
                DeepCode Labs
              </h2>
              <p style="color:#bbb;">
                New Contact Form Submission
              </p>
            </div>

            <div style="padding:30px;color:#333;">
              <p><strong>Name:</strong> ${safeName}</p>
              <p><strong>Email:</strong> ${safeEmail}</p>
              <p><strong>Company:</strong> ${safeCompany}</p>

              <hr style="border:0;border-top:1px solid #ddd;">

              <h3 style="color:#357abd;">Message</h3>
              <p style="line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere;">${safeMessage}</p>

              <p style="font-size:12px;color:#999;margin-top:30px;">
                Sent from deepcodelabs.io/contact
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // EMAIL 2 - AUTOMATIC CUSTOMER CONFIRMATION
    const customerMail = {
      from: `"DeepCode Labs" <${emailUser}>`,
      to: email,
      replyTo: "info@deepcodelabs.io",
      subject: "Thank You for Contacting DeepCode Labs",

      text: `
Hi ${name},

Thank you for contacting DeepCode Labs!

We have received your message. Our team will review your inquiry and get back to you as soon as possible.

Your message:
${message}

Website: https://www.deepcodelabs.io
Contact: info@deepcodelabs.io

Regards,
DeepCode Labs Team
      `,

      html: `
        <div style="font-family:Arial,sans-serif;background:#05060a;padding:30px;">
          <div style="max-width:600px;margin:auto;background:#101522;border-radius:14px;overflow:hidden;border:1px solid #253c60;">

            <div style="padding:30px;text-align:center;border-bottom:1px solid #253c60;">
              <h1 style="color:#4da3ff;margin:0;">
                DeepCode Labs
              </h1>
              <p style="color:#9bc9ff;">
                Building the Future of Real-Time Intelligent Systems
              </p>
            </div>

            <div style="padding:30px;">
              <h2 style="color:#fff;">
                Thank You, ${safeName}!
              </h2>

              <p style="color:#d0d0d0;line-height:1.8;">
                Thank you for contacting DeepCode Labs.
                We have successfully received your message.
              </p>

              <p style="color:#d0d0d0;line-height:1.8;">
                Our team will review your inquiry and get
                back to you as soon as possible.
              </p>

              <div style="background:#182237;padding:20px;border-radius:8px;margin-top:25px;">
                <h3 style="color:#4da3ff;margin-top:0;">
                  Your Message
                </h3>
                <p style="color:#d0d0d0;line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere;">
                  ${safeMessage}
                </p>
              </div>

              <div style="text-align:center;margin-top:30px;">
                <a
                  href="https://www.deepcodelabs.io/deepq"
                  style="display:inline-block;background:#4da3ff;color:white;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:bold;"
                >
                  Explore DeepQ
                </a>
              </div>

              <div style="border-top:1px solid #253c60;margin-top:30px;padding-top:20px;">
                <p style="color:#9bc9ff;font-size:14px;">
                  Email: info@deepcodelabs.io
                </p>
                <p style="color:#9bc9ff;font-size:14px;">
                  Website: www.deepcodelabs.io
                </p>
              </div>

              <p style="color:#777;font-size:12px;text-align:center;margin-top:25px;">
                © ${new Date().getFullYear()} DeepCode Labs.
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // First deliver the website owner's notification.
    await transporter.sendMail(ownerMail);

    // Attempt the customer auto-reply separately.
    // A failure here must not cause a duplicate submission.
    try {
      await transporter.sendMail(customerMail);
    } catch (autoReplyError) {
      console.error(
        "Customer confirmation failed:",
        autoReplyError
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact email error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send message. Please try again.",
      },
      { status: 500 }
    );
  }
}
