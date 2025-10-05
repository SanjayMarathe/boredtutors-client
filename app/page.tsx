import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CourseSearch } from "@/components/course-search"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { GraduationCap, Users, Shield, Star, BookOpen, Clock, DollarSign } from "lucide-react"
import background from "../img/background.jpg"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="py-20 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${background.src})`
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="container mx-auto text-center relative z-10">
            <div className="flex justify-center mb-6">
              <GraduationCap className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 text-white">
              Find help from students in your school in <span style={{ color: "#2476d2" }}>seconds.</span>
            </h1>
            <p className="text-xl text-white/90 text-balance mb-8 max-w-2xl mx-auto">
              Connect with vetted student tutors who excel in their subjects. Get personalized help from peers who
              understand your learning journey.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <CourseSearch
                placeholder="Search for a course (e.g., Calculus, Biology, Chemistry)..."
                className="bg-white text-black placeholder-black border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[var(--primary)] text-[var(--primary-foreground)]"
                asChild
              >
                <Link href="/signup" className="bg-white text-black">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-[var(--primary)] text-[var(--primary-foreground)]"
                asChild
              >
                <Link href="/enroll-tutor">Become a Tutor</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose BoredTutors?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Vetted Tutors</h3>
                  <p className="text-muted-foreground">
                    All tutors are carefully screened and verified to ensure quality education and safety.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Peer Learning</h3>
                  <p className="text-muted-foreground">
                    Learn from fellow students who recently mastered the same subjects you're studying.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Affordable Rates</h3>
                  <p className="text-muted-foreground">
                    Get quality tutoring at student-friendly prices, typically much lower than professional tutors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Search & Browse</h3>
                <p className="text-muted-foreground">
                  Search for tutors by subject and browse profiles to find the perfect match for your learning style.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Connect & Schedule</h3>
                <p className="text-muted-foreground">
                  Contact your chosen tutor directly and schedule sessions that work for both of your schedules.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Learn & Succeed</h3>
                <p className="text-muted-foreground">
                  Get personalized help from your peer tutor and achieve your academic goals together.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
