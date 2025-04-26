"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

// Sample data for the chart
const data = [
  {
    name: "Mon",
    "Study Time": 2.5,
    "Break Time": 0.5,
  },
  {
    name: "Tue",
    "Study Time": 3.2,
    "Break Time": 0.7,
  },
  {
    name: "Wed",
    "Study Time": 1.8,
    "Break Time": 0.4,
  },
  {
    name: "Thu",
    "Study Time": 4.0,
    "Break Time": 0.8,
  },
  {
    name: "Fri",
    "Study Time": 3.5,
    "Break Time": 0.7,
  },
  {
    name: "Sat",
    "Study Time": 5.2,
    "Break Time": 1.1,
  },
  {
    name: "Sun",
    "Study Time": 2.8,
    "Break Time": 0.6,
  },
]

// Extended data for the detailed analytics view
const extendedData = [
  ...data,
  {
    name: "Subject",
    Math: 5.5,
    Physics: 4.2,
    Chemistry: 3.8,
    English: 2.5,
    History: 3.0,
  },
]

export function ProgressChart({ extended = false }) {
  return (
    <ResponsiveContainer width="100%" height={extended ? 350 : 250}>
      <BarChart data={extended ? extendedData : data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: "Hours", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Study Time" fill="#9c5fff" />
        <Bar dataKey="Break Time" fill="#4ade80" />
        {extended && (
          <>
            <Bar dataKey="Math" fill="#9c5fff" />
            <Bar dataKey="Physics" fill="#4ade80" />
            <Bar dataKey="Chemistry" fill="#ffc658" />
            <Bar dataKey="English" fill="#ff8042" />
            <Bar dataKey="History" fill="#0088fe" />
          </>
        )}
      </BarChart>
    </ResponsiveContainer>
  )
}
