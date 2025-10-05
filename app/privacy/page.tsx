import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul>
                  <li>Create an account or profile</li>
                  <li>Apply to become a tutor</li>
                  <li>Contact other users through our platform</li>
                  <li>Contact us for support</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p>This information may include:</p>
                <ul>
                  <li>Name, email address, and contact information</li>
                  <li>School and graduation year</li>
                  <li>Academic subjects and tutoring preferences</li>
                  <li>Profile photos and descriptions</li>
                  <li>Payment information (processed securely by third parties)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Connect students with appropriate tutors</li>
                  <li>Verify tutor credentials and maintain platform safety</li>
                  <li>Process payments and transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Analyze usage patterns to improve our platform</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>We may share your information in the following circumstances:</p>
                <ul>
                  <li>
                    <strong>With other users:</strong> Your profile information is visible to other users to facilitate
                    tutoring connections
                  </li>
                  <li>
                    <strong>With service providers:</strong> We work with third-party companies to provide services like
                    payment processing and email delivery
                  </li>
                  <li>
                    <strong>For legal reasons:</strong> We may disclose information if required by law or to protect our
                    rights and safety
                  </li>
                  <li>
                    <strong>With your consent:</strong> We may share information for other purposes with your explicit
                    consent
                  </li>
                </ul>
                <p>We do not sell your personal information to third parties.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We take reasonable measures to protect your information from loss, theft, misuse, and unauthorized
                  access. However, no internet transmission is completely secure, and we cannot guarantee absolute
                  security.
                </p>
                <p>Security measures include:</p>
                <ul>
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal information by employees</li>
                  <li>Secure payment processing through certified providers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>You have the following rights regarding your personal information:</p>
                <ul>
                  <li>
                    <strong>Access:</strong> You can request a copy of the personal information we have about you
                  </li>
                  <li>
                    <strong>Correction:</strong> You can update or correct your information through your account
                    settings
                  </li>
                  <li>
                    <strong>Deletion:</strong> You can request that we delete your account and associated information
                  </li>
                  <li>
                    <strong>Portability:</strong> You can request a copy of your data in a portable format
                  </li>
                  <li>
                    <strong>Opt-out:</strong> You can unsubscribe from marketing communications at any time
                  </li>
                </ul>
                <p>To exercise these rights, please contact us at privacy@boredtutors.com.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: privacy@boredtutors.com
                  <br />
                  Address: 123 Education St, Boston, MA 02101
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
