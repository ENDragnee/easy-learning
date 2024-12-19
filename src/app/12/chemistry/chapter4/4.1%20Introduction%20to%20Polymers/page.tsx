'use client';

import { useState } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is the definition of a polymer?",
    "options": [
      "A molecule built from many repeating smaller molecules",
      "A single large molecule",
      "A molecule composed of only one type of atom",
      "A type of natural substance"
    ],
    "correctAnswer": 0,
    "hint": "A polymer is made up of many repeating smaller molecules."
  },
  {
    "question": "What is the Greek meaning of the word 'polymer'?",
    "options": [
      "Many parts",
      "Single unit",
      "Basic structure",
      "Chemical reaction"
    ],
    "correctAnswer": 0,
    "hint": "The term comes from the Greek words 'poly' meaning many and 'meros' meaning part."
  },
  {
    "question": "Which of the following is an example of a polymer?",
    "options": [
      "Polyethylene",
      "Glucose",
      "Amino acids",
      "Water"
    ],
    "correctAnswer": 0,
    "hint": "Polyethylene is a well-known polymer used in many applications."
  },
  {
    "question": "What is the basic building block of polymers?",
    "options": [
      "Monomers",
      "Polymers",
      "Proteins",
      "Amino acids"
    ],
    "correctAnswer": 0,
    "hint": "Polymers are made from small molecules called monomers."
  },
  {
    "question": "Which of the following is a monomer for cellulose?",
    "options": [
      "Glucose",
      "Ethylene",
      "Amino acid",
      "Protein"
    ],
    "correctAnswer": 0,
    "hint": "Glucose is the monomer that forms cellulose."
  },
  {
    "question": "What type of molecule is formed when ethylene undergoes polymerization?",
    "options": [
      "Polyethylene",
      "Proteins",
      "Wood",
      "Amino acids"
    ],
    "correctAnswer": 0,
    "hint": "Ethylene is the monomer for polyethylene."
  },
  {
    "question": "What is the degree of polymerization (DP)?",
    "options": [
      "The number of repeat units in the polymer",
      "The mass of the polymer",
      "The type of monomer used",
      "The chemical reaction used to make the polymer"
    ],
    "correctAnswer": 0,
    "hint": "DP refers to the number of repeat units in a polymer molecule."
  },
  {
    "question": "Which of the following is NOT a polymer?",
    "options": [
      "Protein",
      "Wood (cellulose)",
      "Polyethylene",
      "Glucose"
    ],
    "correctAnswer": 3,
    "hint": "Glucose is a monomer, not a polymer."
  },
  {
    "question": "How many monomers typically make up a polymer?",
    "options": [
      "More than 100",
      "Less than 10",
      "Exactly 50",
      "Only one"
    ],
    "correctAnswer": 0,
    "hint": "A polymer usually consists of more than 100 monomers."
  },
  {
    "question": "What happens to the polymer's structure when it is highly branched?",
    "options": [
      "It forms a three-dimensional network",
      "It becomes linear",
      "It forms a ring structure",
      "It splits into smaller pieces"
    ],
    "correctAnswer": 0,
    "hint": "Highly branched polymers form a large three-dimensional network."
  }
]

export default function IntroductionToPolymers() {
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
      <h1 className="text-3xl font-bold mb-6">4.1 Introduction to Polymers</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Polymer</h2>
      <p>
        The word polymer is derived from the Greek words 'poly' meaning many and 'meros' meaning part. It follows that this term applies to giant molecules built up of large numbers of interconnected repeating units. A polymer is a large chainlike molecule built up from many repeating smaller molecules.
      </p>
      <p>
        A polymer is generally comprised of more than 100 monomers; structures with lower numbers of monomers are known as oligomers. These polymers or oligomers may be linear, slightly branched, or highly interconnected. In the branched case, the structure develops into a large three-dimensional network. With few exceptions, the repeat unit in the polymer usually corresponds to the monomer from which the polymer was made. The size of a polymer molecule may be defined either by its mass or by the number of repeat units in the molecule. This latter indicator of size is called the degree of polymerization (DP). The relative molar mass of the polymer is thus the product of the relative molar mass of the repeat unit and the DP.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Polymerization Reactions</h2>
      <p>Examples of polymers are:</p>
      <ul className="list-disc ml-8">
        <li>Polyethylene</li>
        <li>Wood (cellulose)</li>
        <li>Protein</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Monomers</h2>
      <p>
        The small molecules used as the basic building blocks for polymers are known as monomers. Mono means one.
      </p>
      <p>Examples of monomers are:</p>
      <ul className="list-disc ml-8">
        <li>Glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) – a monomer for cellulose (wood)</li>
        <li>Ethylene – a monomer for polyethylene</li>
        <li>Amino acid (NH<sub>2</sub>CH(R)(COOH)) – a monomer for protein</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4">Example 4.1 - Examples of Polymers</h3>
      <p>
        Some examples of polymers include polyethylene, cellulose (wood), and proteins. These are the key materials derived from monomers to create long-chain molecules essential in various industrial applications.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Example 4.2 - Monomers</h3>
      <p>
        The basic building blocks of polymers are monomers. For instance, glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) is the monomer for cellulose, ethylene is the monomer for polyethylene, and amino acids form proteins.
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
