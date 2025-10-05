import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, Users, GraduationCap, MessageCircle, Calendar, Star, Shield, DollarSign } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-6">How BoredTutors Works</h1>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
              Getting help or becoming a tutor is simple. Follow these easy steps to start your learning journey.
            </p>
          </div>
        </section>

        {/* For Students Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">For Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">1. Search & Browse</h3>
                  <p className="text-muted-foreground">
                    Search for tutors by subject or browse all available tutors. View their profiles, ratings, and
                    specialties.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">2. Connect & Schedule</h3>
                  <p className="text-muted-foreground">
                    Contact your chosen tutor directly via email. Discuss your needs and schedule sessions that work for
                    both of you.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">3. Learn & Succeed</h3>
                  <p className="text-muted-foreground">
                    Get personalized help from your peer tutor. Work together to achieve your academic goals and build
                    confidence.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-[var(--primary)] text-[var(--primary-foreground)]"
                asChild
              >
                <Link href="/signup">Get Started as a Student</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* For Tutors Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">For Tutors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">1. Apply & Get Verified</h3>
                  <p className="text-muted-foreground">
                    Fill out our tutor application with your subjects, rates, and experience. We'll review and verify
                    your profile.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">2. Set Your Schedule</h3>
                  <p className="text-muted-foreground">
                    Students will contact you directly. You have full control over your schedule and can accept sessions
                    that work for you.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">3. Teach & Earn</h3>
                  <p className="text-muted-foreground">
                    Help students succeed while earning money at your own rates. Build your reputation and grow your
                    tutoring business.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-[var(--primary)] text-[var(--primary-foreground)]"
                asChild
              >
                <Link href="/enroll-tutor">Become a Tutor</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Safety & Quality Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Safety & Quality Assurance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Verified Tutors</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• All tutors undergo a thorough verification process</li>
                    <li>• Academic credentials and school enrollment verified</li>
                    <li>• Background checks for additional safety</li>
                    <li>• Continuous monitoring of tutor performance</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <Star className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Quality Control</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Student feedback and rating system</li>
                    <li>• Regular quality assessments</li>
                    <li>• Support team available for any issues</li>
                    <li>• Satisfaction guarantee for all sessions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "How much does tutoring cost?",
                  answer:
                    "Tutoring rates vary by tutor and subject, typically ranging from $15-$50 per hour. Each tutor sets their own rates, which are clearly displayed on their profile.",
                },
                {
                  question: "How are tutors verified?",
                  answer:
                    "All tutors must provide proof of enrollment at their school and demonstrate proficiency in their chosen subjects. We also conduct background checks and monitor ongoing performance.",
                },
                {
                  question: "Can I tutor multiple subjects?",
                  answer:
                    "Yes! Tutors can offer help in multiple subjects. Simply select all the subjects you're comfortable tutoring during the application process.",
                },
                {
                  question: "What if I'm not satisfied with a tutoring session?",
                  answer:
                    "We have a satisfaction guarantee. If you're not happy with a session, contact our support team and we'll work to resolve the issue or provide a refund.",
                },
                {
                  question: "How do I schedule sessions?",
                  answer:
                    "Once you find a tutor you'd like to work with, you can contact them directly via email to discuss scheduling and arrange sessions that work for both of you.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
