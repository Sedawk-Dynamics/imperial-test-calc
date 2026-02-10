import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <p className="text-gray-600 mb-8">
            Imperial Healthcare Systems
          </p>

          <p className="text-sm text-gray-500 mb-8">
            <strong>Effective Date:</strong> 6 January 2026 |{" "}
            <strong>Last Updated:</strong> 6 January 2026
          </p>


          <div className="prose prose-gray max-w-none space-y-8">


            {/* 1 Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Introduction and Scope
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Imperial Healthcare Systems (“Imperial,” “Company,” “we,” “us,” or “our”)
                values the privacy of its visitors, clients, and users. This Privacy Policy
                explains how we collect, use, disclose, and protect information when you
                access or use our websites, platforms, systems, and services, including{" "}
                <a
                  href="https://www.imperialhealthsystems.com"
                  target="_blank"
                  className="text-brand-blue hover:underline"
                >
                  www.imperialhealthsystems.com
                </a>{" "}
                and related domains.
              </p>

              <p className="text-gray-700 leading-relaxed mt-3">
                This Privacy Policy applies only to online activities and information collected
                through our websites and services. It does not apply to information collected
                offline or through channels other than this website.
              </p>

              <p className="text-gray-700 leading-relaxed mt-3">
                This Policy is designed to comply with HIPAA, HITECH, and other applicable
                federal and state privacy and data protection regulations.
              </p>

            </section>


            {/* 2 Business Associate */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Our Role as a Business Associate
              </h2>

              <p className="text-gray-700 mb-3">
                When providing services to healthcare providers (“Clients” or “Covered Entities”),
                Imperial Healthcare Systems operates as a Business Associate under HIPAA.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700">

                <li>
                  PHI is accessed, used, and disclosed strictly in accordance with executed
                  Business Associate Agreements (BAAs).
                </li>

                <li>
                  Administrative, physical, and technical safeguards protect the confidentiality,
                  integrity, and availability of ePHI.
                </li>

                <li>
                  Access is limited to the minimum necessary information required to perform services.
                </li>

              </ul>

            </section>


            {/* 3 Information We Collect */}
            <section>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold mb-2">
                a. Professional and Client Information
              </h3>

              <p className="text-gray-700 mb-4">
                Names, job titles, practice names, NPI numbers, business emails,
                and phone numbers submitted during onboarding or inquiries.
              </p>


              <h3 className="text-xl font-semibold mb-2">
                b. Protected Health Information (PHI)
              </h3>

              <p className="text-gray-700 mb-4">
                PHI is processed solely on behalf of Clients for Revenue Cycle Management,
                including patient demographics, insurance information, billing data, and payment records.
              </p>


              <h3 className="text-xl font-semibold mb-2">
                c. Technical and Usage Data
              </h3>

              <p className="text-gray-700">
                Includes IP address, browser type, device identifiers, cookies,
                and analytics to improve system performance and security.
              </p>

            </section>


            {/* 4 Use of Information */}
            <section>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Use of Information
              </h2>

              <ul className="list-disc pl-6 space-y-2 text-gray-700">

                <li>
                  Performing RCM services including claims submission, denial management,
                  and reconciliation.
                </li>

                <li>
                  Providing analytics, reporting, and operational insights.
                </li>

                <li>
                  Maintaining legal, contractual, and regulatory compliance.
                </li>

                <li>
                  Improving systems using de-identified data under HIPAA Safe Harbor standards.
                </li>

              </ul>

            </section>


            {/* 5 Communications */}
            <section>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Communications, Messaging, and Opt-Out
              </h2>

              <h3 className="font-semibold">Types of Messages</h3>

              <p className="text-gray-700 mb-3">
                You may receive healthcare-related operational communications including
                appointment scheduling, confirmations, and service notifications.
              </p>

              <h3 className="font-semibold">Message Frequency</h3>

              <p className="text-gray-700 mb-3">
                Message frequency may vary depending on service interactions.
              </p>

              <h3 className="font-semibold">Opt-Out Instructions</h3>

              <p className="text-gray-700 mb-3">
                You may opt out at any time by replying STOP or using unsubscribe options.
              </p>

              <h3 className="font-semibold">Message and Data Rates</h3>

              <p className="text-gray-700">
                Standard messaging rates may apply based on your mobile provider.
              </p>

            </section>


            {/* 6 Security */}
            <section>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Data Security and Safeguards
              </h2>

              <ul className="list-disc pl-6 space-y-2 text-gray-700">

                <li>AES-256 encryption at rest and TLS 1.3 encryption in transit</li>

                <li>Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA)</li>

                <li>Continuous audit logging and system monitoring</li>

                <li>Mandatory HIPAA and cybersecurity workforce training</li>

              </ul>

            </section>


            {/* 7 Data Sharing */}
            <section>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Data Sharing and Disclosure
              </h2>

              <p className="text-gray-700 mb-3">
                Imperial Healthcare Systems does not sell or share personal or health information
                for marketing purposes.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700">

                <li>Authorized payers and clearinghouses for claims processing</li>

                <li>Approved sub-processors with executed BAA agreements</li>

                <li>When required by law or regulatory authority</li>

              </ul>

            </section>


            {/* 8 Individual Rights */}
            <section>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Individual Rights
              </h2>

              <p className="text-gray-700">
                Individuals may have rights to access or amend their information.
                Requests should be directed to the applicable healthcare provider,
                which is responsible for responding to HIPAA rights requests.
              </p>

            </section>


            {/* 9 Third Party */}
            <section>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Third-Party Privacy Policies
              </h2>

              <p className="text-gray-700">
                This Privacy Policy does not apply to third-party websites.
                Please review their privacy policies separately.
              </p>

            </section>


            {/* 10 Contact */}
            <section>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Contact Us – Privacy & Support
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

                <p className="mt-2 text-gray-600">
                  24/7 Support Available
                </p>

              </div>

            </section>


          </div>
        </div>
      </div>
    </div>
  )
}
