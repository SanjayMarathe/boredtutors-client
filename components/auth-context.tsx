"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// API base URL - reuse same env var convention as other pages
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  username: string
  school: string
  graduationYear: string
  isTutor: boolean
  profilePicture?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  updateUser: (userData: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Normalize backend user object (Supabase style) into our `User` shape
  const normalizeUser = (u: any): User => {
    return {
      id: String(u?.id ?? u?.user?.id ?? ""),
      firstName: u?.user_metadata?.first_name ?? u?.first_name ?? u?.firstName ?? "",
      lastName: u?.user_metadata?.last_name ?? u?.last_name ?? u?.lastName ?? "",
      email: u?.email ?? u?.user?.email ?? "",
      username: u?.username ?? u?.user_metadata?.username ?? "",
      school: String(u?.school ?? u?.user?.school ?? ""),
      graduationYear: String(u?.graduation_year ?? u?.user?.graduation_year ?? u?.graduationYear ?? ""),
      isTutor: (u?.account_type === "tutor") || !!u?.is_tutor || false,
      profilePicture: u?.avatar_url ?? u?.profile_picture ?? undefined,
    }
  }

  useEffect(() => {
    // Check for existing session on mount
    const checkAuth = async () => {
      try {
        // In a real app, you would check for a valid token
        const token = localStorage.getItem("access_token")
        if (token) {
          // Validate token with backend and retrieve user
          const res = await fetch(`${API_BASE_URL}/decodetoken`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })

          if (res.ok) {
            const data = await res.json().catch(() => ({}))
            // backend returns { user }
            if (data?.user) setUser(normalizeUser(data.user))
            else localStorage.removeItem("access_token")
          } else {
            localStorage.removeItem("access_token")
          }
        }
      } catch (error) {
        console.error("Auth check failed:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Call real login endpoint
      const res = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data?.message || "Login failed")

      // Expect access_token and user
      if (data.access_token) {
        try {
          localStorage.setItem("access_token", data.access_token)
          localStorage.setItem("user", JSON.stringify(data.user || {}))
        } catch (err) {
          // ignore storage errors
        }
        setUser(normalizeUser(data.user))
      } else {
        throw new Error("Login did not return access token")
      }
    } catch (error) {
      console.error("Login error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("user")
    setUser(null)
  }

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData })
    }
  }

  return <AuthContext.Provider value={{ user, isLoading, login, logout, updateUser }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
