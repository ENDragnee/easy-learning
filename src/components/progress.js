"use client";

import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProgressPage() {
  const [selectedCourse, setSelectedCourse] = useState("Mathematics");

  const courses = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "Computer Science",
  ];

  const progressData = {
    Mathematics: { completed: 75, remaining: 25 },
    Physics: { completed: 60, remaining: 40 },
    Chemistry: { completed: 45, remaining: 55 },
    Biology: { completed: 80, remaining: 20 },
    English: { completed: 50, remaining: 50 },
    "Computer Science": { completed: 90, remaining: 10 },
  };

  const chartData = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [
          progressData[selectedCourse].completed,
          progressData[selectedCourse].remaining,
        ],
        backgroundColor: ["rgb(82,148,226)", "rgb(75,81,98)"],
        borderWidth: 0,
        borderRadius: 10,
      },
    ],
  };

  return (
    <div className="w-full px-4 sm:px-6 py-6 sm:py-10 max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Progress Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="flex flex-col items-center justify-center bg-card rounded-lg p-4 shadow-md">
          <div className="w-[200px] sm:w-[250px]">
            <Doughnut
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      color: "var(--foreground)",
                      font: {
                        family: "Arial, Helvetica, sans-serif",
                        size: 12,
                      },
                      padding: 10,
                    },
                  },
                },
                animation: {
                  animateRotate: true,
                  animateScale: true,
                },
              }}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-6">
            <label htmlFor="course-select" className="block text-base sm:text-lg font-semibold mb-2">
              Select Course:
            </label>
            <select
              id="course-select"
              className="w-full px-4 py-2 bg-background text-foreground border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          <div className="text-sm sm:text-base">
            <div className="font-semibold mb-2">Current Progress:</div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span>Completed: {progressData[selectedCourse].completed}%</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
              <span>Remaining: {progressData[selectedCourse].remaining}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border-border rounded-lg shadow-md">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-2 border-b border-border text-left">Course</th>
              <th className="px-4 py-2 border-b border-border text-left">Progress</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course} className="hover:bg-muted/50">
                <td className="px-4 py-2 border-b border-border">{course}</td>
                <td className="px-4 py-2 border-b border-border">
                  <div className="relative h-4 w-full bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${progressData[course].completed}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium mt-1 block">
                    {progressData[course].completed}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}