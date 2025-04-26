import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, BarChart3, Users } from "lucide-react"
import { AnimatedGradientText } from "@/components/animated-gradient-text"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6 mr-2" />
          <span className="font-bold">StudySync</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
        <div className="ml-4 flex items-center gap-2">
          <Link href="/login">
            <Button variant="outline" size="sm">
              Log In
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm">Sign Up</Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Study Smarter, <AnimatedGradientText text="Together" />
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    StudySync helps you organize your study sessions, track your progress, and collaborate with friends
                    in real-time.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button className="px-8">Get Started</Button>
                  </Link>
                  <Link href="#features">
                    <Button variant="outline" className="px-8">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full rounded-lg bg-gradient-to-br from-purple-950/50 to-indigo-950/50 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold">Physics Study Session</h3>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="text-xs text-gray-500">2 online</span>
                        </div>
                      </div>
                      <div className="flex-1 border rounded-md p-3 mb-4 text-sm bg-gray-50 dark:bg-gray-800">
                        <p className="mb-2">- Review Chapter 5: Kinematics</p>
                        <p className="mb-2">- Solve problem set #3</p>
                        <p>- Prepare for quiz on Friday</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-2xl font-mono">25:00</div>
                        <Button size="sm" variant="outline">
                          Start Timer
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Everything you need to maximize your study efficiency
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-purple-900/50 p-3 backdrop-blur-sm">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold">Real-time Collaboration</h3>
                <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                  Study with friends in real-time, share notes, and keep each other accountable.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-red-900/50 p-3 backdrop-blur-sm">
                  <Clock className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-lg font-semibold">Pomodoro Timer</h3>
                <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                  Stay focused with customizable work and break intervals.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-900/50 p-3 backdrop-blur-sm">
                  <BarChart3 className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold">Progress Analytics</h3>
                <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                  Track your study habits and visualize your progress over time.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-blue-900/50 p-3 backdrop-blur-sm">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold">Study Plans</h3>
                <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                  Create and share structured study plans for better organization.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 StudySync. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
