"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Plus, X, DollarSign, Clock, Users } from "lucide-react"

// Available subjects for tutoring
const AVAILABLE_SUBJECTS = [
  "Algebra I",
  "Algebra II",
  "Geometry",
  "Trigonometry",
  "Pre-Calculus",
  "Calculus AB",
  "Calculus BC",
  "Statistics",
  "Biology",
  "Chemistry",
  "Physics",
  "Environmental Science",
  "Anatomy & Physiology",
  "English Literature",
  "English Composition",
  "Creative Writing",
  "World History",
  "US History",
  "Government",
  "Psychology",
  "Economics",
  "Spanish",
  "French",
  "German",
  "Computer Science",
  "Art History",
  "Music Theory",
  "Philosophy",
  "Sociology",
  "Anthropology",
]

export default function EnrollTutorPage() {
  const [formData, setFormData] = useState({
    subjects: [] as string[],
    method: "",
    rate: "",
    description: "",
    acceptTerms: false,
  })
  const [customSubject, setCustomSubject] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubjectToggle = (subject: string) => {
    setFormData((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject],
    }))
  }

  const handleAddCustomSubject = () => {
    if (customSubject.trim() && !formData.subjects.includes(customSubject.trim())) {
      setFormData((prev) => ({
        ...prev,
        subjects: [...prev.subjects, customSubject.trim()],
      }))
      setCustomSubject("")
    }
  }

  const handleRemoveSubject = (subject: string) => {
    setFormData((prev) => ({
      ...prev,
      subjects: prev.subjects.filter((s) => s !== subject),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    // Validation
    if (formData.subjects.length === 0) {
      setMessage("Please select at least one subject to tutor")
      setIsLoading(false)
      return
    }

    if (!formData.method) {
      setMessage("Please select a tutoring method")
      setIsLoading(false)
      return
    }

    if (!formData.rate || Number.parseInt(formData.rate) < 0 || Number.parseInt(formData.rate) > 50) {
      setMessage("Please enter a valid rate between $0-$50/hr")
      setIsLoading(false)
      return
    }

    if (!formData.acceptTerms) {
      setMessage("Please accept the Terms & Conditions and Privacy Policy")
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <Card className="w-full max-w-md">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
              <p className="text-muted-foreground mb-6">
                Thank you for applying to become a tutor. Our team will review your application and get back to you
                within 2-3 business days.
              </p>
              <div className="space-y-3">
                <Button 
                  className="w-full bg-[var(--primary)] text-[var(--primary-foreground)]"
                  asChild
                >
                  <Link href="/profile">View Profile</Link>
                </Button>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Become a Tutor</h1>
            <p className="text-muted-foreground">
              Share your knowledge, help fellow students, and earn money doing what you love.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Earn Money</h3>
                <p className="text-xs text-muted-foreground">Set your own rates</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Flexible Schedule</h3>
                <p className="text-xs text-muted-foreground">Tutor when you want</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Help Others</h3>
                <p className="text-xs text-muted-foreground">Make a difference</p>
              </CardContent>
            </Card>
          </div>

          {/* Enrollment Form */}
          <Card>
            <CardHeader>
              <CardTitle>Tutor Application</CardTitle>
              <CardDescription>Fill out the form below to start your journey as a tutor</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Subjects Selection */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold">Subjects I Can Tutor</Label>
                  <p className="text-sm text-muted-foreground">Select all subjects you're comfortable tutoring</p>

                  {/* Selected Subjects */}
                  {formData.subjects.length > 0 && (
                    <div className="space-y-2">
                      <Label className="text-sm">Selected Subjects:</Label>
                      <div className="flex flex-wrap gap-2">
                        {formData.subjects.map((subject, index) => (
                          <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                            <span>{subject}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveSubject(subject)}
                              className="ml-1 hover:text-destructive"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Subject Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-60 overflow-y-auto border rounded-md p-3">
                    {AVAILABLE_SUBJECTS.map((subject) => (
                      <div key={subject} className="flex items-center space-x-2">
                        <Checkbox
                          id={subject}
                          checked={formData.subjects.includes(subject)}
                          onCheckedChange={() => handleSubjectToggle(subject)}
                        />
                        <Label htmlFor={subject} className="text-sm cursor-pointer">
                          {subject}
                        </Label>
                      </div>
                    ))}
                  </div>

                  {/* Custom Subject */}
                  <div className="space-y-2">
                    <Label className="text-sm">Don't see your subject? Add it:</Label>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Enter subject name"
                        value={customSubject}
                        onChange={(e) => setCustomSubject(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleAddCustomSubject()}
                      />
                      <Button 
                        type="button" 
                        className="bg-[var(--primary)] text-[var(--primary-foreground)]"
                        onClick={handleAddCustomSubject} 
                        disabled={!customSubject.trim()}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Tutoring Method */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Tutoring Method</Label>
                  <RadioGroup
                    value={formData.method}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, method: value }))}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Online" id="online" />
                      <Label htmlFor="online">Online Only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Offline" id="offline" />
                      <Label htmlFor="offline">In-Person Only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Both" id="both" />
                      <Label htmlFor="both">Both Online & In-Person</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Hourly Rate */}
                <div className="space-y-2">
                  <Label htmlFor="rate" className="text-base font-semibold">
                    Hourly Rate
                  </Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="rate"
                      type="number"
                      min="0"
                      max="50"
                      placeholder="25"
                      value={formData.rate}
                      onChange={(e) => setFormData((prev) => ({ ...prev, rate: e.target.value }))}
                      className="pl-10"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Enter your desired hourly rate ($0-$50)</p>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base font-semibold">
                    About Me (Optional)
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Tell students about your tutoring experience, teaching style, and what makes you a great tutor..."
                    value={formData.description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                    className="min-h-[100px]"
                  />
                  <p className="text-sm text-muted-foreground">This will appear on your tutor profile</p>
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, acceptTerms: checked as boolean }))}
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I accept the{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    . I understand that my application will be reviewed before activation.
                  </Label>
                </div>

                {message && (
                  <div className="p-3 rounded-md text-sm bg-red-50 text-red-700 border border-red-200">{message}</div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-[var(--primary)] text-[var(--primary-foreground)]" 
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting Application..." : "Enroll as Tutor"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">What happens next?</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>We'll review your application within 2-3 business days</li>
                <li>If approved, you'll receive an email confirmation</li>
                <li>Your tutor profile will be activated and visible to students</li>
                <li>Students can then find and contact you for tutoring sessions</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
