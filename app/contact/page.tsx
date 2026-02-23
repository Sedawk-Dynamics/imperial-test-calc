"use client"

import { useState } from "react"
import { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AutoReveal } from "@/components/auto-reveal"



export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    consent: false,   // ✅ ADD
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }))
  }

  const handleInquiryTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          organization: formData.organization,
          email: formData.email,
          phone: formData.phone,
          inquiryType: formData.inquiryType,
          message: formData.message,
        }),
      })

      if (!res.ok) {
        throw new Error("Failed to send message")
      }

      setSubmitStatus("success")
      setFormData({ fullName: "", organization: "", email: "", phone: "", inquiryType: "", message: "", consent: false })
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+1-(859) 978-8780",
      href: "tel:+1-(859) 978-8780",
      description: "Available 24/7 for enterprise inquiries",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@imperialhealthsystems.com",
      href: "mailto:info@imperialhealthsystems.com",
      description: "We respond within 2 business hours",
    },
  ]

  const offices = [
    {
      country: "United States",
      flag: "🇺🇸",
      company: "Imperial Healthcare Systems LLC",
      address: ["212 N. 2nd St. STE 100,", "Richmond, KY 40475, United States"],
    },
    {
      country: "India – Registered Office",
      flag: "🇮🇳",
      company: "Imperial Healthcare Systems Pvt. Ltd.",
      address: ["879, Ground Floor, Sector 47,", "Gurugram - 122018, Haryana, India"],
    },
    {
      country: "India – Administrative Office",
      flag: "🇮🇳",
      company: "ILD Trade Centre",
      address: ["Unit No. 219 2F, Sector 47, Sohna Road,", "Gurugram - 122018, Haryana, India"],
    },
    {
      country: "India – Corporate Office",
      flag: "🇮🇳",
      company: "Regus, Welldone Tech Park",
      address: ["M15, Ground Floor, Badshahpur–Sohna Road Highway,", "Sector 48, Gurugram – 122018, Haryana, India"],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <SiteHeader />
      <section className="pt-40 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <AutoReveal className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-gray-900">
              Let's Build <span className="text-brand-orange">Revenue Sovereignty</span> Together
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with Imperial Healthcare Systems for consultations, partnerships, or enterprise inquiries.
            </p>
          </AutoReveal>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <AutoReveal className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-center text-gray-600">Multiple ways to reach our enterprise team</p>
          </AutoReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((item, idx) => {
              const Icon = item.icon
              return (
                <AutoReveal key={idx} delay={idx * 0.1}>
                  <a
                    href={item.href}
                    className="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/60 shadow-lg hover:shadow-2xl hover:border-brand-blue/40 transition-all duration-300 hover:-translate-y-1 block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-orange rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-brand-blue mb-2">{item.content}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </a>
                </AutoReveal>
              )
            })}
          </div>

          {/* Office Locations */}
          <AutoReveal className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Office Locations</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offices.map((office, idx) => (
                <AutoReveal key={idx} delay={idx * 0.08}>
                  <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/60 shadow-md hover:shadow-xl hover:border-brand-blue/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">{office.flag}</span>
                        <h4 className="font-bold text-brand-blue text-sm">{office.country}</h4>
                      </div>

                      <p className="font-semibold text-gray-900 mb-3 text-sm">{office.company}</p>

                      <div className="space-y-1">
                        {office.address.map((line, i) => (
                          <p key={i} className="text-xs text-gray-600 leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-200/50 flex items-center gap-2 text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <MapPin className="w-4 h-4" />
                        <span className="text-xs font-semibold">View on Map</span>
                      </div>
                    </div>
                  </div>
                </AutoReveal>
              ))}
            </div>
          </AutoReveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <AutoReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-gray-600">We'll get back to you as soon as possible</p>
          </AutoReveal>

          <AutoReveal className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/60 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <Label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                  />
                </div>

                {/* Organization */}
                <div>
                  <Label htmlFor="organization" className="block text-sm font-semibold text-gray-900 mb-2">
                    Organization
                  </Label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    placeholder="Healthcare Clinic LLC"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <Label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@healthcare.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone (Optional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (XXX) XXX-XXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <Label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-900 mb-2">
                  Inquiry Type
                </Label>
                <Select value={formData.inquiryType} onValueChange={handleInquiryTypeChange}>
                  <SelectTrigger className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all">
                    <SelectValue placeholder="Select inquiry type..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consultation">Consultation</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="careers">Careers</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </Label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none font-sans"
                />
              </div>

              {/* Submit Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
                  Thank you! Your message has been sent successfully. We'll be in touch soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm">
                  Something went wrong. Please try again.
                </div>
              )}

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={handleConsentChange}
                  className="mt-1 h-4 w-4 accent-brand-blue cursor-pointer"
                />

                <label htmlFor="consent" className="text-xs md:text-sm text-gray-600 leading-relaxed cursor-pointer">
                  (Optional) By providing Submit, you authorize Imperial Healthcare Systems to collect your info and contact you via
                  email, phone, or SMS. Message frequency may vary, Message data rates may apply, and you can opt-out by
                  replying STOP or texting HELP. You may receive communications such as patient appointment scheduling,
                  confirmations, patient health information, emergency/routine follow-up communications, and other
                  healthcare-related information, but not for marketing or promotional purposes of our services. We also
                  understand and comply with protected health information (PHI) in accordance with HIPAA regulations.
                  See our{" "}
                  <Link href="/privacy-policy" className="text-brand-blue underline hover:text-brand-orange">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms-of-service" className="text-brand-blue underline hover:text-brand-orange">
                    Terms of Service
                  </Link>{" "}
                  for more details.
                </label>
              </div>


              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-gradient-to-r from-brand-blue to-brand-orange text-white font-bold rounded-lg hover:shadow-lg hover:shadow-brand-blue/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </AutoReveal>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10 border-t border-brand-blue/20">
        <div className="container mx-auto max-w-4xl">
          <AutoReveal className="text-center">
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Prefer immediate assistance?{" "}
              <span className="font-bold text-brand-blue">
                Call our enterprise desk at +1-(859) 978-8780
              </span>
            </p>
            <p className="text-gray-600">
              Available 24/7 for healthcare providers and enterprise partners
            </p>
          </AutoReveal>
        </div>
        <SiteFooter />
      </section>
    </main>
  )
}
