'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is the force called that acts upward on an object submerged in a fluid?",
    "options": [
      "Gravitational force",
      "Tensional force",
      "Buoyant force",
      "Centripetal force"
    ],
    "correctAnswer": 2,
    "hint": "This force is also known as up-thrust force."
  },
  {
    "question": "According to Archimedes' Principle, the buoyant force on an object is equal to:",
    "options": [
      "The weight of the object",
      "The weight of the fluid displaced by the object",
      "The volume of the object",
      "The pressure difference in the fluid"
    ],
    "correctAnswer": 1,
    "hint": "This principle relates buoyant force to the displaced fluid."
  },
  {
    "question": "What is the formula for the buoyant force on a submerged object?",
    "options": [
      "F_B = P_1 A",
      "F_B = \\rho_{fluid} g V_{disp}",
      "F_B = \\rho_{obj} g V_{disp}",
      "F_B = \\rho_{fluid} g h A"
    ],
    "correctAnswer": 1,
    "hint": "It relates the force to fluid density and displaced volume."
  },
  {
    "question": "When an object is fully submerged in a fluid, the volume of the displaced fluid is equal to:",
    "options": [
      "The mass of the object",
      "The weight of the object",
      "The volume of the object",
      "The density of the object"
    ],
    "correctAnswer": 2,
    "hint": "This is a fundamental property of displacement."
  },
  {
    "question": "What happens to an object if its density is less than the density of the fluid?",
    "options": [
      "It sinks",
      "It remains stationary",
      "It experiences an upward force and rises",
      "It creates a vacuum"
    ],
    "correctAnswer": 2,
    "hint": "Objects less dense than the fluid experience a net upward force."
  },
  {
    "question": "For a floating object, the fraction of its volume submerged is equal to:",
    "options": [
      "The ratio of its weight to the weight of the fluid",
      "The ratio of its density to the density of the fluid",
      "The ratio of its volume to the volume of the fluid",
      "The ratio of the fluid's weight to the object's weight"
    ],
    "correctAnswer": 1,
    "hint": "This ratio explains why objects float partially submerged."
  },
  {
    "question": "What equation relates the densities of a floating object and the fluid to the submerged volume?",
    "options": [
      "\\rho_{fluid} g = \\rho_{obj} g",
      "\\frac{V_{disp}}{V_{obj}} = \\frac{\\rho_{obj}}{\\rho_{fluid}}",
      "F_B = \\rho_{fluid} g V_{obj}",
      "\\rho_{fluid} V_{disp} = \\rho_{obj} V_{obj}"
    ],
    "correctAnswer": 1,
    "hint": "This equation connects submerged volume with the density ratio."
  },
  {
    "question": "What determines whether an object sinks, floats, or remains in equilibrium in a fluid?",
    "options": [
      "The shape of the object",
      "The density of the object compared to the fluid",
      "The weight of the fluid",
      "The gravitational constant"
    ],
    "correctAnswer": 1,
    "hint": "It depends on the relative densities of the object and fluid."
  }
]

export default function FluidMechanics() {
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
      <h1 className="text-3xl font-bold mb-6">Fluid Mechanics</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3.3 Archimedes' Principle</h2>
      <p>
        It is extremely difficult to push a ball down under water because of the large upward force exerted by the water on the ball. The upward force exerted by a fluid on any immersed object is called a buoyant force. Where does this buoyant force come from? Buoyant force is based on the fact that pressure increases with depth in a fluid. This means that the upward force on the bottom of an object in a fluid is greater than the downward force on the top of the object. There is a net upward, or buoyant force on any object in any fluid. Buoyant force is also called up-thrust force. 
      </p>
      <p>
        The magnitude of this buoyant force equals the weight of the fluid displaced by the object. This principle is known as Archimedes' Principle, which states that the buoyant force on an object equals the weight of the fluid it displaces.
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'F_B = W_{fluid}'}</BlockMath>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">Buoyant Force on a Submerged Object</h3>
      <p>
        To understand the origin of the buoyant force, consider a cylinder of solid material immersed in a liquid. The pressure <InlineMath>{'P_2'}</InlineMath> at the bottom of the cylinder is greater than the pressure <InlineMath>{'P_1'}</InlineMath> at the top by an amount <InlineMath>{'\\rho_{fluid} g h'}</InlineMath>, where <InlineMath>{'h'}</InlineMath> is the height of the cylinder and <InlineMath>{'\\rho_{fluid}'}</InlineMath> is the density of the fluid. The pressure at the bottom of the cylinder causes an upward force equal to <InlineMath>{'P_2 A'}</InlineMath>, and the pressure at the top causes a downward force equal to <InlineMath>{'P_1 A'}</InlineMath>.
      </p>
      <p>
        The resultant force, or buoyant force, is given by:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'F_B = P_2 A - P_1 A = \\rho_{fluid} g h A'}</BlockMath>
      </div>
      <p>
        Where <InlineMath>{'A'}</InlineMath> is the area of the bottom face, and <InlineMath>{'V_{disp} = A h'}</InlineMath> is the volume of the displaced fluid. This results in the buoyant force formula:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'F_B = \\rho_{fluid} g V_{disp}'}</BlockMath>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">Totally Submerged Object</h3>
      <p>
        When an object is totally submerged in a fluid, the volume <InlineMath>{'V_{disp}'}</InlineMath> of the displaced fluid is equal to the volume of the object. The buoyant force on the object is given by:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'F_B = \\rho_{fluid} g V_{obj}'}</BlockMath>
      </div>
      <p>
        If the object has mass <InlineMath>{'M'}</InlineMath> and density <InlineMath>{'\\rho_{obj}'}</InlineMath>, the weight of the object is <InlineMath>{'F_g = M g = \\rho_{obj} g V_{obj}'}</InlineMath>. The net force on the object is the difference between the buoyant force and the weight of the object:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'F_B - F_g = (\\rho_{fluid} - \\rho_{obj}) g V_{obj}'}</BlockMath>
      </div>
      <p>
        If the density of the object is less than the density of the fluid, the object will experience an upward force and will rise. If the object's density is greater, it will sink. If the densities are equal, the object will remain in equilibrium.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Floating Object</h3>
      <p>
        For an object that is partially submerged and floating in a fluid, the upward buoyant force is balanced by the downward gravitational force. The volume of the fluid displaced is equal to the volume of the object submerged in the fluid, and the buoyant force is:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'F_B = \\rho_{fluid} g V_{disp}'}</BlockMath>
      </div>
      <p>
        The weight of the object is given by <InlineMath>{'F_g = \\rho_{obj} g V_{obj}'}</InlineMath>. Since the object is in equilibrium, the two forces are equal, and we have the relation:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'\\rho_{fluid} g V_{disp} = \\rho_{obj} g V_{obj}'}</BlockMath>
      </div>
      <p>
        This simplifies to the equation:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'\\frac{V_{disp}}{V_{obj}} = \\frac{\\rho_{obj}}{\\rho_{fluid}}'}</BlockMath>
      </div>
      <p>
        This equation shows that the fraction of the volume of a floating object submerged in a fluid is equal to the ratio of the density of the object to that of the fluid.
      </p>
      <div className="relative w-full overflow-hidden aspect-video">
        <iframe
          scrolling="no"
          src="https://www.geogebra.org/material/iframe/id/58095/width/900/height/620/border/888888/rc/false/ai/false/sdz/false/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto"
          className='responsive-iframe top-0 left-0 w-full h-full'
        ></iframe>
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
