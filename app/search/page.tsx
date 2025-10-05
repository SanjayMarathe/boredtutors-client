"use client"

import { Suspense, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CourseSearch } from "@/components/course-search"
import { TutorCard } from "@/components/tutor-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

type Tutor = {
  id: string
  name: string
  school: string
  graduationYear: string
  profilePicture: string
  subjects: string[]
  method: string
  rate: number
  description: string
  email: string
  rating: number
  reviewCount: number
  isVerified: boolean
}

function SearchContent() {
  const searchParams = useSearchParams()
  const [course, setCourse] = useState<string>("")
  const [filteredTutors, setFilteredTutors] = useState<Tutor[] | null>(null)
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"

  useEffect(() => {
    const subjectId = searchParams.get("courseId")
    const courseParam = searchParams.get("course")

    let mounted = true
    const fetchCatalogues = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/courseCatalogues/${encodeURIComponent(subjectId ?? "")}`)
        if (!res.ok) {
          throw new Error(`API error: ${res.status}`)
        }
        const data = await res.json()

        // Map API response to the TutorCard expected shape
        const mapped = (data || []).map((item: any) => {
          const user = item.users ?? {}
          const subj = item.subjects ?? {}
          return {
            id: item.id ?? `${Math.random()}`,
            name: `${user.first_name ?? ""} ${user.last_name ?? ""}`.trim() || user.email || "Tutor",
            school: "", // not provided in API
            graduationYear: "",
            profilePicture: "", // not provided
            subjects: [subj.name ?? subj.subject_name ?? courseParam ?? "Subject"],
            method: item.tutoring_method ?? item.method ?? "Unknown",
            rate: Number(item.tutoring_rate ?? 0),
            description: item.description ?? "",
            email: user.email ?? "",
            rating: item.rating ?? 0,
            reviewCount: item.review_count ?? 0,
            isVerified: true,
          }
        })

        if (mounted) {
          setFilteredTutors(mapped.length > 0 ? mapped : [])
          const displayName = mapped[0]?.subjects?.[0] ?? courseParam ?? ""
          setCourse(displayName)
        }
      } catch (err) {
        console.error("Failed to load course catalogues:", err)
        if (mounted) {
          setFilteredTutors(null)
        }
      }
    }

    fetchCatalogues()
    return () => {
      mounted = false
    }
  }, [searchParams, API_BASE_URL])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Search Header */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30 border-b">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
              <CourseSearch placeholder="Search for a different course..." />
            </div>
            {course && (
              <div className="text-center mt-4">
                <h1 className="text-2xl font-bold">
                  Tutors for <span className="text-primary">{course}</span>
                </h1>
                <p className="text-muted-foreground mt-1">
                  Found {filteredTutors?.length ?? 0} tutor{(filteredTutors?.length ?? 0) !== 1 ? "s" : ""} available
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Results */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            {filteredTutors && filteredTutors.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredTutors.map((tutor) => (
                  <TutorCard key={tutor.id} tutor={tutor} showContactInfo />
                ))}
              </div>
            ) : (
              <Card className="max-w-md mx-auto">
                <CardContent className="p-8 text-center">
                  <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No tutors found</h3>
                  <p className="text-muted-foreground mb-4">
                    We couldn't find any tutors for "{course}". Try searching for a different subject or browse all
                    available tutors.
                  </p>
                  <Button
                    className="bg-[var(--primary)] text-[var(--primary-foreground)]"
                    onClick={() => {
                      setCourse("")
                      setFilteredTutors(null)
                    }}
                  >
                    Browse All Tutors
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  )
}
