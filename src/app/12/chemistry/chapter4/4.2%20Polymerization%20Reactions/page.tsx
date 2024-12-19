'use client';

import { useState } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is the process by which monomer units combine to form a polymer?",
    "options": [
      "Polymerization reaction",
      "Condensation reaction",
      "Addition reaction",
      "Decomposition reaction"
    ],
    "correctAnswer": 0,
    "hint": "Monomers join together through a chemical change called polymerization."
  },
  {
    "question": "Which of the following is necessary for a monomer to participate in polymerization?",
    "options": [
      "It must have two or more functional groups",
      "It must be a single molecule",
      "It must have one functional group",
      "It must have no functional groups"
    ],
    "correctAnswer": 0,
    "hint": "Monomers with two or more functional groups can form chemical bonds with other monomers."
  },
  {
    "question": "What type of polymerization forms linear, chain-like polymers?",
    "options": [
      "Addition polymerization",
      "Condensation polymerization",
      "Step-growth polymerization",
      "Cross-linking polymerization"
    ],
    "correctAnswer": 0,
    "hint": "Bifunctional monomers in addition polymerization create linear polymers."
  },
  {
    "question": "Which polymer is formed by the addition polymerization of ethylene molecules?",
    "options": [
      "Polyethylene",
      "Polystyrene",
      "PVC",
      "Polyvinyl acetate"
    ],
    "correctAnswer": 0,
    "hint": "Ethylene polymerizes to form polyethylene."
  },
  {
    "question": "Which of the following steps in addition polymerization involves the initial reactive molecule starting the polymer chain?",
    "options": [
      "Chain initiation",
      "Chain propagation",
      "Chain termination",
      "Polymerization by reaction"
    ],
    "correctAnswer": 0,
    "hint": "The chain initiation step starts with a reactive initiator molecule."
  },
  {
    "question": "What is achieved during the chain termination step in addition polymerization?",
    "options": [
      "The polymerization process stops",
      "The chain grows infinitely",
      "The monomer is consumed",
      "The initiator molecule is neutralized"
    ],
    "correctAnswer": 0,
    "hint": "The termination step neutralizes the reactive center, halting the polymer chain."
  },
  {
    "question": "What type of polymerization involves the release of small molecules like water or methanol?",
    "options": [
      "Condensation polymerization",
      "Addition polymerization",
      "Chain-growth polymerization",
      "Free-radical polymerization"
    ],
    "correctAnswer": 0,
    "hint": "Condensation polymerization releases by-products such as water or methanol."
  },
  {
    "question": "Which of the following is an example of a condensation polymer?",
    "options": [
      "Nylon 66",
      "Polyethylene",
      "Polystyrene",
      "PVC"
    ],
    "correctAnswer": 0,
    "hint": "Nylon 66 is a condensation polymer formed from diamines and dibasic acids."
  },
  {
    "question": "What is the primary use of Dacron, a condensation polymer?",
    "options": [
      "Synthetic fibers and packaging",
      "Rubber for automobile tires",
      "Plastic containers for food",
      "Resistant coatings for metals"
    ],
    "correctAnswer": 0,
    "hint": "Dacron is used in synthetic fibers, bottles, and packaging materials."
  }
]

export default function PolymerizationReactions() {
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
      <h1 className="text-3xl font-bold mb-6">4.2 Polymerization Reactions</h1>

      <p>
        The chemical change by which monomer units combine to form a polymer is known as a polymerization reaction. The essential feature of a monomer is to have two or more functional groups (polyfunctionality). This gives each monomer the capacity to form chemical bonds to at least two other monomer molecules. Bifunctional monomers can form only linear, chainlike polymers. Monomers with higher functionality yield cross-linked, network polymeric products.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Addition Polymerization</h2>
      <p>
        Addition polymerization is a reaction in which a chain reaction adds new monomer units to the growing polymer molecule one at a time. This type of polymerization is also known as chain-growth polymerization. This type of polymerization reaction occurs by those involving unsaturated monomers. For example, the addition polymerization of many ethylene molecules yields polyethylene and that of styrene molecules gives polystyrene.
      </p>

      <p className="text-center">
        <img src="/path/to/ethylene-image.png" alt="Ethylene Polymerization" className="mx-auto my-4" />
      </p>

      <p>
        Note that the molecular formula of a polymer is <InlineMath>{'n'}</InlineMath> times that of the monomer and upon polymerization, the double bond is converted to a single bond. When monomers with triple bonds are used, they are converted to double bonds.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Example 4.3</h2>
      <p>
        The addition polymer polyvinyl chloride (PVC) has the structure:
      </p>

      <p className="text-center">
        <img src="/path/to/pvc-image.png" alt="PVC Polymer" className="mx-auto my-4" />
      </p>

      <p>
        <strong>A.</strong> Draw the structure of the monomer from which PVC is made.
      </p>

      <p>
        <strong>B.</strong> How many monomer units are in a PVC polymer that has a molar mass of 1.33 × 10<sup>5</sup> g/mol?
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Steps of Addition Polymerization</h3>
      <p>  
        The addition polymerization process takes place in three distinct steps:
      </p>

      <ol className="list-decimal pl-6">
        <li>
          <strong>Chain initiation step:</strong> The polymerization process starts with a reactive initiator molecule. The initiator molecules can be a free radical, a cation, or an anion. These reactive centers react readily with other monomers without eliminating the active center.
        </li>
        <li>
          <strong>Chain propagation step:</strong> This is when a monomer adds to the growing chain, with the free radical, cation, or anion transferring to the chain end. High-molar-mass polymers are formed right from the beginning of the reaction.
        </li>
        <li>
          <strong>Chain termination step:</strong> This is when the polymerization process is stopped as the chain reactions do not continue indefinitely. The radical, cation, or anion is “neutralized,” stopping the chain propagation.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Example 4.4: Free Radical Polymerization</h2>
      <h3 className="text-xl font-semibold mt-4 mb-2">1. Chain Initiation</h3>
      <p>
        The free radical on the initiator fragment, shown as <InlineMath>{'Ra∙'}</InlineMath>, attacks the covalent π bond in the monomer, leaving a free radical on the monomer:
      </p>
      <p className="text-center">
        <img src="/path/to/chain-initiation.png" alt="Chain Initiation" className="mx-auto my-4" />
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">2. Chain Propagation</h3>
      <p>
        The monomer <InlineMath>{'CH₂=CH₂'}</InlineMath> adds to the growing chain:
      </p>
      <p className="text-center">
        <img src="/path/to/chain-propagation.png" alt="Chain Propagation" className="mx-auto my-4" />
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">3. Chain Termination</h3>
      <p>
        Termination is achieved when two chains link up. A free radical is destroyed by the combination reaction:
      </p>
      <p className="text-center">
        <img src="/path/to/chain-termination.png" alt="Chain Termination" className="mx-auto my-4" />
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Condensation Polymerization</h2>
      <p>
        Condensation polymerization involves the combination of monomer molecules, with the release of simple molecules like water or methanol as by-products. These products are referred to as condensates. This polymerization is also known as step-growth polymerization. To produce a condensation polymer, the involved monomers must have two or more functional groups. Typical reactions occur between dibasic acids and diamines to form polyamides, or between dibasic acids and diols to form polyesters.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Example of Nylon 66 and Dacron</h3>
      <p>
        Nylon 66 is a copolymer formed from the condensation of 1,6-diaminohexane (hexamethylene diamine) and 1,6-hexanedioic acid (adipic acid), with the release of water:
      </p>
      <p className="text-center">
        <img src="/path/to/nylon-66.png" alt="Nylon 66 Polymerization" className="mx-auto my-4" />
      </p>

      <p>
        Similarly, Dacron (Polyethylene terephthalate, PTE) is formed by the reaction between terephthalic acid and ethylene glycol:
      </p>
      <p className="text-center">
        <img src="/path/to/dacron.png" alt="Dacron Polymerization" className="mx-auto my-4" />
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Applications of Condensation Polymers</h2>
      <p>
        Dacron is strong, impact-resistant, colorless, and has high transparency. It is used in synthetic fibers, and when mixed with cotton, it forms durable, easily dyed, and crease-resistant fabrics. Dacron is also used for bottles and packaging materials.
      </p>

      <p>
        Nylon has a wide range of applications, including in parachutes, ropes, stockings, hair combs, and rugs. It is also used to reinforce automobile tires.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Polyester and Polyamide Examples</h3>
      <p>
        Consider the reaction between a dihydroxy alcohol and a dicarboxylic acid. The resulting ester formed still has a reactive group at both ends of the molecule.
      </p>
      <p className="text-center">
        <img src="/path/to/polyester-synthesis.png" alt="Polyester Synthesis" className="mx-auto my-4" />
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
