'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What are the two main types of signals encountered in electronics and telecommunications?",
    "options": [
      "Analog and Digital",
      "Electrical and Mechanical",
      "Static and Dynamic",
      "Continuous and Discrete"
    ],
    "correctAnswer": 0,
    "hint": "Signals in electronics can be categorized as either analog or digital."
  },
  {
    "question": "In positive logic, what does a high voltage signal represent?",
    "options": [
      "FALSE",
      "OFF",
      "1 (TRUE)",
      "0 (FALSE)"
    ],
    "correctAnswer": 2,
    "hint": "In positive logic, a high voltage signal corresponds to a TRUE state."
  },
  {
    "question": "What is the function of a NOT gate in digital circuits?",
    "options": [
      "Adds two inputs together",
      "Inverts the input signal",
      "Combines multiple OR operations",
      "Amplifies the signal"
    ],
    "correctAnswer": 1,
    "hint": "The NOT gate changes a 0 input to 1 and a 1 input to 0."
  },
  {
    "question": "What is the Boolean expression for an OR gate?",
    "options": [
      "y = A · B",
      "y = A + B",
      "y = A - B",
      "y = A / B"
    ],
    "correctAnswer": 1,
    "hint": "An OR gate outputs 1 if at least one input is 1."
  },
  {
    "question": "What is a key disadvantage of the NAND gate in comparison to other logic gates?",
    "options": [
      "Always produces a high output",
      "Inverse output of the AND gate",
      "Cannot handle low voltage inputs",
      "Not suitable for large-scale operations"
    ],
    "correctAnswer": 1,
    "hint": "The NAND gate is a combination of an AND gate followed by a NOT operation."
  },
  {
    "question": "What type of signal varies continuously over time?",
    "options": [
      "Digital",
      "Discrete",
      "Analog",
      "Binary"
    ],
    "correctAnswer": 2,
    "hint": "Analog signals represent continuous quantities, unlike digital signals which have discrete states."
  },
  {
    "question": "Which digital component in a positive logic system is ON when the switch is closed?",
    "options": [
      "Circuit 0",
      "Circuit 1",
      "Circuit 2",
      "Circuit 3"
    ],
    "correctAnswer": 1,
    "hint": "In a positive logic system, a high voltage state indicates a TRUE or ON condition."
  },
  {
    "question": "What Boolean expression represents the NOR gate?",
    "options": [
      "y = A + B",
      "y = A · B",
      "y = \u00AF(A + B)",
      "y = A - B"
    ],
    "correctAnswer": 2,
    "hint": "A NOR gate inverts the OR operation output in digital circuits."
  },
  {
    "question": "What type of logic do most digital circuits in computers rely on?",
    "options": [
      "Analog logic",
      "Mechanical logic",
      "Digital logic",
      "Electrical logic"
    ],
    "correctAnswer": 2,
    "hint": "Digital circuits operate using 0s and 1s for representing data and performing operations."
  },
  {
    "question": "What is the main advantage of using integrated logic gates in a digital system?",
    "options": [
      "Reduced size and higher speed",
      "Higher energy consumption",
      "Manual wiring of circuits",
      "Increased mechanical connections"
    ],
    "correctAnswer": 0,
    "hint": "Integrated logic gates reduce physical size and offer higher speed and efficiency."
  }
]

export default function LogicGates() {
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
      <h1 className="text-3xl font-bold mb-6">5.6 Logic Gates and Logic Circuits</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Digital and Analog Signals</h2>
      <div>
        In electronics and telecommunications, "signal" refers to any time-varying voltage, current, or electromagnetic wave that carries information. Two main types of signals encountered in practice are analog and digital.
      </div>
      <div>
        An analog signal is any continuous signal representing some time-varying quantity. The voltage signals, which vary continuously with time, are called continuous or analog voltage signals. An example is shown in Figure 5.24, where the voltage varies sinusoidally from 0 to 5V. An analog signal carries a smooth wave, meaning that at any point in time, the voltage can take any value.
      </div>
      <div>
        A digital signal is one that represents data using discrete values, typically 0 or 1. Digital signals are represented by two voltage levels: low (0) and high (1), often corresponding to ground (0V) and supply voltage (e.g., 5V). These signals are used in most digital circuits, which include computers, where information is encoded in sequences of 0s and 1s.
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Positive and Negative Logic</h2>
      <div>
        In computing systems, the binary number symbols ’0’ and ’1’ represent two possible states of a circuit or an electronic device.
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">Positive Logic</h3>
      <table className="table-auto border-collapse w-full mb-4">
        <thead>
          <tr>
            <th className="border p-2">Circuit</th>
            <th className="border p-2">Switch</th>
            <th className="border p-2">Voltage</th>
            <th className="border p-2">Sign</th>
            <th className="border p-2">Statement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">on</td>
            <td className="border p-2">high</td>
            <td className="border p-2">plus</td>
            <td className="border p-2">TRUE</td>
          </tr>
          <tr>
            <td className="border p-2">0</td>
            <td className="border p-2">off</td>
            <td className="border p-2">low</td>
            <td className="border p-2">minus</td>
            <td className="border p-2">FALSE</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-6 mb-4">Negative Logic</h3>
      <table className="table-auto border-collapse w-full mb-4">
        <thead>
          <tr>
            <th className="border p-2">Circuit</th>
            <th className="border p-2">Switch</th>
            <th className="border p-2">Voltage</th>
            <th className="border p-2">Sign</th>
            <th className="border p-2">Statement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">off</td>
            <td className="border p-2">low</td>
            <td className="border p-2">minus</td>
            <td className="border p-2">FALSE</td>
          </tr>
          <tr>
            <td className="border p-2">0</td>
            <td className="border p-2">on</td>
            <td className="border p-2">high</td>
            <td className="border p-2">plus</td>
            <td className="border p-2">TRUE</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Logic Gates</h2>
      <div>
        Digital electronics involve circuits that use digital signals, unlike analog electronics which work with continuous signals. Logic gates are the building blocks of digital electronics and are used to process these signals. A logic gate transforms an input signal into an output signal based on a defined logical relationship.
      </div>
      <div>
        The logical statements followed by these gates are known as Boolean expressions. The fundamental gates are:
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">OR Gate</h3>
      <div>
        The OR gate is represented by the Boolean expression:
        <div className='overflow-x-auto text-wrap text-xs'>
          <BlockMath math="y = A + B" />
        </div>
        The output is 1 if either input A or B is 1. The truth table for an OR gate is:
      </div>
      <div>
        - If both switches A and B are open, the lamp is OFF (0).<br />
        - If switch A is closed, switch B is open, the lamp is ON (1).<br />
        - If switch A is open, switch B is closed, the lamp is ON (1).<br />
        - If both switches are closed, the lamp is ON (1).
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">AND Gate</h3>
      <div>
        The AND gate follows the Boolean expression:
        <div className='overflow-x-auto text-wrap text-xs'>
          <BlockMath math="y = A \cdot B" />
        </div>
        The output is 1 only if both inputs A and B are 1. The truth table for an AND gate is:
      </div>
      <div>
        - If both switches A and B are open, the lamp is OFF (0).<br />
        - If switch A is closed and B is open, the lamp is OFF (0).<br />
        - If switch A is open and B is closed, the lamp is OFF (0).<br />
        - If both switches are closed, the lamp is ON (1).
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">NOT Gate</h3>
      <div>
        The NOT gate inverts its input and is represented by the Boolean expression:
        <div className='overflow-x-auto text-wrap text-xs'>
          <BlockMath math="y = \overline{A}" />
        </div>
        It inverts the input signal. If A is 0, the output is 1, and if A is 1, the output is 0.
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">NOR Gate</h3>
      <div>
        A NOR gate combines an OR gate and a NOT gate, with the Boolean expression:
        <div className='overflow-x-auto text-wrap text-xs'>
          <BlockMath math="y = \overline{A + B}" />
        </div>
        It inverts the output of the OR gate. If both switches A and B are open, the lamp is ON (1), but for other conditions, it is OFF (0).
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">NAND Gate</h3>
      <div>
        The NAND gate is a combination of an AND gate followed by a NOT gate, and follows the Boolean expression:
        <div className='overflow-x-auto text-wrap text-xs'>
          <BlockMath math="y = \overline{A \cdot B}" />
        </div>
        The output is the inverse of the AND gate's output. If both switches are closed, the lamp is OFF (0), but otherwise, it is ON (1).
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">Conclusion</h3>
      <div>
        Logic gates are the fundamental components of digital circuits, and they are used to perform basic logical operations. Understanding their behavior and applications is key to designing digital systems.
      </div>
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
