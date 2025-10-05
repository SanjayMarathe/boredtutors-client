"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/components/auth-context"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Mail, Shield } from "lucide-react"

interface Tutor {
  id: string
  name: string
  school: string
  graduationYear: string
  profilePicture: string
  subjects: string[]
  method: string
  rate: number
  description: string
  email?: string
  rating: number
  reviewCount: number
  isVerified: boolean
}

interface TutorCardProps {
  tutor: Tutor
  showContactInfo?: boolean
}

export function TutorCard({ tutor, showContactInfo = false }: TutorCardProps) {
  const [showFullDescription, setShowFullDescription] = useState(false)
  const { user } = useAuth()
  const isLoggedIn = !!user

  const truncatedDescription =
    tutor.description.length > 240 ? tutor.description.slice(0, 240) + "..." : tutor.description

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative">
            <Image
              src={tutor.profilePicture || "/placeholder.svg"}
              alt={`${tutor.name}'s profile`}
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
            {tutor.isVerified && (
              <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                <Shield className="h-3 w-3 text-primary-foreground" />
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-lg font-semibold">{tutor.name}</h3>
              {tutor.isVerified && (
                <Badge variant="secondary" className="text-xs">
                  Verified
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              {tutor.school} • Class of {tutor.graduationYear}
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                {tutor.rating} ({tutor.reviewCount} reviews)
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {tutor.method}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">${tutor.rate}</div>
            <div className="text-sm text-muted-foreground">per hour</div>
          </div>
        </div>

        {/* Subjects */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {tutor.subjects.map((subject, index) => (
              <Badge key={index} variant="outline">
                {subject}
              </Badge>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {showFullDescription ? tutor.description : truncatedDescription}
          </p>
          {tutor.description.length > 240 && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-primary text-sm hover:underline mt-1"
            >
              {showFullDescription ? "See Less" : "See More"}
            </button>
          )}
        </div>

        {/* Contact Info */}
        {isLoggedIn && showContactInfo && tutor.email ? (
          <div className="mb-4 p-3 bg-muted/50 rounded-md">
            <div className="flex items-center text-sm">
              <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
              <a href={`mailto:${tutor.email}`} className="text-primary hover:underline">
                {tutor.email}
              </a>
            </div>
          </div>
        ) : (
          !isLoggedIn && (
            <div className="mb-4 p-3 bg-muted/50 rounded-md text-center">
              <p className="text-sm text-muted-foreground">
                <Link href="/login" className="text-primary hover:underline font-medium">
                  Sign In
                </Link>{" "}
                to view contact information
              </p>
            </div>
          )
        )}

        {/* Action Button */}
        {isLoggedIn ? (
          <Button
            className="w-full"
            onClick={() => {
              if (tutor.email) window.location.href = `mailto:${tutor.email}`
            }}
          >
            Contact Tutor
          </Button>
        ) : (
          <Link href="/login" className="w-full block">
            <Button className="w-full">Sign In to Contact</Button>
          </Link>
        )}
      </CardContent>
    </Card>
  )
}
