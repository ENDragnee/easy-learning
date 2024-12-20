'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What causes gas particles to exert pressure on the walls of a container?",
    "options": [
      "Their random motion",
      "Their high density",
      "Their ability to expand",
      "Their gravitational force"
    ],
    "correctAnswer": 0,
    "hint": "Pressure is caused by collisions of particles with the walls."
  },
  {
    "question": "What does Pascal’s Principle state about pressure in a static fluid?",
    "options": [
      "It decreases with depth.",
      "It is always constant everywhere.",
      "A change in pressure is transmitted undiminished throughout the fluid.",
      "It is proportional to the volume of the fluid."
    ],
    "correctAnswer": 2,
    "hint": "This principle relates to how pressure changes when applied to a fluid."
  },
  {
    "question": "What is one technical application of Pascal's Principle?",
    "options": [
      "A thermometer",
      "A barometer",
      "A hydraulic press",
      "A manometer"
    ],
    "correctAnswer": 2,
    "hint": "This device is used to lift heavy objects by converting small forces into larger forces."
  },
  {
    "question": "What is the formula for the pressure exerted by a piston on a fluid?",
    "options": [
      "P = F / g",
      "P = A / F",
      "P = F / A",
      "P = g / h"
    ],
    "correctAnswer": 2,
    "hint": "This formula relates force and area of a piston."
  },
  {
    "question": "How does pressure vary with depth in a liquid?",
    "options": [
      "It decreases with depth.",
      "It remains constant.",
      "It increases linearly with depth.",
      "It fluctuates randomly with depth."
    ],
    "correctAnswer": 2,
    "hint": "This variation is due to the weight of the liquid above a given point."
  },
  {
    "question": "What device is used to measure atmospheric pressure?",
    "options": [
      "Hydrometer",
      "Barometer",
      "Thermometer",
      "Manometer"
    ],
    "correctAnswer": 1,
    "hint": "This device uses mercury to measure pressure at the surface."
  },
  {
    "question": "What does the height of a liquid column in a barometer indicate?",
    "options": [
      "The temperature of the liquid",
      "The pressure of the atmosphere",
      "The density of the liquid",
      "The depth of the fluid"
    ],
    "correctAnswer": 1,
    "hint": "Atmospheric pressure is proportional to the height of the mercury column."
  },
  {
    "question": "What is a closed-end manometer used to measure?",
    "options": [
      "The density of a liquid",
      "The pressure of a gas",
      "The atmospheric pressure",
      "The depth of a liquid"
    ],
    "correctAnswer": 1,
    "hint": "This device is used to determine gas pressure based on the height of a liquid column."
  }
]

export default function FluidMechanics() {
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
    <div className="px-6 sm:px-6 sm:text-xs md:text-base py-6 max-w-4xl mx-auto text-justify">
      <h2 className="text-3xl font-bold mb-6">3.2 Pressure in Fluids at Rest</h2>
      <p>
        As gas particles collide with the walls of the container in which they reside, they exert pressure. In fact, if you place any object inside a gas, the gas particles exert the same pressure on the object as the gas exerts on the walls of the container. Do liquids behave in a similar way? The particles in a liquid are in continual random motion, somewhat similar to particles in gases.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Pascal's Principle</h3>
      <p>
        Pushing the piston into a confined fluid in one direction causes a greater pressure in the fluid close to the piston. Almost immediately, the pressure throughout the fluid increases uniformly, and the fluid is pushed out of all of the holes in the container. This phenomenon was first discovered by French scientist Blaise Pascal in 1653 and is called Pascal’s Principle. Pascal’s Principle states that a change in the pressure applied to a static fluid is transmitted undiminished to every point of the fluid and to the walls of the container.
      </p>
      <p>
        The pressure applied at one point is transmitted to the whole part of the fluid by continuous collisions of neighboring molecules of the fluid.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Hydraulic Press</h3>
      <p>
        One of the technical applications of Pascal’s Principle is a hydraulic press, which converts small forces into larger forces, or vice versa. For example, automobile mechanics use hydraulic presses to lift cars, and dentists and barbers use them to raise and lower their clients’ chairs.
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'P = \\frac{F_1}{A_1}'}</BlockMath>
      </div>
      <p>
        The pressure in the fluid just under piston 1 is given by the formula <InlineMath>{'P = F_1 / A_1'}</InlineMath>, where <InlineMath>{'F_1'}</InlineMath> is the downward force exerted by piston 1, and <InlineMath>{'A_1'}</InlineMath> is the area of the piston.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Variation of Pressure with Depth</h3>
      <p>
        Consider a liquid of density <InlineMath>{'\\rho'}</InlineMath> at rest. The pressure exerted by the liquid on a parcel can be determined by the equation:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'P = P_0 + \\rho g h'}</BlockMath>
      </div>
      <p>
        where <InlineMath>{'P_0'}</InlineMath> is the pressure at the surface, <InlineMath>{'\\rho'}</InlineMath> is the density of the liquid, <InlineMath>{'g'}</InlineMath> is the acceleration due to gravity, and <InlineMath>{'h'}</InlineMath> is the depth.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Atmospheric Pressure</h3>
      <p>
        At the Earth’s surface, the air pressure exerted on you is a result of the weight of air above you. This pressure decreases as you climb higher in altitude and the weight of the air above you decreases. The atmospheric pressure changes with elevation and is greatest at sea level.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Measuring Pressure</h3>
      <p>
        Atmospheric pressure is measured by a device called a barometer. The pressure at the surface is given by the equation:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'P_{atm} = \\rho g h'}</BlockMath>
      </div>
      <p>
        where <InlineMath>{'\\rho'}</InlineMath> is the density of mercury, <InlineMath>{'g'}</InlineMath> is gravitational acceleration, and <InlineMath>{'h'}</InlineMath> is the height of the mercury column.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Manometer</h3>
      <p>
        A manometer is a device used to measure the pressure of a gas. A closed-end manometer is a U-shaped tube, and the pressure of the gas is determined by the height of the liquid column inside the tube.
      </p>
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
