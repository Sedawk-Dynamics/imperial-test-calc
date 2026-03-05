import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const fullName = formData.get("fullName") as string
    const companyName = formData.get("companyName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const location = formData.get("location") as string
    const planType = formData.get("planType") as string
    const file = formData.get("file") as File | null

    if (!fullName || !email || !phone || !location) {
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

    const attachments: { filename: string; content: Buffer }[] = []

    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer())
      attachments.push({
        filename: file.name,
        content: buffer,
      })
    }

    const mailOptions = {
      from: `"Imperial Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Pricing Inquiry - ${planType || "General"} - ${fullName}`,
      html: `
        <h2>New Pricing Inquiry</h2>
        <p><strong>Plan Interest:</strong> ${planType || "N/A"}</p>
        <hr/>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${companyName || "N/A"}</p>
        <p><strong>Location:</strong> ${location}</p>
        ${file ? `<p><strong>Attachment:</strong> ${file.name}</p>` : "<p><strong>Attachment:</strong> None</p>"}
      `,
      attachments,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Pricing contact email error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
