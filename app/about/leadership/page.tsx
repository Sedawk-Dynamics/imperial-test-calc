"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users } from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import ContactFormModal from "@/components/contact-form-modal"

export default function LeadershipPage() {
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
              <Users className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-medium">Our Leadership</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="text-brand-orange">Leadership</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed animate-fade-in-up opacity-90">
              Governance, Expertise &amp; Institutional Architecture
            </p>
            <p className="text-base max-w-4xl mx-auto mt-4 leading-relaxed opacity-80">
              Imperial Healthcare Systems is governed by a leadership structure that integrates revenue cycle expertise,
              clinical governance, and technology-led execution. Each principal operates with defined institutional
              ownership, ensuring alignment across strategy, compliance, and delivery.
            </p>
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

            {/* Leader 1 - Er. Pabitra Ratan Dash */}
            <div className="mb-12">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-transparent hover:border-brand-blue/30 hover:shadow-[0_8px_30px_rgba(21,101,192,0.2),0_8px_30px_rgba(255,111,0,0.1)] transition-all duration-500 group">
                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-1 relative h-80 md:h-auto overflow-hidden">
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
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-transparent hover:border-brand-orange/30 hover:shadow-[0_8px_30px_rgba(255,111,0,0.2),0_8px_30px_rgba(21,101,192,0.1)] transition-all duration-500 group">
                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-1 relative h-80 md:h-full md:order-2 overflow-hidden">
                    <img
                      src="/leader3.jpeg"
                      alt="Milan Mala Dash"
                      className="w-full h-full object-cover absolute inset-0"
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
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-transparent hover:border-brand-blue/30 hover:shadow-[0_8px_30px_rgba(21,101,192,0.2),0_8px_30px_rgba(255,111,0,0.1)] transition-all duration-500 group">
                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-1 relative h-80 md:h-auto overflow-hidden">
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
