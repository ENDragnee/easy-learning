"use client"

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is the primary characteristic of atoms in solids?",
    "options": [
      "They move freely in all directions.",
      "They vibrate but stay fixed relative to their neighbors.",
      "They slide over each other easily.",
      "They are separated by large distances."
    ],
    "correctAnswer": 1,
    "hint": "Atoms in solids are held in equilibrium positions by forces like springs."
  },
  {
    "question": "What property of fluids does fluid statics study?",
    "options": [
      "Fluids in motion",
      "Fluids under shear stress",
      "Fluids at rest",
      "Compressibility of fluids"
    ],
    "correctAnswer": 2,
    "hint": "Fluid statics focuses on the behavior of fluids without relative motion."
  },
  {
    "question": "Which stress is present in a fluid at rest?",
    "options": [
      "Shear stress",
      "Normal stress",
      "Tangential stress",
      "Elastic stress"
    ],
    "correctAnswer": 1,
    "hint": "The only stress present in fluid statics is related to pressure."
  },
  {
    "question": "What is the formula for pressure in terms of force and area?",
    "options": [
      "P = F × A",
      "P = F / A",
      "P = A / F",
      "P = F + A"
    ],
    "correctAnswer": 1,
    "hint": "Pressure is the ratio of force to contact area."
  },
  {
    "question": "What is the SI unit of pressure?",
    "options": [
      "Pascal (Pa)",
      "Newton (N)",
      "Joule (J)",
      "Atmosphere (atm)"
    ],
    "correctAnswer": 0,
    "hint": "This unit is equivalent to one newton per square meter."
  },
  {
    "question": "What happens to the balloon when more air particles are added?",
    "options": [
      "It shrinks.",
      "It collapses.",
      "It expands outward.",
      "It remains unchanged."
    ],
    "correctAnswer": 2,
    "hint": "Increased collisions with the balloon’s walls cause expansion."
  },
  {
    "question": "What is gauge pressure?",
    "options": [
      "Pressure relative to a vacuum",
      "Pressure measured relative to atmospheric pressure",
      "Pressure at the Earth's core",
      "Pressure inside a sealed container"
    ],
    "correctAnswer": 1,
    "hint": "This pressure is the difference between absolute and atmospheric pressure."
  },
  {
    "question": "What is the formula for gauge pressure?",
    "options": [
      "P_gauge = P_abs + P_atm",
      "P_gauge = P_abs - P_atm",
      "P_gauge = P_atm - P_abs",
      "P_gauge = P_abs × P_atm"
    ],
    "correctAnswer": 1,
    "hint": "Gauge pressure subtracts atmospheric pressure from absolute pressure."
  },
  {
    "question": "What is the formula for density?",
    "options": [
      "ρ = V / m",
      "ρ = m × V",
      "ρ = m / V",
      "ρ = V × m"
    ],
    "correctAnswer": 2,
    "hint": "Density is the ratio of mass to volume."
  },
  {
    "question": "Which substance has the highest density among the options?",
    "options": [
      "Air",
      "Gold",
      "Water",
      "Ice"
    ],
    "correctAnswer": 1,
    "hint": "This substance has a density of 19.3 x 10³ kg/m³."
  },
  {
    "question": "What is specific gravity?",
    "options": [
      "The weight of a substance per unit volume",
      "The ratio of a substance’s density to water’s density",
      "The absolute density of a substance",
      "The volume of a substance per unit mass"
    ],
    "correctAnswer": 1,
    "hint": "Specific gravity compares a substance's density to that of water."
  },
  {
    "question": "What is the value of the density of water at 4°C in kg/m³?",
    "options": [
      "100",
      "1000",
      "10,000",
      "0.001"
    ],
    "correctAnswer": 1,
    "hint": "Water's density is commonly used as a standard for specific gravity."
  },
  {
    "question": "What does the ideal gas equation relate?",
    "options": [
      "Pressure and temperature only",
      "Density and pressure of gases",
      "Volume and temperature only",
      "Mass and volume of solids"
    ],
    "correctAnswer": 1,
    "hint": "This equation connects gas properties like pressure, density, and temperature."
  },
  {
    "question": "What is the value of 1 atmosphere (atm) in mmHg?",
    "options": [
      "760",
      "101.3",
      "1",
      "14.7"
    ],
    "correctAnswer": 0,
    "hint": "This is a commonly used equivalent for atmospheric pressure."
  },
  {
    "question": "Which of the following is true about atoms in gases?",
    "options": [
      "They are tightly packed together.",
      "They are in close contact but can slide over one another.",
      "They are separated by distances larger than the atoms themselves.",
      "They are fixed in equilibrium positions."
    ],
    "correctAnswer": 2,
    "hint": "Atoms in gases are free to move and are widely spaced apart."
  }
]

const FluidMechanics = () => {
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
      <h1 className="text-3xl font-bold text-center">Unit 3: Fluid Mechanics</h1>

      <h2 className="text-2xl font-semibold mt-4">3.1 Properties of Solids, Liquids, and Gases</h2>
      <p className="text-lg leading-relaxed">
        Atoms in solids are very close to each other. The forces between them act as a spring that allows the atoms to vibrate without changing positions relative to their neighboring atoms. Thus, a solid resists all types of stress because the atoms are not able to move about freely. Solids also resist compression, because their atoms are relatively fixed distance apart. Under compression, the atoms would be forced into one another.
      </p>

      <h3 className="text-xl font-medium mt-6">Figure 3.1</h3>
      <p className="text-lg leading-relaxed mb-6">
        (a) Atoms in a solid always have the same neighbors, held near equilibrium position by forces represented here by springs. (b) Atoms in a liquid are also in close contact but can slide over one another. Forces between them strongly resist attempts to push them closer together and also hold them in close contact. (c) Atoms in a gas are separated by distances that are considerably larger than the size of the atoms themselves, and they move about freely.
      </p>

      <h2 className="text-2xl font-semibold mt-4">Fluid Statics</h2>
      <p className="text-lg leading-relaxed">
        Fluid statics deals with the nature of fluids at rest. The fluid can be either gaseous or liquid. In fluid statics, there is no relative motion between adjacent fluid layers, and no shear (tangential) stresses. The only stress in fluid statics is the normal stress, which is the pressure.
      </p>

      <h3 className="text-xl font-medium mt-6">Pressure in Fluid</h3>
      <p className="text-lg leading-relaxed mb-6">
        The normal component of a force acting on a surface per unit area is called the normal stress, and the tangential component of a force acting on a surface per unit area is called shear stress. For fluid at rest, the shear stress is zero, and the only existing stress is the normal stress and is called pressure.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Pressure is defined as a normal force exerted by a fluid (or a solid) per unit area. If <InlineMath>{'F'}</InlineMath> is the magnitude of the force exerted on the fluid (or solid) at a particular point and <InlineMath>{'A'}</InlineMath> is the surface area at which this force is applied, the pressure <InlineMath>{'P'}</InlineMath> at this particular point is defined as the ratio of the force to the contact area <InlineMath>{'A'}</InlineMath> over which that force is exerted:
      </p>
      <div className="overflow-x-auto text-wrap text-xs">
        <BlockMath>{'P = \\frac{F}{A}'}</BlockMath>
      </div>

      <h3 className="text-xl font-medium mt-6">Units of Pressure</h3>
      <p className="text-lg leading-relaxed mb-6">
        The unit of pressure is newtons per square meter (N/m²) in the SI system. Another name for the SI unit of pressure is the pascal (Pa):
      </p>
      <div className="overflow-x-auto text-wrap text-xs">
        <BlockMath>{'1\\,Pa = 1\\,N/m^2'}</BlockMath>
      </div>
      <p className="text-lg leading-relaxed mb-6">
        In addition to pascal, there are other units of pressure such as millimeter mercury (mmHg), torr, atmosphere (atm), and pounds per square inch (psi) with their relations shown as follows:
      </p>
      <div className="overflow-x-auto text-wrap text-xs">
        <BlockMath>{'1\\,atm = 760\\,mmHg = 760\\,torr = 101.3\\,kPa = 14.7\\,psi'}</BlockMath>
      </div>

      <h3 className="text-xl font-medium mt-6">Pressure in Gases</h3>
      <p className="text-lg leading-relaxed mb-6">
        As air particles move randomly in space, they eventually collide with the solid surfaces of any objects in that space. In each of these collisions, the particle exerts an impulsive force on the object. However, when a huge number of particles bombard a solid surface at a constant rate, these collisions collectively exert an approximately constant force on the object.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        As we blow up a balloon, we add air particles to the interior of the balloon; thus, there are more particles inside colliding with the walls. This greater collision rate results in a larger outward average force on each part of the balloon’s surface, causing it to expand outward. The force exerted by the gas on the walls of the container per unit contact area gives the pressure of the gas.
      </p>

      <h3 className="text-xl font-medium mt-6">Absolute, Gauge, and Vacuum Pressures</h3>
      <p className="text-lg leading-relaxed mb-6">
        The actual pressure at a given position is called the absolute pressure, and it is measured relative to absolute vacuum (i.e., absolute zero pressure). Most pressure-measuring devices, however, are calibrated to read zero in the atmosphere, and so they indicate the difference between the absolute pressure and the local atmospheric pressure. This difference is called the gauge pressure <InlineMath>{'P_{gauge}'}</InlineMath>.
      </p>
      <div className="overflow-x-auto text-wrap text-xs">
        <BlockMath>{'P_{gauge} = P_{abs} - P_{atm}'}</BlockMath>
      </div>

      <h3 className="text-xl font-medium mt-6">Density</h3>
      <p className="text-lg leading-relaxed mb-6">
        Density is an important characteristic of substances. It is crucial, for example, in determining whether an object sinks or floats in a fluid. It directly affects the pressure of fluids (gases and liquids). Density is much more useful for gases.
      </p>

      <p className="text-lg leading-relaxed mb-6">usually 
        DensDensme:
      </p>
      <div className="overflow-x-auto text-wrap text-xs">
        <BlockMath>{'\\rho = \\frac{m}{V}'}</BlockMath>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left text-sm">
            <thead>
            <tr className="bg-gray-100">
                <th className="py-2 px-4">Substance</th>
                <th className="py-2 px-4">ρ (kg/m³)</th>
                <th className="py-2 px-4">Substance</th>
                <th className="py-2 px-4">ρ (kg/m³)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="py-2 px-4">Air</td>
                <td className="py-2 px-4">1.29</td>
                <td className="py-2 px-4">Iron</td>
                <td className="py-2 px-4">7.86 x10³</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Aluminum</td>
                <td className="py-2 px-4">2.70 x10³</td>
                <td className="py-2 px-4">Carbon Steel</td>
                <td className="py-2 px-4">7.84 x10³</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Benzene</td>
                <td className="py-2 px-4">0.879 x10³</td>
                <td className="py-2 px-4">Mercury</td>
                <td className="py-2 px-4">13.6 x10³</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Brass</td>
                <td className="py-2 px-4">8.4 x10³</td>
                <td className="py-2 px-4">Oxygen</td>
                <td className="py-2 px-4">1.43</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Copper</td>
                <td className="py-2 px-4">8.92 x10³</td>
                <td className="py-2 px-4">Nitrogen</td>
                <td className="py-2 px-4">1.25</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Fresh Water</td>
                <td className="py-2 px-4">1.00 x10³</td>
                <td className="py-2 px-4">Sea Water</td>
                <td className="py-2 px-4">1.03 x10³</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Gold</td>
                <td className="py-2 px-4">19.3 x10³</td>
                <td className="py-2 px-4">Silver</td>
                <td className="py-2 px-4">10.5 x10³</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Ice</td>
                <td className="py-2 px-4">0.917 x10³</td>
                <td className="py-2 px-4">Tin</td>
                <td className="py-2 px-4">7.30 x10³</td>
            </tr>
            </tbody>
        </table>
        </div>


      <h3 className="text-xl font-medium mt-6">Specific Gravity</h3>
      <p className="text-lg leading-relaxed mb-6">
        The density of a substance is sometimes given relative to the density of another substance, called the specific gravity or relative density. It is defined as the ratio of the density of a substance to the density of some standard substance (usually water at 4°C, for which <InlineMath>{'\\rho_{H_2O} = 1000 \\text{kg/m}^3'}</InlineMath>).
      </p>
      <div className="overflow-x-auto text-wrap text-xs">
        <BlockMath>{'S = \\frac{\\rho}{\\rho_{H_2O}}'}</BlockMath>
      </div>

      <h3 className="text-xl font-medium mt-6">Ideal Gas Equation</h3>
      <p className="text-lg leading-relaxed mb-6">
        The ideal gas law relates the density and pressure of gases. It is expressed as:
      </p>
      <div className="overflow-x-auto text-wrap text-xs">
        <BlockMath>{'P = \\frac{m}{V} R_{specific} T'}</BlockMath>
      </div>
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full table-auto text-left text-sm">
            <thead>
            <tr className="bg-gray-100">
                <th className="py-2 px-4">Substance</th>
                <th className="py-2 px-4">SG</th>
                <th className="py-2 px-4">Substance</th>
                <th className="py-2 px-4">SG</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="py-2 px-4">Air</td>
                <td className="py-2 px-4">0.00129</td>
                <td className="py-2 px-4">Seawater</td>
                <td className="py-2 px-4">1.025</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Blood (at 37°C)</td>
                <td className="py-2 px-4">1.06</td>
                <td className="py-2 px-4">Gasoline</td>
                <td className="py-2 px-4">0.68</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Ethyl Alcohol</td>
                <td className="py-2 px-4">0.790</td>
                <td className="py-2 px-4">Mercury</td>
                <td className="py-2 px-4">13.6</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Gold</td>
                <td className="py-2 px-4">19.3</td>
                <td className="py-2 px-4">Bones</td>
                <td className="py-2 px-4">1.7-2.0</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Ice (0°C)</td>
                <td className="py-2 px-4">0.916</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4"></td>
            </tr>
            </tbody>
        </table>
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
};

export default FluidMechanics;
