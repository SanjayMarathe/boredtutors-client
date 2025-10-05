import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  By accessing and using BoredTutors ("the Service"), you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to abide by the above, please do not use this
                  service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Description of Service</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  BoredTutors is a platform that connects students with peer tutors. We provide a marketplace where:
                </p>
                <ul>
                  <li>Students can find and connect with qualified peer tutors</li>
                  <li>Tutors can offer their services and connect with students</li>
                  <li>Users can communicate and arrange tutoring sessions</li>
                </ul>
                <p>
                  BoredTutors acts as an intermediary platform and is not directly involved in the actual tutoring
                  sessions or transactions between users.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Accounts and Registration</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>To use our Service, you must:</p>
                <ul>
                  <li>Be at least 13 years old (or have parental consent)</li>
                  <li>Provide accurate and complete registration information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
                <p>
                  You are responsible for all activities that occur under your account. We reserve the right to suspend
                  or terminate accounts that violate these terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tutor Verification and Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Tutors on our platform must:</p>
                <ul>
                  <li>Provide accurate information about their qualifications and experience</li>
                  <li>Maintain appropriate conduct during all interactions</li>
                  <li>Deliver tutoring services as described in their profiles</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
                <p>
                  We verify tutor credentials but do not guarantee the quality of tutoring services. Students should use
                  their judgment when selecting tutors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Student Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Students using our platform must:</p>
                <ul>
                  <li>Treat tutors with respect and professionalism</li>
                  <li>Provide accurate information about their tutoring needs</li>
                  <li>Honor scheduled appointments or provide reasonable notice of cancellation</li>
                  <li>Pay agreed-upon fees in a timely manner</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prohibited Uses</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>You may not use our Service to:</p>
                <ul>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Share inappropriate or offensive content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use the platform for any commercial purpose other than tutoring</li>
                  <li>Create fake accounts or misrepresent your identity</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment and Fees</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Tutoring fees are set by individual tutors and paid directly between students and tutors. BoredTutors
                  may charge platform fees for certain services, which will be clearly disclosed.
                </p>
                <p>
                  We are not responsible for payment disputes between users, but we will assist in resolving conflicts
                  when possible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>BoredTutors provides the platform "as is" without warranties of any kind. We are not liable for:</p>
                <ul>
                  <li>The quality or outcome of tutoring sessions</li>
                  <li>Disputes between users</li>
                  <li>Any damages resulting from use of our platform</li>
                  <li>Loss of data or service interruptions</li>
                </ul>
                <p>Our liability is limited to the maximum extent permitted by law.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of significant changes
                  via email or platform notifications. Continued use of the Service after changes constitutes acceptance
                  of the new terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  If you have questions about these Terms of Service, please contact us at:
                  <br />
                  Email: legal@boredtutors.com
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
