'use client';

import { useState } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "Which of the following is NOT a source of natural resources for the chemical industry?",
    "options": [
      "Atmosphere",
      "Hydrosphere",
      "Biosphere",
      "Artificial products"
    ],
    "correctAnswer": 3,
    "hint": "Natural resources for the chemical industry come from the atmosphere, hydrosphere, lithosphere, and biosphere."
  },
  {
    "question": "What is the approximate amount of gases found in the Earth's atmosphere used in industry?",
    "options": [
      "5 × 10^15 tons",
      "1.5 × 10^21 liters",
      "3.5% dissolved materials by mass",
      "1.5 × 10^10 tons"
    ],
    "correctAnswer": 0,
    "hint": "The Earth's atmosphere contains approximately 5 × 10^15 tons of gases like N₂, O₂, CO₂, and others."
  },
  {
    "question": "From which sphere of the Earth are mineral ores and hydrocarbons like coal and natural gas derived?",
    "options": [
      "Atmosphere",
      "Lithosphere",
      "Hydrosphere",
      "Biosphere"
    ],
    "correctAnswer": 1,
    "hint": "Mineral ores and hydrocarbons are extracted from the Earth's crust, which is part of the lithosphere."
  },
  {
    "question": "What is an example of a renewable natural resource?",
    "options": [
      "Coal",
      "Oil",
      "Wood",
      "Gold"
    ],
    "correctAnswer": 2,
    "hint": "Renewable resources, like wood, can be replenished through natural cycles."
  },
  {
    "question": "Which of the following is a non-renewable resource?",
    "options": [
      "Solar energy",
      "Water",
      "Coal",
      "Soil"
    ],
    "correctAnswer": 2,
    "hint": "Non-renewable resources, such as coal, cannot be naturally regenerated once consumed."
  },
  {
    "question": "Which type of industry focuses on producing goods from raw materials through organized labor?",
    "options": [
      "Agriculture",
      "Transportation",
      "Manufacturing",
      "Hospitality"
    ],
    "correctAnswer": 2,
    "hint": "Manufacturing industries transform raw materials into finished goods through systematic processes."
  },
  {
    "question": "Which of the following is NOT classified under manufacturing industries?",
    "options": [
      "Food processing",
      "Beverage industries",
      "Textile industries",
      "Pharmaceutical industries"
    ],
    "correctAnswer": 3,
    "hint": "Pharmaceutical industries are not listed under the traditional manufacturing industries such as food and textiles."
  },
  {
    "question": "What is a key characteristic of the chemical industry?",
    "options": [
      "It focuses on agriculture production",
      "It involves chemical reactions between organic and inorganic materials",
      "It manufactures only renewable resources",
      "It produces mainly raw materials"
    ],
    "correctAnswer": 1,
    "hint": "The chemical industry involves chemical reactions and processes to manufacture industrial chemicals and materials."
  }
]

export default function NaturalResourcesIndustry() {
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
      <h1 className="text-3xl font-bold mb-6">3.2 Natural Resources and Industry</h1>

      <h2 className="text-2xl font-semibold mb-4">Natural Resources</h2>
      <p>
        Natural resources are raw materials obtained from the natural environment, serving as essential inputs for the chemical
        industry. These resources are derived from various components of the environment:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>
          <strong>From the atmosphere:</strong> The Earth's atmosphere contains approximately <InlineMath>{'5 \\times 10^{15}'}</InlineMath> tons of gases
          like <InlineMath>{'N_2, O_2, CO_2, Ne, Ar, Kr, \\text{and } Xe'}</InlineMath>. These gases are vital industrial raw materials with an
          essentially unlimited natural supply.
        </li>
        <li>
          <strong>From the hydrosphere:</strong> Ocean water, amounting to approximately <InlineMath>{'1.5 \\times 10^{21}'}</InlineMath> liters, contains
          3.5% dissolved materials by mass, serving as a source of sodium chloride, magnesium, and bromine.
        </li>
        <li>
          <strong>From the lithosphere:</strong> The Earth's crust provides mineral ores, carbon, and hydrocarbons such as coal, natural gas, and crude
          petroleum, which are not only energy sources but also precursors for countless chemicals.
        </li>
        <li>
          <strong>From the biosphere:</strong> Vegetation and animals supply raw materials for agro-based industries, such as oils, fats, waxes, resins,
          sugar, fibers, and leather.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4">Classification of Natural Resources</h3>
      <p>
        Natural resources are categorized as renewable and non-renewable resources based on their ability to regenerate or replenish.
      </p>

      <h4 className="text-lg font-medium mb-2">Renewable Resources</h4>
      <p>
        Renewable resources are replenished through natural cycles and can increase in abundance through reproduction or simple
        substance utilization. Examples include plants, animals, wood, water, soil, and solar energy.
      </p>

      <h4 className="text-lg font-medium mt-4 mb-2">Non-Renewable Resources</h4>
      <p>
        Non-renewable resources cannot be regenerated naturally. They are finite and include fossil fuels (petrol, coal), metals
        (iron, copper, gold), and minerals (carbonates, phosphates). Once consumed, they are gone forever.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Industry</h2>
      <p>
        An industry is a well-organized facility where large-scale manufacturing of goods occurs, often involving high degrees of
        automation and specialization. It may also include commercial activities such as agriculture, transportation, and hospitality.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Manufacturing Industry</h3>
      <p>
        The manufacturing industry focuses on producing goods from raw materials through organized labor and systematic processes.
      </p>

      <h4 className="text-lg font-medium mt-4 mb-2">Classification of Manufacturing Industry</h4>
      <p>
        Manufacturing industries vary in raw materials, skills, and technologies, leading to diverse product categories, such as:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>Food processing industries</li>
        <li>Beverage industries</li>
        <li>Textile industries</li>
        <li>Wearing apparel industries</li>
        <li>Leather industries</li>
        <li>Paper and chemical industries</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4">Chemical Industry</h3>
      <p>
        The chemical industry involves the manufacturing of industrial chemicals through:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>Chemical reactions between organic or inorganic materials</li>
        <li>Extraction, separation, or purification of natural products</li>
        <li>Preparation of valuable materials</li>
      </ul>
      <h4 className="text-lg font-medium mt-4 mb-2">Classification of Chemical Industry</h4>
      <p><strong>Based on raw materials:</strong></p>
      <ul className="list-disc list-inside ml-4">
        <li>Sugar industries use sugarcane for sugar production.</li>
        <li>Detergent industries use preprocessed products like caustic soda.</li>
      </ul>
      <p><strong>Based on product types:</strong></p>
      <ul className="list-disc list-inside ml-4">
        <li>Food processing</li>
        <li>Beverages</li>
        <li>Textiles</li>
        <li>Leather products</li>
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

