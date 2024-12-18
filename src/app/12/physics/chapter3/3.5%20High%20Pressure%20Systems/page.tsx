'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is considered high pressure in most systems?",
    "options": [
      "1 atmosphere",
      "50 atmospheres",
      "10 atmospheres",
      "100 atmospheres"
    ],
    "correctAnswer": 1,
    "hint": "High pressure typically refers to pressures far greater than 1 atmosphere, often more than 50 atm."
  },
  {
    "question": "Which of the following is an application of high-pressure systems?",
    "options": [
      "High pressure cookers",
      "Standard water pipes",
      "Air cooling systems",
      "Electromagnetic devices"
    ],
    "correctAnswer": 0,
    "hint": "High pressure cookers use high pressure to cook food quickly."
  },
  {
    "question": "What is the purpose of safety valves in high-pressure systems?",
    "options": [
      "To increase system pressure",
      "To reduce system noise",
      "To release pressure and prevent system failure",
      "To cool down the system temperature"
    ],
    "correctAnswer": 2,
    "hint": "Safety valves protect high-pressure systems by releasing excess pressure to prevent damage."
  },
  {
    "question": "What hazards can occur if a high-pressure system fails?",
    "options": [
      "Explosion blasts impact",
      "Flying debris from broken parts",
      "Released liquids or gases causing injuries",
      "All of the above"
    ],
    "correctAnswer": 3,
    "hint": "Pressure system failures can result in multiple hazards, including explosions and flying debris."
  },
  {
    "question": "What are high-pressure washers mainly used for?",
    "options": [
      "Heating large areas",
      "Cleaning vehicles and outdoor surfaces",
      "Generating electricity",
      "Cooling industrial machinery"
    ],
    "correctAnswer": 1,
    "hint": "High-pressure washers are commonly used to clean vehicles, sidewalks, and floors."
  },
  {
    "question": "Which common causes contribute to pressure system failures?",
    "options": [
      "Damaged equipment or poor system design",
      "Lack of maintenance",
      "Unsafe installation or modifications",
      "All of the above"
    ],
    "correctAnswer": 3,
    "hint": "Pressure system failures often result from poor design, lack of maintenance, or unsafe practices."
  },
  {
    "question": "What is the function of a high-pressure compressor?",
    "options": [
      "To decrease the pressure of a gas",
      "To transport a fluid through a pipe",
      "To increase the pressure of a gas by reducing its volume",
      "To cool gases to low temperatures"
    ],
    "correctAnswer": 2,
    "hint": "A compressor increases the pressure of a gas by reducing its volume."
  },
  {
    "question": "Why is careful design and fabrication required in high-pressure equipment generating steam?",
    "options": [
      "Due to high temperature requirements",
      "Due to severe mechanical stresses",
      "Due to electrical connections",
      "Due to gravitational forces"
    ],
    "correctAnswer": 1,
    "hint": "Generating steam at high pressures requires robust design to withstand severe mechanical stresses."
  }
]

export default function SafetyAndHighPressure() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(new Array(quizQuestions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0); 

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    const correctCount = selectedAnswers.reduce((count: number, answer: number | null, index: number) => {
      if (answer === null) return count;
      return count + (answer === quizQuestions[index].correctAnswer ? 1 : 0);
    }, 0);
    setScore(correctCount);
    setShowResults(true);
  };
  return (
    <div className="px-6 sm:px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">Safety and High Pressure</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3.5 High Pressure Systems</h2>
      <p>
        Pressure far greater than 1 atmosphere (most of the time greater than 50 atm) is considered high pressure. High pressure is used for many applications such as:
      </p>
      <ul className="list-disc ml-6">
        <li>High pressure cookers used to cook food quickly.</li>
        <li>Gas cylinders containing liquid petroleum gas (LPG) for fuel use.</li>
        <li>High pressure gas cylinders used in laboratories or medical applications.</li>
        <li>Bicycle and car tires inflated using high pressure inflators.</li>
        <li>High pressure washers for industrial and cleaning purposes.</li>
      </ul>
      <p>
        In physical sciences, high pressure is important to study the physical properties of materials, mainly solids, and to transform their nature.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Changes Under High Pressure</h3>
      <p>
        Many materials undergo fascinating changes in their physical and chemical characteristics when subjected to high pressure. In biological contexts, high pressure is used in a process called pascalization, which diminishes or cancels microorganism activity. This process is applied to increase the shelf life of perishable food items like juice, fish, meat, and dairy products.
      </p>
      <p>
        High pressure affects several scientific and technological fields, such as biology, chemistry, material science, pharmacy, and physics.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">High Pressure Equipment</h2>
      <p>
        High pressure equipment may include the following components:
      </p>
      <ul className="list-disc ml-6">
        <li>High-pressure compressors (pumps) used to increase gas pressure.</li>
        <li>High pressure vessels designed to contain fluids under pressure.</li>
        <li>Safety accessories such as safety valves and bursting discs.</li>
        <li>High-pressure instrumentation for monitoring pressure, temperature, flow, and level.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4">High Pressure Compressors</h3>
      <p>
        A compressor is a mechanical device that increases the pressure of a gas by reducing its volume. Compressors are similar to pumps, both increasing the pressure on a fluid and transporting it through a pipe.
      </p>
      <p>
        Heated pressure equipment is used for generating steam or superheated water at temperatures higher than 110°C. Such equipment, including pressure cookers, requires careful design and fabrication due to the severe stresses involved.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">High Pressure Vessels</h3>
      <p>
        A pressure vessel is a container designed to hold fluids under pressure, including its attachments like valves and piping. These vessels may consist of more than one chamber.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Safety Accessories</h3>
      <p>
        Safety accessories are crucial for high-pressure systems and include:
      </p>
      <ul className="list-disc ml-6">
        <li>Safety valves</li>
        <li>Bursts discs</li>
        <li>Limiting devices like pressure and temperature switches that activate shutdown or corrective measures.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4">High Pressure Instrumentation</h3>
      <p>
        To operate high-pressure plants safely, adequate control and measuring devices are essential. These devices measure parameters such as pressure, temperature, flow, and fluid levels.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Safety for High Pressure Equipment</h2>
      <p>
        If a high pressure system or equipment fails and bursts violently, it can cause serious injury or even death. The main hazards from pressure systems include:
      </p>
      <ul className="list-disc ml-6">
        <li>Impact from explosion blasts</li>
        <li>Impact from failing parts or flying debris</li>
        <li>Impact from released liquids or gases, such as steam</li>
        <li>Fire caused by the release of flammable materials</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4">Common Causes of Pressure System Failures</h3>
      <p>
        The risks associated with pressure systems often arise from:
      </p>
      <ul className="list-disc ml-6">
        <li>Damaged equipment or poor system design</li>
        <li>Lack of maintenance</li>
        <li>Unsafe work practices or inadequate training</li>
        <li>Incorrect installation or modifications</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">High Pressure Washers</h2>
      <p>
        Pressure washers are high-pressure equipment commonly used for cleaning large outdoor areas. They are used to clean vehicles, concrete, sidewalks, and floors. Despite their usefulness, pressure washers can pose risks if not used correctly. The following safety measures should be followed:
      </p>
      <ul className="list-disc ml-6">
        <li>Wear safety glasses or goggles to protect your eyes from flying debris.</li>
        <li>Wear enclosed shoes or work boots to protect your feet.</li>
        <li>Wear gloves to protect your hands from injury.</li>
        <li>Use ear protection when operating a gas-powered pressure washer for long periods.</li>
        <li>Never point the pressure washer at people or animals as it can cause injury.</li>
        <li>Always turn off the machine and water before disconnecting hoses.</li>
      </ul>
      <div className='flex justify-center items-center'>
          <button 
            onClick={() => setShowQuiz(true)}
            className="w-1/2 h-1/2 mt-6 bg-slate-400 hover:bg-slate-500 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Take Quiz
          </button>
        </div>

      {showQuiz && (
        <div className="fixed inset-0 bg-gray-600 dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-[#242424] p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => {
                setShowQuiz(false);
                setShowResults(false);
                setSelectedAnswers(new Array(quizQuestions.length).fill(null));
              }}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Projectile Motion Quiz</h2>
            <div className="space-y-6">
              {quizQuestions.map((q, index) => (
                <QuizQuestion
                  key={index}
                  question={q.question}
                  options={q.options}
                  correctAnswer={q.correctAnswer}
                  hint={q.hint}
                  selectedAnswer={selectedAnswers[index]}
                  showResults={showResults}
                  onSelectAnswer={(answerIndex) => handleAnswerSelect(index, answerIndex)}
                />
              ))}
            </div>
            <div className="mt-6 flex justify-between">
              {!showResults && (
                <button 
                  onClick={handleSubmit}
                  className="bg-green-500 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  Submit
                </button>
              )}
              <button 
                onClick={() => {
                  setShowQuiz(false);
                  setShowResults(false);
                  setSelectedAnswers(new Array(quizQuestions.length).fill(null));
                }}
                className="bg-red-500 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Close
              </button>
            </div>
            {showResults && (
              <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-bold mb-2 dark:text-white">Quiz Results</h3>
                <p className="dark:text-white">
                  You got {score} out of {quizQuestions.length} questions correct! 
                  ({((score / quizQuestions.length) * 100).toFixed(1)}%)
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
