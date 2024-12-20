'use client';

import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';

const quizQuestions = [
  {
    "question": "What marked the beginning of rapid development in chemical industries?",
    "options": [
      "The discovery of synthetic fibers",
      "The industrial revolution of the 19th century",
      "The development of plastics",
      "The use of rare-earth metals"
    ],
    "correctAnswer": 1,
    "hint": "The industrial revolution was the period when chemical industries started to develop rapidly."
  },
  {
    "question": "Which of the following is a product produced by chemical industries?",
    "options": [
      "Synthetic fibers",
      "Metal ores",
      "Coal",
      "Crude oil"
    ],
    "correctAnswer": 0,
    "hint": "Chemical industries produce synthetic fibers, along with many other products like plastics and fertilizers."
  },
  {
    "question": "What is one of Ethiopia’s key natural resources for industrial chemistry?",
    "options": [
      "Iron",
      "Synthetic fibers",
      "Coal",
      "Plastics"
    ],
    "correctAnswer": 0,
    "hint": "Ethiopia has abundant mineral resources such as iron, which can be utilized for industrial purposes."
  },
  {
    "question": "What is the main role of industrial chemistry?",
    "options": [
      "To create products beneficial to humanity through chemical processes",
      "To study the theoretical aspects of chemical reactions",
      "To promote sustainable agriculture",
      "To explore biological reactions"
    ],
    "correctAnswer": 0,
    "hint": "Industrial chemistry transforms raw materials into products that meet human needs, bridging theory with commercial applications."
  },
  {
    "question": "Which of the following best describes industrial chemistry?",
    "options": [
      "A branch of chemistry focused on commercial applications",
      "A method to enhance agricultural productivity",
      "A field studying biological processes",
      "A process limited to academic research"
    ],
    "correctAnswer": 0,
    "hint": "Industrial chemistry is focused on transforming raw materials into useful products for humanity."
  },
  {
    "question": "Which of the following is NOT a key feature of chemical industries?",
    "options": [
      "Use of chemical reactions to transform raw materials",
      "Employing biological processes to produce products",
      "Testing products for quality control",
      "Consuming large quantities of energy"
    ],
    "correctAnswer": 1,
    "hint": "Chemical industries rely on chemical processes, not biological processes, to create products."
  },
  {
    "question": "What is one of the key features of chemical industries related to product manufacturing?",
    "options": [
      "They consume large quantities of energy during manufacturing",
      "They only use renewable energy sources",
      "They avoid testing products for quality",
      "They focus on producing biological products"
    ],
    "correctAnswer": 0,
    "hint": "Chemical industries require significant energy during the manufacturing process."
  },
  {
    "question": "What do chemical industries do in their quality control laboratories?",
    "options": [
      "Test products to ensure they meet required specifications",
      "Design new chemical reactions",
      "Develop new raw materials",
      "Recycle products"
    ],
    "correctAnswer": 0,
    "hint": "Testing in quality control ensures that products meet specific standards."
  },
  {
    "question": "Why is industrial chemistry important for developing countries like Ethiopia?",
    "options": [
      "It can help utilize rich mineral resources for large-scale chemical production",
      "It promotes only the development of agriculture",
      "It is mainly focused on luxury product manufacturing",
      "It reduces reliance on imported chemicals"
    ],
    "correctAnswer": 0,
    "hint": "Ethiopia's rich resources can be harnessed for chemical production, contributing to economic growth."
  }
]

export default function IndustrialChemistryIntro() {
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
      <h1 className="text-3xl font-bold mb-6">Unit 3: Industrial Chemistry</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3.1 Introduction</h2>
      <p>
        The industrial revolution of the 19th century marked the rapid development of chemical industries. This period saw a surge
        in the demand for goods produced through chemical processes. Today, chemical industries across the world, in both developed
        and developing countries, produce a vast array of useful products such as synthetic fibers, plastics, rubber, fertilizers,
        dyes, drugs, and many others.
      </p>

      <p>
        Chemistry and chemical technology are crucial for economic growth and development, especially in developing countries like
        Ethiopia. Ethiopia is rich in mineral resources, including metal ores such as iron, lead, copper, gold, platinum, tantalum,
        and rare-earth metals. Additionally, resources like rock salt, gypsum, coal, and crude oil are also found. To fully utilize
        these resources, Ethiopia needs an industrial revolution to produce various chemicals on a large scale.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">What is Industrial Chemistry?</h3>
      <p>
        Industrial chemistry is a branch of chemistry that applies physical and chemical procedures to transform natural raw
        materials and their derivatives into products that are beneficial to humanity. It bridges the gap between academic chemistry
        and its commercial applications.
      </p>

      <p>
        Industrial chemistry serves as the foundation of the chemical industry. The chemical industry produces a variety of
        essential goods, including food, medicines, building materials, and plastics. It involves the use of chemical processes,
        such as chemical reactions and refining methods, to create materials with desirable properties and quality that satisfy
        societal needs. These products may either be used directly by consumers or serve as inputs for other chemical industries.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Key Features of Chemical Industries</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Utilize naturally or artificially available raw materials to produce desired products.</li>
        <li>Employ chemical reactions to transform raw materials into finished and semi-finished products.</li>
        <li>Consume large quantities of energy during the manufacturing process.</li>
        <li>Follow safe operation methods in their manufacturing processes.</li>
        <li>
          Test their products during and after manufacturing in quality control laboratories to ensure they meet the required
          specifications.
        </li>
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






































