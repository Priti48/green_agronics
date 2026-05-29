import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EnquiryBody {
  name: string;
  email: string;
  phone: string;
  product: string;
  country: string;
  message: string;
}

function sanitize(val: unknown): string {
  if (typeof val !== 'string') return '';
  return val.replace(/[<>]/g, '').trim().slice(0, 500);
}

export async function POST(req: NextRequest) {
  const body = await req.json() as EnquiryBody;

  const name    = sanitize(body.name);
  const email   = sanitize(body.email);
  const phone   = sanitize(body.phone);
  const product = sanitize(body.product);
  const country = sanitize(body.country);
  const message = sanitize(body.message);

  if (!name || !email || !product || !country) {
    return NextResponse.json({ error: 'Required fields missing.' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST || 'smtp.gmail.com',
    port:   Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const toEmail = process.env.ENQUIRY_TO_EMAIL || 'export@greenagronics.com';

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px;">
      <h2 style="color:#1a3d24;margin:0 0 16px;">New Export Enquiry — Green Agronics</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:8px;font-weight:bold;width:120px;">Name</td><td style="padding:8px;">${name}</td></tr>
        <tr style="background:#f9fafb;"><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${phone || '—'}</td></tr>
        <tr style="background:#f9fafb;"><td style="padding:8px;font-weight:bold;">Product</td><td style="padding:8px;">${product}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Country</td><td style="padding:8px;">${country}</td></tr>
        <tr style="background:#f9fafb;"><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${message || '—'}</td></tr>
      </table>
      <p style="margin-top:20px;font-size:12px;color:#6b7280;">Sent from greenagronics.com enquiry form</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from:    `"Green Agronics Enquiry" <${process.env.SMTP_USER}>`,
      to:      toEmail,
      replyTo: email,
      subject: `Export Enquiry: ${product} — ${name} (${country})`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Enquiry email error:', err);
    return NextResponse.json({ error: 'Failed to send enquiry. Please try WhatsApp.' }, { status: 500 });
  }
}
