'use client';

import { useState } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What determines the color change in acid-base indicators?",
    "options": [
      "The ionization equilibrium of the indicator",
      "The temperature of the solution",
      "The concentration of the acid",
      "The volume of the solution"
    ],
    "correctAnswer": 0,
    "hint": "The color change is due to the ionization equilibrium of the indicator and the pH of the solution."
  },
  {
    "question": "In an acidic solution, what form of the acid-base indicator is predominantly present?",
    "options": [
      "HIn",
      "In⁻",
      "H₂O⁺",
      "OH⁻"
    ],
    "correctAnswer": 0,
    "hint": "In an acidic solution, the equilibrium shifts to the left, favoring the non-ionized form, HIn."
  },
  {
    "question": "Which of the following indicators has a pH range of 0.0 – 1.6?",
    "options": [
      "Methyl violet",
      "Methyl orange",
      "Bromcresol green",
      "Litmus"
    ],
    "correctAnswer": 0,
    "hint": "Methyl violet has an acid color of yellow and a pH range of 0.0 – 1.6."
  },
  {
    "question": "What color does phenolphthalein turn in a basic solution?",
    "options": [
      "Pink",
      "Colorless",
      "Yellow",
      "Blue"
    ],
    "correctAnswer": 0,
    "hint": "Phenolphthalein turns pink in a basic solution and colorless in an acidic solution."
  },
  {
    "question": "What is the purpose of an acid-base indicator in a titration?",
    "options": [
      "To indicate the pH at the equivalence point",
      "To neutralize the acid or base",
      "To determine the volume of the titrant",
      "To measure the concentration of the titrant"
    ],
    "correctAnswer": 0,
    "hint": "The acid-base indicator shows the pH of the solution and helps identify the equivalence point in a titration."
  },
  {
    "question": "What does the equivalence point in an acid-base titration represent?",
    "options": [
      "The point where moles of acid equal moles of base",
      "The point where the indicator changes color",
      "The point where excess acid remains in the solution",
      "The point where the solution becomes neutral"
    ],
    "correctAnswer": 0,
    "hint": "At the equivalence point, the amount of acid equals the amount of base, and the solution contains only salt and water."
  },
  {
    "question": "How is normality calculated in a solution?",
    "options": [
      "Normality = equivalents of solute / volume of solution in liters",
      "Normality = moles of solute / volume of solution",
      "Normality = moles of solute / volume of solvent",
      "Normality = equivalents of solute / weight of solution"
    ],
    "correctAnswer": 0,
    "hint": "Normality is calculated by dividing the number of equivalents of solute by the volume of the solution in liters."
  },
  {
    "question": "What happens at the end point of a titration?",
    "options": [
      "The indicator changes color",
      "The acid and base completely neutralize each other",
      "The solution becomes acidic",
      "The titrant is no longer added"
    ],
    "correctAnswer": 0,
    "hint": "The end point of the titration is marked by a color change of the indicator."
  },
  {
    "question": "Which of the following is an example of a substance with an equivalent of 2?",
    "options": [
      "Sulfuric acid (H₂SO₄)",
      "Barium hydroxide (Ba(OH)₂)",
      "Water (H₂O)",
      "Sodium chloride (NaCl)"
    ],
    "correctAnswer": 1,
    "hint": "Barium hydroxide (Ba(OH)₂) provides two hydroxide ions per formula unit, so it has an equivalent of 2."
  },
  {
    "question": "What is the relationship between the normality and volume of acid and base in a titration?",
    "options": [
      "N₁V₁ = N₂V₂",
      "N₁V₂ = N₂V₁",
      "N₁ = N₂",
      "V₁ = V₂"
    ],
    "correctAnswer": 0,
    "hint": "The relationship N₁V₁ = N₂V₂ allows for the calculation of normality and volume in titrations."
  }
]

export default function AcidBaseIndicators() {
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
      <h1 className="text-3xl font-bold mb-6">1.5 Acid–Base Indicators and Titrations</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">How do Acid-Base Indicators Change Color?</h2>
      <p>
        Acid-base indicators are weak organic acids (denoted here as <InlineMath>{'HIn'}</InlineMath>) or weak organic bases (<InlineMath>{'In⁻'}</InlineMath>) that indicate whether a solution is acidic, basic, or neutral. The color of the indicator depends on the pH of the solution to which it is added.
      </p>

      <p>
        When a small amount of indicator is added to a solution, the indicator does not affect the pH of the solution. Instead, the ionization equilibrium of the indicator is affected by the prevailing <InlineMath>{'[H₂O⁺]'}</InlineMath> in the solution.
      </p>

      <BlockMath>
        {`
        HIn (Acid colour) ⇌ H₂O + H₂O⁺ + In⁻ (Base colour)
        `}
      </BlockMath>

      <p>
        If the indicator is in a sufficiently acidic medium (increasing <InlineMath>{'[H₂O⁺]'}</InlineMath>), the equilibrium, according to Le Châtelier’s principle, shifts to the left, and the predominant color of the indicator is that of the non-ionized form (<InlineMath>{'HIn'}</InlineMath>). On the other hand, in a basic medium (decreasing <InlineMath>{'[H₂O⁺]'}</InlineMath>), the equilibrium shifts to the right, and the color of the solution will be blue due to the conjugate base (<InlineMath>{'In⁻'}</InlineMath>).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Acid–Base Indicators and Titrations</h2>
      <p>
        An acid–base indicator is usually prepared as a solution (in water, ethanol, or another solvent). In acid–base titrations, a few drops of the indicator solution are added to the solution being titrated. In other applications, porous paper is impregnated with an indicator solution and dried. When this paper is moistened with the solution being tested, it acquires a color determined by the pH of the solution. This paper is commonly called pH test paper.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Table 1.5: Some Common Indicators</h3>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4 text-left">Indicator</th>
            <th className="py-2 px-4 text-left">Acid Color</th>
            <th className="py-2 px-4 text-left">Base Color</th>
            <th className="py-2 px-4 text-left">pH Range of Color</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2 px-4">Methyl violet</td>
            <td className="py-2 px-4">Yellow</td>
            <td className="py-2 px-4">Violet</td>
            <td className="py-2 px-4">0.0 – 1.6</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">Methyl orange</td>
            <td className="py-2 px-4">Red</td>
            <td className="py-2 px-4">Yellow</td>
            <td className="py-2 px-4">3.2 – 4.4</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">Bromcresol green</td>
            <td className="py-2 px-4">Yellow</td>
            <td className="py-2 px-4">Blue</td>
            <td className="py-2 px-4">3.8 – 5.4</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">Methyl red</td>
            <td className="py-2 px-4">Red</td>
            <td className="py-2 px-4">Yellow</td>
            <td className="py-2 px-4">4.8 – 6.0</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">Litmus</td>
            <td className="py-2 px-4">Red</td>
            <td className="py-2 px-4">Blue</td>
            <td className="py-2 px-4">5.0 – 8.0</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">Phenolphthalein</td>
            <td className="py-2 px-4">Colorless</td>
            <td className="py-2 px-4">Pink</td>
            <td className="py-2 px-4">8.2 – 10.0</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Equivalents and Normality</h2>
      <p>
        An equivalent is the amount of a substance that reacts with an arbitrary amount (typically one mole) of another substance in a given chemical reaction. In a more formal definition, an equivalent is the amount of a substance needed to react with or supply one mole of hydrogen ions (<InlineMath>{'H⁺'}</InlineMath>) in an acid–base reaction.
      </p>

      <p>
        For example, for sulfuric acid (<InlineMath>{'H₂SO₄'}</InlineMath>), an equivalent is 2. For bases, it is the number of hydroxide ions (<InlineMath>{'OH⁻'}</InlineMath>) provided for a reaction. For example, for barium hydroxide (<InlineMath>{'Ba(OH)₂'}</InlineMath>), the equivalent is 2.
      </p>

      <p>
        The normality of a solution refers to the number of equivalents of solute per liter of solution:
      </p>

      <BlockMath>{'Normality = \\frac{Number \\ of \\ equivalents \\ of \\ solute}{Liters \\ of \\ solution}'}</BlockMath>

      <p>
        The definition of chemical equivalent depends on the substance or type of chemical reaction under consideration. The concept of equivalents ensures that the correct proportions of substances are used, avoiding excess chemicals.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Titrations</h2>
      <p>
        An acid–base titration is a procedure for determining the amount of acid (or base) in a solution by determining the volume of base (or acid) of known concentration that will completely react with it. In a titration, one of the solutions to be neutralized (the acid) is placed in a flask or beaker, along with a few drops of an acid-base indicator.
      </p>

      <p>
        The other solution (the base) used in a titration is added from a burette and is called the titrant. The titrant is added to the acid (titrand or analyte) first rapidly and then drop by drop, up to the equivalence point. The equivalence point of the titration is when the amount of titrant added is just enough to completely neutralize the analyte solution.
      </p>

      <p>
        At the equivalence point in an acid-base titration, moles of base equal moles of acid, and the solution contains only salt and water. The equivalence point is determined by noting the color change of the acid-base indicator. The point at which the indicator changes color is called the end point of the indicator. The end point should match the equivalence point for an accurate titration.
      </p>

      <BlockMath>{'N_1V_1 = N_2V_2'}</BlockMath>
      <p>
        Where <InlineMath>{'N₁'}</InlineMath> and <InlineMath>{'V₁'}</InlineMath> refer to the normality and volume of the acid solution, respectively, and <InlineMath>{'N₂'}</InlineMath> and <InlineMath>{'V₂'}</InlineMath> refer to the normality and volume of the base solution, respectively.
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