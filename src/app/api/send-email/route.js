import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, company, message } = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to you (website owner)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #4da3ff; margin-bottom: 20px;">New Contact Form Submission</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #333;">Name:</strong>
              <p style="margin: 5px 0; color: #666;">${name}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #333;">Email:</strong>
              <p style="margin: 5px 0; color: #666;">${email}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #333;">Company:</strong>
              <p style="margin: 5px 0; color: #666;">${company || 'Not provided'}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #333;">Message:</strong>
              <p style="margin: 5px 0; color: #666; white-space: pre-wrap;">${message}</p>
            </div>
            
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
            
            <p style="color: #999; font-size: 12px;">
              This email was sent from your website contact form at deepcodelabs.io
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
