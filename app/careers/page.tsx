"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Clock, Users, TrendingUp, Target, BarChart3, FileText, Code, Phone, UserCheck } from "lucide-react"
import ContactFormModal from "@/components/contact-form-modal"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function CareersPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState("")

  const jobOpenings = [
    {
      title: "Business Development Executive (BDE)",
      focus: "Top-of-funnel velocity for US Market",
      icon: Target,
      location: "Gurgaon",
      shift: "8:00 PM – 5:00 AM IST (Night Shift)",
      experience: "0–2 years",
      mission:
        "Drive outbound prospecting (Cold Calling, Email, LinkedIn) to secure qualified meetings with US healthcare decision-makers (CXOs, Practice Managers).",
      responsibilities: [
        "Identify ICP-fit leads",
        "Execute high-volume outreach",
        "Qualify opportunities via BANT",
        "Maintain CRM hygiene (HubSpot/Salesforce)",
        "Optimize conversion scripts",
      ],
      requirements: [
        "0–2 years in B2B sales/lead gen",
        "Exceptional English fluency",
        '"Hunter" mindset',
      ],
      kpis: ["Dials/day", "Meetings booked", "MQL-to-SQL conversion"],
    },
    {
      title: "Client Account Manager (US Operations)",
      focus: "Strategic retention and revenue growth",
      icon: UserCheck,
      location: "Richmond, Kentucky (On-site/Hybrid)",
      shift: "US Business Hours",
      experience: "2–6 years",
      mission:
        "Own the end-to-end relationship and P&L for a portfolio of US clients, ensuring high CSAT and identifying upsell/expansion opportunities.",
      responsibilities: [
        "Lead QBRs/MBRs",
        "Monitor operational KPIs (AR aging, Net Collections)",
        "Manage escalations with RCA/CAPA",
        "Oversee client onboarding",
      ],
      requirements: [
        "2–6 years in Client Success/Account Management",
        "RCM/Healthcare experience preferred",
        "Strong executive presence",
      ],
      kpis: ["Gross Revenue Retention (GRR)", "Net Revenue Retention (NRR)", "SLA adherence"],
    },
    {
      title: "Operations Executive (RCM)",
      focus: "Process governance and delivery excellence",
      icon: BarChart3,
      location: "Gurgaon",
      shift: "US Shift",
      experience: "1–4 years",
      mission:
        "Ensure day-to-day execution across the RCM value chain (Eligibility, Coding, AR, Payment Posting) meets client SLAs.",
      responsibilities: [
        "Track daily backlogs",
        "Identify process gaps",
        "Coordinate with QA/Training teams",
        "Ensure 100% HIPAA compliance",
      ],
      requirements: [
        "1–4 years in RCM operations",
        "Proficiency in Excel and data-driven reporting",
      ],
      kpis: ["SLA/TAT compliance", "Quality scores", "Backlog reduction"],
    },
    {
      title: "Medical Coder",
      focus: "Clinical accuracy and compliance",
      icon: FileText,
      location: "Gurgaon",
      shift: "Day Shift",
      experience: "0–3 years",
      mission:
        "Translate clinical documentation into accurate CPT, ICD-10, and HCPCS codes to maximize reimbursement and minimize audits.",
      responsibilities: [
        "Chart review",
        "Modifier application",
        "Provider queries",
        "Stay updated on CMS/Payer guidelines",
      ],
      requirements: [
        "0–3 years in Medical Coding",
        "Deep knowledge of anatomy/terminology",
        "CPC/CCS certification preferred",
      ],
      kpis: ["Coding Accuracy (99.5%+)", "Charts per day", "Coding-related denial rate"],
    },
    {
      title: "Claims Processor / AR Caller / Analyst",
      focus: 'Submission velocity and "Clean Claim" rate',
      icon: Phone,
      location: "Gurgaon",
      shift: "US Shift",
      experience: "0–3 years",
      mission:
        "Execute end-to-end claim submission and clearinghouse error resolution to ensure rapid payer acceptance.",
      responsibilities: [
        "Demographics/Insurance validation",
        "Pre-submission error correction",
        "Working rejections",
        "Coordinating with the AR team",
      ],
      requirements: [
        "0–3 years in US Healthcare RCM",
        "High attention to detail",
      ],
      kpis: ["First-pass Clean Claim Rate", "Submission TAT", "Rejection rate"],
    },
    {
      title: "IT Developer (Healthcare/RCM)",
      focus: "Scaling through automation and proprietary tech",
      icon: Code,
      location: "Gurgaon",
      shift: "Day Shift",
      experience: "1–5 years",
      mission:
        "Build and maintain the technical infrastructure (automations, APIs, and BI dashboards) that gives the firm a competitive edge over legacy RCM players.",
      responsibilities: [
        "Develop workflow automation tools",
        "Integrate EMR/PM systems via APIs",
        "Build real-time performance dashboards",
      ],
      requirements: [
        "1–5 years in Python, Node.js, or .NET",
        "Experience with SQL and Git",
        "Healthcare data (HIPAA) knowledge is a plus",
      ],
      kpis: ["System uptime", "Automation % of manual tasks", "Sprint delivery speed"],
    },
  ]

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle)
    setContactModalOpen(true)
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Join Our <span className="text-brand-orange">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build your career in healthcare technology with Imperial Healthcare Systems. We&apos;re transforming revenue
              cycle management with innovation, integrity, and excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-brand-blue" />
                <span>
                  <strong>500+</strong> Employees
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-brand-orange" />
                <span>
                  <strong>Growing</strong> Company
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-blue" />
                <span>
                  <strong>US & India</strong> Locations
                </span>
              </div>
            </div>
          </div>

          {/* Job Openings */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Current <span className="text-brand-orange">Openings</span>
            </h2>
            <div className="grid gap-6">
              {jobOpenings.map((job, idx) => {
                const IconComponent = job.icon
                return (
                  <Card key={idx} className="border-2 border-brand-blue/20 hover:border-brand-orange/40 transition-all">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-orange flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl mb-1">{job.title}</CardTitle>
                            <p className="text-sm font-semibold text-brand-orange">{job.focus}</p>
                          </div>
                        </div>
                        <Button onClick={() => handleApply(job.title)} className="whitespace-nowrap bg-black text-white hover:bg-black/85">
                          Apply Now
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {job.shift}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          {job.experience}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <div>
                        <h4 className="font-semibold mb-2 text-brand-blue">The Mission</h4>
                        <p className="text-muted-foreground">{job.mission}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Core Responsibilities</h4>
                        <ul className="space-y-1">
                          {job.responsibilities.map((item, ridx) => (
                            <li key={ridx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-brand-orange mt-1">&#x2022;</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Requirements</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((item, ridx) => (
                            <li key={ridx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-brand-blue mt-1">&#x2022;</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">KPIs</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.kpis.map((kpi, kidx) => (
                            <Badge key={kidx} className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 hover:bg-brand-blue/20">
                              {kpi}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Why Join Us */}
          <div className="max-w-6xl mx-auto mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Join <span className="text-brand-orange">IHS</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Growth Opportunities",
                  description: "Continuous learning, skill development, and clear career progression paths.",
                },
                {
                  title: "Work-Life Balance",
                  description: "Flexible schedules, remote work options, and supportive team culture.",
                },
                {
                  title: "Competitive Benefits",
                  description: "Competitive salaries, health insurance, and performance bonuses.",
                },
              ].map((benefit, idx) => (
                <Card key={idx} className="border-2 border-brand-blue/20">
                  <CardHeader>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <ContactFormModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
          defaultMessage={`I am interested in applying for the ${selectedJob} position.`}
        />
      </main>
      <SiteFooter />
    </>
  )
}
