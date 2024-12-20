'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is the primary function of a transistor in an electronic circuit?",
    "options": [
      "To amplify or switch electronic signals",
      "To block electrical current",
      "To store electrical energy",
      "To decrease voltage levels"
    ],
    "correctAnswer": 0,
    "hint": "Transistors amplify or switch signals by controlling electron flow."
  },
  {
    "question": "Which two main types of transistors are mentioned in this section?",
    "options": [
      "BJT and MOSFET",
      "BJT and FET",
      "BJT and PNP",
      "BJT and NPN"
    ],
    "correctAnswer": 1,
    "hint": "This section specifically discusses bipolar junction transistors (BJT) and field-effect transistors (FET)."
  },
  {
    "question": "What are the majority current carriers in a PNP transistor?",
    "options": [
      "Electrons",
      "Protons",
      "Holes",
      "Neutrons"
    ],
    "correctAnswer": 2,
    "hint": "In a PNP transistor, the majority current carriers are holes, which flow towards the base region."
  },
  {
    "question": "Which transistor configuration provides both current and voltage gain?",
    "options": [
      "Common-Base (CB)",
      "Common-Collector (CC)",
      "Common-Emitter (CE)",
      "Base-Emitter (BE)"
    ],
    "correctAnswer": 2,
    "hint": "The Common-Emitter (CE) configuration is known to provide both current and voltage gain."
  },
  {
    "question": "What are the main applications of transistors in modern electronics?",
    "options": [
      "Amplification of electrical signals",
      "Switching operations",
      "Forming logic gates",
      "All of the above"
    ],
    "correctAnswer": 3,
    "hint": "Transistors amplify signals, switch currents, and form logic gates in modern electronic devices."
  },
  {
    "question": "Which terminal configuration is used in the Common-Collector (CC) transistor setup?",
    "options": [
      "Base-Collector",
      "Emitter-Base",
      "Base-Emitter",
      "Base-Collector-Emitter"
    ],
    "correctAnswer": 2,
    "hint": "In a Common-Collector (CC) setup, the input is applied between the base and collector, and output is taken from the emitter and collector terminal."
  },
  {
    "question": "How does a transistor act as a switch in electronic devices?",
    "options": [
      "By storing electrical energy",
      "By blocking and allowing current flow",
      "By amplifying only weak signals",
      "By decreasing voltage to zero"
    ],
    "correctAnswer": 1,
    "hint": "A transistor can block or allow the flow of electrical current, functioning as an electronic switch."
  },
  {
    "question": "Why are transistors considered essential components in modern electronics?",
    "options": [
      "They block electrical signals completely",
      "They amplify signals and control current flow",
      "They only work in low-power applications",
      "They reduce circuit complexity by using fewer components"
    ],
    "correctAnswer": 1,
    "hint": "Transistors amplify signals and control current flow, forming the foundation of modern technological devices."
  }
]

export default function TransistorsAndApplications() {
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
      <h1 className="text-3xl font-bold mb-6">5.4 Transistors and Their Application</h1>

      <p>
        A Transistor is a semiconductor device used to amplify or switch electronic signals. It is an essential component in an electronic circuit.
      </p>
      <p>
        Transistors are classified into two types: bipolar junction transistors (BJT) and field effect transistors (FET). In this section, you will learn about BJTs.
      </p>
      <p>
        When a third layer is added to a semiconductor diode, a BJT is produced. The term, transistor, will now be used for a BJT. A transistor is a three terminal, two-junction device used to control electron flow. By varying the amount of voltage applied to the three terminals, the amount of current can be controlled. This is how transistors can be used for amplification or switching.
      </p>

      <p>
        A transistor consists of three alternately doped regions. The three regions are arranged in one of two ways. In the first method, the P-type material is sandwiched between two N-type materials, forming an NPN transistor. In the second method, a layer of N-type material is sandwiched between two layers of P-type material, forming a PNP transistor.
      </p>
      <p>
        In both types of transistor, the middle region is called the base and the outer regions are called the emitter and collector. The emitter, base, and collector are identified by the letters E, B, and C, respectively.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Basic Transistor Operation</h2>
      
      <p>
        A transistor must be biased by external voltages so that the emitter, base, and collector regions interact in the desired manner. In a properly biased transistor, the emitter junction is forward biased and the collector junction is reverse biased.
      </p>
      <p>
        The emitter in an NPN transistor is connected to the negative terminal of the battery while the base is connected to the positive terminal. Since the second P-N junction is required to be reverse biased for proper transistor operation, the collector must be connected to an opposite polarity voltage (positive).
      </p>
      
      <h3 className="text-xl font-semibold mt-6 mb-4">PNP Transistor</h3>
      <p>
        The PNP transistor works in essentially the same way as the NPN transistor. The majority current carriers in the PNP transistor are holes. To support this different type of current (hole flow), the bias batteries are reversed.
      </p>
      <p>
        The emitter current is created when the emitter-base junction is forward biased, and the emitter pushes the holes towards the base region. When the holes move into the base, they combine with the electrons.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Transistor Configurations</h2>
      <p>
        There are three possible ways to connect a transistor in an electronic circuit with one terminal being common to both the input and output signal. These configurations are:
      </p>
      <ul className="list-disc pl-6">
        <li><strong>Common-Emitter (CE)</strong>: The input signal is applied between the base and emitter terminal, and the output is taken between the collector and emitter terminal. This configuration provides both current and voltage gain.</li>
        <li><strong>Common-Collector (CC)</strong>: The input signal is applied between the base and collector terminal, and the output is taken between the emitter and collector terminal. It provides good current gain but no voltage gain.</li>
        <li><strong>Common-Base (CB)</strong>: The input signal is applied between the emitter and base terminal, and the output signal comes from the collector and base terminal. It has voltage gain but no current gain.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Transistor Applications</h2>
      <p>
        The main applications of transistors are amplification of electrical signals and switching. Transistors are used in nearly all modern electronic devices such as computers, smartphones, tablets, smartwatches, etc., where they act as switches.
      </p>
      <p>
        Transistors can amplify an electronic signal, where a weak signal applied in the input circuit appears in the amplified form in the output circuit. They can also be combined to form a logic gate that compares multiple input currents to provide a different output.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Conclusion</h3>
      <p>
        Transistors are essential components in modern electronics. Their ability to amplify signals and act as switches makes them integral to devices ranging from logic gates to microprocessors. The manipulation of current flow through transistors is the basis of countless technological innovations.
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
