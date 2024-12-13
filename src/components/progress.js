"use client";

import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProgressPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [progressData, setProgressData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
      return;
    }

    if (status === "authenticated") {
      fetchProgress();
    }
  }, [status, router]);

  const fetchProgress = async () => {
    try {
      const response = await fetch('/api/progress/user');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      if (Object.keys(data).length > 0) {
        setProgressData(data);
        setSelectedCourse(Object.keys(data)[0]);
        // Start animation
        setAnimationProgress(0);
        const animate = () => {
          setAnimationProgress(prev => {
            const newProgress = prev + 2;
            return newProgress <= 100 ? newProgress : 100;
          });
        };
        const interval = setInterval(animate, 20);
        setTimeout(() => clearInterval(interval), 1000);
      } else {
        setError("No courses found");
      }
    } catch (error) {
      console.error('Failed to fetch progress:', error);
      setError("Failed to load progress data");
    } finally {
      setLoading(false);
    }
  };

  const difficultyColors = {
    Easy: "bg-green-500",
    Medium: "bg-yellow-500",
    Hard: "bg-red-500",
  };

  if (loading) {
    return (
      <div className="w-full px-4 py-6 flex justify-center items-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full px-4 py-6 flex justify-center items-center">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  if (!progressData) {
    return (
      <div className="w-full px-4 py-6 flex justify-center items-center">
        <div className="text-xl">No courses available</div>
      </div>
    );
  }

  const chartData = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [
          Math.min(progressData[selectedCourse].completed, animationProgress),
          100 - Math.min(progressData[selectedCourse].completed, animationProgress),
        ],
        backgroundColor: ["#2E9ED0", "#41454B"],
        borderWidth: 0,
        borderRadius: 10,
      },
    ],
  };

  return (
    <div className="w-full px-4 sm:px-6 py-6 sm:py-10 max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">{session.user.name} track your progress</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      color: "#D3D7DA",
                      font: {
                        family: "Arial, Helvetica, sans-serif",
                        size: 12,
                      },
                      padding: 10,
                    },
                  },
                },
                animation: {
                  duration: 1000,
                  easing: 'easeInOutQuart'
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
              className="w-full px-4 py-2 bg-gray-800 text-white border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              {Object.keys(progressData).map((course) => (
                <option key={course} value={course} className="bg-gray-800 text-white">
                  {course}
                </option>
              ))}
            </select>
          </div>

          <div className="text-sm sm:text-base">
            <div className="font-semibold mb-2">Progress Breakdown:</div>
            <ul className="list-disc ml-6">
              <li>Sub-Chapters: {progressData[selectedCourse].subChapters.length}</li>
              <li>Quizzes: {progressData[selectedCourse].quizzes}%</li>
              <li>Tests: {progressData[selectedCourse].tests}%</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border-border rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2 border-b border-gray-600 text-left text-gray-200">Sub-Chapter</th>
              <th className="px-4 py-2 border-b border-gray-600 text-left text-gray-200">Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {progressData[selectedCourse].subChapters.map((subChapter, index) => (
              <tr key={index} className="hover:bg-gray-600">
                <td className="px-4 py-2 border-b border-gray-600 text-gray-300">{subChapter}</td>
                <td className="px-4 py-2 border-b border-gray-600">
                  <div
                    className={`text-white text-sm py-1 px-3 rounded-full ${
                      difficultyColors[progressData[selectedCourse].difficulty]
                    }`}
                  >
                    {progressData[selectedCourse].difficulty}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}