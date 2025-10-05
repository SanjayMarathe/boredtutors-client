import Link from "next/link"
import { GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact Form */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-primary">BoredTutors</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Connecting students with vetted peer tutors for personalized learning experiences.
            </p>

            {/* Contact Form */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Contact Support</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" />
              </div>
              <Textarea placeholder="How can we help you?" className="min-h-[100px]" />
              <Button size="sm">Send Message</Button>
            </div>
          </div>

          {/* For Students */}
          <div>
            <h3 className="font-semibold mb-4">For Students</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/search" className="text-muted-foreground hover:text-foreground transition-colors">
                  Find Tutors
                </Link>
              </li>
              <li>
                <Link href="/how" className="text-muted-foreground hover:text-foreground transition-colors">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* For Tutors */}
          <div>
            <h3 className="font-semibold mb-4">For Tutors</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/enroll-tutor" className="text-muted-foreground hover:text-foreground transition-colors">
                  Become a Tutor
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 sm:mb-0">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 BoredTutors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
