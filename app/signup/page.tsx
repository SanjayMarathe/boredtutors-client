"use client"

import type React from "react"
import bcryptjs from "bcryptjs"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GraduationCap } from "lucide-react"

// API base URL - replace with your actual API URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"

interface School {
  id: number
  name: string
  district_id: number
}

interface SchoolDistrict {
  id: number
  name: string
  region: string
}

export default function SignUpPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    graduation_year: "",
    school_id: "",
    school_district_id: "",
    account_type: "student",
  })
  const [schools] = useState<School[]>([
    { id: 1, name: "Sunnyvale High School", district_id: 1 },
    { id: 2, name: "Sunnyvale Middle School", district_id: 1 },
    { id: 3, name: "Fremont High School", district_id: 2 },
    { id: 4, name: "Fremont Elementary", district_id: 2 },
    { id: 5, name: "Irvine High School", district_id: 3 },
    { id: 6, name: "Irvine Middle School", district_id: 3 },
  ])
  const [schoolDistricts] = useState<SchoolDistrict[]>([
    { id: 1, name: "Sunnyvale Unified School District", region: "Sunnyvale" },
    { id: 2, name: "Fremont School District", region: "Fremont" },
    { id: 3, name: "Irvine Unified School District", region: "Irvine" },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    // Validation
    if (!acceptTerms) {
      setMessage("Please accept the Terms & Conditions and Privacy Policy")
      setIsLoading(false)
      return
    }

    if (!formData.school_id || !formData.school_district_id) {
      setMessage("Please select both school and school district")
      setIsLoading(false)
      return
    }

    try {
      const hashedPassword = await bcryptjs.hash(formData.password, 10);
      console.log(hashedPassword)

      const response = await fetch(`${API_BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          first_name: formData.first_name,
          last_name: formData.last_name,
          graduation_year: parseInt(formData.graduation_year),
          school_id: parseInt(formData.school_id),
          school_district_id: parseInt(formData.school_district_id),
          account_type: formData.account_type,
        }),
      })

      if (response.ok) {
        setMessage("Account created successfully! You can now sign in.")
        // Redirect to login page after successful signup
        setTimeout(() => {
          router.push("/login")
        }, 2000)
      } else {
        const errorData = await response.json()
        setMessage(errorData.message || "Failed to create account. Please try again.")
      }
    } catch (error) {
      console.error("Signup error:", error)
      setMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <GraduationCap className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-2xl">Create Your Account</CardTitle>
            <CardDescription>Join BoredTutors to find your perfect peer tutor</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first_name">First Name</Label>
                  <Input
                    id="first_name"
                    type="text"
                    required
                    value={formData.first_name}
                    onChange={(e) => handleInputChange("first_name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input
                    id="last_name"
                    type="text"
                    required
                    value={formData.last_name}
                    onChange={(e) => handleInputChange("last_name", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="graduation_year">Graduation Year</Label>
                <Input
                  id="graduation_year"
                  type="number"
                  required
                  placeholder="e.g., 2025"
                  min="2020"
                  max="2030"
                  value={formData.graduation_year}
                  onChange={(e) => handleInputChange("graduation_year", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="school_district_id">School District</Label>
                <select
                  id="school_district_id"
                  required
                  value={formData.school_district_id}
                  onChange={(e) => handleInputChange("school_district_id", e.target.value)}
                  className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                >
                  <option value="">Select a school district</option>
                  {schoolDistricts.map((district) => (
                    <option key={district.id} value={district.id.toString()}>
                      {district.name} - {district.region}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="school_id">School</Label>
                <select
                  id="school_id"
                  required
                  value={formData.school_id}
                  onChange={(e) => handleInputChange("school_id", e.target.value)}
                  className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                >
                  <option value="">Select a school</option>
                  {schools
                    .filter((school) => school.district_id === parseInt(formData.school_district_id))
                    .map((school) => (
                      <option key={school.id} value={school.id.toString()}>
                        {school.name}
                      </option>
                    ))}
                </select>
              </div>

              <div className="space-y-3">
                <Label className="text-base font-semibold">Account Type</Label>
                <RadioGroup
                  value={formData.account_type}
                  onValueChange={(value) => handleInputChange("account_type", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="student" id="student" />
                    <Label htmlFor="student">Student</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tutor" id="tutor" />
                    <Label htmlFor="tutor">Tutor</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
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
                </Label>
              </div>

              {message && (
                <div
                  className={`p-3 rounded-md text-sm ${
                    message.includes("successfully")
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {message}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-[var(--primary)] text-[var(--primary-foreground)]" 
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Sign Up"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline font-medium">
                  Sign In
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
