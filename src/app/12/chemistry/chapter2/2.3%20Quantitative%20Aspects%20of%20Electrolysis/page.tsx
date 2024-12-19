'use client';

import { useState } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "Who developed the quantitative treatment of electrolysis?",
    "options": [
      "Michael Faraday",
      "Alessandro Volta",
      "Dmitri Mendeleev",
      "James Clerk Maxwell"
    ],
    "correctAnswer": 0,
    "hint": "Michael Faraday's research in 1834 laid the foundation for understanding the quantitative aspects of electrolysis."
  },
  {
    "question": "According to Faraday's First Law of Electrolysis, what is directly proportional to the quantity of electricity passed through the electrolyte?",
    "options": [
      "The mass of the substance deposited or dissolved",
      "The voltage applied",
      "The temperature change",
      "The speed of the reaction"
    ],
    "correctAnswer": 0,
    "hint": "Faraday’s First Law states that the mass of a substance is directly proportional to the quantity of electricity passed."
  },
  {
    "question": "What is the formula for calculating the mass of a substance deposited in electrolysis, based on Faraday's First Law?",
    "options": [
      "m = zQ",
      "m = I t / F",
      "m = MI t / n F",
      "m = Q / I"
    ],
    "correctAnswer": 2,
    "hint": "The mass of a substance deposited is calculated using the formula m = MI t / n F."
  },
  {
    "question": "What does the symbol 'E' represent in Faraday's First Law equation?",
    "options": [
      "Equivalence weight of the substance",
      "Electrochemical constant",
      "Energy consumed",
      "Electrode potential"
    ],
    "correctAnswer": 0,
    "hint": "In Faraday’s First Law, 'E' refers to the equivalent weight of the substance being electrolyzed."
  },
  {
    "question": "What is the Faraday constant (F) value in electrolysis calculations?",
    "options": [
      "96,500 Coulombs",
      "6.022 x 10²³",
      "1.602 x 10⁻¹⁹ C",
      "8.314 J/mol·K"
    ],
    "correctAnswer": 0,
    "hint": "Faraday's constant is 96,500 Coulombs, which relates to the charge of one mole of electrons."
  },
  {
    "question": "According to Faraday’s Second Law of Electrolysis, the masses of different substances liberated by the same quantity of electricity are proportional to what?",
    "options": [
      "Their equivalent masses",
      "Their molecular masses",
      "Their atomic radii",
      "Their ionization energies"
    ],
    "correctAnswer": 0,
    "hint": "Faraday’s Second Law states that the masses of substances are proportional to their equivalent masses when the same quantity of electricity is passed."
  },
  {
    "question": "What happens when the same quantity of electric current is passed through solutions of H₂SO₄, CuSO₄, and AgNO₃ connected in series?",
    "options": [
      "Hydrogen and oxygen are liberated in H₂SO₄, copper is deposited from CuSO₄, and silver is deposited from AgNO₃.",
      "Copper is deposited from CuSO₄, silver from AgNO₃, and oxygen from H₂SO₄.",
      "Only hydrogen is liberated in H₂SO₄, and silver is deposited from AgNO₃.",
      "No reaction occurs in H₂SO₄ and CuSO₄."
    ],
    "correctAnswer": 0,
    "hint": "In the series arrangement, the substances are decomposed or deposited based on their respective equivalent masses."
  },
  {
    "question": "What is the relationship between the mass of hydrogen and copper liberated during electrolysis according to Faraday’s Second Law?",
    "options": [
      "The mass of hydrogen is to the mass of copper as the equivalent mass of hydrogen is to the equivalent mass of copper.",
      "The mass of hydrogen is equal to the mass of copper.",
      "The mass of hydrogen is greater than the mass of copper.",
      "The mass of hydrogen is less than the mass of copper."
    ],
    "correctAnswer": 0,
    "hint": "Faraday's Second Law states that the ratio of masses is equal to the ratio of their equivalent masses."
  }
]

export default function QuantitativeAspectsOfElectrolysis() {
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
      <h1 className="text-3xl font-bold mb-6">2.3 Quantitative Aspects of Electrolysis</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Is it possible to calculate the amount of product formed at the electrodes?</h2>
      <div>
        The quantitative treatment of electrolysis was developed primarily by Michael Faraday in the year 1834. His early research on electrolysis led him to propose a relationship between the amount of current passed through a solution and the amount of substance decomposed or produced by the current.
      </div>

      <h2 className="text-2xl font-semibol1d mt-6 mb-4">Faraday's First Law of Electrolysis</h2>
      <div>
        Faraday’s First Law of Electrolysis states that when an electrolyte, either in molten state or solution state, is electrolyzed, the mass of a substance (m) deposited or dissolved at the electrodes is directly proportional to the quantity of electricity (coulombs, Q) passed through the electrolyte.
      </div>
      <div className="mt-4">
        Mathematically, <InlineMath math="m \propto Q" /> or <InlineMath math="m = z Q" />, where <InlineMath math="z" /> is a proportionality constant called electrochemical equivalent.
      </div>
      <div className="mt-4">
        Since <InlineMath math="z = \frac{E}{F}" /> and <InlineMath math="Q = It" />, we can rewrite the equation as:
      </div>
      <div className="mt-4">
        <BlockMath math="m = \frac{EI t}{F}" />
      </div>
      <div>
        Where:
        <ul className="list-disc pl-5 mt-4">
          <li><strong>E</strong> = equivalent weight of substance</li>
          <li><strong>F</strong> = Faraday Constant (96,500 Coulombs)</li>
          <li><strong>m</strong> = mass of substance</li>
          <li><strong>I</strong> = current in amperes</li>
          <li><strong>t</strong> = time required</li>
        </ul>
      </div>
      <div className="mt-4">
        The equivalent weight of a substance is given by <InlineMath math="E = \frac{M}{n}" />, where:
        <ul className="list-disc pl-5 mt-4">
          <li><strong>M</strong> = molecular mass</li>
          <li><strong>n</strong> = valence</li>
        </ul>
        Thus, the equation becomes:
        <BlockMath math="m = \frac{MI t}{n F}" />
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Faraday’s Second Law of Electrolysis</h2>
      <div>
        Faraday’s second law of electrolysis states that the masses of different substances, liberated or dissolved by the same amount of electricity, are proportional to their equivalent masses. When the same quantity of electricity is passed through several electrolytic solutions connected in series, the masses of the different materials liberated or dissolved (m₁, m₂, m₃...) at the respective electrodes are in the ratio of their equivalent masses (E₁, E₂, E₃...).
      </div>
      <div className="mt-4">
        Mathematically, <InlineMath math="m \propto E" /> or <InlineMath math="m_1 \propto E_1, m_2 \propto E_2, m_3 \propto E_3" />.
      </div>
      <div className="mt-4">
        Replacing the proportionality by the proportionality constant, the equation becomes:
        <BlockMath math="\frac{m_1}{E_1} = \frac{m_2}{E_2} = \frac{m_3}{E_3}" />
      </div>
      <div>
        This law can be illustrated by passing the same quantity of electric current through three solutions containing H₂SO₄, CuSO₄, and AgNO₃, connected in series. In the first solution, hydrogen and oxygen are liberated; in the second solution, copper is deposited; and in the third, silver is deposited.
      </div>

      <div className="mt-4">
        The mass of hydrogen is to the mass of copper as the equivalent mass of hydrogen is to the equivalent mass of copper, and similarly for silver:
        <BlockMath math="\frac{m_{\text{hydrogen}}}{E_{\text{hydrogen}}} = \frac{m_{\text{copper}}}{E_{\text{copper}}} = \frac{m_{\text{silver}}}{E_{\text{silver}}}" />
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-2">Example 2.5</h3>
      <div>
        Example 2.5 demonstrates the application of Faraday's Second Law of Electrolysis.
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
