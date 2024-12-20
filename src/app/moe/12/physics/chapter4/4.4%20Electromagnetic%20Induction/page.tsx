'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "Who discovered that a changing magnetic field can produce an electromotive force (emf) and induce an electric current?",
    "options": [
      "Oersted",
      "Ampere",
      "Michael Faraday",
      "James Clerk Maxwell"
    ],
    "correctAnswer": 2,
    "hint": "Michael Faraday discovered electromagnetic induction in 1831."
  },
  {
    "question": "What is the term used to describe the measurement of the total magnetic lines of force passing through a given area?",
    "options": [
      "Magnetic Induction",
      "Magnetic Flux",
      "Electric Field",
      "Electromotive Force"
    ],
    "correctAnswer": 1,
    "hint": "Magnetic flux is denoted by the symbol \\( \\Phi_B \\) and measured in Webers (Wb)."
  },
  {
    "question": "What phenomenon shows that electricity and magnetism are interconnected, as discovered by early experiments?",
    "options": [
      "Gravitational attraction",
      "Electromagnetic Induction",
      "Thermal conduction",
      "Mechanical pressure"
    ],
    "correctAnswer": 1,
    "hint": "Electromagnetic induction is the process where a changing magnetic field creates an electric current."
  },
  {
    "question": "Which historical scientists contributed significantly to the understanding and development of electromagnetic induction?",
    "options": [
      "Isaac Newton and Galileo Galilei",
      "Michael Faraday and Henry",
      "Johannes Kepler and Copernicus",
      "Oersted and Ampere"
    ],
    "correctAnswer": 1,
    "hint": "Michael Faraday and Henry's pioneering experiments laid the foundation for modern generators and transformers."
  },
  {
    "question": "In the formula \\( \\Phi_B = B A \\cos(\\theta) \\), what does the angle \\( \\theta \\) represent?",
    "options": [
      "The speed of electric charges",
      "The orientation of the surface area relative to the magnetic field",
      "The temperature of the material",
      "The voltage across the surface"
    ],
    "correctAnswer": 1,
    "hint": "In the formula for magnetic flux, \\( \\theta \\) is the angle between the magnetic field and the surface area."
  }
]

export default function ElectromagneticInduction() {
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
      <h1 className="text-3xl font-bold mb-6">4.4 Electromagnetic Induction</h1>

      <p>
        For a long time, electricity and magnetism were considered separate and unrelated phenomena. However, in the early decades
        of the nineteenth century, experiments by Oersted, Ampere, and others demonstrated that electricity and magnetism are
        inter-related. They discovered that moving electric charges produce magnetic fields. For instance, an electric current can
        deflect a magnetic compass needle placed nearby.
      </p>

      <p>
        This raises the question: Can the reverse be true? Can moving magnets produce electric currents? The answer is yes. In 1831,
        Michael Faraday discovered that a changing magnetic field can produce an electromotive force (emf), which in turn produces an
        induced current in a closed circuit. This phenomenon is known as electromagnetic induction.
      </p>

      <p>
        Faraday’s discovery of electromagnetic induction led to the invention of the dynamo (generator). This discovery is not only
        of theoretical interest but also of great practical utility. Without electromagnetic induction, there would be no electricity,
        electric lights, trains, telephones, or personal computers.
      </p>

      <p>
        The pioneering experiments of Faraday and Henry have directly contributed to the development of modern generators and
        transformers. The discovery of electromagnetic induction is based on a long series of experiments carried out by Faraday and
        Henry.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Magnetic Flux</h2>
      <p>
        Before stating Faraday's laws, it's important to understand the concept of magnetic flux, denoted by <InlineMath>{'\\Phi_B'}</InlineMath>.
        Magnetic flux is a measurement of the total magnetic lines of force that pass through a given area <InlineMath>{'A'}</InlineMath>.
      </p>

      <p>
        For a plane surface with area <InlineMath>{'A'}</InlineMath> placed in a uniform magnetic field <InlineMath>{'B'}</InlineMath>, the magnetic flux is
        mathematically written as:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'\\Phi_B = B A \\cos(\\theta) '}</BlockMath>
      </div>
      <p>
        where <InlineMath>{'\\theta'}</InlineMath> is the angle between the magnetic field <InlineMath>{'B'}</InlineMath> and the area <InlineMath>{'A'}</InlineMath>.
        The SI unit of magnetic flux is the Weber (Wb).
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
