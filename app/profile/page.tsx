"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { User, Settings, BookOpen, LogOut, Camera, Plus, X } from "lucide-react"

// Mock user data - in real app, this would come from auth context
const mockUser = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@harvard.edu",
  username: "johndoe",
  school: "Harvard University",
  graduationYear: "2025",
  isTutor: true,
  profilePicture: "/student-profile-asian.jpg",
  tutorSubjects: ["Calculus AB", "Calculus BC", "Statistics"],
  tutorMethod: "Both",
  tutorRate: 25,
}

export default function ProfilePage() {
  const [user, setUser] = useState(mockUser)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [newSubject, setNewSubject] = useState("")

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage("New passwords don't match")
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      setMessage("Password updated successfully!")
      setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" })
      setIsLoading(false)
    }, 1000)
  }

  const handleAddSubject = () => {
    if (newSubject.trim() && !user.tutorSubjects.includes(newSubject.trim())) {
      setUser((prev) => ({
        ...prev,
        tutorSubjects: [...prev.tutorSubjects, newSubject.trim()],
      }))
      setNewSubject("")
    }
  }

  const handleRemoveSubject = (subject: string) => {
    setUser((prev) => ({
      ...prev,
      tutorSubjects: prev.tutorSubjects.filter((s) => s !== subject),
    }))
  }

  const handleSignOut = () => {
    // In real app, this would call auth context logout
    console.log("Signing out...")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Profile Header */}
          <div className="mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <Image
                      src={user.profilePicture || "/placeholder.svg"}
                      alt="Profile picture"
                      width={100}
                      height={100}
                      className="rounded-full object-cover"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute -bottom-2 -right-2 rounded-full p-2 bg-transparent"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold">
                      {user.firstName} {user.lastName}
                    </h1>
                    <p className="text-muted-foreground">@{user.username}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {user.school} • Class of {user.graduationYear}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant={user.isTutor ? "default" : "secondary"}>
                        {user.isTutor ? "Tutor" : "Student"}
                      </Badge>
                      {user.isTutor && <Badge variant="outline">Verified</Badge>}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Tabs */}
          <Tabs defaultValue="settings" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="settings" className="flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </TabsTrigger>
              <TabsTrigger value="courses" className="flex items-center space-x-2" disabled={!user.isTutor}>
                <BookOpen className="h-4 w-4" />
                <span>My Courses</span>
              </TabsTrigger>
              <TabsTrigger value="account" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Account</span>
              </TabsTrigger>
            </TabsList>

            {/* Settings Tab */}
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                  <CardDescription>Update your password to keep your account secure</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePasswordChange} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        required
                        value={passwordData.currentPassword}
                        onChange={(e) => setPasswordData((prev) => ({ ...prev, currentPassword: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        required
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData((prev) => ({ ...prev, newPassword: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        required
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                      />
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
                      className="bg-[var(--primary)] text-[var(--primary-foreground)]"
                      disabled={isLoading}
                    >
                      {isLoading ? "Updating..." : "Change Password"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Courses Tab (Tutors Only) */}
            <TabsContent value="courses">
              {user.isTutor ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Courses I Tutor</CardTitle>
                    <CardDescription>Manage the subjects you offer tutoring for</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Current Subjects */}
                    <div>
                      <h3 className="font-medium mb-3">Current Subjects</h3>
                      <div className="flex flex-wrap gap-2">
                        {user.tutorSubjects.map((subject, index) => (
                          <Badge key={index} variant="secondary" className="flex items-center space-x-2">
                            <span>{subject}</span>
                            <button
                              onClick={() => handleRemoveSubject(subject)}
                              className="ml-1 hover:text-destructive"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Add New Subject */}
                    <div>
                      <h3 className="font-medium mb-3">Add New Subject</h3>
                      <div className="flex space-x-2">
                        <Input
                          placeholder="e.g., Biology, Chemistry, Physics"
                          value={newSubject}
                          onChange={(e) => setNewSubject(e.target.value)}
                          onKeyPress={(e) => e.key === "Enter" && handleAddSubject()}
                        />
                        <Button 
                          className="bg-[var(--primary)] text-[var(--primary-foreground)]"
                          onClick={handleAddSubject} 
                          disabled={!newSubject.trim()}
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    {/* Tutoring Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="method">Tutoring Method</Label>
                        <Input id="method" value={user.tutorMethod} readOnly className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="rate">Hourly Rate</Label>
                        <Input id="rate" value={`$${user.tutorRate}/hr`} readOnly className="mt-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Not a Tutor Yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Become a tutor to help other students and earn money sharing your knowledge.
                    </p>
                    <Button className="bg-[var(--primary)] text-[var(--primary-foreground)]">Become a Tutor</Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Account Tab */}
            <TabsContent value="account">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>Your basic account details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>First Name</Label>
                        <Input value={user.firstName} readOnly className="mt-1" />
                      </div>
                      <div>
                        <Label>Last Name</Label>
                        <Input value={user.lastName} readOnly className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input value={user.email} readOnly className="mt-1" />
                    </div>
                    <div>
                      <Label>Username</Label>
                      <Input value={user.username} readOnly className="mt-1" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>School</Label>
                        <Input value={user.school} readOnly className="mt-1" />
                      </div>
                      <div>
                        <Label>Graduation Year</Label>
                        <Input value={user.graduationYear} readOnly className="mt-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-destructive">Danger Zone</CardTitle>
                    <CardDescription>Actions that affect your account</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="destructive" onClick={handleSignOut} className="flex items-center space-x-2">
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
