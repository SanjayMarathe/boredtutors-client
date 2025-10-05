import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Shield, Heart, Target, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto text-center">
            <GraduationCap className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-6">About BoredTutors</h1>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
              We're revolutionizing peer-to-peer learning by connecting students with exceptional peer tutors who
              understand the challenges of modern education.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  At BoredTutors, we believe that the best learning happens when students help students. Our platform
                  connects learners with peer tutors who have recently mastered the same subjects, creating an
                  environment where academic success is both achievable and affordable.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We're not just another tutoring service – we're a community of learners supporting each other's
                  academic journey, one session at a time.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">1,000+</h3>
                    <p className="text-sm text-muted-foreground">Active Students</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">500+</h3>
                    <p className="text-sm text-muted-foreground">Verified Tutors</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">95%</h3>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">4.9/5</h3>
                    <p className="text-sm text-muted-foreground">Average Rating</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Trust & Safety</h3>
                  <p className="text-muted-foreground">
                    Every tutor is carefully vetted and verified to ensure a safe, reliable learning environment for all
                    students.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8 text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Academic Excellence</h3>
                  <p className="text-muted-foreground">
                    We're committed to helping students achieve their academic goals through personalized, effective
                    tutoring.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Community</h3>
                  <p className="text-muted-foreground">
                    We foster a supportive community where students and tutors grow together through shared learning
                    experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Alex Chen",
                  role: "Founder & CEO",
                  description: "Former Stanford student passionate about peer learning and educational technology.",
                },
                {
                  name: "Sarah Johnson",
                  role: "Head of Operations",
                  description: "MIT graduate focused on creating safe and effective learning environments.",
                },
                {
                  name: "Marcus Rodriguez",
                  role: "Head of Community",
                  description: "Harvard alumnus dedicated to building strong student communities.",
                },
              ].map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-semibold text-primary">{member.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
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
