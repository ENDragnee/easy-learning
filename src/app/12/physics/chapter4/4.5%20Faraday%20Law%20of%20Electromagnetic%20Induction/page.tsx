'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What happens when the magnetic flux across a coil changes with time, according to Faraday's Law?",
    "options": [
      "No induced current is generated",
      "An electromotive force (emf) is induced",
      "The coil becomes a permanent magnet",
      "The magnetic field inside the coil disappears"
    ],
    "correctAnswer": 1,
    "hint": "Faraday's Law states that a changing magnetic flux induces an emf in a closed coil."
  },
  {
    "question": "What is the expression for the total induced emf in a coil with \( N \) turns, as per Faraday's Law?",
    "options": [
      "\\( \\epsilon = - \\Delta \\Phi_B \\Delta t \\)",
      "\\( \\epsilon = - \\frac{N \\Delta \\Phi_B}{\\Delta t} \\)",
      "\\( \\epsilon = \\Phi_B \\times N \\)",
      "\\( \\epsilon = \\Delta \\Phi_B \\times t \\)"
    ],
    "correctAnswer": 1,
    "hint": "The formula includes the number of turns \( N \) and the change in magnetic flux \( \\Delta \\Phi_B \)."
  },
  {
    "question": "What does Lenz's Law describe about the direction of induced current?",
    "options": [
      "The current flows in the direction of the magnetic field",
      "The current flows opposite to the magnetic field",
      "The current direction follows Faraday's Law completely",
      "The current is random and unpredictable"
    ],
    "correctAnswer": 1,
    "hint": "Lenz's Law states that the induced current opposes the change that caused the emf."
  },
  {
    "question": "Which principle is Lenz's Law based on?",
    "options": [
      "Principle of Acceleration",
      "Conservation of Energy",
      "Newton's First Law of Motion",
      "Newton's Third Law of Action and Reaction"
    ],
    "correctAnswer": 1,
    "hint": "Lenz's Law is based on the conservation of energy and Newton's third law of action and reaction."
  },
  {
    "question": "When a changing magnetic field induces a current in a loop, what does the induced current generate?",
    "options": [
      "A permanent magnetic field with no effect",
      "A magnetic field that opposes the change in magnetic flux",
      "An electric field that amplifies the flux change",
      "No interaction with the existing magnetic field"
    ],
    "correctAnswer": 1,
    "hint": "The induced current generates a magnetic field that opposes the change in magnetic flux."
  },
  {
    "question": "Which scientists conducted experiments that laid the foundation for Faraday’s Law of Electromagnetic Induction?",
    "options": [
      "Newton and Galileo",
      "Faraday and Henry",
      "Einstein and Tesla",
      "Kepler and Copernicus"
    ],
    "correctAnswer": 1,
    "hint": "Faraday and Henry contributed significantly to understanding electromagnetic induction."
  },
  {
    "question": "What is the meaning of the negative sign in Faraday’s Law's equation for induced emf?",
    "options": [
      "It represents a positive energy gain",
      "It is a placeholder with no significance",
      "It indicates the induced emf's direction, opposing the original change",
      "It shows that energy is amplified by the loop"
    ],
    "correctAnswer": 2,
    "hint": "The negative sign is a result of Lenz's Law, showing the induced current's opposition to changes."
  },
  {
    "question": "What does the term 'magnetic flux' represent in the context of Faraday's Law?",
    "options": [
      "The speed of a moving electric charge",
      "The orientation of a magnetic compass needle",
      "The total number of magnetic lines of force passing through an area",
      "The frequency of electrical current flow"
    ],
    "correctAnswer": 2,
    "hint": "Magnetic flux is the measure of magnetic lines of force passing through a surface."
  }
]

export default function FaradaysLaw() {
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
      <h1 className="text-3xl font-bold mb-6">4.5 Faraday’s Law of Electromagnetic Induction</h1>

      <p>
        The discovery and understanding of electromagnetic induction are based on a series of experiments conducted by Faraday and
        Henry. From these experiments, Faraday concluded that an electromotive force (emf) is induced when the magnetic flux across
        a coil changes with time.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Faraday’s Law of Electromagnetic Induction and Lenz’s Law</h2>
      <p>
        Faraday’s law explains how changing magnetic fields can cause current to flow through wires, while Lenz’s law describes the
        direction of the induced current.
      </p>

      <p>
        Faraday’s law states that the magnitude of the induced electromotive force (emf) is directly proportional to the rate of
        change of the magnetic flux in a closed coil:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'\\epsilon = - \\frac{\\Delta \\Phi_B}{\\Delta t}'}</BlockMath>
      </div>
      <p>
        where <InlineMath>{'\\epsilon'}</InlineMath> is the induced voltage (emf), <InlineMath>{'\\Delta \\Phi_B'}</InlineMath> is the change in magnetic flux,
        and <InlineMath>{'\\Delta t'}</InlineMath> is the change in time.
      </p>

      <p>
        For a coil with <InlineMath>{'N'}</InlineMath> turns, the change in flux associated with each turn is the same. Therefore,
        the expression for the total induced emf is:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'\\epsilon = - \\frac{N \\Delta \\Phi_B}{\\Delta t}'}</BlockMath>
      </div>

      <p>
        The negative sign in the equation is a result of Lenz’s law, which states that the direction of the induced current is such
        that it opposes the change that caused the induced emf.
      </p>

      <p>
        Lenz’s law is based on the principle of conservation of energy and Newton’s third law. It provides the most convenient way
        to determine the direction of the induced current.
      </p>

      <p>
        When the magnetic flux changes due to the approach of a magnet, it induces a current in the loop. The induced current
        generates its own magnetic field that opposes the change in magnetic flux that created it.
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