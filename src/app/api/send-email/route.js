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

    // Email 1: To you (website owner) - Notification
    const mailOptionsOwner = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
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

    // Email 2: To user - Thank you confirmation
    const mailOptionsUser = {
      from: process.env.EMAIL_USER,
      to: email, // Send to the user who submitted the form
      subject: 'Thank You for Contacting DeepCode Labs',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #05060a;">
          <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1d2e 0%, #0a0c16 100%); padding: 40px; border-radius: 15px; border: 1px solid #4da3ff;">
            
            <!-- Header with Logo -->
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #4da3ff; font-size: 32px; margin: 0;">DeepCode Labs</h1>
              <p style="color: #9bc9ff; margin: 10px 0 0 0;">Building the Future of Real-Time Systems</p>
            </div>
            
            <!-- Main Content -->
            <div style="background: rgba(77, 163, 255, 0.05); padding: 30px; border-radius: 10px; border-left: 4px solid #4da3ff;">
              <h2 style="color: #fff; margin-top: 0;">Thank You, ${name}! 🎉</h2>
              
              <p style="color: #d0d0d0; line-height: 1.8; font-size: 16px;">
                We've received your message and appreciate you reaching out to us. Our team will review your inquiry and get back to you as soon as possible.
              </p>
            </div>
            
            <!-- Message Summary -->
            <div style="margin: 30px 0; padding: 25px; background: rgba(0, 0, 0, 0.3); border-radius: 10px;">
              <h3 style="color: #4da3ff; margin-top: 0; font-size: 18px;">Your Message Summary:</h3>
              
              <div style="margin-bottom: 12px;">
                <strong style="color: #9bc9ff;">Company:</strong>
                <p style="margin: 5px 0; color: #d0d0d0;">${company || 'Not provided'}</p>
              </div>
              
              <div style="margin-bottom: 12px;">
                <strong style="color: #9bc9ff;">Message:</strong>
                <p style="margin: 5px 0; color: #d0d0d0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <!-- Call to Action -->
            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #d0d0d0; margin-bottom: 20px;">
                In the meantime, feel free to explore our solutions:
              </p>
              <a href="https://deepq1.vercel.app/deepq" 
                 style="display: inline-block; background: linear-gradient(135deg, #4da3ff 0%, #357abd 100%); 
                        color: white; padding: 14px 35px; text-decoration: none; border-radius: 8px; 
                        font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(77, 163, 255, 0.3);">
                Learn About DeepQ
              </a>
            </div>
            
            <!-- Contact Info -->
            <div style="border-top: 1px solid rgba(77, 163, 255, 0.3); padding-top: 25px; margin-top: 30px;">
              <p style="color: #9bc9ff; font-size: 14px; margin: 8px 0;">
                📧 <strong>Email:</strong> info@deepcodelabs.io
              </p>
              <p style="color: #9bc9ff; font-size: 14px; margin: 8px 0;">
                🌐 <strong>Website:</strong> deepcodelabs.io
              </p>
              <p style="color: #9bc9ff; font-size: 14px; margin: 8px 0;">
                📍 <strong>Locations:</strong> Hyderabad • Chennai • Bangalore
              </p>
            </div>
            
            <!-- Footer -->
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(77, 163, 255, 0.2);">
              <p style="color: #666; font-size: 12px; margin: 0;">
                © ${new Date().getFullYear()} DeepCode Labs. All rights reserved.
              </p>
              <p style="color: #666; font-size: 11px; margin: 10px 0 0 0;">
                This is an automated message. Please do not reply to this email.
              </p>
            </div>
            
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptionsOwner),
      transporter.sendMail(mailOptionsUser)
    ]);

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
