// ...existing code...
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const COURSES = [
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

interface CourseSearchProps {
  placeholder?: string
  className?: string
}

interface CourseItem {
  id: string | number
  name: string
}

export function CourseSearch({ placeholder = "Search for a course...", className = "" }: CourseSearchProps) {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState<CourseItem[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [courses, setCourses] = useState<CourseItem[]>([])
  const router = useRouter()

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"

  const handleInputChange = (value: string) => {
    setQuery(value)

    if (value.length > 0) {
      const source = courses.length > 0 ? courses : COURSES.map((name) => ({ id: name, name }))
      const filtered = source
        .filter((course) => course.name.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 8)
      setSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  useEffect(() => {
    let mounted = true
    const fetchCourses = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/subjects`)
        if (!res.ok) throw new Error(`API error: ${res.status}`)
        const data = await res.json()
        // Expecting array of { id, name } or similar
        const mapped: CourseItem[] = (data || []).map((s: any) => ({
          id: s.id ?? s.subject_id ?? s._id ?? String(Math.random()),
          name: String(s.name ?? s.title ?? s.subject_name ?? s.subject ?? `Subject ${s.id}`),
        }))
        // dedupe by lowercased name
        const unique = Array.from(new Map(mapped.map((c) => [c.name.toLowerCase(), c])).values())
        if (mounted) setCourses(unique)
      } catch (err) {
        console.error("Failed to load subjects:", err)
      }
    }
    fetchCourses()
    return () => {
      mounted = false
    }
  }, [API_BASE_URL])

  const handleSearch = (courseOrId?: string | number) => {
    // if called with an id, push courseId
    if (typeof courseOrId === "number" || (typeof courseOrId === "string" && courses.some(c => String(c.id) === String(courseOrId)))) {
      const id = typeof courseOrId === "number" ? courseOrId : courseOrId
      router.push(`/search?courseId=${encodeURIComponent(String(id))}`)
      return
    }

    const searchTerm = (courseOrId as string) || query
    if (!searchTerm.trim()) return

    // if typed term matches a loaded course name exactly, push its id
    const found = courses.find((c) => c.name.toLowerCase() === searchTerm.trim().toLowerCase())
    if (found) {
      router.push(`/search?courseId=${encodeURIComponent(String(found.id))}`)
    } else {
      // fallback: search by name param
      router.push(`/search?course=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
      setShowSuggestions(false)
    }
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={() => query.length > 0 && setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          className="pl-10 pr-20"
        />
        <Button
          size="sm"
          onClick={() => handleSearch()}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[var(--primary)] text-white"
        >
          Search
        </Button>
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 bg-white text-black border border-black rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto">
          {suggestions.map((course, index) => (
            <button
              key={String(course.id) + "-" + index}
              className="w-full text-left px-4 py-2 hover:bg-muted transition-colors text-sm"
              onClick={() => {
                // if we have a real id, push id; otherwise try to resolve by name
                const isKnownId = courses.some(c => String(c.id) === String(course.id))
                if (isKnownId) {
                  handleSearch(course.id)
                } else {
                  handleSearch(course.name)
                }
                setShowSuggestions(false)
              }}
            >
              {course.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
// ...existing code...