import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, specialty, phone, email, claimsVolume } = body

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: `"Imperial Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Free Billing Audit Request — ${firstName} ${lastName} (${specialty || "Unspecified"})`,
      html: `
        <h2>New Free Billing Audit Request (Solo Practice Landing Page)</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Practice Specialty:</strong> ${specialty || "N/A"}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Monthly Claims Volume:</strong> ${claimsVolume || "N/A"}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Audit form error:", error)
    return NextResponse.json(
      { error: "Failed to send audit request" },
      { status: 500 }
    )
  }
}
