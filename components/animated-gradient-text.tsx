"use client"

import { cn } from "@/lib/utils"

interface AnimatedGradientTextProps {
  text: string
  className?: string
}

export function AnimatedGradientText({ text, className }: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-500 bg-[size:200%] animate-gradient-shift bg-clip-text text-transparent",
        className,
      )}
    >
      {text}
    </span>
  )
}
