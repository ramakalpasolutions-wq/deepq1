
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

// Prevent HTML injection in email templates
function escapeHtml(value = "") {
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
    // Read incoming form data
    let body;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request data.",
        },
        { status: 400 }
      );
    }

    // Validate input types
    if (
      !body ||
      typeof body.name !== "string" ||
      typeof body.email !== "string" ||
      typeof body.message !== "string" ||
      (body.company != null &&
        typeof body.company !== "string")
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter valid contact details.",
        },
        { status: 400 }
      );
    }

    const name = body.name.trim();
    const email = body.email.trim();
    const company = (body.company || "").trim();
    const message = body.message.trim();

    // Required field validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Additional input validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      name.length < 2 ||
      name.length > 100 ||
      !emailRegex.test(email) ||
      email.length > 254 ||
      company.length > 150 ||
      message.length < 5 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check your contact details.",
        },
        { status: 400 }
      );
    }

    // Read Hostinger SMTP settings
    const smtpUser = process.env.EMAIL_USER;
    const smtpPassword = process.env.EMAIL_PASS;
    const receiver =
      process.env.CONTACT_RECEIVER || smtpUser;

    const smtpHost =
      process.env.SMTP_HOST || "smtp.hostinger.com";

    const smtpPort = Number(
      process.env.SMTP_PORT || 465
    );

    // Ensure credentials are configured
    if (!smtpUser || !smtpPassword || !receiver) {
      console.error("SMTP configuration missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    // HOSTINGER NODEMAILER TRANSPORTER
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,

      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },

      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
    });

    // Sanitize submitted values for HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(
      company || "Not provided"
    );
    const safeMessage = escapeHtml(message);

    // =====================================
    // EMAIL 1: ADMIN NOTIFICATION
    // =====================================

    const ownerMailOptions = {
      from: `"DeepCode Labs Website" <${smtpUser}>`,
      to: receiver,

      // Reply directly to the visitor
      replyTo: email,

      subject: `New Contact Enquiry - ${name.replace(
        /[\r\n]/g,
        " "
      )}`,

      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}

Message:
${message}

Source: https://www.deepcodelabs.io/contact
      `,

      html: `
        <div style="
          background:#f4f6fb;
          padding:30px;
          font-family:Arial,sans-serif;
        ">
          <div style="
            max-width:600px;
            margin:auto;
            background:#ffffff;
            border-radius:14px;
            overflow:hidden;
          ">

            <div style="
              background:#05060a;
              padding:30px;
              text-align:center;
            ">
              <h1 style="
                color:#4da3ff;
                margin:0;
                font-size:28px;
              ">
                DeepCode Labs
              </h1>

              <p style="color:#cccccc;">
                New Website Contact Enquiry
              </p>
            </div>

            <div style="
              padding:30px;
              color:#333333;
            ">

              <h2 style="color:#357abd;">
                Contact Details
              </h2>

              <p>
                <strong>Name:</strong>
                ${safeName}
              </p>

              <p>
                <strong>Email:</strong>
                ${safeEmail}
              </p>

              <p>
                <strong>Company:</strong>
                ${safeCompany}
              </p>

              <hr style="
                border:0;
                border-top:1px solid #dddddd;
                margin:25px 0;
              " />

              <h3 style="color:#357abd;">
                Message
              </h3>

              <div style="
                padding:20px;
                background:#f4f8ff;
                border-radius:8px;
                border-left:4px solid #4da3ff;
              ">
                <p style="
                  white-space:pre-wrap;
                  overflow-wrap:anywhere;
                  line-height:1.8;
                  margin:0;
                ">${safeMessage}</p>
              </div>

              <p style="
                margin-top:30px;
                color:#999999;
                font-size:12px;
              ">
                This enquiry was submitted from
                deepcodelabs.io/contact
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // =====================================
    // EMAIL 2: CUSTOMER CONFIRMATION
    // =====================================

    const customerMailOptions = {
      from: `"DeepCode Labs" <${smtpUser}>`,
      to: email,

      // Customer replies reach the company
      replyTo: "info@deepcodelabs.io",

      subject: "Thank You for Contacting DeepCode Labs",

      text: `
Hello ${name},

Thank you for contacting DeepCode Labs!

We have successfully received your enquiry.

Our team will review your message and get back to you as soon as possible.

Your Message:
${message}

Explore our services:
https://www.deepcodelabs.io

Email: info@deepcodelabs.io

Best Regards,
DeepCode Labs Team
      `,

      html: `
        <div style="
          background:#05060a;
          padding:35px 15px;
          font-family:Arial,sans-serif;
        ">

          <div style="
            max-width:600px;
            margin:auto;
            background:#111827;
            border:1px solid #263c60;
            border-radius:15px;
            overflow:hidden;
          ">

            <!-- HEADER -->
            <div style="
              padding:35px 25px;
              text-align:center;
              border-bottom:1px solid #263c60;
            ">

              <h1 style="
                color:#4da3ff;
                margin:0;
                font-size:30px;
              ">
                DeepCode Labs
              </h1>

              <p style="
                color:#9bc9ff;
                line-height:1.6;
              ">
                Building the Future of
                Real-Time Intelligent Systems
              </p>
            </div>

            <!-- MAIN CONTENT -->
            <div style="padding:30px;">

              <h2 style="
                color:#ffffff;
                font-size:23px;
              ">
                Thank You, ${safeName}!
              </h2>

              <p style="
                color:#d0d0d0;
                font-size:16px;
                line-height:1.8;
              ">
                Thank you for reaching out to
                DeepCode Labs.
              </p>

              <p style="
                color:#d0d0d0;
                font-size:16px;
                line-height:1.8;
              ">
                We have received your enquiry.
                Our team will review your message
                and get back to you as soon as possible.
              </p>

              <!-- MESSAGE SUMMARY -->
              <div style="
                background:#1b2940;
                border-left:4px solid #4da3ff;
                border-radius:10px;
                padding:22px;
                margin:30px 0;
              ">

                <h3 style="
                  color:#4da3ff;
                  margin-top:0;
                ">
                  Your Message Summary
                </h3>

                <p style="
                  color:#d0d0d0;
                  line-height:1.7;
                  white-space:pre-wrap;
                  overflow-wrap:anywhere;
                ">${safeMessage}</p>
              </div>

              <!-- ACTION BUTTON -->
              <div style="
                text-align:center;
                margin:35px 0;
              ">

                <a
                  href="https://www.deepcodelabs.io/deepq"
                  style="
                    display:inline-block;
                    background:#4da3ff;
                    color:#ffffff;
                    padding:14px 30px;
                    border-radius:8px;
                    text-decoration:none;
                    font-size:15px;
                    font-weight:bold;
                  "
                >
                  Explore DeepQ
                </a>
              </div>

              <!-- CONTACT DETAILS -->
              <div style="
                border-top:1px solid #263c60;
                padding-top:25px;
              ">

                <p style="
                  color:#9bc9ff;
                  font-size:14px;
                ">
                  Email: info@deepcodelabs.io
                </p>

                <p style="
                  color:#9bc9ff;
                  font-size:14px;
                ">
                  Website: www.deepcodelabs.io
                </p>

                <p style="
                  color:#9bc9ff;
                  font-size:14px;
                ">
                  Locations:
                  Hyderabad | Bangalore | San Diego
                </p>
              </div>

              <!-- FOOTER -->
              <div style="
                text-align:center;
                margin-top:35px;
                border-top:1px solid #263c60;
                padding-top:20px;
              ">

                <p style="
                  color:#777777;
                  font-size:12px;
                ">
                  © ${new Date().getFullYear()}
                  DeepCode Labs.
                  All rights reserved.
                </p>

              </div>
            </div>
          </div>
        </div>
      `,
    };

    // =====================================
    // SEND OWNER EMAIL FIRST
    // =====================================

    await transporter.sendMail(ownerMailOptions);

    console.log("Contact notification email accepted.");

    // =====================================
    // SEND CUSTOMER CONFIRMATION
    // =====================================

    try {
      await transporter.sendMail(customerMailOptions);

      console.log("Customer confirmation email accepted.");
    } catch (confirmationError) {
      // The owner's notification has already been sent.
      // Do not ask the visitor to submit again.
      console.error(
        "Customer confirmation error:",
        confirmationError
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact email error:", {
      code: error?.code,
      message: error?.message,
    });

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send your message. Please try again.",
      },
      { status: 500 }
    );
  }
}
