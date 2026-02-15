"use client"
import Link from "next/link"
//  import { Link } from "react-router-dom";

import { useState, useEffect, useRef } from "react"
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  TrendingDown,
  TrendingUp,
  Clock,
  Brain,
  CheckCircle,
  Check,
  MapPin,
  Award,
  Eye,
  Wallet,
  CheckCircle2,
  Mail,
  ShieldCheck,
  Users,
  RefreshCw,
  Download,
  Target,
  Network,
  Radar,
  Shield,
  Zap,
  Crosshair,
  AlertTriangle,
  BarChart3,
  Settings,
  Building2,
  Lock,
  RotateCw,
  PhoneCall,
  SearchIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import ContactFormModal from "@/components/contact-form-modal"
import { SequentialHeroAnimation } from "@/components/sequential-hero-animation"
import { ImperialJourneyMap } from "@/components/imperial-journey-map"
import { TransitionFramework } from "@/components/transition-framework"
import { PerformanceLedgerCarousel } from "@/components/performance-ledger-carousel"
import { AnimatedCTAText } from "@/components/animated-cta-text"
import { ServicesCarousel } from "@/components/services-carousel"
import RCMAuditModal from "@/components/rcm-audit-modal"
import ScrollReveal from "@/components/ui/ScrollReveal"
import CountUp from "@/components/ui/CountUp"
import { motion } from "framer-motion"


export default function Home() {
  // Changed from HomePage to LandingPage to match original
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  // Removed ROI calculator state variables

  const [calcOrgType, setCalcOrgType] = useState<"clinic" | "hospital">("clinic")
  const [calcAGC, setCalcAGC] = useState<string>("") // Annual Gross Charges
  const [calcANC, setCalcANC] = useState<string>("") // Annual Net Collections
  const [calcARD, setCalcARD] = useState<string>("") // Average AR Days
  const [calcCCR, setCalcCCR] = useState<string>("") // Clean Claim Rate (diagnostic)
  const [calcDR, setCalcDR] = useState<string>("") // Denial Rate (diagnostic)
  const [calcStaffCount, setCalcStaffCount] = useState<string>("") // RCM Staff Count
  const [calcStaffCost, setCalcStaffCost] = useState<string>("") // Cost per Staff/Year
  const [benefit, setBenefit] = useState({
    revenueLeak: 0,
    annualCostSavings: 0,
    cashLockedAR: 0,
    totalBenefit: 0,
  })

  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [heroSlide, setHeroSlide] = useState(0)
  const heroImages = [
    { src: "/images2/ai-robot-healthcare.jpg", alt: "AI-Powered Healthcare Intelligence" },
    { src: "/images2/doctor-presenting-digital-healthcare-network-futuristic-medical-technology-concept.jpg", alt: "Digital Healthcare Network and Futuristic Medical Technology" },
    { src: "/images2/upgrading-concept-always-keep-system-up-date-developing-ai.jpg", alt: "Advanced AI System for Healthcare Revenue Optimization" },
  ]

  const [testimonialSlide, setTestimonialSlide] = useState(5)
  const [testimonialDirection, setTestimonialDirection] = useState(-1)

  const [journeyExpanded, setJourneyExpanded] = useState(false)
  const [ledgerExpanded, setLedgerExpanded] = useState(false)
  const [successStoriesExpanded, setSuccessStoriesExpanded] = useState(false)
  const [techSecurityExpanded, setTechSecurityExpanded] = useState(false)
  const [ihsAdvantageExpanded, setIhsAdvantageExpanded] = useState(false)

  // Added contact modal state for pricing buttons
  const [contactModalOpen, setContactModalOpen] = useState(false)

  const [isRCMAuditModalOpen, setIsRCMAuditModalOpen] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)

  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  const calculateFinancialBenefit = () => {
    const agc = Number(calcAGC) || 0
    const anc = Number(calcANC) || 0
    const ard = Number(calcARD) || 0
    const staffCount = Number(calcStaffCount) || 0
    const staffCost = Number(calcStaffCost) || 65000

    // System Constants (Benchmarks)
    const BENCH_COLLECTION_RATIO = calcOrgType === "clinic" ? 0.92 : 0.9
    const COST_SAVINGS_RATE = calcOrgType === "clinic" ? 0.3 : 0.22
    const TARGET_ARD = calcOrgType === "clinic" ? 35 : 45
    const RECOVERY_CAP = 0.4
    const REALIZATION_RATE = 0.7

    // Engine 1: Revenue Leakage Recovery (P&L Impact)
    const EXPECTED_COLLECTIONS = agc * BENCH_COLLECTION_RATIO
    const REVENUE_GAP = Math.max(0, EXPECTED_COLLECTIONS - anc)
    const RECOVERABLE_REVENUE = REVENUE_GAP * RECOVERY_CAP
    const revenueBenefit = RECOVERABLE_REVENUE * REALIZATION_RATE

    // Engine 2: RCM Cost Savings (EBITDA Impact)
    const BASELINE_COST = staffCount * staffCost
    const RAW_SAVINGS = BASELINE_COST * COST_SAVINGS_RATE
    const costSavings = Math.min(RAW_SAVINGS, BASELINE_COST * 0.5)

    // Engine 3: Cash Released from AR (Balance Sheet Impact)
    const DAILY_NET_REVENUE = anc / 365
    const AR_IMPROVEMENT = Math.max(0, ard - TARGET_ARD)
    const cashReleased = DAILY_NET_REVENUE * AR_IMPROVEMENT

    // Final Aggregation
    const totalBenefit = revenueBenefit + costSavings + cashReleased

    return {
      revenueLeak: Math.round(revenueBenefit),
      annualCostSavings: Math.round(costSavings),
      cashLockedAR: Math.round(cashReleased),
      totalBenefit: Math.round(totalBenefit),
    }
  }

  useEffect(() => {
    const results = calculateFinancialBenefit()
    setBenefit(results)
  }, [calcOrgType, calcAGC, calcANC, calcARD, calcCCR, calcDR, calcStaffCount, calcStaffCost])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Flip card click support: click to toggle flip on all devices
  useEffect(() => {
    const handleFlipCardClick = (e: Event) => {
      const card = (e.currentTarget as HTMLElement)
      card.classList.toggle("flipped")
    }

    const cards = document.querySelectorAll(".flip-card-3d")
    cards.forEach((card) => {
      card.addEventListener("click", handleFlipCardClick)
      ;(card as HTMLElement).style.cursor = "pointer"
    })

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("click", handleFlipCardClick)
      })
    }
  }, [])

  // Hero image carousel auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  // Testimonial carousel auto-play (ping-pong)
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialSlide((prev) => {
        const next = prev + testimonialDirection
        if (next >= 5) setTestimonialDirection(-1)
        if (next <= 0) setTestimonialDirection(1)
        return next
      })
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonialDirection])

  const isCalculatorComplete = () => {
    return (
      calcAGC !== "" &&
      calcANC !== "" &&
      calcARD !== "" &&
      calcStaffCount !== "" &&
      Number(calcAGC) > 0 &&
      Number(calcANC) > 0 &&
      Number(calcARD) > 0 &&
      Number(calcStaffCount) > 0
    )
  }

  const generatePDFReport = async () => {
    setIsGeneratingPDF(true)

    try {
      const { jsPDF } = await import("jspdf")
      const doc = new jsPDF()

      const pageWidth = doc.internal.pageSize.getWidth()
      const pageHeight = doc.internal.pageSize.getHeight()

      const margin = 20
      const line = 6
      const sectionGap = 14
      const FOOTER_HEIGHT = 80

      let yPos = 20

      /* =======================
         HEADER
      ======================= */

      try {
        const logoImg = new Image()
        logoImg.src = "/images/imperial logo horizontal.png"

        await new Promise((resolve, reject) => {
          logoImg.onload = resolve
          logoImg.onerror = reject
          setTimeout(reject, 3000)
        })

        // Maintain aspect ratio automatically
        const maxLogoWidth = 90
        const aspectRatio = logoImg.width / logoImg.height
        const logoWidth = maxLogoWidth
        const logoHeight = logoWidth / aspectRatio

        doc.addImage(
          logoImg,
          "JPEG", // ✅ correct format
          (pageWidth - logoWidth) / 2,
          yPos,
          logoWidth,
          logoHeight
        )

        yPos += logoHeight + 12

      } catch {
        yPos += 10
      }

      doc.setFontSize(20)
      doc.setTextColor(30, 111, 232)
      doc.text("IHS Revenue Leakage & ROI Report", pageWidth / 2, yPos, {
        align: "center",
      })

      yPos += 8
      doc.setFontSize(9)
      doc.setTextColor(120)
      doc.text(
        `Generated on ${new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}`,
        pageWidth / 2,
        yPos,
        { align: "center" },
      )

      yPos += sectionGap

      /* =======================
         HELPERS
      ======================= */

      const checkPage = (extraSpace = 20) => {
        if (yPos > pageHeight - FOOTER_HEIGHT - extraSpace) {
          doc.addPage()
          yPos = margin
        }
      }

      const sectionTitle = (title: string) => {
        checkPage()
        doc.setFontSize(14)
        doc.setFont(undefined, "bold")
        doc.setTextColor(0)
        doc.text(title, margin, yPos)

        yPos += 4
        doc.setDrawColor(220)
        doc.line(margin, yPos, pageWidth - margin, yPos)
        yPos += 8
        doc.setFont(undefined, "normal")
      }

      const drawRow = (label: string, value: string) => {
        checkPage()
        doc.setFontSize(10)

        doc.setTextColor(80)
        doc.text(label, margin, yPos)

        doc.setTextColor(20)
        const wrapped = doc.splitTextToSize(value, pageWidth / 2 - margin)
        doc.text(wrapped, pageWidth / 2, yPos)

        yPos += wrapped.length * line
      }

      /* =======================
         ORGANIZATION
      ======================= */

      sectionTitle("Organization Overview")
      drawRow(
        "Organization Type",
        calcOrgType === "clinic"
          ? "Clinic / Practice"
          : "Hospital / Health System",
      )

      yPos += sectionGap / 2

      /* =======================
         INPUT METRICS
      ======================= */

      sectionTitle("Current Metrics (User-Entered)")
      drawRow("Annual Gross Charges (AGC)", `$${Number(calcAGC).toLocaleString()}`)
      drawRow("Annual Net Collections (ANC)", `$${Number(calcANC).toLocaleString()}`)
      drawRow("Average AR Days", `${calcARD} days`)
      drawRow("Clean Claim Rate", calcCCR ? `${calcCCR}%` : "Not provided")
      drawRow("Denial Rate", calcDR ? `${calcDR}%` : "Not provided")
      drawRow("RCM Staff Count", String(calcStaffCount))
      drawRow(
        "Cost per Staff / Year",
        `$${Number(calcStaffCost || 65000).toLocaleString()}`,
      )

      yPos += sectionGap / 2

      /* =======================
         FINANCIAL BENEFITS
      ======================= */

      sectionTitle("Calculated Financial Benefit (First Year)")
      doc.setTextColor(34, 139, 34)
      drawRow(
        "Revenue Leakage Recovery",
        `$${benefit.revenueLeak.toLocaleString()}`,
      )
      drawRow(
        "RCM Cost Savings",
        `$${benefit.annualCostSavings.toLocaleString()}`,
      )
      drawRow(
        "Cash Released from AR",
        `$${benefit.cashLockedAR.toLocaleString()}`,
      )

      yPos += 4
      doc.setFontSize(12)
      doc.setFont(undefined, "bold")
      doc.setTextColor(255, 122, 0)
      doc.text(
        `Total First-Year Benefit: $${benefit.totalBenefit.toLocaleString()}`,
        margin,
        yPos,
      )
      doc.setFont(undefined, "normal")

      yPos += sectionGap

      /* =======================
         EXPLANATIONS
      ======================= */

      sectionTitle("How These Metrics Impact Your Revenue")
      doc.setFontSize(9)
      doc.setTextColor(60)

      const explanations = [
        {
          title: "Revenue Leakage Recovery",
          text:
            "Identifies unbilled charges and recoverable denials through improved claim accuracy and AR follow-up. IHS targets recovery of up to 40% of identified gaps.",
        },
        {
          title: "RCM Cost Savings",
          text:
            "Operational efficiencies through automation and optimized staffing models reduce cost while maintaining quality.",
        },
        {
          title: "Cash Locked in AR",
          text:
            "Reducing AR days to industry benchmarks improves working capital and cash flow velocity.",
        },
      ]

      explanations.forEach((item) => {
        checkPage(60)
        doc.setFont(undefined, "bold")
        doc.text(item.title + ":", margin, yPos)
        yPos += 4

        doc.setFont(undefined, "normal")
        const lines = doc.splitTextToSize(item.text, pageWidth - margin * 2)
        doc.text(lines, margin, yPos)
        yPos += lines.length * 4 + 6
      })

      /* =======================
         BENCHMARKS
      ======================= */

      sectionTitle("Industry Benchmark Comparison")

      const currentCCR = Number(calcCCR) || 85
      const targetCCR = 99
      const currentARD =
        Number(calcARD) || (calcOrgType === "clinic" ? 50 : 60)
      const targetARD = calcOrgType === "clinic" ? 35 : 45
      const collectionRatio =
        Number(calcAGC) > 0
          ? (Number(calcANC) / Number(calcAGC)) * 100
          : 0

      drawRow(
        "Clean Claim Rate",
        `${currentCCR.toFixed(1)}% (Target: ${targetCCR}%)`,
      )
      drawRow(
        "Average AR Days",
        `${currentARD} days (Target: ${targetARD} days)`,
      )
      drawRow(
        "Collection Ratio",
        `${collectionRatio.toFixed(1)}% (Best: ${calcOrgType === "clinic" ? "92%" : "90%"
        })`,
      )

      /* =======================
         DISCLAIMER
      ======================= */

      sectionTitle("Disclaimer")
      doc.setFontSize(8)
      doc.setTextColor(100)
      doc.text(
        doc.splitTextToSize(
          "This report provides estimated financial impact based on industry benchmarks and assumptions. Actual results may vary depending on payer mix, specialty, and operational practices. This does not constitute financial advice.",
          pageWidth - margin * 2,
        ),
        margin,
        yPos,
      )

      /* =======================
         FOOTER
      ======================= */

      const totalPages = doc.getNumberOfPages()

      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i)

        const footerTop = pageHeight - FOOTER_HEIGHT + 10

        doc.setDrawColor(30, 111, 232)
        doc.setLineWidth(0.8)
        doc.line(margin, footerTop, pageWidth - margin, footerTop)

        let y = footerTop + 7

        doc.setFontSize(11)
        doc.setFont(undefined, "bold")
        doc.setTextColor(30, 111, 232)
        doc.text("Imperial Healthcare Systems", pageWidth / 2, y, { align: "center" })

        y += 5
        doc.setFontSize(8)
        doc.setFont(undefined, "italic")
        doc.setTextColor(255, 122, 0)
        doc.text(
          "Transforming Healthcare Revenue Cycle Management",
          pageWidth / 2,
          y,
          { align: "center" },
        )

        y += 7
        doc.setFontSize(8)
        doc.setFont(undefined, "normal")
        doc.setTextColor(60)
        doc.text(
          "Email: info@imperialhealthsystems.com  |  Phone: US +1-(859) 978-8780  •  India +91-99537 48055",
          pageWidth / 2,
          y,
          { align: "center" },
        )

        y += 8
        const leftX = margin + 5
        const rightX = pageWidth / 2 + 10

        doc.setFontSize(8)
        doc.setFont(undefined, "bold")
        doc.setTextColor(30, 111, 232)
        doc.text("United States Office", leftX, y)

        doc.setFontSize(7)
        doc.setFont(undefined, "normal")
        doc.setTextColor(70)
        doc.text("Imperial Healthcare Systems LLC", leftX, y + 4)
        doc.text("212 N. 2nd St. STE 100", leftX, y + 8)
        doc.text("Richmond, KY 40475, United States", leftX, y + 12)

        doc.setFontSize(8)
        doc.setFont(undefined, "bold")
        doc.setTextColor(30, 111, 232)
        doc.text("India Office", rightX, y)

        doc.setFontSize(7)
        doc.setFont(undefined, "normal")
        doc.setTextColor(70)
        doc.text("Imperial Healthcare Systems Pvt. Ltd.", rightX, y + 4)
        doc.text("Unit No. 219 2F, ILD Trade Centre", rightX, y + 8)
        doc.text("Sector 47, Sohna Road", rightX, y + 12)
        doc.text("Gurugram - 122018, Haryana, India", rightX, y + 16)

        doc.setFontSize(7)
        doc.setTextColor(120)
        doc.text(
          `Page ${i} of ${totalPages}`,
          pageWidth - margin,
          pageHeight - 8,
          { align: "right" },
        )
      }

      doc.save("IHS-Revenue-Leakage-ROI-Report.pdf")
    } catch (error) {
      console.error(error)
      alert("Error generating PDF")
    } finally {
      setIsGeneratingPDF(false)
    }
  }


  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Mobile Menu Overlay - keeping for backwards compatibility */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-t border-brand-blue/20">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {[
              { name: "Home", href: "#home" },
              { name: "Services", href: "#services" },
              { name: "Solutions", href: "#solutions" },
              // Updated About link to navigate to separate page instead of anchor
              { name: "About", href: "/about" },
              { name: "Careers", href: "#careers" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-brand-blue transition-colors py-2 hover:translate-x-2 transform duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Repositioning sections in the order: Hero, Core Values, Problem, Solution, IHS Advantage, Promise, Calculators, Why Choose Us, Services Carousel, IHS Standards, Pricing, Success Stories, Results, Industries, Technology & Security */}

      {/* 1. Hero Banner */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/60 to-slate-50 pt-[120px] sm:pt-[140px] md:pt-[166px] pb-12 sm:pb-16 md:pb-24"
      >
        {/* Soft ambient glows */}
        <div className="absolute top-[-150px] right-[-100px] w-[600px] h-[600px] bg-blue-200/30 blur-[160px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-100px] left-[-80px] w-[500px] h-[500px] bg-orange-200/20 blur-[140px] rounded-full pointer-events-none"></div>

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #1565c0 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">

          {/* HERO GRID */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

            {/* ================= LEFT CONTENT ================= */}
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >

              {/* Badge */}
              <motion.div
                className="mb-7"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-brand-blue/8 border border-brand-blue/15 text-brand-blue text-sm font-semibold">
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                  Think Excellence
                </span>
              </motion.div>

              {/* Rotating Heading */}
              <div className="min-h-[200px] md:min-h-[240px] flex items-center mb-6">
                <SequentialHeroAnimation />
              </div>

              {/* Description */}
              <motion.p
                className="text-lg text-slate-600 leading-relaxed mb-7 max-w-xl text-justify"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                Imperial Healthcare Systems replaces outdated billing models with our 360° AI-Powered Ecosystem, the only platform fueled by IRRF™—our proprietary intelligence engine. As the sole developers of this architecture, we deliver a future-ready RCM experience that eliminates revenue leakage and ensures predictable financial performance. High-tech, high-touch, and entirely IHS.
              </motion.p>

              {/* Subtitle */}
              <motion.p
                className="text-xl font-semibold text-slate-800 mb-9"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                We optimize your{" "}
                <span className="text-brand-orange font-bold">
                  Clinical EBITDA
                </span>{" "}
                with precision and automation.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <Button
                  size="lg"
                  onClick={() => setContactModalOpen(true)}
                  className="px-8 py-5 text-base bg-brand-blue hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-600/20 hover:shadow-blue-700/30 hover:scale-[1.03] transition-all duration-300"
                >
                  Schedule Free Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-5 text-base border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-brand-blue rounded-full transition-all duration-300"
                  >
                    Explore Services
                  </Button>
                </Link>
              </motion.div>

              {/* Trusted by strip */}
              <motion.div
                className="mt-10 flex items-center gap-5 flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <span className="text-xs text-slate-400 uppercase tracking-widest font-medium">Trusted by</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Building2 className="w-4 h-4" />
                    <span className="text-xs font-medium">Clinics</span>
                  </div>
                  <div className="w-px h-4 bg-slate-200"></div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Building2 className="w-4 h-4" />
                    <span className="text-xs font-medium">Hospitals</span>
                  </div>
                  <div className="w-px h-4 bg-slate-200"></div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Users className="w-4 h-4" />
                    <span className="text-xs font-medium">ASCs</span>
                  </div>
                </div>
              </motion.div>

            </motion.div>


            {/* ================= RIGHT: HERO IMAGE ================= */}
            <motion.div
              className="hidden md:block relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Ambience Glow behind image - matching user's reference */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[600px] lg:w-[700px] h-[500px] md:h-[600px] lg:h-[700px] bg-blue-400/15 blur-[120px] rounded-full -z-10 pointer-events-none" />

              {/* Hero Image Carousel */}
              <div className="relative w-full max-w-[520px] aspect-[520/380] group/carousel">
                {/* Outer hover glow */}
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-blue/0 via-brand-orange/0 to-brand-blue/0 group-hover/carousel:from-brand-blue/30 group-hover/carousel:via-brand-orange/20 group-hover/carousel:to-brand-blue/30 blur-2xl transition-all duration-700 pointer-events-none" />
                <div className="absolute -inset-2 rounded-[1.75rem] border-2 border-white/0 group-hover/carousel:border-white/20 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 w-full h-full rounded-3xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)] border border-white group-hover/carousel:shadow-[0_40px_100px_-10px_rgba(59,130,246,0.35)] transition-shadow duration-700 overflow-hidden">
                {heroImages.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    initial={false}
                    animate={{
                      opacity: heroSlide === index ? 1 : 0,
                      scale: heroSlide === index ? 1 : 1.05,
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                ))}

                {/* Hover overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 via-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

                {/* Dot Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setHeroSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        heroSlide === index
                          ? "bg-white scale-110 shadow-lg"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
              </div>

              {/* EHR & Practice Management Cards */}
              <div className="relative z-10 mt-6 w-full max-w-[520px] grid grid-cols-2 gap-4">
                {/* Card 1: AI-Powered EHR */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="relative h-[220px] perspective-[400px] flip-card-3d group"
                >
                  <div className="absolute inset-0 transform-style-preserve-3d flip-inner">
                    {/* FRONT - Header only */}
                    <div className="absolute inset-0 rounded-2xl border border-brand-blue/20 bg-white shadow-xl backface-hidden flip-front flex flex-col items-center justify-center text-center p-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-orange/5" />
                      <div className="flip-front-content relative flex flex-col items-center">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-orange shadow-lg mb-3">
                          <Brain className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900 mb-1">AI-Powered EHR</h3>
                      </div>
                    </div>
                    {/* BACK - Details */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue via-blue-600 to-brand-orange text-white shadow-xl backface-hidden flip-back flex flex-col justify-center p-5">
                      <div className="flip-back-content">
                        <h3 className="text-sm font-bold mb-2">AI-Powered EHR</h3>
                        <p className="text-xs leading-relaxed mb-3 opacity-90">
                          Intelligent electronic health records with automated documentation and real-time clinical analytics.
                        </p>
                        <div className="space-y-1.5">
                          {["Smart Scheduling", "Auto-Coding", "Real-Time Dashboards"].map((feature) => (
                            <div key={feature} className="flex items-center gap-1.5">
                              <CheckCircle className="w-3.5 h-3.5 text-white/80 flex-shrink-0" />
                              <span className="text-[11px] font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2: Practice Management */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1.0 }}
                  className="relative h-[220px] perspective-[400px] flip-card-3d group"
                >
                  <div className="absolute inset-0 transform-style-preserve-3d flip-inner">
                    {/* FRONT - Header only */}
                    <div className="absolute inset-0 rounded-2xl border border-brand-blue/20 bg-white shadow-xl backface-hidden flip-front flex flex-col items-center justify-center text-center p-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-transparent to-brand-blue/5" />
                      <div className="flip-front-content relative flex flex-col items-center">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange to-brand-blue shadow-lg mb-3">
                          <Settings className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900 mb-1">Practice Management</h3>
                      </div>
                    </div>
                    {/* BACK - Details */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-orange via-orange-500 to-brand-blue text-white shadow-xl backface-hidden flip-back flex flex-col justify-center p-5">
                      <div className="flip-back-content">
                        <h3 className="text-sm font-bold mb-2">Practice Management</h3>
                        <p className="text-xs leading-relaxed mb-3 opacity-90">
                          End-to-end practice operations powered by AI — from patient intake to revenue optimization.
                        </p>
                        <div className="space-y-1.5">
                          {["Patient Intake Automation", "Billing & Collections", "Seamless RCM Integration"].map((feature) => (
                            <div key={feature} className="flex items-center gap-1.5">
                              <CheckCircle className="w-3.5 h-3.5 text-white/80 flex-shrink-0" />
                              <span className="text-[11px] font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>


          {/* ================= BOTTOM STATS ================= */}
          <div className="mt-20 lg:mt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">

            {[
              { end: 99, suffix: "%", label: "Clean Claim Rate", decimals: 0 },
              { end: 60, suffix: "%", label: "Cost Reduction", decimals: 0 },
              { end: 26, suffix: "%", label: "Revenue Increase", decimals: 0 },
              { end: 99.5, suffix: "%", label: "Coding Accuracy", decimals: 1 },
              { end: 10, suffix: "+", label: "Years Expertise", decimals: 0 },
            ].map((stat, i) => (

              <motion.div
                key={stat.label}
                className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 text-center hover:shadow-md hover:border-brand-blue/20 hover:-translate-y-0.5 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-brand-blue group-hover:text-brand-orange transition-colors duration-300">
                  <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals} duration={2000} />
                </div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Smooth section transition */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent"></div>



      {/* 2. The Imperial Promise */}
      <ScrollReveal>
        <section className="py-24 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-brand-blue/80 text-white relative overflow-hidden">
          {/* Subtle ambient glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/8 rounded-full blur-[160px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-400/6 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Section image banner - dual layout */}
            <motion.div
              className="max-w-5xl mx-auto mb-12 grid md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="/images2/ai-driven-business-growth-digital-transformation.jpg"
                  alt="AI-driven business growth and digital transformation in healthcare"
                  className="w-full h-[160px] sm:h-[200px] md:h-[240px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="/images2/healthcare-medicine-medical-technology-doctor-using-robots-ai-electronic-medical-record-diagnosis-medical-research-connecting-with-big-data-dna.jpg"
                  alt="Advanced medical technology integrating AI and big data for diagnosis and research"
                  className="w-full h-[160px] sm:h-[200px] md:h-[240px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            <div className="max-w-6xl mx-auto text-center mb-16">

  <img
    src="/images/White_torch_logo.png"
    alt="Imperial Healthcare Systems"
    className="mx-auto h-30 w-auto object-contain brightness-0 invert mb-6"
  />

  <h2 className="text-4xl md:text-5xl font-bold mb-6">
    The <span className="text-brand-orange">Imperial</span> Promise
  </h2>

  <p className="text-xl md:text-2xl text-brand-orange font-semibold">
    Excellence Delivered. Trust Earned.
  </p>

</div>


            <div className="grid lg:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="relative h-[280px] sm:h-[320px] perspective-[500px] flip-card-3d flip-x group">
                <div className="absolute inset-0 transform-style-preserve-3d flip-inner">
                  {/* FRONT */}
                  <Card className="absolute inset-0 bg-brand-blue/80 backdrop-blur-md border border-white/15 rounded-2xl shadow-xl flex flex-col justify-center p-8 backface-hidden flip-front">
                    <div className="flip-front-content">
                      <div className="w-14 h-14 mb-4 bg-brand-orange/20 rounded-full flex items-center justify-center">
                        <Award className="w-8 h-8 text-brand-orange" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-brand-orange">Precision & Quality</h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        Zero-compromise quality with multi-layer QC validation and expert-driven execution across every workflow.
                      </p>
                    </div>
                  </Card>
                  {/* BACK */}
                  <Card className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-orange via-orange-500 to-amber-500 text-white shadow-xl p-6 flex flex-col justify-center backface-hidden flip-back-x">
                    <div className="flip-back-content">
                      <h3 className="text-xl font-bold mb-4">Precision & Quality</h3>
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-white/80 mt-0.5 shrink-0" />
                          <span className="text-sm leading-relaxed">Zero-compromise quality with multi-layer QC validation</span>
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-white/80 mt-0.5 shrink-0" />
                          <span className="text-sm leading-relaxed">Expert-driven execution across every workflow</span>
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-white/80 mt-0.5 shrink-0" />
                          <span className="text-sm leading-relaxed">Errors prevented before they reach payers</span>
                        </li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="relative h-[280px] sm:h-[320px] perspective-[500px] flip-card-3d flip-x group">
                <div className="absolute inset-0 transform-style-preserve-3d flip-inner">
                  {/* FRONT */}
                  <Card className="absolute inset-0 bg-brand-blue/80 backdrop-blur-md border border-white/15 rounded-2xl shadow-xl flex flex-col justify-center p-8 backface-hidden flip-front">
                    <div className="flip-front-content">
                      <div className="w-14 h-14 mb-4 bg-brand-orange/20 rounded-full flex items-center justify-center">
                        <Eye className="w-8 h-8 text-brand-orange" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-brand-orange">Accountability & Transparency</h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        Dedicated teams that own outcomes with full visibility into workflows, KPIs, and real-time reporting.
                      </p>
                    </div>
                  </Card>
                  {/* BACK */}
                  <Card className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue via-blue-600 to-cyan-500 text-white shadow-xl p-6 flex flex-col justify-center backface-hidden flip-back-x">
                    <div className="flip-back-content">
                      <h3 className="text-xl font-bold mb-4">Accountability & Transparency</h3>
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-white/80 mt-0.5 shrink-0" />
                          <span className="text-sm leading-relaxed">Dedicated teams that own outcomes, not just tasks</span>
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-white/80 mt-0.5 shrink-0" />
                          <span className="text-sm leading-relaxed">Full visibility into workflows, KPIs, and reporting</span>
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-white/80 mt-0.5 shrink-0" />
                          <span className="text-sm leading-relaxed">No hidden gaps, no excuses—only results</span>
                        </li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="relative h-[280px] sm:h-[320px] perspective-[500px] flip-card-3d flip-x group">
                <div className="absolute inset-0 transform-style-preserve-3d flip-inner">
                  {/* FRONT */}
                  <Card className="absolute inset-0 bg-brand-blue/80 backdrop-blur-md border border-white/15 rounded-2xl shadow-xl flex flex-col justify-center p-8 backface-hidden flip-front">
                    <div className="flip-front-content">
                      <div className="w-14 h-14 mb-4 bg-brand-orange/20 rounded-full flex items-center justify-center">
                        <Wallet className="w-8 h-8 text-brand-orange" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-brand-orange">Financial Impact</h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        Cost-efficient delivery with measurable improvements in collections, cash flow, and revenue growth engineered into every process.
                      </p>
                    </div>
                  </Card>
                  {/* BACK */}
                  <Card className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-xl p-6 flex flex-col justify-center backface-hidden flip-back-x">
                    <div className="flip-back-content">
                      <h3 className="text-xl font-bold mb-4">Financial Impact</h3>
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-white/80 mt-0.5 shrink-0" />
                          <span className="text-sm leading-relaxed">Cost-efficient delivery without sacrificing performance</span>
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-white/80 mt-0.5 shrink-0" />
                          <span className="text-sm leading-relaxed">Measurable improvements in collections and cash flow</span>
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-white/80 mt-0.5 shrink-0" />
                          <span className="text-sm leading-relaxed">Revenue growth engineered into every process</span>
                        </li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-4xl mx-auto">
                We don't just process billing, we engineer cash flow. Our 'Zero-Error' IRRF methodology combines the
                precision of AI-driven tools with the nuance of specialized US healthcare expertise. The result? Your
                revenue is protected, your costs are slashed, and your clinical focus remains uninterrupted.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Smooth section transition */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent"></div>

      {/* THE PROBLEM Section */}
      <ScrollReveal>
        <section className="py-24 relative overflow-hidden">
          {/* Background image */}
          <img src="/bg-digital-network.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-gray-50/93 to-slate-100/95"></div>
          <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle, #0a2540 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Section images - side by side */}
            <motion.div
              className="max-w-5xl mx-auto mb-12 grid md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg relative group">
                <img
                  src="/images2/shot-young-male-doctor-looking-stressed-while-working-his-office-created-with-generative-ai.jpg"
                  alt="Young male doctor looking stressed while working in his office"
                  className="w-full h-[160px] sm:h-[200px] md:h-[220px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-5 text-white">
                  <p className="text-sm font-semibold">Revenue Leakage</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg relative group">
                <img
                  src="/images2/doctor-stress.jpg"
                  alt="Senior doctor experiencing stress and frustration in a hospital setting"
                  className="w-full h-[160px] sm:h-[200px] md:h-[220px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-5 text-white">
                  <p className="text-sm font-semibold">The Transparency Crisis</p>
                </div>
              </div>
            </motion.div>

            {/* Section Headline */}
            <div className="text-center mb-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-foreground">
                THE PROBLEM
              </h2>
            </div>

            {/* Subheadline */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground max-w-4xl mx-auto leading-tight">
                <span className="text-brand-orange">The Invisible Tax</span>: Why US Healthcare Providers Lose Up to
                <span className="text-brand-orange font-bold"> <CountUp end={30} suffix="%" duration={2000} /></span> of Contracted Revenue.
              </h3>
            </div>

            {/* Paragraph */}
            <div className="text-center mb-16">
              <p className="text-base md:text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
                The &apos;Invisible Tax&apos; is the delta between Contractual Collections and Actual Yield. Mass-market
                firms have weaponized complexity to hide the fact that their labor-arbitrage model is incapable of
                capturing the final 10–20% of legitimate revenue. They aren&apos;t just failing to collect; they are
                actively suppressing the provider&apos;s financial potential to protect their own operational margins.
              </p>
            </div>

            {/* Problem Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* Card 1 */}
              <Card className="group relative border border-gray-200/40 rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden backdrop-blur-[10px] bg-gradient-to-br from-pink-50/90 via-white/85 to-purple-50/90 hover:backdrop-blur-[16px]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[rgba(0,0,0,0.60)] backdrop-blur-[14px] pointer-events-none z-[1]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[radial-gradient(ellipse_at_center,rgba(30,30,35,0.4)_0%,transparent_70%)] pointer-events-none z-[2]" />

                <CardHeader className="relative z-10">
                  <div className="mb-3 transition-all duration-[350ms] group-hover:brightness-125 group-hover:drop-shadow-[0_0_16px_rgba(255,122,0,0.4)]">
                    <AlertTriangle className="w-10 h-10 text-orange-500 group-hover:text-orange-400" />
                  </div>
                  <CardTitle className="text-xl font-bold transition-colors duration-[350ms]">
                    <span className="text-brand-orange group-hover:text-white">The Charge Leakage Abyss</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-slate-700 leading-relaxed transition-colors duration-[350ms] group-hover:text-[#E5E7EB]">
                    Most RCM companies lack robust workflow integrity. Without periodic forensic audits, millions in
                    clinical volume evaporate before they are even billed. Traditional firms ignore the gap between
                    patient visits and claim generation due to improper training and system &apos;blind spots.&apos;
                  </p>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="group relative border border-gray-200/40 rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden backdrop-blur-[10px] bg-gradient-to-br from-purple-50/90 via-white/85 to-pink-50/90 hover:backdrop-blur-[16px]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[rgba(0,0,0,0.60)] backdrop-blur-[14px] pointer-events-none z-[1]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[radial-gradient(ellipse_at_center,rgba(30,30,35,0.4)_0%,transparent_70%)] pointer-events-none z-[2]" />

                <CardHeader className="relative z-10">
                  <div className="mb-3 transition-all duration-[350ms] group-hover:brightness-125 group-hover:drop-shadow-[0_0_16px_rgba(255,122,0,0.4)]">
                    <BarChart3 className="w-10 h-10 text-purple-500 group-hover:text-purple-400" />
                  </div>
                  <CardTitle className="text-xl font-bold transition-colors duration-[350ms]">
                    <span className="text-brand-orange group-hover:text-white">
                      The &apos;Write-Off&apos; Culture & Abandoned AR
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-slate-700 leading-relaxed transition-colors duration-[350ms] group-hover:text-[#E5E7EB]">
                    Legacy RCM providers focus on &apos;Easy Wins&apos;—new claims. They intentionally ignore &apos;Stuck
                    AR&apos; because fighting denials is labor-intensive. Claims sit untouched for years until they hit
                    Timely Filing Limits, at which point they are quietly written off. Your revenue is sacrificed for
                    their operational speed.
                  </p>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="group relative border border-gray-200/40 rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden backdrop-blur-[10px] bg-gradient-to-br from-blue-50/90 via-white/85 to-purple-50/90 hover:backdrop-blur-[16px]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[rgba(0,0,0,0.60)] backdrop-blur-[14px] pointer-events-none z-[1]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[radial-gradient(ellipse_at_center,rgba(30,30,35,0.4)_0%,transparent_70%)] pointer-events-none z-[2]" />

                <CardHeader className="relative z-10">
                  <div className="mb-3 transition-all duration-[350ms] group-hover:brightness-125 group-hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.4)]">
                    <Eye className="w-10 h-10 text-blue-500 group-hover:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl font-bold transition-colors duration-[350ms]">
                    <span className="text-brand-orange group-hover:text-white">The Denial Asymmetry</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-slate-700 leading-relaxed transition-colors duration-[350ms] group-hover:text-[#E5E7EB]">
                    Payers use AI to strategically deny 15%–50% of claims by default, betting that your billing company is
                    too automated or too passive to fight back. When technology replaces people entirely, accountability
                    vanishes, and the payer wins.
                  </p>
                </CardContent>
              </Card>

              {/* Card 4 */}
              <Card className="group relative border border-gray-200/40 rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden backdrop-blur-[10px] bg-gradient-to-br from-orange-50/90 via-white/85 to-pink-50/90 hover:backdrop-blur-[16px]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[rgba(0,0,0,0.60)] backdrop-blur-[14px] pointer-events-none z-[1]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[radial-gradient(ellipse_at_center,rgba(30,30,35,0.4)_0%,transparent_70%)] pointer-events-none z-[2]" />

                <CardHeader className="relative z-10">
                  <div className="mb-3 transition-all duration-[350ms] group-hover:brightness-125 group-hover:drop-shadow-[0_0_16px_rgba(255,122,0,0.4)]">
                    <Settings className="w-10 h-10 text-orange-500 group-hover:text-orange-400" />
                  </div>
                  <CardTitle className="text-xl font-bold transition-colors duration-[350ms]">
                    <span className="text-brand-orange group-hover:text-white">
                      The Commodity Trap: Efficiency vs. Integrity
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-slate-700 leading-relaxed transition-colors duration-[350ms] group-hover:text-[#E5E7EB]">
                    Legacy RCM models prioritize &apos;Cost-to-Collect&apos; metrics over &apos;Yield Optimization.&apos;
                    By focusing on headcount reduction rather than Claim Integrity, they trigger a cycle of high turnover
                    and zero accountability. You aren&apos;t buying a service; you&apos;re subsidizing their labor
                    arbitrage.
                  </p>
                </CardContent>
              </Card>

              {/* Card 5 */}
              <Card className="group relative border border-gray-200/40 rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden backdrop-blur-[10px] bg-gradient-to-br from-teal-50/90 via-white/85 to-blue-50/90 hover:backdrop-blur-[16px]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[rgba(0,0,0,0.60)] backdrop-blur-[14px] pointer-events-none z-[1]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[radial-gradient(ellipse_at_center,rgba(30,30,35,0.4)_0%,transparent_70%)] pointer-events-none z-[2]" />

                <CardHeader className="relative z-10">
                  <div className="mb-3 transition-all duration-[350ms] group-hover:brightness-125 group-hover:drop-shadow-[0_0_16px_rgba(255,122,0,0.4)]">
                    <Building2 className="w-10 h-10 text-teal-500 group-hover:text-teal-400" />
                  </div>
                  <CardTitle className="text-xl font-bold transition-colors duration-[350ms]">
                    <span className="text-brand-orange group-hover:text-white">
                      Institutional Neglect: The Mid-Market Blind Spot
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-slate-700 leading-relaxed transition-colors duration-[350ms] group-hover:text-[#E5E7EB]">
                    Tier-1 RCM Companies are architected for high-revenue, high-volume outliers. This leaves
                    small-to-mid-sized healthcare providers relegated to a lower tier of service, where their unique
                    complexities are ignored in favor of a homogenized, one-size-fits-none workflow.
                  </p>
                </CardContent>
              </Card>

              {/* Card 6 */}
              <Card className="group relative border border-gray-200/40 rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-[350ms] ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden backdrop-blur-[10px] bg-gradient-to-br from-indigo-50/90 via-white/85 to-purple-50/90 hover:backdrop-blur-[16px]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[rgba(0,0,0,0.60)] backdrop-blur-[14px] pointer-events-none z-[1]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-in-out bg-[radial-gradient(ellipse_at_center,rgba(30,30,35,0.4)_0%,transparent_70%)] pointer-events-none z-[2]" />

                <CardHeader className="relative z-10">
                  <div className="mb-3 transition-all duration-[350ms] group-hover:brightness-125 group-hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.4)]">
                    <Lock className="w-10 h-10 text-indigo-500 group-hover:text-indigo-400" />
                  </div>
                  <CardTitle className="text-xl font-bold transition-colors duration-[350ms]">
                    <span className="text-brand-orange group-hover:text-white">
                      The Accountability Void: When Humans Disappear
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-slate-700 leading-relaxed transition-colors duration-[350ms] group-hover:text-[#E5E7EB]">
                    Full automation without human oversight creates a system where no one is accountable when claims fail.
                    When issues arise, there&apos;s no escalation path, no single point of contact. It&apos;s a black box
                    that prioritizes cost savings over your financial outcomes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Smooth section transition */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      {/* 3. The Solution Section */}

      {/* 4. THE SOLUTION (IRRF) */}
      <ScrollReveal>
        <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden">
          {/* Subtle ambient glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[160px] pointer-events-none"></div>

          <div className="container mx-auto px-4">
            {/* Solution section banner image */}
            <motion.div
              className="max-w-6xl mx-auto mb-12 grid md:grid-cols-2 gap-6 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl group relative">
                <img
                  src="/images2/healthcare-business-medical-data-growth-graph-business-chart-doctor-work-with-professional-team.jpg"
                  alt="Healthcare business data growth graph and professional medical team analysis"
                  className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="relative group/img">
                {/* Outer glow */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-orange/0 via-brand-blue/0 to-brand-orange/0 group-hover/img:from-brand-orange/25 group-hover/img:via-brand-blue/15 group-hover/img:to-brand-orange/25 blur-xl transition-all duration-700 pointer-events-none" />
                <div className="absolute -inset-1.5 rounded-[1.1rem] border-2 border-white/0 group-hover/img:border-brand-orange/25 transition-all duration-500 pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl group-hover/img:shadow-[0_20px_60px_-10px_rgba(249,115,22,0.35)] transition-shadow duration-700">
                  <img
                    src="/images2/upgrading-concept-always-keep-system-up-date-developing-ai.jpg"
                    alt="Advanced AI system upgrading concept for healthcare revenue optimization"
                    className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover group-hover/img:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/40 via-brand-orange/10 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </motion.div>

            {/* Headline */}
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-foreground text-balance">
                THE SOLUTION: <span className="text-brand-orange">THE IMPERIAL REVENUE RECOVERY FRAMEWORK (IRRF)</span>
              </h2>
            </div>

            {/* Subheadline */}
            <div className="text-center mb-16">
              <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground max-w-5xl mx-auto">
                Precision Infrastructure for the Modern Healthcare Enterprise
              </h3>
            </div>

            {/* SECTION 1: IRRF CORE CARDS */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-0 mb-20 max-w-7xl mx-auto">

              {/* ================= CARD 1 ================= */}
              <div className="relative h-[280px] sm:h-[320px] w-full sm:w-4/5 mx-auto perspective-[500px] flip-card-3d flip-x group">
                <div className="absolute inset-0 transform-style-preserve-3d flip-inner">

                  {/* FRONT */}
                  <Card
                    className="absolute inset-0 bg-white rounded-[20px]
                   border-2 border-orange-400/70
                   hover:border-orange-500
                   shadow-md hover:shadow-orange-200/40
                   transition-all duration-300
                   flex flex-col items-center justify-center text-center p-8
                   backface-hidden flip-front"
                  >
                    <div className="flip-front-content">
                      <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center">
                        <Target className="w-7 h-7 text-white" strokeWidth={2.5} />
                      </div>

                      <h3 className="text-xl font-bold text-slate-800 mb-2">
                        THE CORE PROPOSITION
                      </h3>

                      <p className="text-base font-semibold text-brand-orange mb-2">
                        Where Algorithmic Precision Meets Human Advocacy
                      </p>
                    </div>
                  </Card>

                  {/* BACK */}
                  <Card
                    className="absolute inset-0 rounded-[20px]
                   bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500
                   text-white shadow-xl p-6
                   flex flex-col justify-center
                   backface-hidden flip-back-x"
                  >
                    <div className="flip-back-content">
                      <h3 className="text-xl font-bold mb-3">
                        THE CORE PROPOSITION
                      </h3>

                      <p className="text-sm leading-relaxed mb-3">
                        The Imperial Revenue Recovery Framework (IRRF) replaces reactive legacy
                        processes with a proactive intelligence layer.
                      </p>

                      <p className="text-sm leading-relaxed mb-4">
                        Our AI-enhanced architecture engineers revenue to secure the Clinical EBITDA
                        your practice deserves.
                      </p>
                    </div>
                  </Card>

                </div>
              </div>

              {/* ================= CARD 2 ================= */}
              <div className="relative h-[280px] sm:h-[320px] w-full sm:w-4/5 mx-auto perspective-[500px] flip-card-3d flip-x group">
                <div className="absolute inset-0 transform-style-preserve-3d flip-inner">

                  {/* FRONT */}
                  <Card
                    className="absolute inset-0 bg-white rounded-[20px]
                   border-2 border-orange-400/70
                   hover:border-orange-500
                   shadow-md hover:shadow-orange-200/40
                   transition-all duration-300
                   flex flex-col items-center justify-center text-center p-8
                   backface-hidden flip-front"
                  >
                    <div className="flip-front-content">
                      <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                        <Network className="w-7 h-7 text-white" strokeWidth={2.5} />
                      </div>

                      <h3 className="text-xl font-bold text-slate-800 mb-2">
                        THE IHS INTELLIGENCE ENGINE
                      </h3>

                      <p className="text-base font-semibold text-brand-orange mb-2">
                        Engineering Enterprise Resilience
                      </p>
                    </div>
                  </Card>

                  {/* BACK */}
                  <Card
                    className="absolute inset-0 rounded-[20px]
                   bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500
                   text-white shadow-xl p-6
                   flex flex-col justify-center
                   backface-hidden flip-back-x"
                  >
                    <div className="flip-back-content">
                      <h3 className="text-xl font-bold mb-3">
                        THE IHS INTELLIGENCE ENGINE
                      </h3>

                      <p className="text-sm leading-relaxed mb-3">
                        IHS orchestrates high-velocity revenue cycles through a proprietary fusion
                        of specialized intelligence and AI-driven infrastructure.
                      </p>

                      <p className="text-sm leading-relaxed mb-4">
                        Technology serves as the sentry, while our Revenue Architects guide
                        high-value decisions.
                      </p>
                    </div>
                  </Card>

                </div>
              </div>

            </div>



            {/* ================= SECTION: THE STRATEGIC INTELLIGENCE GRID ================= */}
            <div className="mb-20">

              {/* Heading */}
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
                        className="relative h-[280px] sm:h-[320px] w-full max-w-[280px] sm:max-w-[320px] perspective-[1200px] flip-card-3d group"
                      >

                        {/* FLIP CONTAINER */}
                        <div className="absolute inset-0 h-full w-full transform-style-preserve-3d flip-inner">

                          {/* ================= FRONT CARD ================= */}
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
                  backface-hidden flip-front
                  transition-all duration-500
                  group-hover:-translate-y-1
                "
                          >

                            {/* Navy sheen */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

                            <div className="flip-front-content relative z-10 flex flex-col items-center">
                              <div className="w-12 h-12 mb-4 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-500">
                                <Icon
                                  className="w-6 h-6 text-white transition-colors duration-500 group-hover:text-[#C6A85A]"
                                  strokeWidth={2.5}
                                />
                              </div>

                              <h3 className="text-base font-bold mb-1 tracking-wide">
                                {card.title}
                              </h3>

                              <p className="text-sm opacity-80">
                                {card.subtitle}
                              </p>

                              <p className="text-xs opacity-60 mt-2">
                                Hover to explore
                              </p>
                            </div>

                          </Card>


                          {/* ================= BACK CARD ================= */}
                          <Card
                            className="
                  absolute inset-0 h-full w-full
                  rounded-[18px]
                  bg-gradient-to-br from-[#0D9488] via-[#14B8A6] to-[#5EEAD4]
                  text-white
                  shadow-[0_20px_60px_rgba(20,184,166,0.45)]
                  flex flex-col justify-between
                  p-6
                  backface-hidden flip-back
                  overflow-hidden
                "
                          >

                            {/* subtle animated wash */}
                            <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-pulse" />

                            {/* CONTENT */}
                            <div className="flip-back-content relative z-10">

                              <div className="w-12 h-12 mb-4 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                                <Icon
                                  className="w-6 h-6 text-white transition-colors duration-500 group-hover:text-[#C6A85A]"
                                  strokeWidth={2.5}
                                />
                              </div>

                              <h3 className="text-lg font-bold mb-2">
                                {card.title}
                              </h3>

                              <p className="text-sm leading-relaxed mb-3 opacity-95">
                                {card.desc}
                              </p>

                              <p className="text-sm font-medium opacity-90">
                                {card.why}
                              </p>

                            </div>

                          </Card>

                        </div>
                      </div>
                    )
                  })}

                </div>
              </section>
            </div>




            {/* SECTION 2: IRRF THREE-PILLAR ARCHITECTURE */}
            <div>
              <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  THE IRRF THREE-PILLAR ARCHITECTURE
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
                  The Zero-Leakage Architecture: Accountability at Scale
                </p>
                <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                  The IRRF operates on a foundational Three-Pillar Architecture designed to ensure no dollar is left
                  behind.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Pillar 1 */}
                <div className="relative h-[360px] sm:h-[420px] perspective-[500px] flip-card-3d flip-x group">
                  <div className="absolute inset-0 transform-style-preserve-3d flip-inner">
                    {/* FRONT */}
                    <Card className="absolute inset-0 bg-white rounded-[20px] border border-slate-200/60 shadow-[0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden backface-hidden flip-front">
                      <div className="flip-front-content">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-bl-[80px] opacity-40" />
                        <CardHeader className="relative p-8 pb-4 space-y-5">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 w-fit">
                            <span className="text-xs font-bold text-brand-blue tracking-wider">PILLAR 1</span>
                          </div>
                          <div className="w-16 h-16 rounded-[14px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                            <Shield className="w-8 h-8 text-white" strokeWidth={2.5} />
                          </div>
                          <CardTitle className="text-lg font-bold text-slate-800 leading-tight">
                            THE PREDICTIVE DEFENSE LAYER (THE AI SHIELD)
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="relative px-8 pb-8">
                          <p className="text-sm text-slate-600 leading-relaxed">AI-enhanced pre-submission forensic scanning with 99% First-Pass Clean Claim Rate.</p>
                        </CardContent>
                      </div>
                    </Card>
                    {/* BACK */}
                    <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white shadow-xl p-8 flex flex-col justify-center backface-hidden flip-back-x">
                      <div className="flip-back-content">
                        <h3 className="text-lg font-bold mb-5">THE PREDICTIVE DEFENSE LAYER</h3>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-bold mb-1">• Technology:</p>
                            <p className="text-sm leading-relaxed opacity-90">AI-enhanced pre-submission forensic scanning across millions of payer denial patterns.</p>
                          </div>
                          <div>
                            <p className="text-sm font-bold mb-1">• Human Edge:</p>
                            <p className="text-sm leading-relaxed opacity-90">Senior Coding Auditors recalibrate logic weekly.</p>
                          </div>
                          <div>
                            <p className="text-sm font-bold mb-1">• Strategic Outcome:</p>
                            <p className="text-sm font-bold"><CountUp end={99} suffix="%" duration={2000} /> First-Pass Clean Claim Rate.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="relative h-[360px] sm:h-[420px] perspective-[500px] flip-card-3d flip-x group">
                  <div className="absolute inset-0 transform-style-preserve-3d flip-inner">
                    {/* FRONT */}
                    <Card className="absolute inset-0 bg-white rounded-[20px] border border-slate-200/60 shadow-[0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden backface-hidden flip-front">
                      <div className="flip-front-content">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/30 via-pink-400/30 to-purple-400/30 rounded-bl-[80px] opacity-40" />
                        <CardHeader className="relative p-8 pb-4 space-y-5">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 w-fit">
                            <span className="text-xs font-bold text-brand-orange tracking-wider">PILLAR 2</span>
                          </div>
                          <div className="w-16 h-16 rounded-[14px] bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
                            <Crosshair className="w-8 h-8 text-white" strokeWidth={2.5} />
                          </div>
                          <CardTitle className="text-lg font-bold text-slate-800 leading-tight">
                            THE TACTICAL RESOLUTION WAR ROOM (THE HUMAN STRIKE FORCE)
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="relative px-8 pb-8">
                          <p className="text-sm text-slate-600 leading-relaxed">AI-driven work-queue prioritization with Zero Blind Write-Off Policy.</p>
                        </CardContent>
                      </div>
                    </Card>
                    {/* BACK */}
                    <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 text-white shadow-xl p-8 flex flex-col justify-center backface-hidden flip-back-x">
                      <div className="flip-back-content">
                        <h3 className="text-lg font-bold mb-5">THE TACTICAL RESOLUTION WAR ROOM</h3>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-bold mb-1">• Technology:</p>
                            <p className="text-sm leading-relaxed opacity-90">AI-driven work-queue prioritization by recovery velocity.</p>
                          </div>
                          <div>
                            <p className="text-sm font-bold mb-1">• Human Edge:</p>
                            <p className="text-sm leading-relaxed opacity-90">Elite Human Advocates manage appeals and negotiations.</p>
                          </div>
                          <div>
                            <p className="text-sm font-bold mb-1">• Strategic Outcome:</p>
                            <p className="text-sm font-bold">Zero Blind Write-Off Policy.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="relative h-[360px] sm:h-[420px] perspective-[500px] flip-card-3d flip-x group">
                  <div className="absolute inset-0 transform-style-preserve-3d flip-inner">
                    {/* FRONT */}
                    <Card className="absolute inset-0 bg-white rounded-[20px] border border-slate-200/60 shadow-[0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden backface-hidden flip-front">
                      <div className="flip-front-content">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/30 via-blue-400/30 to-pink-400/30 rounded-bl-[80px] opacity-40" />
                        <CardHeader className="relative p-8 pb-4 space-y-5">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 w-fit">
                            <span className="text-xs font-bold text-brand-blue tracking-wider">PILLAR 3</span>
                          </div>
                          <div className="w-16 h-16 rounded-[14px] bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 flex items-center justify-center shadow-lg">
                            <RotateCw className="w-8 h-8 text-white" strokeWidth={2.5} />
                          </div>
                          <CardTitle className="text-lg font-bold text-slate-800 leading-tight">
                            THE FORENSIC WEALTH RECOVERY LOOP (THE INTELLIGENCE CYCLE)
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="relative px-8 pb-8">
                          <p className="text-sm text-slate-600 leading-relaxed">Continuous audit algorithms with up to 30% Revenue Lift.</p>
                        </CardContent>
                      </div>
                    </Card>
                    {/* BACK */}
                    <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 text-white shadow-xl p-8 flex flex-col justify-center backface-hidden flip-back-x">
                      <div className="flip-back-content">
                        <h3 className="text-lg font-bold mb-5">THE FORENSIC WEALTH RECOVERY LOOP</h3>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-bold mb-1">• Technology:</p>
                            <p className="text-sm leading-relaxed opacity-90">Continuous audit algorithms scanning historical revenue data.</p>
                          </div>
                          <div>
                            <p className="text-sm font-bold mb-1">• Human Edge:</p>
                            <p className="text-sm leading-relaxed opacity-90">Forensic audit teams conduct deep clinical reviews.</p>
                          </div>
                          <div>
                            <p className="text-sm font-bold mb-1">• Strategic Outcome:</p>
                            <p className="text-sm font-bold">Up to <CountUp end={30} suffix="%" duration={2000} /> Revenue Lift.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="w-full px-4 md:px-10 py-12">
              <motion.div
                className="
          relative
          max-w-7xl
          mx-auto
          rounded-2xl
          overflow-hidden
          min-h-[280px] md:min-h-[340px]
          flex items-center
        "
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Background Image */}
                <img
                  src="/images2/ai-robot-healthcare.jpg"
                  alt="AI-Powered Healthcare Intelligence"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/85 via-[#0a2540]/50 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 w-full flex justify-center md:justify-start">
                  <div className="text-center md:text-left md:ml-20 max-w-xl">

                    {/* Heading */}
                    <h2 className="text-white text-3xl md:text-5xl font-light mb-4 tracking-wide">
                      Explore Imperial
                    </h2>

                    {/* Subtitle */}
                    <p className="text-white/90 text-sm md:text-lg mb-6">
                      Process Automation. Machine Learning. Artificial Intelligence.
                    </p>

                    {/* Button */}
                    <Link href="/irrf">
                      <button
                        className="
                  bg-white
                  text-black
                  px-7 py-3
                  rounded-full
                  text-sm
                  font-medium
                  tracking-wider
                  hover:bg-gray-200
                  transition
                  shadow-lg
                "
                      >
                        LEARN MORE
                      </button>
                    </Link>

                  </div>
                </div>
              </motion.div>
            </section>

          </div>
        </section>
      </ScrollReveal>

      {/* 5. IHS Advantage Section - NEW */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                The <span className="text-brand-orange">IHS</span> Advantage
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Imperial Healthcare Systems delivers unmatched competitive advantages through our unique operational
                model
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-blue/70 rounded-2xl flex items-center justify-center mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Unprecedented Cost Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Achieve up to 60% operational cost reduction without sacrificing quality. Our global delivery model
                    combines skilled professionals with intelligent automation to deliver exceptional value.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-orange/20 hover:border-brand-orange/40 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-orange/70 rounded-2xl flex items-center justify-center mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">AI-Enhanced Intelligence Layer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Level the playing field against payer denial engines. Our predictive analytics and automated claim
                    accuracy systems catch errors before submission, securing your 99% first-pass clean claim rate.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-orange rounded-2xl flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Decade of US RCM Mastery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Benefit from 10+ years of deep US healthcare expertise. Our specialized teams understand the nuances
                    of payer policies, compliance regulations, and specialty-specific coding requirements.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-12 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10 border-2 border-brand-blue/30">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">The IHS Difference</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      While traditional RCM providers focus on processing claims, we engineer your entire revenue
                      architecture. Our integrated approach synchronizes clinical excellence with financial performance,
                      delivering measurable EBITDA improvements that compound over time.
                    </p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Clean Claim Rate", value: "99%" },
                      { label: "Cost Reduction", value: "Up to 60%" },
                      { label: "US RCM Experience", value: "10+ Years" },
                      { label: "Support Coverage", value: "24/7" },
                    ].map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                        <span className="font-semibold">{stat.label}</span>
                        <span className="text-2xl font-bold text-brand-orange">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Smooth section transition */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      {/* 6. THE IHS ADVANTAGE */}
      <ScrollReveal>
        <section className="py-24 relative overflow-hidden">
          {/* Background image */}
          <img src="/bg-abstract-light.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 to-white/93"></div>
          {/* Subtle ambient light */}
          <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-orange-400/4 rounded-full blur-[160px] pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Header with dual images */}
              <div className="text-center mb-16">
                <motion.div
                  className="max-w-4xl mx-auto mb-10 grid grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src="/images2/doctor-presenting-digital-healthcare-network-futuristic-medical-technology-concept.jpg"
                      alt="Doctor presenting digital healthcare network and futuristic medical technology"
                      className="w-full h-[150px] sm:h-[180px] md:h-[200px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src="/images2/flat-dollar-sign-rising-arrow-isolated-white-background-concept-as-sleek-abstract-vector.jpg"
                      alt="Financial growth concept with dollar sign and rising arrow"
                      className="w-full h-[150px] sm:h-[180px] md:h-[200px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  The <span className="text-brand-orange">IHS</span> Advantage
                </h2>
                <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  The Difference Between Processing and Partnering
                </p>
                <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Imperial Healthcare Systems was built to beat the &apos;Mass Billing&apos; giants by offering a level of
                  surgical precision they cannot match.
                </p>
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center justify-center gap-3 flex-wrap px-6 py-4 bg-white rounded-lg shadow-md border border-gray-200">
                    <span className="text-lg font-semibold text-foreground">Clean Claim</span>
                    <span className="text-brand-orange text-2xl">→</span>
                    <span className="text-lg font-semibold text-foreground">Net Collection</span>
                    <span className="text-brand-orange text-2xl">→</span>
                    <span className="text-lg font-semibold text-foreground">EBITDA</span>
                    <span className="text-brand-orange text-2xl">→</span>
                    <span className="text-lg font-semibold text-brand-orange">Enterprise Valuation Impact</span>
                  </div>
                </div>
              </div>

              {/* Collapsible content */}
              <div className="relative">
                <motion.div
                  className="overflow-hidden"
                  initial={false}
                  animate={{ height: ihsAdvantageExpanded ? "auto" : 200 }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {/* Card 1: Full-Stake Accountability */}
                <div className="relative h-[280px] sm:h-[320px] perspective-[500px] flip-card-3d flip-x group">
                  <div className="absolute inset-0 transform-style-preserve-3d flip-inner">
                    {/* FRONT */}
                    <div className="absolute inset-0 bg-white rounded-xl shadow-md border-2 border-transparent backface-hidden flip-front flex flex-col justify-center p-8"
                      style={{
                        backgroundImage: "linear-gradient(white, white), linear-gradient(to bottom right, rgb(249, 115, 22), rgb(251, 146, 60), rgb(249, 115, 22))",
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                      }}
                    >
                      <div className="flip-front-content">
                        <div className="mb-4">
                          <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-brand-blue to-brand-orange">
                            <ShieldCheck className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold uppercase tracking-wide text-foreground mb-3">FULL-STAKE ACCOUNTABILITY</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">We take ownership of the &apos;Lost Claim&apos; — denials are challenges, not stopping points.</p>
                      </div>
                    </div>
                    {/* BACK */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-orange via-orange-500 to-amber-500 text-white shadow-xl p-8 flex flex-col justify-center backface-hidden flip-back-x">
                      <div className="flip-back-content">
                        <h3 className="text-xl font-bold mb-4">FULL-STAKE ACCOUNTABILITY</h3>
                        <p className="text-sm leading-relaxed">
                          Unlike our competitors, our staff is trained to see a denial not as a stopping point, but as a challenge. We apply Human Verification at every stage, ensuring no claim is ever abandoned to the Timely Filing clock.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Efficiency Re-Invested in People */}
                <div className="relative h-[280px] sm:h-[320px] perspective-[500px] flip-card-3d flip-x group">
                  <div className="absolute inset-0 transform-style-preserve-3d flip-inner">
                    {/* FRONT */}
                    <div className="absolute inset-0 bg-white rounded-xl border border-gray-200 shadow-md backface-hidden flip-front flex flex-col justify-center p-8">
                      <div className="flip-front-content">
                        <div className="mb-4">
                          <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-brand-blue to-brand-orange">
                            <Users className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold uppercase tracking-wide text-foreground mb-3">EFFICIENCY RE-INVESTED IN PEOPLE</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Advanced technology eliminates noise — recovered time is reinvested into deeper human expertise.</p>
                      </div>
                    </div>
                    {/* BACK */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-blue via-blue-600 to-cyan-500 text-white shadow-xl p-8 flex flex-col justify-center backface-hidden flip-back-x">
                      <div className="flip-back-content">
                        <h3 className="text-xl font-bold mb-4">EFFICIENCY RE-INVESTED IN PEOPLE</h3>
                        <p className="text-sm leading-relaxed">
                          We use advanced technology to eliminate operational noise—but we never reduce staff. Instead, we reinvest that recovered time into deeper human expertise across your AR. This allows us to scale without ever diluting quality for existing providers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Resolution-Driven Follow-Up */}
                <div className="relative h-[280px] sm:h-[320px] perspective-[500px] flip-card-3d flip-x group">
                  <div className="absolute inset-0 transform-style-preserve-3d flip-inner">
                    {/* FRONT */}
                    <div className="absolute inset-0 bg-white rounded-xl shadow-md border-2 border-transparent backface-hidden flip-front flex flex-col justify-center p-8"
                      style={{
                        backgroundImage: "linear-gradient(white, white), linear-gradient(to bottom right, rgb(37, 99, 235), rgb(59, 130, 246), rgb(37, 99, 235))",
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                      }}
                    >
                      <div className="flip-front-content">
                        <div className="mb-4">
                          <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-brand-blue to-brand-orange">
                            <RefreshCw className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold uppercase tracking-wide text-foreground mb-3">RESOLUTION-DRIVEN FOLLOW-UP</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">We optimize for <span className="text-brand-orange font-semibold">Net Collection Rate</span>, not vanity metrics.</p>
                      </div>
                    </div>
                    {/* BACK */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600 via-brand-blue to-cyan-600 text-white shadow-xl p-8 flex flex-col justify-center backface-hidden flip-back-x">
                      <div className="flip-back-content">
                        <h3 className="text-xl font-bold mb-4">RESOLUTION-DRIVEN FOLLOW-UP</h3>
                        <p className="text-sm leading-relaxed">
                          While the industry celebrates &apos;First Pass Rate&apos; as a vanity metric, we optimize for Net Collection Rate. Our experienced human specialists actively challenge payer denials—often knowing payer policy nuances better than the payers themselves.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                </motion.div>

                {/* Fade overlay + Read More button (hidden when expanded) */}
                {!ihsAdvantageExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/95 to-transparent flex items-end justify-center pb-4 pointer-events-none">
                    <button
                      onClick={() => setIhsAdvantageExpanded(true)}
                      className="pointer-events-auto inline-flex items-center gap-2 px-8 py-3 bg-brand-blue text-white rounded-full font-semibold text-sm shadow-lg hover:bg-brand-blue/90 hover:shadow-xl transition-all duration-300"
                    >
                      Read More
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Smooth section transition */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      {/* 7. Revenue Leakage Calculator */}
      <ScrollReveal>
        <section id="calculator" className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/20 relative overflow-hidden">
          {/* Subtle ambient glow */}
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400/4 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
                IHS Revenue Leakage &{" "}
                <span className="bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">
                  Benefit Calculator
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Quantify your revenue leakage, AR cash delay, and cost inefficiency with our CFO-reviewed financial
                diagnostic tool
              </p>
            </div>

            <Card className="shadow-2xl border-2 border-brand-blue/20">
              <CardHeader className="bg-gradient-to-r from-brand-blue/10 via-white to-brand-orange/10 border-b py-4">
                <CardTitle className="text-xl">Enter Your Current Metrics</CardTitle>
                <CardDescription className="text-sm">
                  Input your actual billing and operational numbers to calculate your first-year financial benefit with
                  IHS
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Organization Type */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground flex items-center gap-2">
                      Organization Type
                      <span className="text-xs text-muted-foreground font-normal">(Affects AR days benchmark)</span>
                    </label>
                    <div className="flex gap-3">
                      <Button
                        variant={calcOrgType === "clinic" ? "default" : "outline"}
                        onClick={() => setCalcOrgType("clinic")}
                        className={
                          calcOrgType === "clinic"
                            ? "bg-brand-blue hover:bg-brand-blue/90 text-sm py-2"
                            : "border-2 hover:border-brand-blue text-sm py-2"
                        }
                      >
                        Clinic / Practice
                      </Button>
                      <Button
                        variant={calcOrgType === "hospital" ? "default" : "outline"}
                        onClick={() => setCalcOrgType("hospital")}
                        className={
                          calcOrgType === "hospital"
                            ? "bg-brand-blue hover:bg-brand-blue/90 text-sm py-2"
                            : "border-2 hover:border-brand-blue text-sm py-2"
                        }
                      >
                        Hospital / Health System
                      </Button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {/* AGC - Annual Gross Charges */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground">
                        Annual Gross Charges (AGC)
                        <span className="text-xs text-muted-foreground font-normal block">
                          Total charges billed (12 mo)
                        </span>
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="number"
                          value={calcAGC}
                          onChange={(e) => setCalcAGC(e.target.value)}
                          className="w-full pl-8 pr-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                          min="0"
                          step="10000"
                          placeholder="0"
                        />
                      </div>
                    </div>

                    {/* ANC - Annual Net Collections */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground">
                        Annual Net Collections (ANC)
                        <span className="text-xs text-muted-foreground font-normal block">
                          Total cash received (12 mo)
                        </span>
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="number"
                          value={calcANC}
                          onChange={(e) => {
                            const value = e.target.value
                            const agcNum = Number(calcAGC) || 0
                            const ancNum = Number(value) || 0
                            if (value === "" || (ancNum <= agcNum && agcNum !== 0) || agcNum === 0) {
                              setCalcANC(value)
                            }
                          }}
                          className="w-full pl-8 pr-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                          min="0"
                          step="10000"
                          placeholder="0"
                        />
                      </div>
                      {Number(calcANC) > Number(calcAGC) && calcANC !== "" && calcAGC !== "" && (
                        <p className="text-xs text-red-500">Collections cannot exceed gross charges</p>
                      )}
                    </div>

                    {/* ARD - Average AR Days */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground">
                        Average AR Days (ARD)
                        <span className="text-xs text-muted-foreground font-normal block">Days to collect</span>
                      </label>
                      <input
                        type="number"
                        value={calcARD}
                        onChange={(e) => setCalcARD(e.target.value)}
                        className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                        min="0"
                        step="1"
                        placeholder="0"
                      />
                    </div>

                    {/* CCR - Clean Claim Rate */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground">
                        Clean Claim Rate (CCR) %
                        <span className="text-xs text-muted-foreground font-normal block">First-pass paid claims</span>
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          value={calcCCR}
                          onChange={(e) => {
                            const value = e.target.value
                            const num = Number(value)
                            if (value === "" || (num >= 0 && num <= 100)) {
                              setCalcCCR(value)
                            }
                          }}
                          className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                          min="0"
                          max="100"
                          step="1"
                          placeholder="0"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">%</span>
                      </div>
                    </div>

                    {/* DR - Denial Rate */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground">
                        Denial Rate (DR) %
                        <span className="text-xs text-muted-foreground font-normal block">
                          Claims denied first submit
                        </span>
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          value={calcDR}
                          onChange={(e) => {
                            const value = e.target.value
                            const num = Number(value)
                            if (value === "" || (num >= 0 && num <= 100)) {
                              setCalcDR(value)
                            }
                          }}
                          className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                          min="0"
                          max="100"
                          step="1"
                          placeholder="0"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">%</span>
                      </div>
                    </div>

                    {/* RCM Staff Count */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground">
                        RCM Staff Count
                        <span className="text-xs text-muted-foreground font-normal block">Total billing/AR staff</span>
                      </label>
                      <input
                        type="number"
                        value={calcStaffCount}
                        onChange={(e) => setCalcStaffCount(e.target.value)}
                        className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                        min="1"
                        step="1"
                        placeholder="0"
                      />
                    </div>

                    {/* Cost per Staff - Now spans 2 columns to maintain alignment */}
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-xs font-semibold text-foreground">
                        Average Cost per RCM Staff (Annual)
                        <span className="text-xs text-muted-foreground font-normal block">
                          Salary + benefits + overhead
                        </span>
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="number"
                          value={calcStaffCost}
                          onChange={(e) => setCalcStaffCost(e.target.value)}
                          className="w-full pl-8 pr-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                          min="0"
                          step="1000"
                          placeholder="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="mt-6 pt-6 border-t-2">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-center">Your First-Year Financial Benefit with IHS</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    {/* Revenue Leakage */}
                    <Card className="border-2 border-red-200 bg-red-50/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-red-700 flex items-center gap-2">
                          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <TrendingDown className="w-4 h-4 text-white" />
                          </div>
                          Revenue Leakage
                        </CardTitle>
                        <CardDescription className="text-xs">Money lost to inefficiency</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <p className="text-2xl font-bold text-red-700 transition-all duration-500 ease-out">
                          ${benefit.revenueLeak.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                        </p>
                      </CardContent>
                    </Card>

                    {/* Cost Savings */}
                    <Card className="border-2 border-green-200 bg-green-50/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-green-700 flex items-center gap-2">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-white" />
                          </div>
                          RCM Cost Savings
                        </CardTitle>
                        <CardDescription className="text-xs">Annual expense reduction</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <p className="text-2xl font-bold text-green-700 transition-all duration-500 ease-out">
                          ${benefit.annualCostSavings.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                        </p>
                      </CardContent>
                    </Card>

                    {/* Cash Locked in AR */}
                    <Card className="border-2 border-orange-200 bg-orange-50/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-orange-700 flex items-center gap-2">
                          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                            <Clock className="w-4 h-4 text-white" />
                          </div>
                          Cash Locked in AR
                        </CardTitle>
                        <CardDescription className="text-xs">Working capital delayed</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <p className="text-2xl font-bold text-orange-700 transition-all duration-500 ease-out">
                          ${benefit.cashLockedAR.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                        </p>
                      </CardContent>
                    </Card>

                    {/* Total Benefit */}
                    <Card className="border-2 border-brand-blue bg-gradient-to-br from-brand-blue/10 to-brand-orange/10 hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-brand-blue flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-brand-blue to-brand-orange rounded-full flex items-center justify-center">
                            <DollarSign className="w-4 h-4 text-white" />
                          </div>
                          Total Benefit
                        </CardTitle>
                        <CardDescription className="text-xs font-semibold">First-year benefit</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <p className="text-2xl font-bold bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent transition-all duration-500 ease-out">
                          ${benefit.totalBenefit.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Disclaimer */}
                  <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      <strong>Disclaimer:</strong> This calculator provides estimates based on industry benchmarks and
                      does not constitute financial advice. Actual results vary by organization, payer mix, and specialty.
                      Contact IHS for a customized ROI analysis validated against your actual data.
                    </p>
                  </div>

                  <div className="text-center space-y-2 mt-6">
                    <Button
                      size="lg"
                      onClick={generatePDFReport}
                      disabled={!isCalculatorComplete() || isGeneratingPDF}
                      className={`w-full max-w-md mx-auto px-8 py-6 text-base font-semibold rounded-full transition-all duration-300 ${isCalculatorComplete() && !isGeneratingPDF
                        ? "bg-gradient-to-r from-brand-blue to-brand-orange hover:from-brand-blue/90 hover:to-brand-orange/90 text-white shadow-xl hover:shadow-2xl hover:scale-105"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                    >
                      <span className="flex items-center justify-center gap-3">
                        {isGeneratingPDF ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Preparing your report...
                          </>
                        ) : (
                          <>
                            <Download className="h-5 w-5" />
                            Download Full ROI & Leakage Report (PDF)
                          </>
                        )}
                      </span>
                    </Button>

                    {!isCalculatorComplete() && (
                      <p className="text-xs text-gray-500">Please fill in all required fields to download the report</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollReveal>

      <ServicesCarousel />

      {/* Smooth section transition */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      {/* 15. The Performance Ledger */}
      <ScrollReveal>
        <section className="py-24 relative overflow-hidden">
          {/* Background image */}
          <img src="/bg-geometric-blue.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/93 to-slate-50/95"></div>
          {/* Subtle ambient glow */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-400/4 rounded-full blur-[160px] pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Header with image */}
              <motion.div
                className="max-w-4xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-lg relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/images2/business-visual-data-analysing-technology-by-creative-computer-software.jpg"
                  alt="Advanced business data visualization and analysis technology"
                  className="w-full h-[150px] sm:h-[180px] md:h-[200px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/60 to-transparent flex items-center">
                  <div className="pl-8 text-white">
                    <p className="text-xl font-bold">Performance Analytics</p>
                    <p className="text-sm opacity-80">Benchmarked against industry standards</p>
                  </div>
                </div>
              </motion.div>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance uppercase">
                  The Performance <span className="text-brand-orange">Ledger</span>
                </h2>
                <p className="text-xl font-semibold text-foreground mb-6 max-w-4xl mx-auto">
                  Benchmarked Excellence: The <span className="text-brand-orange">Imperial Standard</span> of RCM Outcomes
                </p>
                <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  We do not merely track performance; we define it. By synchronizing the IHS Intelligence Engine with
                  elite domain expertise, we consistently outpace industry averages to deliver superior financial health
                  and clinical EBITDA for our partners.
                </p>
              </div>

              {/* Collapsible content */}
              <div className="relative">
                <motion.div
                  className="overflow-hidden"
                  initial={false}
                  animate={{ height: ledgerExpanded ? "auto" : 200 }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                >
                  <PerformanceLedgerCarousel />
                </motion.div>

                {/* Fade overlay + Read More button (hidden when expanded) */}
                {!ledgerExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/95 to-transparent flex items-end justify-center pb-4 pointer-events-none">
                    <button
                      onClick={() => setLedgerExpanded(true)}
                      className="pointer-events-auto inline-flex items-center gap-2 px-8 py-3 bg-brand-blue text-white rounded-full font-semibold text-sm shadow-lg hover:bg-brand-blue/90 hover:shadow-xl transition-all duration-300"
                    >
                      Read More
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 8. Why Choose IHS Section */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                The <span className="text-brand-orange">IHS</span> Advantage
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Imperial Healthcare Systems delivers unmatched competitive advantages through our unique operational
                model
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-blue/70 rounded-2xl flex items-center justify-center mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Unprecedented Cost Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Achieve up to 60% operational cost reduction without sacrificing quality. Our global delivery model
                    combines skilled professionals with intelligent automation to deliver exceptional value.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-orange/20 hover:border-brand-orange/40 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-orange/70 rounded-2xl flex items-center justify-center mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">AI-Enhanced Intelligence Layer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Level the playing field against payer denial engines. Our predictive analytics and automated claim
                    accuracy systems catch errors before submission, securing your 99% first-pass clean claim rate.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-orange rounded-2xl flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Decade of US RCM Mastery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Benefit from 10+ years of deep US healthcare expertise. Our specialized teams understand the nuances
                    of payer policies, compliance regulations, and specialty-specific coding requirements.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-12 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10 border-2 border-brand-blue/30">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">The IHS Difference</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      While traditional RCM providers focus on processing claims, we engineer your entire revenue
                      architecture. Our integrated approach synchronizes clinical excellence with financial performance,
                      delivering measurable EBITDA improvements that compound over time.
                    </p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Clean Claim Rate", value: "99%" },
                      { label: "Cost Reduction", value: "Up to 60%" },
                      { label: "US RCM Experience", value: "10+ Years" },
                      { label: "Support Coverage", value: "24/7" },
                    ].map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                        <span className="font-semibold">{stat.label}</span>
                        <span className="text-2xl font-bold text-brand-orange">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Smooth section transition */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      {/* 9. IHS Standards vs Traditional RCM Providers */}
      <ScrollReveal>
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Subtle ambient */}
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-blue-400/3 rounded-full blur-[160px] pointer-events-none"></div>

          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  IHS Standards vs <span className="text-brand-orange">Traditional</span> RCM Providers
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  See how Imperial Healthcare Systems delivers superior value across every critical metric
                </p>
              </div>

              <div className="bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 rounded-2xl p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-brand-blue/20">
                        <th className="p-4 font-bold text-left">Feature</th>
                        <th className="p-4 font-bold text-center text-brand-orange">
                          Imperial <span className="text-black">Healthcare Systems</span>
                        </th>
                        <th className="p-4 font-bold text-center text-muted-foreground">Traditional Providers</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { feature: "Cost Savings", ihs: "Up to 60%", ihsNum: 60, ihsSuffix: "%", ihsPrefix: "Up to ", others: "20-30%" },
                        { feature: "Clean Claim Rate", ihs: "99%", ihsNum: 99, ihsSuffix: "%", ihsPrefix: "", others: "85-90%" },
                        { feature: "Advanced Analytics", ihs: "✓ Included", ihsNum: null, others: "✗ Extra Cost" },
                        { feature: "US RCM Expertise", ihs: "10+ Years", ihsNum: 10, ihsSuffix: "+ Years", ihsPrefix: "", others: "Varies" },
                        { feature: "Real-Time Dashboards", ihs: "✓ Standard", ihsNum: null, others: "✗ Limited" },
                        { feature: "HIPAA Compliance", ihs: "✓ SOC2 Ready", ihsNum: null, others: "✓ Basic" },
                        { feature: "Transparent Pricing", ihs: "✓ Upfront", ihsNum: null, others: "✗ Hidden Fees" },
                        { feature: "Dedicated Support", ihs: "✓ 24/7", ihsNum: null, others: "Business Hours" },
                      ].map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-200 hover:bg-white/50 transition-colors">
                          <td className="p-4 font-medium">{row.feature}</td>
                          <td className="p-4 text-center font-semibold text-brand-blue">
                            {row.ihsNum !== null && row.ihsNum !== undefined ? (
                              <><CountUp end={row.ihsNum} prefix={row.ihsPrefix || ""} suffix={row.ihsSuffix || ""} duration={2000} /></>
                            ) : row.ihs}
                          </td>
                          <td className="p-4 text-center text-muted-foreground">{row.others}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Smooth section transition */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      {/* 13. Industries We Serve */}
      <ScrollReveal>
        <section className="py-24 relative overflow-hidden">
          {/* Background image */}
          <img src="/bg-abstract-blue-wave.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/92 via-blue-50/90 to-orange-50/92"></div>
          {/* Subtle ambient glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-blue-400/4 rounded-full blur-[160px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-orange-400/3 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Section image collage - improved with hover effects */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="rounded-xl overflow-hidden shadow-md h-[140px] sm:h-[180px] group">
                  <img src="/images2/healthcare-provider-consulting-male-patient-reviewing-x-ray-test-results.jpg" alt="Healthcare provider consulting male patient and reviewing x-ray test results" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md h-[140px] sm:h-[180px] group">
                  <img src="/images2/modern-hospital-building-exterior.jpg" alt="Modern hospital building exterior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md h-[140px] sm:h-[180px] group">
                  <img src="/images2/medical-icon_24908-47332.avif" alt="Medical technology and research icon" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </motion.div>

              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  Industries We <span className="text-brand-orange">Serve</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Specialized RCM expertise across diverse healthcare sectors with deep understanding of
                  specialty-specific requirements.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {[
                  { name: "Clinics", icon: "🏥", desc: "Primary care & family medicine" },
                  { name: "Hospitals", icon: "🏛️", desc: "Acute care & multi-specialty" },
                  { name: "ASC", icon: "⚕️", desc: "Ambulatory surgery centers" },
                  { name: "DME", icon: "🦽", desc: "Durable medical equipment" },
                  { name: "Chiropractic", icon: "🦴", desc: "Spine & musculoskeletal" },
                  { name: "Mental Health", icon: "🧠", desc: "Behavioral health services" },
                  { name: "Podiatry", icon: "🦶", desc: "Foot & ankle specialists" },
                  { name: "Urgent Care", icon: "🚑", desc: "Immediate care facilities" },
                  { name: "Multi-Specialty", icon: "🏨", desc: "Comprehensive practices" },
                  { name: "Solo Physicians", icon: "👨‍⚕️", desc: "Independent practitioners" },
                ].map((industry, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                  >
                    <Card
                      className="border-2 border-brand-blue/10 hover:border-brand-blue/30 transition-all duration-300 hover:scale-105 text-center group h-full"
                    >
                      <CardContent className="pt-6">
                        <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                          {industry.icon}
                        </div>
                        <h3 className="font-bold mb-1 text-brand-blue">{industry.name}</h3>
                        <p className="text-xs text-muted-foreground">{industry.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Card className="mt-12 border-2 border-brand-orange/20 bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">Specialty-Specific Expertise</h3>
                  <p className="text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
                    Each healthcare specialty has unique coding requirements, payer policies, and compliance regulations.
                    Our specialized teams understand the nuances of your practice, ensuring accurate claims, faster
                    reimbursements, and optimal revenue outcomes tailored to your specific industry.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Smooth section transition */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      {/* 11. Proven Success Stories */}
      <ScrollReveal>
        <section className="py-24 relative overflow-hidden">
          {/* Background image */}
          <img src="/bg-gradient-mesh.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/93"></div>
          {/* Subtle ambient light */}
          <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-green-400/3 rounded-full blur-[160px] pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Success stories header - dual image layout */}
              <motion.div
                className="mb-12 grid md:grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg relative group">
                  <img
                    src="/images2/roi-return-investment-finance-profit-success.jpg"
                    alt="ROI and financial profit success metrics for healthcare"
                    className="w-full h-[160px] sm:h-[200px] md:h-[220px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
                    <div className="pl-8 md:pl-12 text-white">
                      <p className="text-2xl md:text-3xl font-bold">$<CountUp end={2.1} decimals={1} duration={2200} suffix="M+" /> Revenue Recovered</p>
                      <p className="text-lg opacity-90">Across our partner practices</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg relative group hidden md:block">
                  <img
                    src="/images2/happy-people-confident-portrait-doctors-with-smile-hospital-services-about-us-healthcare-proud-medical-professional-group-nurses-with-support-teamwork-wellness-clinic.jpg"
                    alt="Confident and happy medical professionals team at Imperial Healthcare Systems"
                    className="w-full h-[160px] sm:h-[200px] md:h-[220px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent flex items-end">
                    <div className="p-5 text-white">
                      <p className="text-sm font-semibold">Powered by AI</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  Proven <span className="text-brand-orange">Success Stories</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Real results from real healthcare providers who transformed their operations with Imperial Healthcare
                  Systems.
                </p>
              </div>

              {/* Collapsible content */}
              <div className="relative">
                <motion.div
                  className="overflow-hidden"
                  initial={false}
                  animate={{ height: successStoriesExpanded ? "auto" : 200 }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                >
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Multi-Specialty Clinic Transformation",
                    location: "Phoenix, AZ",
                    challenge: "High denial rates (25%) and AR days exceeding 70 days",
                    solution: "Implemented comprehensive RCM with intelligent denial prevention",
                    results: [
                      "Reduced AR days by 40% (70 → 42 days)",
                      "Improved clean claim rate to 99%",
                      "Decreased denial rate from 25% to 8%",
                      "Increased monthly collections by 35%",
                    ],
                    savings: "$480,000",
                    period: "First Year",
                    pdfUrl: "/case-studies/Case-Study-Multi-Specialty-Clinic-Phoenix-Arizona.pdf", // Added PDF URL
                  },
                  {
                    title: "Hospital System Cost Optimization",
                    location: "Tampa, FL",
                    challenge: "High operational costs with 15 in-house RCM staff",
                    solution: "Transitioned to IHS dedicated staffing model with advanced analytics tools",
                    results: [
                      "Saved 60% in staffing costs",
                      "Maintained 99% clean claim accuracy",
                      "Reduced claim processing time by 45%",
                      "Zero operational disruption during transition",
                    ],
                    savings: "$540,000",
                    period: "Annual Savings",
                    pdfUrl: "/case-studies/Hospital-System-Cost-Optimization-Tampa-FL.pdf", // Added PDF URL
                  },
                  {
                    title: "DME Provider Revenue Recovery",
                    location: "Dallas, TX",
                    challenge: "Cash flow issues with $850K locked in aging AR",
                    solution: "Aggressive AR follow-up with IHS specialized team",
                    results: [
                      "Recovered $680K from aging AR",
                      "Improved cash flow by 45%",
                      "Reduced AR days to industry-leading 28 days",
                      "Ongoing collections increased 30%",
                    ],
                    savings: "$680,000",
                    period: "Recovered",
                    pdfUrl: "/case-studies/DME-Working-Capital-Optimization-Dallas-TX.pdf", // Added PDF URL
                  },
                  {
                    title: "Ambulatory Surgery Center (ASC) Revenue Optimization",
                    location: "San Diego, CA",
                    challenge:
                      "High claim denials and delayed reimbursements due to complex payer rules and limited billing staff",
                    solution: "Specialized ASC RCM team + automated pre-authorization and eligibility verification",
                    results: [
                      "Reduced claim denial rate by 45%",
                      "Faster reimbursements with improved cash flow",
                      "100% real-time eligibility and authorization checks",
                      "Improved surgeon and patient satisfaction",
                    ],
                    savings: "$420,000",
                    period: "Annual Revenue Improvement",
                    pdfUrl: "/case-studies/Ambulatory-Surgery-Center-ASC-Revenue-Optimization-San-Diego-CA.pdf", // Added PDF URL
                  },
                ].map((study, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Card
                      className="border-2 border-brand-blue/20 hover:border-brand-orange/40 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <CardTitle className="text-xl">{study.title}</CardTitle>
                            <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4 text-brand-orange" />
                              <span>{study.location}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-brand-orange">
                              $<CountUp end={parseInt(study.savings.replace(/[$,]/g, "")) / 1000} suffix=",000" duration={2000} />
                            </div>
                            <div className="text-xs text-muted-foreground">{study.period}</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4 flex-1 flex flex-col">
                        <div>
                          <h4 className="font-semibold text-sm text-red-600 mb-1">Challenge:</h4>
                          <p className="text-sm text-muted-foreground">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-brand-blue mb-1">Solution:</h4>
                          <p className="text-sm text-muted-foreground">{study.solution}</p>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm text-green-600 mb-2">Results:</h4>
                          <ul className="space-y-1">
                            {study.results.map((result, ridx) => (
                              <li key={ridx} className="flex items-start gap-2 text-sm">
                                <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4 border-t mt-auto">
                          <Button asChild className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white">
                            <a href={study.pdfUrl} download target="_blank" rel="noopener noreferrer">
                              <Download className="mr-2 h-4 w-4" />
                              Download PDF
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
                </motion.div>

                {/* Fade overlay + Read More button (hidden when expanded) */}
                {!successStoriesExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/95 to-transparent flex items-end justify-center pb-4 pointer-events-none">
                    <button
                      onClick={() => setSuccessStoriesExpanded(true)}
                      className="pointer-events-auto inline-flex items-center gap-2 px-8 py-3 bg-brand-blue text-white rounded-full font-semibold text-sm shadow-lg hover:bg-brand-blue/90 hover:shadow-xl transition-all duration-300"
                    >
                      Read More
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Smooth section transition */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      {/* 14. Technology & Security */}
      <ScrollReveal>
        <section id="footer1" className="py-24 bg-white relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle, #1565c0 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Security banner - full width with overlay */}
              <motion.div
                className="mb-12 rounded-2xl overflow-hidden shadow-xl relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/section-cybersecurity.jpg"
                  alt="Enterprise-grade cybersecurity and data protection at Imperial Healthcare Systems"
                  className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/70 via-[#0a2540]/30 to-transparent flex items-end">
                  <div className="p-6 md:p-8 text-white">
                    <p className="text-xl md:text-2xl font-bold">Enterprise-Grade Security Infrastructure</p>
                    <p className="text-sm opacity-80">HIPAA Compliant | ISO 27001 | 256-bit Encryption</p>
                  </div>
                </div>
              </motion.div>

              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  Technology & <span className="text-brand-orange">Security</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Enterprise-grade infrastructure with uncompromising security standards
                </p>
              </div>

              {/* Collapsible content */}
              <div className="relative">
                <motion.div
                  className="overflow-hidden"
                  initial={false}
                  animate={{ height: techSecurityExpanded ? "auto" : 200 }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                >
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <Card className="border-2 border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300">
                      <CardHeader>
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-blue/80 rounded-lg flex items-center justify-center mb-4">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl">Advanced Capabilities</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {[
                          "Predictive Denial Analytics: Identify at-risk claims before submission",
                          "Automated Claim Accuracy Checker: Real-time validation against payer rules",
                          "Smart Workflow Automation: Reduce manual tasks by 70%",
                          "Revenue Leakage Detection: Our expert team flags missed charges and underpayments",
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-brand-orange/20 hover:border-brand-orange/40 transition-all duration-300">
                      <CardHeader>
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-orange/80 rounded-lg flex items-center justify-center mb-4">
                          <ShieldCheck className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl">Security & Compliance</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {[
                          "HIPAA Compliant Infrastructure",
                          "ISO 27001",
                          "256-bit End-to-End Encryption",
                          "Multi-Factor Authentication (MFA)",
                          "Regular Third-Party Security Audits",
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>

                {/* Fade overlay + Read More button (hidden when expanded) */}
                {!techSecurityExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/95 to-transparent flex items-end justify-center pb-4 pointer-events-none">
                    <button
                      onClick={() => setTechSecurityExpanded(true)}
                      className="pointer-events-auto inline-flex items-center gap-2 px-8 py-3 bg-brand-blue text-white rounded-full font-semibold text-sm shadow-lg hover:bg-brand-blue/90 hover:shadow-xl transition-all duration-300"
                    >
                      Read More
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Smooth section transition */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      {/* THE IMPERIAL TRANSITION FRAMEWORK */}
      <ScrollReveal>
        <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
          {/* Subtle ambient glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-orange-400/4 rounded-full blur-[160px] pointer-events-none"></div>

          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                {/* Transition image - side by side */}
                <motion.div
                  className="max-w-4xl mx-auto mb-10 grid md:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg group">
                    <img
                      src="/images2/private-agents-reading-classified-records-uncover-new-case-clues.jpg"
                      alt="Private agents uncovering case clues by reading classified records"
                      className="w-full h-[150px] sm:h-[180px] md:h-[200px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg group">
                    <img
                      src="/images2/business-intelligence-analyst-use-bi-software-laptop-with-stack-coin-shrewd.jpg"
                      alt="Business intelligence analyst using BI software on laptop with data-driven insights"
                      className="w-full h-[150px] sm:h-[180px] md:h-[200px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase">
                  THE <span className="text-brand-orange">IMPERIAL TRANSITION FRAMEWORK</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  The mass market reacts; we anticipate. The Imperial Transition is a high-velocity deployment designed to
                  dismantle inefficiency and install a sovereign revenue infrastructure within 30 to 60 days.
                </p>
              </div>

              {/* Framework Component */}
              <TransitionFramework />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA banner before pricing */}
      <section className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images2/asian-businesswoman-running-from-virtual-money.jpg"
            alt="Asian businesswoman running from virtual money - escaping revenue loss"
            className="w-full h-full object-cover object-[center_25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/85 via-brand-blue/70 to-brand-orange/50"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Ready to Transform Your Revenue Cycle?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose the plan that fits your practice and start recovering revenue today.
          </motion.p>
        </div>
      </section>

      {/* 10. Flexible Pricing Plans */}
      <ScrollReveal>
        <section className="py-24 relative overflow-hidden">
          {/* Background image */}
          <img src="/bg-purple-gradient.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/94 via-white/93 to-blue-50/94"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  Flexible <span className="text-brand-orange">Pricing</span> Plans
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Choose from dedicated staffing, service-based pricing, or custom solutions tailored to your needs.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    name: "Dedicated RCM Staff",
                    desc: "Full-time or part-time skilled professionals",
                    features: [
                      "Certified RCM specialists",
                      "US healthcare trained",
                      "Direct team oversight",
                      "Flexible hours",
                      "50-60% cost savings vs US staff",
                    ],
                    cta: "Get Staffing Quote",
                    popular: false,
                  },
                  {
                    name: "Service-Based Pricing",
                    desc: "Pay per claim, per encounter, or percentage of collections",
                    features: [
                      "No upfront costs",
                      "Performance-based fees",
                      "Scalable as you grow",
                      "Transparent pricing",
                      "Risk-free trial available",
                    ],
                    cta: "Calculate Your Savings",
                    secondaryCta: "Schedule Consultation", // Add secondary CTA for staffing quote
                    popular: true,
                  },
                  {
                    name: "Custom Solutions",
                    desc: "Tailored packages for your specific needs",
                    features: [
                      "Hybrid staffing + services",
                      "Multi-location support",
                      "Specialized workflows",
                      "Custom integrations",
                      "Dedicated account manager",
                    ],
                    cta: "Schedule Consultation",
                    popular: false,
                  },
                ].map((plan, idx) => (
                  <Card
                    key={idx}
                    className={cn(
                      "relative border-2 hover:scale-105 transition-all duration-300",
                      plan.popular ? "border-brand-orange shadow-2xl" : "border-brand-blue/20 hover:border-brand-blue/40",
                    )}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-orange to-brand-blue text-white px-6 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                      <CardDescription className="text-base">{plan.desc}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {plan.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-brand-orange flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {plan.name === "Service-Based Pricing" ? (
                        <div className="space-y-3">
                          <Button
                            className="w-full bg-gradient-to-r from-brand-orange to-brand-blue hover:opacity-90"
                            onClick={() => {
                              const calculatorSection = document.getElementById("calculator")
                              if (calculatorSection) {
                                calculatorSection.scrollIntoView({ behavior: "smooth", block: "start" })
                              }
                            }}
                          >
                            {plan.cta}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Button
                            className="w-full bg-brand-blue hover:bg-brand-orange"
                            onClick={() => setIsRCMAuditModalOpen(true)}
                          >
                            {plan.secondaryCta}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <Button
                          className={cn(
                            "w-full",
                            plan.popular
                              ? "bg-gradient-to-r from-brand-orange to-brand-blue hover:opacity-90"
                              : "bg-brand-blue hover:bg-brand-orange",
                          )}
                          onClick={() => setIsRCMAuditModalOpen(true)}
                        >
                          {plan.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-12 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10 border-2 border-brand-blue/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">Why We Are Cost-Efficient</h3>
                  <p className="text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
                    By leveraging skilled manpower from cost-effective regions, implementing intelligent automation, and
                    focusing on continuous process improvement, IHS helps reduce operational costs while maintaining
                    superior quality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 12. Results you have never seen before! */}

      {/* Smooth section transition */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      {/* THE IMPERIAL JOURNEY */}
      <ScrollReveal>
        <section className="py-24 relative overflow-hidden">
          {/* Background image */}
          <img src="/bg-mountain-peaks.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/94 to-slate-50/95"></div>
          {/* Subtle background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle, #ff6f00 0.5px, transparent 0.5px)', backgroundSize: '48px 48px' }}></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Header - always visible */}
              <div className="text-center mb-16">
                {/* Journey header image - enhanced */}
                <motion.div
                  className="max-w-4xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-lg relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <img
                    src="/images2/businessman-using-tablet-with-digital-graph-overlay.jpg"
                    alt="Businessman using tablet with digital graph overlay for financial transformation"
                    className="w-full h-[160px] sm:h-[200px] md:h-[240px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/50 to-transparent flex items-center">
                    <div className="pl-8 text-white">
                      <p className="text-2xl font-bold">Your Financial Transformation</p>
                      <p className="text-sm opacity-80">From assessment to sovereign revenue</p>
                    </div>
                  </div>
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase">
                  THE <span className="text-brand-orange">IMPERIAL JOURNEY</span>
                </h2>
                <p className="text-xl md:text-2xl font-semibold text-foreground mb-6 max-w-4xl mx-auto">
                  From Initial Intelligence to Compounded Yield
                </p>
                <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  While competitors provide a &apos;service,&apos; we provide a Journey of Yield. We replace the friction
                  of traditional RCM with a seamless, high-standard progression toward financial sovereignty.
                </p>
              </div>

              {/* Collapsible content */}
              <div className="relative">
                <motion.div
                  className="overflow-hidden"
                  initial={false}
                  animate={{ height: journeyExpanded ? "auto" : 200 }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                >
                  <ImperialJourneyMap />
                </motion.div>

                {/* Fade overlay + Read More button (hidden when expanded) */}
                {!journeyExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/95 to-transparent flex items-end justify-center pb-4 pointer-events-none">
                    <button
                      onClick={() => setJourneyExpanded(true)}
                      className="pointer-events-auto inline-flex items-center gap-2 px-8 py-3 bg-brand-blue text-white rounded-full font-semibold text-sm shadow-lg hover:bg-brand-blue/90 hover:shadow-xl transition-all duration-300"
                    >
                      Read More
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Smooth section transition */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      {/* Doctor Testimonials */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/40 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-4">
                Trusted by Healthcare Professionals
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What Our <span className="bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">Partners</span> Say
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Hear from the physicians, nurses, and staff who trust Imperial Healthcare Systems to power their practice.
              </p>
            </div>
          </ScrollReveal>

          {(() => {
            const testimonials = [
              {
                name: "Dr. Elena Rodriguez, MD, FACC",
                specialty: "Interventional Cardiology",
                location: "Miami, Florida",
                certification: "Board Certified: American Board of Internal Medicine (Cardiovascular Disease)",
                quote:
                  "As a cardiologist, every second counts—not just in the OR, but in how we manage patient data. Since transitioning to Imperial Healthcare Systems, the efficiency of our practice has skyrocketed. Their cutting-edge technology integrates seamlessly with our diagnostic imaging, but what truly sets them apart is the human element. My dedicated account manager is practically an extension of our team; they are always available to troubleshoot or optimize our workflow, ensuring our practice runs flawlessly. IHS doesn't just provide software; they provide peace of mind.",
                gradient: "from-brand-blue to-cyan-500",
                accent: "brand-blue",
              },
              {
                name: "Dr. Marcus Thorne, MD, FAOS",
                specialty: "Orthopedic Surgery",
                location: "Denver, Colorado",
                certification: "Board Certified: American Board of Orthopaedic Surgery",
                quote:
                  "Managing a high-volume orthopedic clinic requires a system that can keep up with a grueling pace. IHS is incredibly quick and responsive, which was the primary reason we made the switch. Their platform handles our complex scheduling and billing with ease, utilizing top-tier tech that I haven't seen elsewhere in the market. Beyond the tech, the support is unmatched. Having a dedicated account manager who understands the specific nuances of a surgical practice has allowed us to focus entirely on patient outcomes rather than administrative bottlenecks.",
                gradient: "from-brand-orange to-amber-500",
                accent: "brand-orange",
              },
              {
                name: "Dr. Sarah Jenkins, MD, FAAP",
                specialty: "Pediatric Medicine",
                location: "Austin, Texas",
                certification: "Board Certified: American Board of Pediatrics",
                quote:
                  "In pediatrics, we need a management system that is as intuitive as it is powerful. Imperial Healthcare Systems has exceeded our expectations on both fronts. Their interface is modern and fast, but it's their commitment to service that impresses me most. Whenever we have a unique request or need a workflow adjustment, our account manager responds almost instantly. It is rare to find a company that balances cutting-edge innovation with such a high level of personal dedication. They have truly helped us manage our practice flawlessly.",
                gradient: "from-teal-500 to-brand-blue",
                accent: "teal-500",
              },
              {
                name: "Dr. Kevin Pham, DPM, FACFAS",
                specialty: "Podiatric Medicine & Surgery",
                location: "Charlotte, North Carolina",
                certification: "Board Certified: American Board of Foot and Ankle Surgery",
                quote:
                  "Running a podiatry practice means navigating complex billing codes and payer-specific rules that most systems simply aren't built for. Imperial Healthcare Systems changed the game for us. Their AI-powered claim scrubbing catches coding inconsistencies we used to miss entirely, and our denial rate has dropped dramatically since onboarding. What really stands out is the level of expertise their team brings—they understand podiatric-specific workflows and have tailored their platform to fit our exact needs. IHS has been instrumental in recovering revenue we didn't even know we were losing.",
                gradient: "from-emerald-500 to-teal-500",
                accent: "emerald-500",
              },
              {
                name: "Maria Gonzalez",
                specialty: "Front Office Manager",
                location: "Phoenix, Arizona",
                certification: "Certified Medical Office Manager (CMOM)",
                quote:
                  "Before Imperial Healthcare Systems, our front desk was drowning in eligibility checks, prior authorizations, and follow-up calls. Now, the bulk of that work is automated, and what used to take our team hours is handled in minutes. The platform is incredibly user-friendly—even our newest staff members picked it up within days. But the real difference-maker is the support. Our dedicated account manager is always just a call away and resolves issues before they ever become problems. IHS has transformed our front office from a bottleneck into a well-oiled machine.",
                gradient: "from-violet-500 to-purple-500",
                accent: "violet-500",
              },
              {
                name: "Jessica Thornton, RN, BSN",
                specialty: "Registered Nurse — Clinical Operations",
                location: "Nashville, Tennessee",
                certification: "Tennessee Board of Nursing",
                quote:
                  "As a nurse coordinating patient care across multiple providers, I need quick, accurate answers when billing or documentation questions come up. Imperial Healthcare Systems has been a revelation. Every time I reach out to our dedicated client account manager, I get a response that is not only fast but incredibly thorough and precise. They understand the clinical side just as well as the administrative side, which is rare. I no longer have to wait days for answers or chase down information—IHS gives me confidence that every detail is handled correctly the first time.",
                gradient: "from-rose-500 to-pink-500",
                accent: "rose-500",
              },
            ]

            return (
              <div className="relative max-w-4xl mx-auto">
                {/* Prev / Next Buttons */}
                <button
                  onClick={() => setTestimonialSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-20 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center hover:bg-slate-50 hover:shadow-xl transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-600" />
                </button>
                <button
                  onClick={() => setTestimonialSlide((prev) => (prev + 1) % testimonials.length)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-20 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center hover:bg-slate-50 hover:shadow-xl transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5 text-slate-600" />
                </button>

                {/* Carousel Container */}
                <div className="overflow-hidden rounded-2xl">
                  <motion.div
                    className="flex"
                    animate={{ x: `-${testimonialSlide * 100}%` }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={testimonial.name} className="w-full flex-shrink-0 px-2">
                        <div className="relative rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                          {/* Top gradient bar */}
                          <div className={`h-1.5 bg-gradient-to-r ${testimonial.gradient}`} />

                          <div className="p-8 md:p-10">
                            {/* Quote icon */}
                            <svg className={`w-12 h-12 text-${testimonial.accent}/20 mb-6`} fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>

                            {/* Quote text */}
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 text-justify">
                              &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            {/* Divider */}
                            <div className={`h-px bg-gradient-to-r ${testimonial.gradient} opacity-20 mb-6`} />

                            {/* Person info */}
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg`}>
                                {testimonial.name.charAt(0)}
                              </div>
                              <div>
                                <h3 className="text-base font-bold text-slate-900">{testimonial.name}</h3>
                                <p className={`text-sm font-semibold text-${testimonial.accent} mt-0.5`}>{testimonial.specialty}</p>
                                <div className="flex items-center gap-1.5 mt-1">
                                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                                  <span className="text-xs text-slate-500">{testimonial.location}</span>
                                </div>
                                <p className="text-xs text-slate-400 mt-1">
                                  {testimonial.certification}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setTestimonialSlide(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        testimonialSlide === index
                          ? "w-8 bg-brand-blue"
                          : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )
          })()}
        </div>
      </section>

      {/* Smooth section transition */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      {/* comprehensive Contact section */}
      <ScrollReveal>
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
          {/* Subtle ambient glow */}
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-blue-400/4 rounded-full blur-[160px] pointer-events-none"></div>

          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Contact header - image with overlay */}
              <motion.div
                className="mb-10 rounded-2xl overflow-hidden shadow-lg relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/images2/businessmen-doctors-shake-hands-medical-building-partnership-pharmaceutical-sales.jpg"
                  alt="Businessmen and doctors shaking hands in front of a medical building - pharmaceutical partnership"
                  className="w-full h-[150px] sm:h-[180px] md:h-[200px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/60 to-brand-orange/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-2xl font-bold">Let&apos;s Partner Together</p>
                    <p className="text-sm opacity-80 mt-1">Transform your revenue cycle today</p>
                  </div>
                </div>
              </motion.div>

              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  Get <span className="text-brand-orange">Started</span> Today
                </h2>
                {/* CHANGE: Replaced static text with animated component */}
                <p className="mt-4 text-lg font-medium bg-gradient-to-r from-[#1E3A8A] to-[#14B8A6] bg-clip-text text-transparent">
                  Ready to transform your healthcare operations?
                </p>

                <p className="mt-2 text-lg text-gray-800">
                  Contact us for a{" "}
                  <span className="text-blue-700 font-semibold">
                    consultation
                  </span>
                </p>
              </div>

              <Card className="border-2 border-brand-blue/30 shadow-2xl">
                <CardContent className="pt-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left info */}
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-brand-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <a href="mailto:info@imperialhealth.in" className="text-brand-blue hover:underline">
                            info@imperialhealthsystems.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <PhoneCall className="w-6 h-6 text-brand-orange" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Phone</h3>
                          <p className="text-muted-foreground">US: +1-(859) 978-8780</p>
                          <p className="text-muted-foreground">India: +91-99537 48055</p>
                        </div>
                      </div>

                      {/* CHANGE */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-brand-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Office Locations</h3>

                          {/* US Location */}
                          <div className="mb-6">
                            <p className="font-medium text-brand-orange mb-1">
                              United States - Imperial Healthcare Systems LLC
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <strong>Registered Office:</strong>
                              <br />
                              212 N. 2nd St. STE 100,
                              <br />
                              Richmond, KY 40475, United States
                            </p>
                          </div>

                          {/* India Location */}
                          <div className="mt-6">
                            <p className="font-medium text-brand-blue mb-1">
                              India - Imperial Healthcare Systems Pvt. Ltd.
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <strong>Administrative Office:</strong>
                              <br />
                              Unit No. 219 2F, ILD Trade Centre,
                              <br />
                              Sector 47, Sohna Road,
                              <br />
                              Gurugram - 122018, Haryana, India
                            </p>

                            <p className="text-sm text-muted-foreground mt-2">
                              <strong>Office:</strong>
                              <br />
                              M15, Ground Floor, Regus,
                              <br />
                              Welldone Tech Park, Badshahpur–Sohna Road Highway,
                              <br />
                              Sector 48, Gurugram – 122018, Haryana, India
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right action buttons */}
                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border-2 border-cyan-200 shadow-lg">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <CheckCircle2 className="h-6 w-6 text-cyan-600" />
                            Advantages of Audit
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            <span className="text-brand-blue font-semibold">Compare your practice performance</span> with
                            industry benchmarks and{" "}
                            <span className="text-brand-orange font-semibold">HBMA Standards</span>, be aware of your
                            statistics and KPI to{" "}
                            <span className="text-cyan-600 font-semibold">boost your practice performance</span>.
                          </p>
                        </div>
                        <Button
                          size="lg"
                          onClick={() => setContactModalOpen(true)}
                          className="
                      w-full
                      rounded-full
                      px-10
                      py-7
                      text-lg
                      font-semibold
                      bg-cyan-500
                      hover:bg-cyan-600
                      text-white
                      shadow-lg
                      hover:shadow-xl
                      transition-all
                    "
                        >
                          Get a Free Audit
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>

                      {/* CHANGE: Fixed mailto link to use proper anchor element */}
                      <Button size="lg" asChild className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white">
                        <a href="mailto:info@imperialhealthsystems.com?subject=Consultation%20Request%20-%20Imperial%20Healthcare%20Systems&body=Hello%20Imperial%20Healthcare%20Systems%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20consultation%20to%20discuss%20how%20your%20RCM%20solutions%20can%20help%20my%20practice.%0A%0APlease%20provide%20available%20times%20for%20a%20consultation.%0A%0AThank%20you%2C">
                          Schedule a Consultation
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                      </Button>

                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full bg-transparent"
                        onClick={() => {
                          const link = document.createElement("a")
                          link.href = "/Imperial-company-profile.pdf" // place PDF in /public
                          link.download = "Imperial-company-profile.pdf"
                          document.body.appendChild(link)
                          link.click()
                          document.body.removeChild(link)
                        }}
                      >
                        Download Company Profile
                        <Download className="ml-2 h-5 w-5" />
                      </Button>

                      <p className="text-xs text-gray-500 leading-relaxed mt-4">
                        By providing Submit, you authorize Imperial Healthcare Systems to collect your info and contact you via email, phone, or SMS. Message frequency may vary, Message data rates may apply, and you can opt-out by replying STOP or texting HELP. You may receive communications such as patient appointment scheduling, confirmations, patient health information, emergency/routine follow-up communications, and other healthcare-related information, but not for marketing or promotional purposes of our services. We also understand and comply with protected health information (PHI) in accordance with HIPAA regulations. See our{" "}
                        <a href="/privacy-policy" className="text-brand-blue underline hover:text-brand-blue/80">Privacy Policy</a>{" "}
                        and{" "}
                        <a href="/terms-of-service" className="text-brand-blue underline hover:text-brand-blue/80">Terms and Conditions</a>{" "}
                        for more details.
                      </p>

                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <SiteFooter />


      <RCMAuditModal isOpen={isRCMAuditModalOpen} onClose={() => setIsRCMAuditModalOpen(false)} />
      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onOpenRCMAudit={() => setIsRCMAuditModalOpen(true)}
      />
    </div>
  )
}
