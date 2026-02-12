"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Target,
  Network,
  Radar,
  ShieldCheck,
  Zap,
  Shield,
  Crosshair,
  RotateCw,
  SearchIcon,
  ArrowRight,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import ContactFormModal from "@/components/contact-form-modal"
import CountUp from "@/components/ui/CountUp"
import { motion } from "framer-motion"

export default function IRRFPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* ═══════════════════════════ HERO ═══════════════════════════ */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-brand-orange relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <span className="text-sm font-semibold">Proprietary IRRF™ Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              The Imperial Revenue Recovery Framework{" "}
              <span className="text-brand-orange">(IRRF)</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Precision Infrastructure for the Modern Healthcare Enterprise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center gap-2 bg-white text-brand-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ IRRF CORE CARDS ═══════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-foreground">
              THE SOLUTION:{" "}
              <span className="text-brand-orange">
                THE IMPERIAL REVENUE RECOVERY FRAMEWORK (IRRF)
              </span>
            </h2>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground max-w-5xl mx-auto">
              Precision Infrastructure for the Modern Healthcare Enterprise
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-7xl mx-auto">
            {/* ================= CARD 1 ================= */}
            <div className="relative h-[320px] w-4/5 mx-auto perspective-[500px] group">
              <div className="absolute inset-0 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-x-180">
                {/* FRONT */}
                <Card
                  className="absolute inset-0 bg-white rounded-[20px]
                   border-2 border-orange-400/70
                   hover:border-orange-500
                   shadow-md hover:shadow-orange-200/40
                   transition-all duration-300
                   flex flex-col items-center justify-center text-center p-8
                   backface-hidden"
                >
                  <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center">
                    <Target className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">THE CORE PROPOSITION</h3>
                  <p className="text-base font-semibold text-brand-orange mb-2">
                    Where Algorithmic Precision Meets Human Advocacy
                  </p>
                  <p className="text-sm text-slate-500">(Hover to learn more)</p>
                </Card>

                {/* BACK */}
                <Card
                  className="absolute inset-0 rounded-[20px]
                   bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500
                   text-white shadow-xl p-6
                   flex flex-col justify-center
                   rotate-x-180 backface-hidden"
                >
                  <h3 className="text-xl font-bold mb-3">THE CORE PROPOSITION</h3>
                  <p className="text-sm leading-relaxed mb-3">
                    The Imperial Revenue Recovery Framework (IRRF) replaces reactive legacy processes
                    with a proactive intelligence layer.
                  </p>
                  <p className="text-sm leading-relaxed mb-4">
                    Our AI-enhanced architecture engineers revenue to secure the Clinical EBITDA your
                    practice deserves.
                  </p>
                </Card>
              </div>
            </div>

            {/* ================= CARD 2 ================= */}
            <div className="relative h-[320px] w-4/5 mx-auto perspective-[500px] group">
              <div className="absolute inset-0 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-x-180">
                {/* FRONT */}
                <Card
                  className="absolute inset-0 bg-white rounded-[20px]
                   border-2 border-orange-400/70
                   hover:border-orange-500
                   shadow-md hover:shadow-orange-200/40
                   transition-all duration-300
                   flex flex-col items-center justify-center text-center p-8
                   backface-hidden"
                >
                  <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                    <Network className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    THE IHS INTELLIGENCE ENGINE
                  </h3>
                  <p className="text-base font-semibold text-brand-orange mb-2">
                    Engineering Enterprise Resilience
                  </p>
                  <p className="text-sm text-slate-500">(Hover to learn more)</p>
                </Card>

                {/* BACK */}
                <Card
                  className="absolute inset-0 rounded-[20px]
                   bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500
                   text-white shadow-xl p-6
                   flex flex-col justify-center
                   rotate-x-180 backface-hidden"
                >
                  <h3 className="text-xl font-bold mb-3">THE IHS INTELLIGENCE ENGINE</h3>
                  <p className="text-sm leading-relaxed mb-3">
                    IHS orchestrates high-velocity revenue cycles through a proprietary fusion of
                    specialized intelligence and AI-driven infrastructure.
                  </p>
                  <p className="text-sm leading-relaxed mb-4">
                    Technology serves as the sentry, while our Revenue Architects guide high-value
                    decisions.
                  </p>
                </Card>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════ STRATEGIC INTELLIGENCE GRID ═══════════════════════════ */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                THE STRATEGIC INTELLIGENCE GRID
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
                An architectural four-pillar system designed for zero-leakage.
              </p>
            </div>

            <section className="py-24">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto place-items-center">
                {[
                  {
                    title: "PREDICTIVE DENIAL INTELLIGENCE",
                    subtitle: "Pre-Submission Safeguarding",
                    icon: Radar,
                    desc: "Leverages historical payer data and AI-enhanced modeling to identify at-risk claims with 95% accuracy before submission.",
                    why: "Stops the denial cycle and accelerates cash velocity.",
                  },
                  {
                    title: "ALGORITHMIC ACCURACY SCRUBBING",
                    subtitle: "Integrity Engineering",
                    icon: ShieldCheck,
                    desc: "Performs real-time, multi-layer validation across thousands of payer-specific rules and ICD-10 crosswalks.",
                    why: "Replaces human error with coded precision.",
                  },
                  {
                    title: "INTELLIGENCE-DRIVEN AUTOMATION",
                    subtitle: "Operational Scalability",
                    icon: Zap,
                    desc: "Advanced automation reduces manual intervention and human error by up to 70%.",
                    why: "Drives up to 60% operating cost reduction.",
                  },
                  {
                    title: "REVENUE FORENSIC AUDIT",
                    subtitle: "Wealth Recovery",
                    icon: SearchIcon,
                    desc: "Continuous audit algorithms scanning historical revenue data to uncover hidden losses.",
                    why: "Turns lost revenue into realized enterprise value.",
                  },
                ].map((card, i) => {
                  const Icon = card.icon

                  return (
                    <div
                      key={i}
                      className="relative h-[320px] w-full max-w-[320px] perspective-[1200px] group"
                    >
                      <div className="absolute inset-0 h-full w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                        {/* FRONT CARD */}
                        <Card
                          className="
                            absolute inset-0 h-full w-full
                            rounded-[18px]
                            bg-gradient-to-br from-[#0B1C3D] via-[#0A224F] to-[#081735]
                            text-white
                            border border-white/10
                            shadow-[0_20px_50px_rgba(2,6,23,0.7)]
                            flex flex-col items-center justify-center text-center
                            p-6
                            backface-hidden
                            transition-all duration-500
                            group-hover:-translate-y-1
                          "
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                          <div className="relative z-10 w-12 h-12 mb-4 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-500">
                            <Icon
                              className="w-6 h-6 text-white transition-colors duration-500 group-hover:text-[#C6A85A]"
                              strokeWidth={2.5}
                            />
                          </div>
                          <h3 className="relative z-10 text-base font-bold mb-1 tracking-wide">
                            {card.title}
                          </h3>
                          <p className="relative z-10 text-sm opacity-80">{card.subtitle}</p>
                          <p className="relative z-10 text-xs opacity-60 mt-2">Hover to explore</p>
                        </Card>

                        {/* BACK CARD */}
                        <Card
                          className="
                            absolute inset-0 h-full w-full
                            rounded-[18px]
                            bg-gradient-to-br from-[#0D9488] via-[#14B8A6] to-[#5EEAD4]
                            text-white
                            shadow-[0_20px_60px_rgba(20,184,166,0.45)]
                            flex flex-col justify-between
                            p-6
                            rotate-y-180
                            backface-hidden
                            overflow-hidden
                          "
                        >
                          <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-pulse" />
                          <div className="relative z-10">
                            <div className="w-12 h-12 mb-4 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                              <Icon
                                className="w-6 h-6 text-white transition-colors duration-500 group-hover:text-[#C6A85A]"
                                strokeWidth={2.5}
                              />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                            <p className="text-sm leading-relaxed mb-3 opacity-95">{card.desc}</p>
                            <p className="text-sm font-medium opacity-90">{card.why}</p>
                          </div>
                          <button
                            className="
                              relative z-10
                              mt-4
                              bg-[#5EEAD4]
                              text-[#0B1C3D]
                              font-semibold
                              text-sm
                              px-4 py-2
                              rounded-lg
                              transition-all duration-300
                              hover:bg-white
                              hover:scale-105
                            "
                          >
                            Learn More
                          </button>
                        </Card>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>

          {/* ═══════════════════════════ THREE-PILLAR ARCHITECTURE ═══════════════════════════ */}
          <div>
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                THE IRRF THREE-PILLAR ARCHITECTURE
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
                The Zero-Leakage Architecture: Accountability at Scale
              </p>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                The IRRF operates on a foundational Three-Pillar Architecture designed to ensure no
                dollar is left behind.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Pillar 1 */}
              <Card className="relative bg-white rounded-[20px] border border-slate-200/60 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-bl-[80px] opacity-40 transition-all duration-300 group-hover:opacity-60 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/[0.02] group-hover:via-purple-500/[0.02] group-hover:to-pink-500/[0.02] transition-all duration-300 pointer-events-none rounded-[20px]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-blue-400/10 via-transparent to-transparent blur-2xl" />
                </div>

                <CardHeader className="relative p-8 pb-4 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 w-fit">
                    <span className="text-xs font-bold text-brand-blue tracking-wider">PILLAR 1</span>
                  </div>
                  <div className="w-16 h-16 rounded-[14px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:shadow-[0_16px_40px_rgba(59,130,246,0.5)]">
                    <Shield className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800 leading-tight transition-all duration-300 group-hover:text-slate-900">
                    THE PREDICTIVE DEFENSE LAYER (THE AI SHIELD)
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative space-y-5 px-8 pb-8">
                  <div>
                    <p className="text-sm font-bold text-brand-orange mb-2">• Technology:</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      AI-enhanced pre-submission forensic scanning across millions of payer denial
                      patterns.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-orange mb-2">• Human Edge:</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Senior Coding Auditors recalibrate logic weekly.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-orange mb-2">• Strategic Outcome:</p>
                    <p className="text-sm font-bold text-brand-blue">
                      <CountUp end={99} suffix="%" duration={2000} /> First-Pass Clean Claim Rate.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Pillar 2 */}
              <Card className="relative bg-white rounded-[20px] border border-slate-200/60 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/30 via-pink-400/30 to-purple-400/30 rounded-bl-[80px] opacity-40 transition-all duration-300 group-hover:opacity-60 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-orange-500/[0.02] group-hover:via-pink-500/[0.02] group-hover:to-purple-500/[0.02] transition-all duration-300 pointer-events-none rounded-[20px]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-orange-400/10 via-transparent to-transparent blur-2xl" />
                </div>

                <CardHeader className="relative p-8 pb-4 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 w-fit">
                    <span className="text-xs font-bold text-brand-orange tracking-wider">PILLAR 2</span>
                  </div>
                  <div className="w-16 h-16 rounded-[14px] bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:shadow-[0_16px_40px_rgba(249,115,22,0.5)]">
                    <Crosshair className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800 leading-tight transition-all duration-300 group-hover:text-slate-900">
                    THE TACTICAL RESOLUTION WAR ROOM (THE HUMAN STRIKE FORCE)
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative space-y-5 px-8 pb-8">
                  <div>
                    <p className="text-sm font-bold text-brand-orange mb-2">• Technology:</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      AI-driven work-queue prioritization by recovery velocity.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-orange mb-2">• Human Edge:</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Elite Human Advocates manage appeals and negotiations.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-orange mb-2">• Strategic Outcome:</p>
                    <p className="text-sm font-bold text-brand-blue">Zero Blind Write-Off Policy.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Pillar 3 */}
              <Card className="relative bg-white rounded-[20px] border border-slate-200/60 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/30 via-blue-400/30 to-pink-400/30 rounded-bl-[80px] opacity-40 transition-all duration-300 group-hover:opacity-60 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-pink-500/0 group-hover:from-purple-500/[0.02] group-hover:via-blue-500/[0.02] group-hover:to-pink-500/[0.02] transition-all duration-300 pointer-events-none rounded-[20px]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-purple-400/10 via-transparent to-transparent blur-2xl" />
                </div>

                <CardHeader className="relative p-8 pb-4 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 w-fit">
                    <span className="text-xs font-bold text-brand-blue tracking-wider">PILLAR 3</span>
                  </div>
                  <div className="w-16 h-16 rounded-[14px] bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:shadow-[0_16px_40px_rgba(168,85,247,0.5)]">
                    <RotateCw className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800 leading-tight transition-all duration-300 group-hover:text-slate-900">
                    THE FORENSIC WEALTH RECOVERY LOOP (THE INTELLIGENCE CYCLE)
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative space-y-5 px-8 pb-8">
                  <div>
                    <p className="text-sm font-bold text-brand-orange mb-2">• Technology:</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Continuous audit algorithms scanning historical revenue data.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-orange mb-2">• Human Edge:</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Forensic audit teams conduct deep clinical reviews.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-orange mb-2">• Strategic Outcome:</p>
                    <p className="text-sm font-bold text-brand-blue">
                      Up to <CountUp end={30} suffix="%" duration={2000} /> Revenue Lift.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ CTA BANNER ═══════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-brand-blue via-brand-blue/95 to-brand-orange/80 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-60 h-60 bg-brand-orange/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Eliminate Revenue Leakage?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Let our team show you how the IRRF can transform your revenue cycle into a
              zero-leakage, high-performance operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center gap-2 bg-white text-brand-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link href="/solutions">
                <button className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />

      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  )
}
