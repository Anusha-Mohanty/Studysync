"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

// This is a mock implementation. In a real app, you would use a database
// and proper authentication like NextAuth.js or Clerk

// Mock user store
const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    password: "password123", // In a real app, this would be hashed
  },
]

// Mock session store
const sessions = {}

export async function registerUser(userData) {
  // In a real app, you would:
  // 1. Validate the input
  // 2. Hash the password
  // 3. Store in database

  // Check if user already exists
  if (users.some((user) => user.email === userData.email)) {
    throw new Error("User already exists")
  }

  // Create new user
  const newUser = {
    id: String(users.length + 1),
    name: userData.name,
    email: userData.email,
    password: userData.password, // Would be hashed in real app
  }

  users.push(newUser)

  // Create session
  const sessionId = Math.random().toString(36).substring(2)
  sessions[sessionId] = newUser.id

  // In a real app, you would set a cookie here

  revalidatePath("/dashboard")
  return { success: true }
}

export async function loginUser(userData) {
  // Find user
  const user = users.find((u) => u.email === userData.email && u.password === userData.password)

  if (!user) {
    throw new Error("Invalid credentials")
  }

  // Create session
  const sessionId = Math.random().toString(36).substring(2)
  sessions[sessionId] = user.id

  // In a real app, you would set a cookie here

  revalidatePath("/dashboard")
  return { success: true }
}

export async function logoutUser() {
  // In a real app, you would clear the session cookie

  redirect("/login")
}

export async function createStudySession(sessionData) {
  // In a real app, you would store this in a database

  revalidatePath("/dashboard")
  return { success: true }
}
