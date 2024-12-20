'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What happens to the magnetic field around a long straight current-carrying wire as the current increases?",
    "options": [
      "The magnetic field decreases",
      "The magnetic field remains the same",
      "The magnetic field increases proportionally",
      "The magnetic field disappears"
    ],
    "correctAnswer": 2,
    "hint": "As the current through the conductor increases, the magnetic field strength increases proportionally."
  },
  {
    "question": "How is the direction of the magnetic field around a current-carrying wire determined?",
    "options": [
      "Using Fleming’s Left Hand Rule",
      "Using Fleming’s Right Hand Rule",
      "Using Ohm’s Law",
      "Using the Law of Universal Gravitation"
    ],
    "correctAnswer": 2,
    "hint": "Fleming’s Right Hand Rule helps determine the direction of the magnetic field around a current-carrying wire."
  },
  {
    "question": "What is the relationship between distance from a current-carrying wire and the strength of the magnetic field?",
    "options": [
      "The magnetic field increases with distance",
      "The magnetic field decreases with distance",
      "The magnetic field remains the same regardless of distance",
      "The magnetic field forms a straight line"
    ],
    "correctAnswer": 2,
    "hint": "As you move away from the wire, the magnetic field strength decreases with distance."
  },
  {
    "question": "Which unit is commonly used to measure the strength of a magnetic field?",
    "options": [
      "Joule (J)",
      "Newton (N)",
      "Tesla (T)",
      "Watt (W)"
    ],
    "correctAnswer": 2,
    "hint": "The SI unit of a magnetic field's strength is Tesla (T)."
  },
  {
    "question": "Which of the following sources produces the largest magnetic field strength according to Table 4.1?",
    "options": [
      "Strong superconducting laboratory magnet",
      "Bar magnet",
      "Surface of the Earth",
      "Inside the human brain"
    ],
    "correctAnswer": 0,
    "hint": "The strongest magnetic field is produced by a superconducting laboratory magnet with a value of 30 T."
  },
  {
    "question": "What shape do magnetic field lines form around a current-carrying wire?",
    "options": [
      "Straight lines",
      "Elliptical shapes",
      "Circular patterns",
      "Square patterns"
    ],
    "correctAnswer": 2,
    "hint": "Magnetic field lines form a circular pattern around a current-carrying conductor."
  },
  {
    "question": "Which magnetic field strength value is observed on the surface of the sun?",
    "options": [
      "10^-13 T",
      "10^-2 T",
      "0.5 × 10^-4 T",
      "1.5 T"
    ],
    "correctAnswer": 1,
    "hint": "The surface of the sun has a magnetic field strength of approximately 10^-2 T."
  },
  {
    "question": "What happens to the magnetic field's direction when the direction of the current in a wire is reversed?",
    "options": [
      "It remains unchanged",
      "It doubles in strength",
      "It reverses direction",
      "It forms a new shape"
    ],
    "correctAnswer": 2,
    "hint": "When the current's direction is reversed, the magnetic field's direction is also reversed."
  }
]

export default function CurrentAndMagnetism() {
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
      <h1 className="text-3xl font-bold mb-6">4.3 Current and Magnetism</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Magnetic Field Created by a Long Straight Current-Carrying Wire</h2>
      <p>
        To understand how a magnetic field is created by a current-carrying wire, consider a wire through which current flows when
        connected to a battery. As the current through the conductor increases, the magnetic field also increases proportionally.
        When you move further away from the wire, the magnetic field decreases with the distance.
      </p>

      <p>
        The magnitude of the magnetic field at a point a distance <InlineMath>{'r'}</InlineMath> from a long straight current-carrying
        wire is given by the formula:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'B = \\frac{\\mu_0 I}{2\\pi r}'}</BlockMath>
      </div>
      <p>
        where <InlineMath>{'\\mu_0'}</InlineMath> is the permeability of free space, with a value of <InlineMath>{'\\mu_0 = 4\\pi \\times 10^{-7} T.m/A'}</InlineMath>, 
        <InlineMath>{'r'}</InlineMath> is the distance from the wire where the magnetic field is calculated, and <InlineMath>{'I'}</InlineMath> is the current through the wire.
      </p>

      <p>
        The magnetic field has both magnitude and direction. The SI unit of magnetic field is Tesla (<InlineMath>{'T'}</InlineMath>), and the
        other common unit is Gauss (<InlineMath>{'G'}</InlineMath>). Gauss is related to Tesla through the conversion:
        <InlineMath>{'1 T = 10^4 G'}</InlineMath>.
      </p>

      <p>
        The magnetic field forms a circular pattern around the wire. A compass needle can be used to find the direction of the magnetic field.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Properties of Magnetic Field Produced by a Current-Carrying Wire</h3>
      <ul className="list-disc ml-6 mb-6">
        <li>The magnetic field lines form a circular pattern around the wire.</li>
        <li>The magnetic field strength increases when the current increases.</li>
        <li>The magnetic field strength is stronger near the wire and weaker further away.</li>
        <li>When the direction of the current is reversed, the direction of the magnetic field is reversed too.</li>
      </ul>

      <p>
        The direction of the magnetic field around a wire carrying a current is given by Fleming’s Right Hand Rule. This rule states that
        if you grip a straight wire with your right hand in such a way that your extended thumb points in the direction of the current,
        your fingers wrapped around the wire will point in the direction of the magnetic field lines.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Table 4.1: Approximate Magnitudes of Magnetic Fields</h2>
      <table className="table-auto w-full border-collapse mb-6">
        <thead>
          <tr>
            <th className="border-b px-4 py-2 text-left">Source of Field</th>
            <th className="border-b px-4 py-2 text-left">Field Magnitude (T)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b px-4 py-2">Strong superconducting laboratory magnet</td>
            <td className="border-b px-4 py-2">30</td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">Strong conventional laboratory magnet</td>
            <td className="border-b px-4 py-2">2</td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">Medical MRI unit</td>
            <td className="border-b px-4 py-2">1.5</td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">Bar magnet</td>
            <td className="border-b px-4 py-2">10<sup>-2</sup></td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">Surface of the sun</td>
            <td className="border-b px-4 py-2">10<sup>-2</sup></td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">Surface of the Earth</td>
            <td className="border-b px-4 py-2">0.5 × 10<sup>-4</sup></td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">Inside human brain (due to nerve impulses)</td>
            <td className="border-b px-4 py-2">10<sup>-13</sup></td>
          </tr>
        </tbody>
      </table>
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

