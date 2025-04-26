"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, Plus, Clock, Users, LogOut, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { PomodoroTimer } from "@/components/pomodoro-timer"
import { StudySessionsList } from "@/components/study-sessions-list"
import { ProgressChart } from "@/components/progress-chart"
import { logoutUser } from "@/lib/actions"
import { AnimatedGradientText } from "@/components/animated-gradient-text"

export default function DashboardPage() {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    initials: "JD",
    avatar: "/placeholder.svg?height=32&width=32",
  })

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link className="flex items-center gap-2 font-semibold" href="/dashboard">
          <BookOpen className="h-6 w-6" />
          <span>StudySync</span>
        </Link>
        <nav className="hidden flex-1 md:flex">
          <ul className="flex flex-1 items-center gap-4 sm:gap-6">
            <li>
              <Link className="text-sm font-medium" href="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="text-sm font-medium text-muted-foreground" href="/dashboard/sessions">
                Study Sessions
              </Link>
            </li>
            <li>
              <Link className="text-sm font-medium text-muted-foreground" href="/dashboard/analytics">
                Analytics
              </Link>
            </li>
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => logoutUser()}>
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 md:p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            <AnimatedGradientText text="Dashboard" />
          </h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Study Session
          </Button>
        </div>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sessions">Study Sessions</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="card-hover-effect">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Study Time</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24h 30m</div>
                  <p className="text-xs text-muted-foreground">+2.5% from last week</p>
                </CardContent>
              </Card>
              <Card className="card-hover-effect">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Study Sessions</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+3 from last week</p>
                </CardContent>
              </Card>
              <Card className="card-hover-effect">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pomodoros Completed</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                  <p className="text-xs text-muted-foreground">+8 from last week</p>
                </CardContent>
              </Card>
              <Card className="card-hover-effect">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Collaborators</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">+1 new this week</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="card-hover-effect col-span-4">
                <CardHeader>
                  <CardTitle>Weekly Progress</CardTitle>
                  <CardDescription>Your study time over the past week</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <ProgressChart />
                </CardContent>
              </Card>
              <Card className="card-hover-effect col-span-3">
                <CardHeader>
                  <CardTitle>Pomodoro Timer</CardTitle>
                  <CardDescription>Stay focused with timed work sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <PomodoroTimer />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="card-hover-effect col-span-4">
                <CardHeader>
                  <CardTitle>Recent Study Sessions</CardTitle>
                  <CardDescription>Your most recent study activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <StudySessionsList />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Sessions
                  </Button>
                </CardFooter>
              </Card>
              <Card className="card-hover-effect col-span-3">
                <CardHeader>
                  <CardTitle>Collaborative Sessions</CardTitle>
                  <CardDescription>Study sessions with your friends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 rounded-lg border p-3">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Physics Group Study</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <div className="flex -space-x-2 mr-2">
                            <Avatar className="h-5 w-5 border-2 border-background">
                              <AvatarFallback>A</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-5 w-5 border-2 border-background">
                              <AvatarFallback>B</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-5 w-5 border-2 border-background">
                              <AvatarFallback>C</AvatarFallback>
                            </Avatar>
                          </div>
                          <span>3 participants</span>
                        </div>
                      </div>
                      <Button size="sm">Join</Button>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border p-3">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Math Exam Prep</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <div className="flex -space-x-2 mr-2">
                            <Avatar className="h-5 w-5 border-2 border-background">
                              <AvatarFallback>D</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-5 w-5 border-2 border-background">
                              <AvatarFallback>E</AvatarFallback>
                            </Avatar>
                          </div>
                          <span>2 participants</span>
                        </div>
                      </div>
                      <Button size="sm">Join</Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Collaborative Session
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="sessions" className="space-y-4">
            <Card className="card-hover-effect">
              <CardHeader>
                <CardTitle>All Study Sessions</CardTitle>
                <CardDescription>Manage and view all your study sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <StudySessionsList extended />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card className="card-hover-effect">
              <CardHeader>
                <CardTitle>Study Analytics</CardTitle>
                <CardDescription>Detailed insights into your study habits</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ProgressChart extended />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
