"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Flame,
  Target,
  Heart,
  Award,
  Wallet,
  UserCheck,
  Brain,
  Eye,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import ContactFormModal from "@/components/contact-form-modal"

export default function OurLegacyPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-brand-blue/80 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/modern-healthcare-technology-abstract-background-b.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
              <Flame className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-medium">Our Heritage</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              The <span className="text-brand-orange">Imperial</span> Legacy
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed animate-fade-in-up opacity-90">
              Leadership, Knowledge &amp; Unwavering Excellence
            </p>
          </div>
        </div>
      </section>

      {/* The Imperial Legacy */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center justify-center mb-2">
              <img
                src="/images/whatsapp-image-2025-12-13-at-16.png"
                alt="Imperial Healthcare Systems"
                className="h-64 animate-fade-in-up"
              />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-2 max-w-3xl mx-auto">
              The <span className="text-brand-orange">Imperial</span> torch symbolizes leadership, knowledge, and
              unwavering excellence. It reflects our commitment to illuminate the path toward smarter, more efficient
              healthcare operations.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-brand-blue/20 hover:border-brand-blue/40 transition-all shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-blue/80 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-brand-blue">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To uphold <span className="text-brand-orange">Imperial</span> integrity and excellence by delivering
                    high-quality, cost-efficient RCM and healthcare solutions powered by affordable skilled manpower,
                    proven operational systems, and reliable, accountable teams - creating future-ready operations,
                    trusted partnerships, and measurable revenue growth for every healthcare provider we serve.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-orange/20 hover:border-brand-orange/40 transition-all shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-orange/80 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-brand-orange">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To become the world&apos;s most trusted provider of technology-enabled healthcare systems and RCM
                    solutions, delivering unmatched accuracy, reliability, and value to every healthcare organization we
                    serve.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Imperial Promise */}
      <section className="py-20 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-brand-blue/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">
              The <span className="text-brand-orange">Imperial</span> Promise
            </h2>
            <p className="text-2xl text-center mb-12 text-brand-orange font-semibold">
              &ldquo;Excellence Delivered. Trust Earned.&rdquo;
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Zero-Compromise Quality",
                  desc: "Every task is executed with precision, validated by our expert team, and reviewed through strict QC.",
                  icon: Award,
                },
                {
                  title: "Cost-Efficient Solutions",
                  desc: "World-class performance at a cost advantage that reshapes operational efficiency.",
                  icon: Wallet,
                },
                {
                  title: "Reliable, Accountable Teams",
                  desc: "Trained professionals who own their responsibilities and deliver consistent results.",
                  icon: UserCheck,
                },
                {
                  title: "Expert-Driven Performance",
                  desc: "Advanced systems and experienced professionals ensure accuracy, speed, and denial prevention before they occur.",
                  icon: Brain,
                },
                {
                  title: "Transparency & Integrity",
                  desc: "Full visibility into processes, reports, and outcomes - no hidden gaps, no excuses.",
                  icon: Eye,
                },
                {
                  title: "Measurable Revenue Growth",
                  desc: "Every workflow, tool, and process is designed to strengthen collections and improve cash flow.",
                  icon: TrendingUp,
                },
              ].map((promise, idx) => {
                const IconComponent = promise.icon
                return (
                  <Card
                    key={idx}
                    className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-brand-orange" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">{promise.title}</h3>
                          <p className="text-white/80">{promise.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-brand-blue/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Partner with Excellence?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join leading healthcare providers who trust <span className="text-brand-orange">Imperial</span> Healthcare
              Systems for their RCM needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setIsContactModalOpen(true)}
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8"
              >
                Contact Us Today
              </Button>
              <Link href="/#calculator">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 bg-transparent"
                >
                  Calculate Your Savings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
