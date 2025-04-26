"use client"

import { useState } from "react"
import { formatDistanceToNow } from "date-fns"
import { BookOpen, Clock, MoreVertical, Edit, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample data for study sessions
const SAMPLE_SESSIONS = [
  {
    id: 1,
    title: "Physics - Quantum Mechanics",
    duration: "1h 30m",
    date: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    subject: "Physics",
    completed: true,
  },
  {
    id: 2,
    title: "Calculus - Integration",
    duration: "2h 15m",
    date: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
    subject: "Math",
    completed: true,
  },
  {
    id: 3,
    title: "Literature Review",
    duration: "45m",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    subject: "English",
    completed: true,
  },
  {
    id: 4,
    title: "Chemistry - Organic Compounds",
    duration: "1h 15m",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    subject: "Chemistry",
    completed: true,
  },
  {
    id: 5,
    title: "History - World War II",
    duration: "2h",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
    subject: "History",
    completed: true,
  },
]

export function StudySessionsList({ extended = false }) {
  const [sessions, setSessions] = useState(SAMPLE_SESSIONS)

  const deleteSession = (id) => {
    setSessions(sessions.filter((session) => session.id !== id))
  }

  return (
    <div className="space-y-3">
      {sessions.slice(0, extended ? undefined : 3).map((session) => (
        <div
          key={session.id}
          className="flex items-center justify-between rounded-lg border p-3 transition-all hover:bg-accent/50"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-2">
              <BookOpen className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-medium">{session.title}</h4>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  {session.duration}
                </span>
                <span>•</span>
                <span>{formatDistanceToNow(session.date, { addSuffix: true })}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {extended && <Badge variant="outline">{session.subject}</Badge>}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => deleteSession(session.id)}>
                  <Trash className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
      {sessions.length === 0 && (
        <div className="flex h-32 items-center justify-center rounded-lg border border-dashed">
          <p className="text-sm text-muted-foreground">No study sessions found</p>
        </div>
      )}
    </div>
  )
}
