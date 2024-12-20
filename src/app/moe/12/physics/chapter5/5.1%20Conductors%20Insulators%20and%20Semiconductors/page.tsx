'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is the main characteristic of conductors that allows electric current to flow through them?",
    "options": [
      "They have tightly bound electrons",
      "They have free electrons",
      "They have high resistance",
      "They are composed of glass"
    ],
    "correctAnswer": 1,
    "hint": "Metals are good conductors because their free electrons enable electric current flow."
  },
  {
    "question": "What are materials called that do not allow electricity to pass through them?",
    "options": [
      "Conductors",
      "Insulators",
      "Semiconductors",
      "Transistors"
    ],
    "correctAnswer": 1,
    "hint": "Materials like plastic, wood, and glass are good electrical insulators."
  },
  {
    "question": "What is a semiconductor's behavior at absolute zero temperature (0 Kelvin)?",
    "options": [
      "Good conductor",
      "Partial conductor",
      "Acts as an insulator",
      "Permanent magnet"
    ],
    "correctAnswer": 2,
    "hint": "At 0 Kelvin, semiconductors behave like insulators."
  },
  {
    "question": "What is the purpose of the doping process in extrinsic semiconductors?",
    "options": [
      "To cool the material",
      "To change its electrical conductivity",
      "To increase its transparency",
      "To decrease resistance"
    ],
    "correctAnswer": 2,
    "hint": "Doping introduces impurities to modify the conductivity of semiconductors."
  },
  {
    "question": "What charge carriers are present in an N-type semiconductor?",
    "options": [
      "Holes",
      "Protons",
      "Neutrons",
      "Free electrons"
    ],
    "correctAnswer": 4,
    "hint": "N-type semiconductors have free electrons that enable electrical conduction."
  },
  {
    "question": "What happens when a Group III element like boron is added to a semiconductor to form a P-type semiconductor?",
    "options": [
      "Extra electrons appear",
      "Holes are created",
      "Protons are bonded",
      "Metals are formed"
    ],
    "correctAnswer": 2,
    "hint": "In P-type semiconductors, a missing electron creates a hole that acts as a positive charge carrier."
  },
  {
    "question": "What is a key reason semiconductors are crucial in modern electronics?",
    "options": [
      "They only conduct heat",
      "They can be modified to control charge carriers",
      "They work as transistors only with metal parts",
      "They absorb all electrical energy"
    ],
    "correctAnswer": 2,
    "hint": "Semiconductors can be modified to conduct electricity through doping, enabling key electronic functions."
  },
  {
    "question": "Which material is an example of an intrinsic semiconductor?",
    "options": [
      "Copper",
      "Silicon (Si)",
      "Iron",
      "Magnesium"
    ],
    "correctAnswer": 2,
    "hint": "Silicon is a commonly known intrinsic semiconductor without added impurities."
  }
]

export default function Semiconductors() {
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
      <h1 className="text-3xl font-bold mb-6">5.Semiconductors</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5.1 Conductors, Insulators, and Semiconductors</h2>
      <p>
        Conductors are materials that allow electricity to flow through them. Metals are good conductors of electricity because they have free electrons that allow easy flow of electric current.
      </p>
      <p>
        Some materials do not allow electricity to pass through them. These materials are known as insulators. Insulators do not have free electrons, as every electron is tightly bound to the parent atom. Materials like plastic, wood, glass, and rubber are good electrical insulators. This is why they are used to cover materials that carry electricity.
      </p>
      <p>
        Semiconductors are materials that have conductivity between conductors and insulators. They can be pure elements, such as silicon (Si) or germanium (Ge), or compounds like gallium arsenide (GaAs) or cadmium selenide (CdSe). Semiconductors act as insulators at absolute zero temperature (0 Kelvin), but as their temperature increases, they behave as conductors. Conduction occurs because, at higher temperatures, the electrons in the semiconductor can break free from their covalent bonds and move freely to conduct electricity.
      </p>
      <p>
        In a process called <span className="font-bold">doping</span>, small amounts of impurities are added to pure semiconductors, which can significantly change their conductivity.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Lattice Structure of Semiconductors</h3>
      <p>
        Semiconductors like silicon (Si) are made up of individual atoms bonded together in a periodic structure. Each silicon atom has a nucleus made up of protons (positively charged particles) and neutrons (neutral particles), surrounded by electrons. The number of protons and electrons is equal, making the atom electrically neutral.
      </p>
      <p>
        The electrons in the outermost shell of each atom in a semiconductor participate in covalent bonds. A covalent bond consists of two atoms sharing a pair of electrons. Each silicon atom forms four covalent bonds with the four surrounding atoms. Thus, between each atom and its surrounding atoms, eight electrons are being shared.
      </p>
      <p>
        A <span className="font-bold">hole</span> in a semiconductor refers to the absence of an electron in an atom. Holes behave like positive charges, and they are equal in magnitude to electrons but opposite in sign. Holes and electrons are the two charge carriers responsible for current in semiconductor materials.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Types of Semiconductors</h2>
      <p>
        Semiconductors are divided into two main categories: intrinsic and extrinsic semiconductors.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Intrinsic Semiconductors</h3>
      <p>
        Intrinsic semiconductors are composed of a single type of material, such as silicon and germanium. These semiconductors have no impurities and are also known as undoped semiconductors.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Extrinsic Semiconductors</h3>
      <p>
        Extrinsic semiconductors are those that have had impurities added to their lattice structure. This process is called doping, and it significantly improves the material’s conductivity. The purpose of doping is to ensure that there are either too many electrons (excess) or too few electrons (deficiency).
      </p>
      <p>
        Depending on the type of impurity added, extrinsic semiconductors are classified as N-type or P-type.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">N-Type Semiconductors</h3>
      <p>
        N-type semiconductors are created by adding an element with more electrons in its outer shell than the semiconductor itself. Elements from Group V of the periodic table, like arsenic (As), antimony (Sb), and phosphorus (P), serve as impurities. These elements have five valence electrons, one more than silicon (Si), which has four. The extra electron from the impurity is free to move around, allowing conduction to occur.
      </p>
      <p>
        For example, when arsenic (As) is added to silicon (Si), the arsenic atom bonds with four silicon atoms, but its fifth valence electron remains free to move and conduct electricity. This creates a semiconductor with a large number of free electrons, making it an N-type semiconductor.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">P-Type Semiconductors</h3>
      <p>
        P-type semiconductors are created by adding a Group III element such as boron (B), aluminum (Al), gallium (Ga), or indium (In). These atoms have three valence electrons, so when they bond with silicon (which has four valence electrons), there is one missing electron, creating a hole. Holes act as positive charge carriers in P-type semiconductors.
      </p>
      <p>
        For example, when boron (B) is added to silicon (Si), boron bonds with the surrounding silicon atoms, but one bond is incomplete due to the missing electron. This hole behaves as a positive charge carrier.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Conclusion</h3>
      <p>
        Semiconductors play a crucial role in modern electronics. They can be modified to conduct electricity by controlling the number and type of charge carriers through doping. This ability to manipulate conductivity is what makes semiconductors essential for devices like transistors, diodes, and solar cells.
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
