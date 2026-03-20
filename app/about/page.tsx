"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Award,
  Users,
  Target,
  Heart,
  Shield,
  Brain,
  TrendingUp,
  Eye,
  Wallet,
  UserCheck,
} from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import ContactFormModal from "@/components/contact-form-modal"

export default function AboutPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-brand-blue/80 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/modern-healthcare-technology-abstract-background-b.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center mb-6">
              <img
                src="/images/whatsapp-image-2025-12-13-at-16.png"
                alt="Imperial Healthcare Systems"
                className="h-64 brightness-0 invert animate-fade-in-up"
              />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              About <span className="text-brand-orange">Imperial</span> Healthcare Systems
            </h1>
            <p className="text-2xl md:text-3xl leading-relaxed animate-fade-in-up opacity-90">
              Excellence Delivered. Trust Earned.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-blue">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <span className="text-brand-orange">Imperial</span> Healthcare Systems (IHS) is a next-generation
              healthcare operations and Revenue Cycle Management (RCM) company delivering high-quality, cost-efficient,
              technology-enabled solutions to healthcare providers across the globe. Built on the foundations of{" "}
              <span className="text-brand-orange">Imperial</span> integrity, accountability, and excellence, we combine
              advanced systems with skilled manpower to create future-ready healthcare operations that providers can
              fully trust.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With over a decade of hands-on experience in the US healthcare ecosystem, our leadership brings deep
              domain expertise across RCM, clinical operations, compliance, analytics, and operational strategy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We exist to empower healthcare providers with systems that support growth, accuracy, and sustainability at
              a cost structure no one else can match.
            </p>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-brand-blue">Director's Message</h2>
            </div>
            <Card className="border-2 border-brand-blue/20 bg-white shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    "At <span className="text-brand-orange">Imperial</span> Healthcare Systems, our purpose is clear -
                    to deliver healthcare operations with uncompromising integrity, accuracy, and accountability. Over
                    the past 10 years in the US RCM industry, I have witnessed the challenges faced by providers: high
                    costs, operational inconsistencies, unreliable teams, and unpredictable revenue cycles. I founded
                    IHS to eliminate these gaps."
                  </p>
                  <p>
                    "Our promise is simple: We combine skilled manpower with advanced systems to deliver zero-error RCM
                    performance, actionable insights, and measurable revenue improvements. Every process we design,
                    every team member we train, and every system we deploy reflects our commitment to excellence."
                  </p>
                  <p>
                    "As we grow, our mission remains constant - to create trusted partnerships, deliver superior
                    outcomes, and set a new benchmark for healthcare operations globally."
                  </p>
                  <p className="font-semibold text-brand-blue pt-4">
                    - Founder & Director, <span className="text-brand-orange">Imperial</span> Healthcare Systems
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Imperial Legacy */}
      <section className="py-1 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center justify-center mb-2">
              <img
                src="/images/whatsapp-image-2025-12-13-at-16.png"
                alt="Imperial Healthcare Systems"
                className="h-64 animate-fade-in-up"
              />
            </div>
            <h2 className="text-4xl font-bold mb-8 text-brand-blue">
              The <span className="text-brand-orange">Imperial</span> Legacy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
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
                    To become the world's most trusted provider of technology-enabled healthcare systems and RCM
                    solutions, delivering unmatched accuracy, reliability, and value to every healthcare organization we
                    serve.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-brand-blue/10 backdrop-blur-sm border border-brand-blue/20 rounded-full px-5 py-2 mb-6">
                <Users className="w-4 h-4 text-brand-orange" />
                <span className="text-sm font-medium text-brand-navy">Our Leadership</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-blue">
                <span className="text-brand-orange">Leadership</span>
              </h2>
              <p className="text-xl text-brand-navy/80 max-w-3xl mx-auto font-light">
                Governance, Expertise &amp; Institutional Architecture
              </p>
              <p className="text-base text-muted-foreground max-w-4xl mx-auto mt-4 leading-relaxed">
                Imperial Healthcare Systems is governed by a leadership structure that integrates revenue cycle expertise,
                clinical governance, and technology-led execution. Each principal operates with defined institutional
                ownership, ensuring alignment across strategy, compliance, and delivery.
              </p>
            </div>

            {/* Leader 1 - Er. Pabitra Ratan Dash */}
            <div className="mb-12">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-1 relative h-80 md:h-auto">
                    <img
                      src="/leader1.jpeg"
                      alt="Er. Pabitra Ratan Dash"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent" />
                    <div className="absolute bottom-4 left-4 md:hidden">
                      <h3 className="text-xl font-bold text-white">Er. Pabitra Ratan Dash</h3>
                      <p className="text-brand-orange text-sm font-semibold">Founder &amp; CEO</p>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-8 md:p-10">
                    <div className="hidden md:block">
                      <h3 className="text-2xl font-bold text-brand-navy mb-1">Er. Pabitra Ratan Dash</h3>
                      <p className="text-brand-orange font-semibold mb-4">Founder &amp; Chief Executive Officer</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Er. Pabitra Ratan Dash is the Founder and Chief Executive Officer of Imperial Healthcare Systems,
                      with a decade of hands-on operational and leadership experience exclusively in U.S. Revenue Cycle
                      Management (RCM).
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      With a foundation in Computer Science and Engineering, he brings a distinct capability to integrate
                      healthcare operations with technology architecture, enabling the development of scalable,
                      performance-driven systems. His experience spans the full RCM continuum—from patient access and
                      payer engagement to claims adjudication, denial governance, and revenue optimization—providing
                      end-to-end command over financial performance within provider organizations.
                    </p>
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-3">Areas of Institutional Expertise</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        <div className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> End-to-end U.S. RCM strategy</div>
                        <div className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> Enterprise AR &amp; denial management</div>
                        <div className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> Multi-specialty RCM operations</div>
                        <div className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> Medicare, Medicaid, BCBS, UHC</div>
                        <div className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> CMS &amp; HIPAA compliance</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-brand-navy/5 to-brand-orange/5 border-l-4 border-brand-orange rounded-r-lg p-4">
                      <h4 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2">Strategic Mandate</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Er. Dash is focused on positioning Imperial Healthcare Systems as a technology-first,
                        innovation-driven healthcare enterprise. The development of the proprietary IRRF™ framework
                        reflects this direction, enabling a fully integrated, end-to-end technology-enabled RCM
                        platform for healthcare providers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leader 2 - Milan Mala Dash */}
            <div className="mb-12">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-1 relative h-80 md:h-auto md:order-2">
                    <img
                      src="/leader3.jpeg"
                      alt="Milan Mala Dash"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent" />
                    <div className="absolute bottom-4 left-4 md:hidden">
                      <h3 className="text-xl font-bold text-white">Milan Mala Dash</h3>
                      <p className="text-brand-orange text-sm font-semibold">Co-Founder &amp; MD</p>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-8 md:p-10 md:order-1">
                    <div className="hidden md:block">
                      <h3 className="text-2xl font-bold text-brand-navy mb-1">Milan Mala Dash</h3>
                      <p className="text-brand-orange font-semibold mb-4">Co-Founder &amp; Managing Director</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Ms. Milan Mala Dash serves as Co-Founder and Managing Director, leading the organization&apos;s
                      clinical governance and compliance architecture.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      With over 13 years of professional experience, an M.Phil. in Biotechnology, and ongoing doctoral
                      research, she brings scientific and regulatory depth to Imperial&apos;s operational framework. She
                      oversees quality assurance, clinical documentation integrity, audit readiness, and regulatory
                      alignment, ensuring that all delivery functions meet stringent healthcare standards.
                    </p>
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-3">Areas of Institutional Expertise</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        <div className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> Quality assurance &amp; compliance</div>
                        <div className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> Clinical documentation governance</div>
                        <div className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> Medical terminology &amp; coding</div>
                        <div className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> Lab systems &amp; diagnostics</div>
                        <div className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> U.S. healthcare regulatory alignment</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-brand-navy/5 to-brand-orange/5 border-l-4 border-brand-orange rounded-r-lg p-4">
                      <h4 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2">Strategic Mandate</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Ms. Dash ensures that Imperial operates with clinical precision, regulatory discipline, and
                        uncompromising quality standards, reinforcing its position as a compliance-first, accuracy-driven
                        healthcare partner.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leader 3 - Shivam Teria */}
            <div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-1 relative h-80 md:h-auto">
                    <img
                      src="/leader2.jpeg"
                      alt="Shivam Teria"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent" />
                    <div className="absolute bottom-4 left-4 md:hidden">
                      <h3 className="text-xl font-bold text-white">Shivam Teria</h3>
                      <p className="text-brand-orange text-sm font-semibold">Asst. Manager – Operations</p>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-8 md:p-10">
                    <div className="hidden md:block">
                      <h3 className="text-2xl font-bold text-brand-navy mb-1">Shivam Teria</h3>
                      <p className="text-brand-orange font-semibold mb-4">Assistant Manager – Operations</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Mr. Shivam Teria is a core member of Imperial&apos;s operational leadership, bringing 7 years of
                      specialized experience in U.S. Revenue Cycle Management with a strong focus on delivery execution
                      and team development.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      He has managed end-to-end RCM operations, high-volume workflows, and large delivery teams, with a
                      consistent track record of building stable, high-performing operational units.
                    </p>
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-3">Areas of Institutional Expertise</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        <div className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> End-to-end RCM delivery</div>
                        <div className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> High-volume workflow execution</div>
                        <div className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> Team development &amp; training</div>
                        <div className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" /> Client delivery &amp; quality assurance</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-brand-navy/5 to-brand-orange/5 border-l-4 border-brand-orange rounded-r-lg p-4">
                      <h4 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2">Strategic Mandate</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Mr. Teria ensures that Imperial&apos;s delivery infrastructure remains robust, scalable, and
                        consistently aligned with client expectations, forming the execution backbone of the organization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
              "Excellence Delivered. Trust Earned."
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

      {/* What Makes IHS Different */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-blue">What Makes IHS Different?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-Powered Accuracy",
                  desc: "Predictive analytics, automated checks, and smart workflows for error-free RCM.",
                  icon: Brain,
                },
                {
                  title: "Cost-Efficient Skilled Manpower",
                  desc: "Highly trained RCM experts at a fraction of US staffing cost.",
                  icon: Users,
                },
                {
                  title: "Zero-Error Operational Promise",
                  desc: "Multi-layer quality checks ensure maximum clean claim rates.",
                  icon: CheckCircle,
                },
                {
                  title: "Experience That Matters",
                  desc: "A decade of deep US RCM experience embedded into every process.",
                  icon: Award,
                },
                {
                  title: "Future-Ready Systems",
                  desc: "Future-focused automation, dashboards, and workflows designed for scale.",
                  icon: TrendingUp,
                },
                {
                  title: "Trusted Partnerships",
                  desc: "Clients trust us because we deliver measurable and consistent results - every time.",
                  icon: Heart,
                },
              ].map((diff, idx) => (
                <Card
                  key={idx}
                  className="border-2 border-brand-blue/20 hover:border-brand-orange/40 transition-all shadow-lg"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-orange rounded-lg flex items-center justify-center mb-4">
                      <diff.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-brand-blue">{diff.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{diff.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-blue">Our Culture</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">A culture defined by:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Ownership",
                "Discipline",
                "Learning",
                "Leadership",
                "Performance",
                "Teamwork",
                "Respect",
                "Innovation",
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-brand-blue/20 hover:border-brand-orange/40 rounded-lg p-6 text-center transition-all hover:shadow-lg"
                >
                  <p className="font-bold text-lg text-brand-blue">{value}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 text-lg">
              Our teams reflect the <span className="text-brand-orange">Imperial</span> values in every action and
              interaction.
            </p>
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
