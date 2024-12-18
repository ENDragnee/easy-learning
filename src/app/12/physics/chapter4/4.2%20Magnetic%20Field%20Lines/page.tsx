"use client"

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is electromagnetism composed of?",
    "options": [
      "Gravity and sound",
      "Electric fields and magnetic fields",
      "Thermal fields and gravitational forces",
      "Radio waves and sound waves"
    ],
    "correctAnswer": 1,
    "hint": "Electromagnetism involves the combination of electric and magnetic forces."
  },
  {
    "question": "Who discovered the relationship between electricity and magnetism through an experiment with a compass needle?",
    "options": [
      "Michael Faraday",
      "Joseph Henry",
      "Hans Christian Oersted",
      "Albert Einstein"
    ],
    "correctAnswer": 2,
    "hint": "Hans Christian Oersted observed that an electric current affected a nearby compass needle in 1819."
  },
  {
    "question": "Which type of magnet generates a magnetic field due to its internal structure?",
    "options": [
      "Temporary magnet",
      "Electromagnet",
      "Permanent magnet",
      "Metallic magnet"
    ],
    "correctAnswer": 2,
    "hint": "A permanent magnet generates its magnetic field from its internal structure."
  },
  {
    "question": "What happens to an electromagnet when the electric current is turned off?",
    "options": [
      "It gains more magnetism",
      "It retains its magnetic field",
      "It loses its magnetism",
      "It changes direction of the magnetic field"
    ],
    "correctAnswer": 2,
    "hint": "An electromagnet only has a magnetic field when an electric current flows through it."
  },
  {
    "question": "What is a key difference between an electric field and a magnetic field?",
    "options": [
      "Electric fields form closed loops, while magnetic fields do not.",
      "Electric fields are measured in Tesla, whereas magnetic fields are in Newton per Coulomb.",
      "Electric fields start on a positive charge and end on a negative charge, whereas magnetic fields do not have start or end points.",
      "Electric fields only exist around metals, while magnetic fields only exist in the air."
    ],
    "correctAnswer": 2,
    "hint": "Electric field lines follow charges, while magnetic field lines form closed loops without starting or ending points."
  },
  {
    "question": "Which materials exhibit magnetic properties as per the document?",
    "options": [
      "Gold and silver",
      "Iron, nickel, and cobalt",
      "Plastic and wood",
      "Copper and aluminum"
    ],
    "correctAnswer": 1,
    "hint": "Magnetic materials include substances like iron, nickel, and cobalt."
  },
  {
    "question": "How does the Earth's magnetic field behave internally?",
    "options": [
      "Like a giant electrical circuit",
      "Like a giant bar magnet",
      "Like a gravitational field",
      "Like a thermal conductor"
    ],
    "correctAnswer": 1,
    "hint": "Earth's magnetic field is similar to a giant bar magnet with north and south poles."
  },
  {
    "question": "What is the SI unit for measuring a magnetic field?",
    "options": [
      "Volt per meter",
      "Newton per Coulomb",
      "Tesla",
      "Watt per second"
    ],
    "correctAnswer": 2,
    "hint": "The SI unit for the strength of a magnetic field is Tesla."
  }
]

export default function MagneticFieldLines() {
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
      <h1 className="text-3xl font-bold mb-6">4.2 Magnetic Field Lines</h1>

      <p>
        Magnetic field lines are imaginary lines or a visual tool used to represent magnetic fields. The density of the lines
        indicates the magnitude of the field. As with electric fields, the pictorial representation of magnetic field lines is
        very useful for visualizing the strength and direction of the magnetic field. When iron filings are sprinkled around a
        magnet, they orient themselves along the magnetic field lines, forming a magnetic field pattern around the magnet.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Properties of Magnetic Field Lines</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>
          Field lines have both direction and magnitude at any point on the field. The direction of the magnetic field is tangent
          to the field line at any point in space. A small compass placed in a magnetic field will point in the direction of the
          field line.
        </li>
        <li>
          The strength of the field is proportional to the closeness of the lines.
        </li>
        <li>
          Magnetic field lines can never cross each other, meaning that the field is unique at any point in space.
        </li>
        <li>
          Unlike electric field lines, magnetic field lines are continuous, forming closed loops without beginning or end.
        </li>
        <li>
          The field lines emerge from the north pole and merge at the south pole. Inside the magnet, the direction of field lines is
          from its south pole to its north pole. Thus, the magnetic field lines are closed curves.
        </li>
      </ul>

      <p>
        The connection between electricity and magnetism has many important applications in today’s world. Whenever a current passes
        through a conductor, a magnetic field is produced. This is the basis of the electromagnet. This can be shown by placing a
        directional compass near a straight current-carrying wire or conductor. A compass placed near a current-carrying conductor
        will always point in the direction of the magnetic field lines produced. As soon as the current is turned off, there is no
        magnetic field. This is because the magnetic field is generated by the electric current (moving charges).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Ampere’s Law</h2>
      <p>
        Ampere’s Law can be stated as: <InlineMath>{"B = \mu_0 I"}</InlineMath>, where the magnetic field (B) created by an electric
        current (I) is proportional to the size of that electric current, with a constant of proportionality equal to the
        permeability of free space (<InlineMath>{"\mu_0"}</InlineMath>).
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
