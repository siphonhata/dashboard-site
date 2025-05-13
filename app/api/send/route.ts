// app/api/send/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Gmail SMTP configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // Color scheme matching your app (adjust as needed)
  const colors = {
    primary: '#4F46E5',    // Indigo-600
    secondary: '#10B981',  // Emerald-500
    background: '#F9FAFB', // Gray-50
    text: '#374151',       // Gray-700
    accent: '#F59E0B',     // Amber-500
  };

  const emailHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <style>
      body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; }
      .container { max-width: 600px; margin: 0 auto; padding: 20px; }
      .header { background-color: ${colors.primary}; padding: 30px 0; text-align: center; border-radius: 8px 8px 0 0; }
      .header img { max-width: 150px; }
      .content { background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
      .message-box { background-color: ${colors.background}; padding: 20px; border-left: 4px solid ${colors.secondary}; margin: 20px 0; }
      .footer { text-align: center; margin-top: 30px; color: ${colors.text}; font-size: 14px; }
      .button { display: inline-block; background-color: ${colors.primary}; color: white !important; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; }
      .highlight { color: ${colors.accent}; font-weight: 600; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <!-- Replace with your logo URL -->
        Smart Web Sync
      </div>
      
      <div class="content">
        <h1 style="color: ${colors.primary};">Contact Form Submission</h1>
        <p>You've received a new message from your webapp contact form:</p>
        
        <div class="message-box">
          <p><strong style="color: ${colors.primary};">From:</strong> <span class="highlight">${name}</span> (${email})</p>
          <p><strong style="color: ${colors.primary};">Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div style="margin-top: 30px; text-align: center;">
          <a href="mailto:${email}" class="button">Reply to ${name}</a>
        </div>
        
        <div class="footer">
          <p>This message was sent from your webapp contact form.</p>
          <p>© ${new Date().getFullYear()} Smart Web Sync. All rights reserved.</p>
          <!-- Social media links (optional) 
          <p style="margin-top: 15px;">
            <a href="https://twitter.com/yourhandle" style="color: ${colors.primary}; margin: 0 10px;">Twitter</a>
            <a href="https://linkedin.com/company/yourcompany" style="color: ${colors.primary}; margin: 0 10px;">LinkedIn</a>
            <a href="https://instagram.com/yourhandle" style="color: ${colors.primary}; margin: 0 10px;">Instagram</a>
          </p> -->
        </div>
      </div>
    </div>
  </body>
  </html>
  `;

  try {
    await transporter.sendMail({
      from: `"Your App Name" <${process.env.GMAIL_EMAIL}>`,
      to: process.env.YOUR_EMAIL,
      subject: `New contact from ${name}`,
      html: emailHtml,
      text: `New message from ${name} (${email}):\n\n${message}\n\n---\nSent via your website contact form`
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}