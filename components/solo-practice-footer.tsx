import Image from "next/image"
import Link from "next/link"

export function SoloPracticeFooter() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 py-8 md:py-10 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">

          {/* ── Logo + tagline + socials ── */}
          <div className="sm:col-span-2 md:col-span-1">
            <Image
              src="/images/imperial-logo-horizontal-removebg-preview.png"
              alt="Imperial Healthcare Systems"
              width={280}
              height={80}
              className="h-14 sm:h-16 md:h-20 w-auto mb-3"
            />
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Built exclusively for independent practices. Not hospital systems.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="https://www.instagram.com/imperial_healthcare_systems" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/images/Instagram_Glyph_Gradient.png" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/imperial-healthcare-systems" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src="/images/LI-In-Bug.png" alt="LinkedIn" className="w-7 h-6" />
              </a>
              <a href="https://x.com/Imperialhealth_" target="_blank" rel="noopener noreferrer" aria-label="X">
                <img src="/images/logo-black.png" alt="X" className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/Imperialhealthsystems/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src="/images/Facebook_Logo_Primary.png" alt="Facebook" className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="font-semibold text-base mb-3 text-brand-orange">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Why IHS", "/solutions"],
                ["Solutions", "/solutions"],
                ["Technology & Security", "#footer1"],
                ["Contact Us", "/#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-brand-blue transition-colors block py-1 min-h-[32px] flex items-center">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h4 className="font-semibold text-base mb-3 text-brand-orange">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Revenue Cycle Management",
                "Healthcare Operations",
                "Advanced Analytics Solutions",
                "Virtual Staffing",
                "Denial Management",
                "AR Follow UP",
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="hover:text-brand-blue transition-colors block py-1 min-h-[32px] flex items-center">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact — USA only ── */}
          <div>
            <h4 className="font-semibold text-base mb-3 text-brand-orange">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-600">

              {/* Email */}
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@imperialhealthsystems.com" className="hover:text-brand-blue break-all">
                  info@imperialhealthsystems.com
                </a>
              </li>

              {/* USA address only */}
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-xs">
                  <p className="font-semibold text-brand-orange mb-1">
                    United States — Imperial Healthcare Systems LLC
                  </p>
                  <p className="leading-relaxed">
                    212 N. 2nd St. STE 100,<br />
                    Richmond, KY 40475,<br />
                    United States
                  </p>
                  <p className="mt-3 text-gray-500 font-medium">
                    Global Delivery Model&nbsp;|&nbsp;HIPAA-Compliant Operations
                  </p>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-gray-300 pt-4 md:pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center md:text-left">
            <p className="text-xs text-gray-600">© 2026 Imperial Healthcare Systems. All Rights Reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-gray-600">
              <Link href="/privacy-policy" className="hover:text-brand-blue py-1 px-2 min-h-[32px] flex items-center">
                Privacy Policy
              </Link>
              <span className="hidden sm:inline">|</span>
              <Link href="/terms-of-service" className="hover:text-brand-blue py-1 px-2 min-h-[32px] flex items-center">
                Terms of Service
              </Link>
              <span className="hidden sm:inline">|</span>
              <Link href="/hipaa-soc2-ready" className="hover:text-brand-blue py-1 px-2 min-h-[32px] flex items-center">
                HIPAA & SOC2 Ready
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default SoloPracticeFooter
