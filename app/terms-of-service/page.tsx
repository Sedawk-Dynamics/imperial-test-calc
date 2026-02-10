import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">

        <Link href="/">
          <Button variant="ghost" className="mb-8 hover:bg-gray-100">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">

          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Terms and Conditions
          </h1>

          <p className="text-gray-600 mb-8">
            Imperial Healthcare Systems
          </p>

          <p className="text-sm text-gray-500 mb-8">
            <strong>Effective Date:</strong> 6 January 2026
          </p>


          <div className="prose prose-gray max-w-none space-y-8">

            {/* 1 Acceptance */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>

              <p className="text-gray-700 leading-relaxed">
                By accessing or using the website located at{" "}
                <a
                  href="https://www.imperialhealthsystems.com"
                  className="text-brand-blue hover:underline"
                  target="_blank"
                >
                  https://www.imperialhealthsystems.com
                </a>, including any related platforms, systems, or services
                (collectively, the “Services”), you agree to be bound by these
                Terms and Conditions (“Terms”). These Terms constitute a legally
                binding agreement between you and Imperial Healthcare Systems
                (“Imperial,” “Company,” “we,” “us,” or “our”).
              </p>

              <p className="text-gray-700 leading-relaxed mt-3">
                If you do not agree to all of the Terms stated herein, you must
                not access or use the Services.
              </p>
            </section>


            {/* 2 Scope */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Scope of Services
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Imperial Healthcare Systems provides technology-enabled Revenue
                Cycle Management (RCM) and healthcare support services,
                including but not limited to claims submission, denial
                resolution, payment reconciliation, analytics, and operational
                communications. The Services are intended for use by healthcare
                providers (“Clients”) and their authorized professional users.
              </p>
            </section>


            {/* 3 HIPAA */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Role as a Business Associate
              </h2>

              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  When Imperial processes Protected Health Information (“PHI”)
                  on behalf of a healthcare provider, it operates as a Business
                  Associate as defined under HIPAA.
                </li>

                <li>
                  PHI is accessed, used, and disclosed strictly in accordance
                  with the applicable Business Associate Agreement (“BAA”)
                  executed with the Client.
                </li>

                <li>
                  All handling of PHI complies with HIPAA, HITECH, and
                  applicable state privacy regulations.
                </li>
              </ul>
            </section>


            {/* 4 Communications */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Communications, Messaging, and Consent
              </h2>

              <h3 className="font-semibold text-gray-900 mb-2">
                Brand Identification
              </h3>

              <p className="text-gray-700 mb-4">
                By engaging with our Services, you acknowledge that
                communications may be sent on behalf of Imperial Healthcare
                Systems or under the relevant brand, program, or campaign.
              </p>


              <h3 className="font-semibold text-gray-900 mb-2">
                Types of Messages
              </h3>

              <p className="text-gray-700 mb-4">
                You may receive service-related communications including
                appointment scheduling, confirmations, patient health
                information, emergency or routine follow-ups, and other
                healthcare-related notifications. Communications are not sent
                for marketing purposes.
              </p>


              <h3 className="font-semibold text-gray-900 mb-2">
                Message Frequency
              </h3>

              <p className="text-gray-700 mb-4">
                Message frequency may vary based on your interactions,
                preferences, and the nature of services provided.
              </p>


              <h3 className="font-semibold text-gray-900 mb-2">
                Message and Data Rates
              </h3>

              <p className="text-gray-700 mb-4">
                Standard message and data rates may apply for SMS, phone, or
                electronic communications. Please consult your mobile provider.
              </p>


              <h3 className="font-semibold text-gray-900 mb-2">
                Opt-Out Instructions
              </h3>

              <p className="text-gray-700 mb-4">
                You may opt out at any time by replying STOP to any message or
                following unsubscribe instructions.
              </p>


              <h3 className="font-semibold text-gray-900 mb-2">
                Support
              </h3>

              <p className="text-gray-700">
                Contact us at{" "}
                <a
                  href="mailto:info@imperialhealthsystems.com"
                  className="text-brand-blue hover:underline"
                >
                  info@imperialhealthsystems.com
                </a>. Support is available 24/7.
              </p>
            </section>


            {/* 5 Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Personal Information and Privacy
              </h2>

              <p className="text-gray-700">
                Imperial respects your privacy. Personal information is never
                shared, sold, or disclosed to third parties for marketing or
                promotional purposes without explicit consent. Use of the
                Services is subject to our Privacy Policy and HIPAA compliance.
              </p>
            </section>


            {/* 6 IP */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Intellectual Property and Proprietary Rights
              </h2>

              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  All systems, software, AI workflows, and analytics are the
                  exclusive property of Imperial Healthcare Systems.
                </li>

                <li>
                  Users receive a limited, non-exclusive license to use the
                  Services.
                </li>

                <li>
                  Reverse engineering, copying, or modifying systems is strictly
                  prohibited.
                </li>
              </ul>
            </section>


            {/* 7 Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Security and Account Integrity
              </h2>

              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Enterprise-grade security including encryption and audit logs.
                </li>

                <li>
                  Users must maintain credential confidentiality and MFA
                  compliance.
                </li>

                <li>
                  Unauthorized access attempts are strictly prohibited.
                </li>

                <li>
                  Clients must ensure personnel HIPAA and cybersecurity training.
                </li>
              </ul>
            </section>


            {/* 8 Data */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Data Usage
              </h2>

              <p className="text-gray-700">
                Imperial may collect technical and usage data to improve
                performance and security. De-identified data may be used for AI
                enhancement in compliance with HIPAA Safe Harbor standards.
              </p>
            </section>


            {/* 9 Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Limitation of Liability
              </h2>

              <p className="text-gray-700">
                Imperial provides services for operational support purposes only
                and does not guarantee financial outcomes. Benchmarks and
                analytics are based on proprietary models and assumptions.
                Imperial shall not be liable for indirect or consequential
                damages.
              </p>
            </section>


            {/* 10 Termination */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Termination
              </h2>

              <p className="text-gray-700">
                Imperial reserves the right to suspend or terminate access for
                violations of these Terms, applicable agreements, or law.
              </p>
            </section>


            {/* 11 Contact */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Contact Information
              </h2>

              <div className="bg-gray-50 p-5 rounded-lg border">
                <p className="font-semibold">
                  Imperial Healthcare Systems
                </p>

                <p>
                  Attn: Data Privacy & Security Office
                </p>

                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@imperialhealthsystems.com"
                    className="text-brand-blue hover:underline"
                  >
                    info@imperialhealthsystems.com
                  </a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
