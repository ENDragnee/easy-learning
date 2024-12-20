'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "Who invented the concept of the integrated circuit?",
    "options": [
      "Albert Einstein",
      "Jack Kilby and Robert Noyce",
      "Galileo Galilei",
      "Thomas Edison"
    ],
    "correctAnswer": 1,
    "hint": "The integrated circuit was invented by Jack Kilby and Robert Noyce, transforming modern electronics."
  },
  {
    "question": "What materials are typically used to create an integrated circuit?",
    "options": [
      "Copper and aluminum",
      "Gold and platinum",
      "Silicon and semiconductor materials",
      "Iron and nickel"
    ],
    "correctAnswer": 2,
    "hint": "Integrated circuits are usually made from silicon, the primary material for semiconductor technology."
  },
  {
    "question": "What is one of the main advantages of using integrated circuits?",
    "options": [
      "Larger size and higher cost",
      "High reliability and small size",
      "Poor heat resistance",
      "Excessive energy consumption"
    ],
    "correctAnswer": 1,
    "hint": "Integrated circuits offer advantages like small size, high speed, and low power consumption."
  },
  {
    "question": "What is a significant disadvantage of integrated circuits?",
    "options": [
      "Inability to handle high current or voltage",
      "Easy repair of individual components",
      "Excessive space usage",
      "Slower operational speeds"
    ],
    "correctAnswer": 0,
    "hint": "Integrated circuits cannot handle high current or voltage due to heat and insulation limitations."
  },
  {
    "question": "In which fields have integrated circuits been extensively utilized?",
    "options": [
      "Military and aerospace",
      "Fashion and clothing",
      "Textile and printing",
      "Agriculture and farming"
    ],
    "correctAnswer": 0,
    "hint": "Integrated circuits are widely used in military, aerospace, and portable consumer electronics."
  }
]

export default function IntegratedCircuits() {
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
      <h1 className="text-3xl font-bold mb-6">5.5 Integrated Circuits</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">The Importance of Integrated Circuits</h2>
      <p>
        Transistors and other semiconductor devices have made it possible to reduce the size of electronic circuits because of their small size and low power consumption. It is now possible to extend the principles behind semiconductors to complete circuits as well as individual components.
      </p>
      <p>
        Integrated circuits are used in almost all electronic equipment in use today and have revolutionized the world of electronics. The integrated circuit was invented by Jack Kilby and Robert Noyce. This invention is a boon for digital technologies like computers, mobile phones, MP3 players, fans, traffic lights, DVDs, and many other devices. The goal of the integrated circuit is to develop a single device to perform a specific function, such as amplification or switching, microprocessors, timers, and computer memory, eliminating the separation between components and circuits.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">The Components of an Integrated Circuit</h2>
      <p>
        An integrated circuit (IC), also referred to as a chip or a microchip, is a set of electronic circuits on one small flat piece (or "chip") of semiconductor material, usually silicon. It is no larger than that of a conventional low-power transistor. The circuit consists of diodes, transistors, resistors, and capacitors. Integrated circuits are produced with the same technology and materials used in making transistors and other semiconductor devices.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Advantages and Disadvantages of Integrated Components</h2>
      <p>
        Among the four types of components included in integrated circuits, only a very small amount of the space is occupied by diodes and transistors. The rest is occupied by resistors and capacitors, as their size increases with their value. The most obvious advantage of the integrated circuit is its small size. An integrated circuit is constructed of a chip of semiconductor material approximately one-eighth of an inch square. 
      </p>
      <p>
        Due to the integrated circuit's small size, it is used extensively in military and aerospace programs. The integrated circuit has also transformed the calculator from a desktop to a handheld instrument. Computer systems are now available in portable models because of integrated circuits. This small, integrated circuit consumes less power and operates at higher speeds than a conventional transistor circuit. The electron travel time is reduced by direct connection of the internal components.
      </p>
      <p>
        Integrated circuits are more reliable than directly connected transistor circuits. In the integrated circuit, internal components are connected permanently. The components are formed at the same time, reducing the chance for error. After the integrated circuit is formed, it is pretested before final assembly.
      </p>
      <p>
        Integrated circuits reduce the number of parts needed to construct electronic equipment. This reduces manufacturing cost and further reduces the cost of electronic equipment. However, integrated circuits do have some disadvantages. They cannot handle large amounts of current or voltage. High current generates excessive heat, damaging the device. High voltage breaks down the insulation between the various internal components.
      </p>
      <p>
        Furthermore, integrated circuits cannot be repaired because the internal components cannot be separated. Problems are identified by individual circuit instead of by individual component.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Conclusion</h3>
      <p>
        Integrated circuits have played a transformative role in electronics. Their small size, reliability, and efficiency have made them essential for a wide range of technologies, from consumer electronics to military and aerospace applications.
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
