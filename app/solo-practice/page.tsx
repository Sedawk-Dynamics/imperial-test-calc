"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import s from "./solo-practice.module.css"

// ─── Ticker items (duplicated for seamless loop) ───────────────
const TICKER_ITEMS = [
  { bold: "99%",       label: "Clean Claim Rate" },
  { bold: "<30 Days",  label: "to Get Paid" },
  { bold: "<3%",       label: "Claims Denied" },
  { bold: "0%",        label: "Timely Filing Write-offs" },
  { bold: "60%",       label: "Lower Billing Costs" },
  { bold: "Your Own",  label: "Dedicated Billing Specialist" },
  { bold: "24/7",      label: "Support — Not Business Hours" },
  { bold: "You Pay",   label: "Only When We Collect" },
]

// ─── Problem cards ─────────────────────────────────────────────
const PROBLEMS = [
  {
    icon: "⏳",
    title: "Old Unpaid Claims",
    sub: "(AR Over 90 Days)",
    body: "Unpaid claims past 90 days have less than 50% recovery odds. Large billing companies don't fight old claims — too much work for them. Your money quietly expires.",
    stat: "Industry avg: 25–45% of claims over 90 days old",
  },
  {
    icon: "✗",
    title: "Denied Claims Nobody Appeals",
    sub: null,
    body: "Insurance companies auto-deny 15–22% of claims. Without a dedicated person appealing every single one, that money is permanently lost. Most billing services only chase the easy wins.",
    stat: "$262B in claims denied every year in the US",
  },
  {
    icon: "🗓️",
    title: "Visits That Never Got Billed",
    sub: "(Charge Leakage)",
    body: "Up to 12% of your patient visits may never reach a claim. Documentation gaps and intake errors mean you're giving away services every week — without knowing it.",
    stat: "~12% of services never billed",
  },
  {
    icon: "⏰",
    title: "Claims Written Off — No Fight",
    sub: "(Timely Filing)",
    body: "Every insurance payer has a deadline to submit claims. Once it passes, that claim is a 100% loss. Big billing companies quietly write these off to keep their own numbers clean. Your revenue pays for it.",
    stat: "5–8% written off every year",
  },
  {
    icon: "📋",
    title: "Wrong Billing Codes",
    sub: "(CPT Accuracy)",
    body: "Without a specialist auditing your procedure codes, you're almost certainly under-billing on some services and attracting denials on others. Nobody is connecting the dots on your rejection patterns.",
    stat: "Industry billing accuracy: 88% average",
  },
  {
    icon: "📊",
    title: "No Idea Where Your Money Is",
    sub: null,
    body: "Monthly reports just show totals collected. What's missing: which insurance companies are rejecting you, which services aren't paying, and where your next $50K in recoverable money is sitting right now.",
    stat: "Most solo practices have no live billing dashboard",
  },
]

// ─── Comparison table rows ─────────────────────────────────────
const COMPARE_ROWS = [
  { need: "Someone you can actually call",    bad: "Ticket queue",          good: "Named contact" },
  { need: "Denied claims fought back",         bad: "Selective only",        good: "100% appealed" },
  { need: "Old unpaid claims worked",          bad: "Quietly written off",   good: "Actively chased" },
  { need: "Missed charges caught",             bad: "Monthly batch",         good: "Real-time audit" },
  { need: "Expired claim write-offs",          bad: "5–8% accepted",         good: "0% policy" },
  { need: "Specialty billing knowledge",       bad: "Generic team",          good: "Specialty-matched" },
  { need: "Live billing dashboard",            bad: "PDF reports only",      good: "Included, always on" },
  { need: "How you pay",                       bad: "Flat fee + hidden costs",good: "% of collections only" },
]

// ─── Audit checklist ───────────────────────────────────────────
const AUDIT_ITEMS = [
  {
    bold: "Unbilled visits check",
    rest: "— services you delivered that never made it to a claim",
    sub: "(charge leakage)",
  },
  {
    bold: "Old unpaid claims review",
    rest: "— what's still collectible vs. what's expired",
    sub: "(AR aging / AR over 90)",
  },
  {
    bold: "Denial pattern breakdown",
    rest: "— which insurers reject you most and why",
    sub: "(denial trend analysis)",
  },
  {
    bold: "Deadline check on pending claims",
    rest: "— claims about to expire that can still be saved",
    sub: "(timely filing risk)",
  },
  {
    bold: "Billing code performance review",
    rest: "— which services are getting underpaid or rejected",
    sub: "(CPT / procedure analysis)",
  },
  {
    bold: "A dollar number, not a percentage",
    rest: "— exactly how much we think you can recover",
    sub: null,
  },
]

// ─── Steps ────────────────────────────────────────────────────
const STEPS = [
  {
    n: "1",
    title: "Free Billing Audit",
    body: "We look at your claims data — unpaid claims, denials, missed charges, expired deadlines. You get a clear dollar estimate of what's recoverable.",
    time: "15-min call",
  },
  {
    n: "2",
    title: "Your Recovery Plan",
    body: "We tell you exactly what to appeal now, which old claims to chase, and which services need better billing codes. No jargon — just a clear list.",
    time: "Within 48 hours",
  },
  {
    n: "3",
    title: "We Take Over Your Billing",
    body: "Zero disruption. Your dedicated IHS billing specialist connects to your system and starts handling claims within days — not weeks.",
    time: "7–14 days",
  },
  {
    n: "4",
    title: "You Start Getting Paid More",
    body: "Fewer denials. Faster payments. More money collected. All visible in real time on your live billing dashboard — every claim tracked.",
    time: "Day 30 onwards",
  },
]

// ─── Form ─────────────────────────────────────────────────────
type FormState = "idle" | "submitting" | "success" | "error"

interface FormFields {
  firstName: string
  lastName: string
  specialty: string
  phone: string
  email: string
  claimsVolume: string
}

function AuditForm() {
  const [fields, setFields] = useState<FormFields>({
    firstName: "", lastName: "", specialty: "", phone: "", email: "", claimsVolume: "",
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormFields, boolean>>>({})
  const [status, setStatus] = useState<FormState>("idle")

  const set = (k: keyof FormFields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFields(prev => ({ ...prev, [k]: e.target.value }))
    setErrors(prev => ({ ...prev, [k]: false }))
  }

  const handleSubmit = async () => {
    const required: (keyof FormFields)[] = ["firstName", "lastName", "phone", "email"]
    const newErrors: Partial<Record<keyof FormFields, boolean>> = {}
    required.forEach(k => { if (!fields[k].trim()) newErrors[k] = true })
    if (Object.keys(newErrors).length) { setErrors(newErrors); return }

    setStatus("submitting")
    try {
      const res = await fetch("/api/solo-practice-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      setTimeout(() => { window.location.href = "https://www.imperialhealthsystems.com/contact" }, 2200)
    } catch {
      setStatus("error")
    }
  }

  const isSuccess = status === "success"
  const isSubmitting = status === "submitting"

  return (
    <div className={s.fc}>
      <div className={s.ft}>Request Your Free Billing Audit</div>
      <div className={s.fs}>Takes 2 minutes. We call within 1 business day.</div>

      <div className={s.f2}>
        <div className={`${s.fg} ${errors.firstName ? s.fgError : ""}`}>
          <label>First Name</label>
          <input type="text" placeholder="Dr. Sarah" value={fields.firstName} onChange={set("firstName")} />
        </div>
        <div className={`${s.fg} ${errors.lastName ? s.fgError : ""}`}>
          <label>Last Name</label>
          <input type="text" placeholder="Johnson" value={fields.lastName} onChange={set("lastName")} />
        </div>
      </div>

      <div className={s.fg}>
        <label>Practice Specialty</label>
        <select value={fields.specialty} onChange={set("specialty")}>
          <option value="" disabled>Select your specialty</option>
          <option>Family Medicine / Primary Care</option>
          <option>Internal Medicine</option>
          <option>Pediatrics</option>
          <option>Psychiatry / Mental Health</option>
          <option>Chiropractic</option>
          <option>Podiatry</option>
          <option>Physical Therapy</option>
          <option>Urgent Care</option>
          <option>Cardiology</option>
          <option>Orthopedics</option>
          <option>Neurology</option>
          <option>Other</option>
        </select>
      </div>

      <div className={`${s.fg} ${errors.phone ? s.fgError : ""}`}>
        <label>Best Phone Number</label>
        <input type="tel" placeholder="(000) 000-0000" value={fields.phone} onChange={set("phone")} />
      </div>

      <div className={`${s.fg} ${errors.email ? s.fgError : ""}`}>
        <label>Practice Email</label>
        <input type="email" placeholder="you@yourpractice.com" value={fields.email} onChange={set("email")} />
      </div>

      <div className={s.fg}>
        <label>Monthly Claims Volume</label>
        <select value={fields.claimsVolume} onChange={set("claimsVolume")}>
          <option value="" disabled>Approx. claims per month</option>
          <option>Under 100</option>
          <option>100–300</option>
          <option>300–600</option>
          <option>600–1,000</option>
          <option>Over 1,000</option>
        </select>
      </div>

      <button
        className={`${s.fsub} ${isSuccess ? s.fsubSuccess : ""}`}
        onClick={handleSubmit}
        disabled={isSubmitting || isSuccess}
      >
        {isSuccess
          ? "✓ Request Received — We'll call you shortly!"
          : isSubmitting
          ? "Sending…"
          : "Get My Free Billing Audit →"}
      </button>

      {status === "error" && (
        <p style={{ color: "var(--orange)", fontSize: 12, marginTop: 8, textAlign: "center" }}>
          Something went wrong. Please call us directly at +1 (859) 978-8780.
        </p>
      )}

      <div className={s.fdis}>No contracts. No sales pressure. Just your billing numbers, explained in plain English.</div>
      <div className={s.ftrBadges}>
        <span className={s.ftb}>🔒 HIPAA</span>
        <span className={s.ftb}>✓ SOC2 Ready</span>
        <span className={s.ftb}>🔒 256-bit</span>
      </div>
    </div>
  )
}

// ─── Reveal wrappers ───────────────────────────────────────────
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add(s.rIn); obs.unobserve(el) } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={`${s.r} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────
export default function SoloPracticePage() {
  return (
    <div className={s.root}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;1,700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className={s.hero}>
        <div className={s.logoWrap}>
          <Link href="/">
            <Image
              src="/images/imperial-logo-horizontal-removebg-preview.png"
              alt="Imperial Healthcare Systems"
              width={760}
              height={260}
              className={s.heroLogo}
              priority
            />
          </Link>
        </div>
        <div className={s.heroInner}>
          <div>
            {/* Right-place confirmation */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--green-light)", border: "1.5px solid #9FDCC0", borderRadius: 6, padding: "7px 14px", marginBottom: 18, fontSize: 13, fontWeight: 600, color: "var(--green)" }}>
              <span style={{ fontSize: 15 }}>✓</span> If you searched for a medical billing company — you&apos;re in the right place.
            </div>

            <div className={s.eyebrow}>
              <div className={s.eyebrowDot} />
              <span>Medical Billing for Solo &amp; Independent Practices · FL · GA · NJ · TX</span>
            </div>

            <h1 className={s.heroH1}>
              Big Medical<br />
              Billing Companies<br />
              <span className={s.o}>Ignore You.</span><br />
              We Were Built<br />
              <span className={s.b}>For You.</span>
            </h1>

            <p style={{ fontSize: 12, color: "var(--ink-50)", marginBottom: 14, fontStyle: "italic" }}>
              (Also called Revenue Cycle Management — but we skip the jargon.)
            </p>

            <p className={s.heroSub}>
              We handle your billing, fix your denied claims, and recover lost revenue. Our{" "}
              <strong>free 15-minute billing audit</strong> shows exactly where your money is going — and how much you can get back.
            </p>

            <ul className={s.pains}>
              <li><div className={s.xi}>✕</div>Old unpaid claims (AR over 90 days) sitting untouched while deadlines run out</li>
              <li><div className={s.xi}>✕</div>Denied claims stacking up with no one dedicated to appeal them</li>
              <li><div className={s.xi}>✕</div>Visits that never got billed — money that left before it even started</li>
              <li><div className={s.xi}>✕</div>No clear picture of which services are actually getting paid</li>
            </ul>

            <div className={s.ctas}>
              <a className={s.btnP} href="#audit-form">Get My Free Billing Audit →</a>
              <a className={s.btnO} href="#leakage">See Where You&apos;re Losing Money →</a>
            </div>
          </div>

          {/* Diagnostic card */}
          <div className={s.diag}>
            <div className={s.diagLbl}>Typical Solo Practice — Revenue Diagnostic</div>
            <div className={s.dr}><span className={s.dk}>AR Over 90 Days</span><span className={`${s.dv} ${s.vr}`}>34% of total AR</span></div>
            <div className={s.dr}><span className={s.dk}>First-Pass Denial Rate</span><span className={`${s.dv} ${s.vr}`}>18–22%</span></div>
            <div className={s.dr}><span className={s.dk}>Timely Filing Write-offs</span><span className={`${s.dv} ${s.vr}`}>5–8% annually</span></div>
            <div className={s.dr}><span className={s.dk}>Unbilled Charge Leakage</span><span className={`${s.dv} ${s.va}`}>~12% of volume</span></div>
            <div className={s.dr}><span className={s.dk}>Average Days in AR</span><span className={`${s.dv} ${s.va}`}>55–70 days</span></div>
            <div className={s.dr}><span className={s.dk}>Net Collection Rate</span><span className={`${s.dv} ${s.va}`}>88–91%</span></div>
            <div className={s.diagFt}>
              <strong>IHS standard for solo practices:</strong><br />
              &lt;30 days AR &nbsp;·&nbsp; &lt;3% denials &nbsp;·&nbsp; 99%+ net collection
              <div className={s.diagBadge}>🔒 Free audit reveals your exact numbers</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ──────────────────────────────────────────── */}
      <div className={s.tickerWrap}>
        <div className={s.ticker}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className={s.ti}>
              <strong>{item.bold}</strong> {item.label}
              {i < TICKER_ITEMS.length * 2 - 1 && <span className={s.ts} style={{ marginLeft: 25 }}>·</span>}
            </span>
          ))}
        </div>
      </div>

      {/* ── PROBLEMS ────────────────────────────────────────── */}
      <div className={s.sw}>
        <Reveal>
          <div className={s.stag}>The Real Cost of Being Ignored</div>
          <h2 className={s.sh2}>Six Ways Your Billing Is Losing You Money <em>Right Now</em></h2>
          <p className={s.ssub}>Every one of these is something we find in the free billing audit — and fix within 30 days of starting together.</p>
        </Reveal>
        <div className={s.pg}>
          {PROBLEMS.map((p, i) => (
            <Reveal key={i} delay={[0, 0.1, 0.2, 0, 0.1, 0.2][i]}>
              <div className={s.pc}>
                <div className={s.pi}>{p.icon}</div>
                <h3>{p.title} {p.sub && <span style={{ fontSize: 11, color: "var(--ink-50)", fontWeight: 400 }}>{p.sub}</span>}</h3>
                <p>{p.body}</p>
                <span className={s.pstat}>{p.stat}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── LEAKAGE ─────────────────────────────────────────── */}
      <section className={`${s.lbg} ${s.swf}`} id="leakage">
        <div className={s.si}>
          <Reveal>
            <div className={s.stagDark}>Where Your Billing Money Goes Missing</div>
            <h2 className={s.sh2Dark}>How a Solo Practice Loses <em>$80,000–$220,000</em> Per Year Without Realizing It</h2>
            <p className={s.ssubDark}>
              These are billing losses — real dollars — estimated for a practice collecting $600K–$1.2M annually.
              Our free audit maps every category against your actual numbers.{" "}
              <span style={{ fontSize: 11, opacity: 0.6 }}>(This is what Revenue Cycle Management firms call &quot;revenue leakage.&quot;)</span>
            </p>
          </Reveal>
          <Reveal>
            <div className={s.lbox}>
              <div className={s.lhdr}>Annual Billing Losses by Category (Estimated)</div>
              {[
                { label: "Denied claims that nobody appealed", sub: "(denial write-offs)", amount: "$42,000–$85,000", width: "78%", color: "bfOrange" },
                { label: "Claims that expired before submission", sub: "(timely filing)", amount: "$28,000–$60,000", width: "55%", color: "bfOrange" },
                { label: "Patient visits that were never billed", sub: "(charge leakage)", amount: "$18,000–$40,000", width: "38%", color: "bfBlue" },
                { label: "Under-billed procedures", sub: "(CPT under-coding)", amount: "$12,000–$22,000", width: "22%", color: "bfBlue" },
                { label: "Insurance underpayments not challenged", sub: "(underpayment recovery)", amount: "$8,000–$15,000", width: "14%", color: "bfGray" },
              ].map((row, i) => (
                <div key={i} className={s.br}>
                  <div className={s.bm}>
                    <span className={s.bn}>{row.label} <span style={{ opacity: 0.5, fontSize: 11 }}>{row.sub}</span></span>
                    <span className={s.ba}>{row.amount}</span>
                  </div>
                  <div className={s.bt}><div className={`${s.bf} ${s[row.color as keyof typeof s]}`} style={{ width: row.width }} /></div>
                </div>
              ))}
              <div className={s.lco}>
                <span style={{ fontSize: 19, flexShrink: 0, marginTop: 2 }}>💡</span>
                <p>Our free billing audit checks every one of these against your actual claims data. Most practices find <strong>$40,000–$90,000 in money they can still recover</strong> — and we show you exactly how before we&apos;ve signed anything together.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── COMPARE ─────────────────────────────────────────── */}
      <section className={`${s.nbg} ${s.swf}`}>
        <div className={s.si}>
          <Reveal>
            <div className={s.stag}>Why This Keeps Happening</div>
            <h2 className={s.sh2}>Big Billing Companies Are <em>Structurally Built</em> to Ignore Small Practices</h2>
            <p className={s.ssub} style={{ marginTop: 8 }}>
              Whether they call it &quot;RCM&quot; or &quot;revenue cycle management&quot; — the result is the same: your practice gets treated like a low-priority account.
            </p>
          </Reveal>
          <div className={s.cs}>
            <Reveal>
              <table className={s.ct}>
                <thead>
                  <tr>
                    <th>What You Need</th>
                    <th className={s.ctThBad}>Big Billing Companies</th>
                    <th className={s.ctThGood}>Imperial IHS</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row, i) => (
                    <tr key={i}>
                      <td>{row.need}</td>
                      <td className={s.ctTdBad}>{row.bad}</td>
                      <td className={s.ctTdGood}>{row.good}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <Reveal delay={0.1}>
              <div className={s.qc}>
                <div className={s.qm}>&ldquo;</div>
                <blockquote>
                  I was with a national billing company for three years. Every month the same report, same excuses. $180,000 sitting in AR over 120 days and nobody was touching it. I only found out when I switched to IHS and they ran the free audit. That was money I had just accepted as gone.
                </blockquote>
                <div className={s.qcite}>Family Medicine Physician, solo practice — Florida</div>
                <div className={s.qres}>$94,000 recovered in first 90 days with IHS</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── METRICS ─────────────────────────────────────────── */}
      <div className={s.ms}>
        <div className={s.mg}>
          <div className={s.mc}><div className={s.mn}>99<span className={s.u}>%</span></div><div className={s.ml}>Claims Paid First Try</div><div className={s.mv}>vs. 75% industry avg</div></div>
          <div className={s.mc}><div className={s.mn}>&lt;30</div><div className={s.ml}>Days to Get Paid</div><div className={s.mv}>vs. 55–70 day avg</div></div>
          <div className={s.mc}><div className={s.mn}>&lt;3<span className={s.u}>%</span></div><div className={s.ml}>Claims Denied</div><div className={s.mv}>vs. 15–22% industry avg</div></div>
          <div className={s.mc}><div className={s.mn}>0<span className={s.u}>%</span></div><div className={s.ml}>Claims Expired &amp; Written Off</div><div className={s.mv}>Zero abandoned claims</div></div>
        </div>
      </div>

      {/* ── AUDIT FORM ──────────────────────────────────────── */}
      <section className={`${s.abg} ${s.swf}`} id="audit-form">
        <div className={s.si}>
          <div className={s.asp}>
            <div>
              <div className={s.stagDark}>Zero Cost. Zero Obligation.</div>
              <h2 className={s.sh2Dark}>
                Free Medical Billing Audit<br />
                <em>Find Lost Revenue</em><br />
                in 15 Minutes.
              </h2>
              <p className={s.ssubDark} style={{ marginTop: 14 }}>
                We look at your actual billing data and give you a plain-English breakdown of where money is being lost — and a real dollar estimate of what you can recover. No fluff, no jargon.
              </p>
              <ul className={s.ach}>
                {AUDIT_ITEMS.map((item, i) => (
                  <li key={i}>
                    <div className={s.chk}>✓</div>
                    <span>
                      <strong>{item.bold}</strong> {item.rest}{" "}
                      {item.sub && <span style={{ fontSize: 11, opacity: 0.6 }}>{item.sub}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <AuditForm />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────── */}
      <section className={`${s.hbg} ${s.swf}`}>
        <div className={s.si}>
          <Reveal>
            <div style={{ textAlign: "center" }}>
              <div className={s.stag} style={{ margin: "0 auto 14px", display: "table" }}>What Happens Next</div>
              <h2 className={s.sh2} style={{ textAlign: "center", margin: "0 auto 8px" }}>
                From Free Billing Audit to <em>Getting Paid More</em> in 30 Days
              </h2>
            </div>
          </Reveal>
          <div className={s.sg}>
            {STEPS.map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={s.sc}>
                  <div className={s.sn}>{step.n}</div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <span className={s.stm}>{step.time}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ─────────────────────────────────────── */}
      <section className={`${s.tebg} ${s.swf}`}>
        <div className={s.tei}>
          <div className={s.stars}>★★★★★</div>
          <blockquote>
            &ldquo;I had no idea 23% of my AR was over 120 days. The audit took one phone call and they found $67,000 I had mentally written off. Six months later my denial rate is under 4% and I finally know what&apos;s happening in my practice.&rdquo;
          </blockquote>
          <div className={s.tby}>
            <div className={s.av}>KP</div>
            <div>
              <div className={s.byn}>Dr. K. Patel, MD</div>
              <div className={s.byr}>Solo Internal Medicine Practice · New Jersey</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────── */}
      <section className={s.ctabg}>
        <h2>Stop Accepting Lost Claims<br />as the Cost of Doing Business.</h2>
        <p>One 15-minute billing call shows you exactly how much you&apos;re losing and how to get it back. No jargon, no obligation — just your numbers.</p>
        <a className={s.bw} href="#audit-form">Claim Your Free Billing Audit →</a>
        <div className={s.cpn}>Or call directly: <strong>+1 (859) 978-8780</strong></div>
      </section>

      <SiteFooter />
    </div>
  )
}
