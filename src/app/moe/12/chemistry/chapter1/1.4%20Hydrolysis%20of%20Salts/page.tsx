'use client';

import { useState } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is hydrolysis?",
    "options": [
      "A process where water breaks chemical bonds",
      "A reaction between an acid and a base",
      "A reaction involving only ionic compounds",
      "A method to produce salts from acids and bases"
    ],
    "correctAnswer": 0,
    "hint": "Hydrolysis is the chemical reaction where water molecules break down chemical bonds in a substance."
  },
  {
    "question": "In the neutralization of a strong acid with a strong base, what is the result in terms of hydrolysis?",
    "options": [
      "The solution becomes acidic",
      "The solution becomes basic",
      "There is no hydrolysis, the solution remains neutral",
      "The solution becomes neutral only at high concentrations"
    ],
    "correctAnswer": 2,
    "hint": "When a strong acid and a strong base react, their ions do not undergo hydrolysis, resulting in a neutral solution."
  },
  {
    "question": "What happens when acetic acid reacts with sodium hydroxide?",
    "options": [
      "Acetic acid undergoes complete ionization",
      "The acetate ion undergoes hydrolysis to form OH⁻",
      "The solution remains neutral at the equivalence point",
      "Sodium acetate does not dissolve in water"
    ],
    "correctAnswer": 1,
    "hint": "The acetate ion (CH₃COO⁻) undergoes hydrolysis, which increases the pH of the solution."
  },
  {
    "question": "What causes the pH at the equivalence point of a weak acid-strong base neutralization to be greater than 7?",
    "options": [
      "Excess OH⁻ ions formed by the hydrolysis of the acetate ion",
      "The formation of H₃O⁺ ions from the strong base",
      "The sodium ions in the solution",
      "The dissociation of acetic acid"
    ],
    "correctAnswer": 0,
    "hint": "The hydrolysis of acetate ions produces excess OH⁻ ions, raising the pH above 7."
  },
  {
    "question": "What ion undergoes hydrolysis when ammonium chloride dissolves in water?",
    "options": [
      "NH₄⁺",
      "Cl⁻",
      "Na⁺",
      "OH⁻"
    ],
    "correctAnswer": 0,
    "hint": "Ammonium ions (NH₄⁺) react with water, increasing the concentration of H₃O⁺ ions."
  },
  {
    "question": "What is the result when a weak base is neutralized by a strong acid?",
    "options": [
      "The conjugate acid of the weak base reacts with water to increase hydronium ion concentration",
      "The conjugate base of the weak acid forms",
      "No change in pH occurs",
      "The solution becomes neutral"
    ],
    "correctAnswer": 0,
    "hint": "The conjugate acid of the weak base reacts with water to form H₃O⁺ ions, lowering the pH."
  },
  {
    "question": "What happens when chloride ions (Cl⁻) are present in a solution from the neutralization of a weak base and strong acid?",
    "options": [
      "Cl⁻ undergoes hydrolysis to form HCl",
      "Cl⁻ is a very weak base and does not undergo hydrolysis",
      "Cl⁻ reacts to increase the concentration of OH⁻",
      "Cl⁻ reacts with the conjugate acid to form a neutral solution"
    ],
    "correctAnswer": 1,
    "hint": "Chloride ions are weak conjugate bases and do not participate in hydrolysis."
  },
  {
    "question": "How can you predict if a solution of a salt from a weak acid and weak base will be acidic, basic, or neutral?",
    "options": [
      "By comparing the Ka of the acid and the Kb of the base",
      "By measuring the pH directly",
      "By checking the solubility of the salt",
      "By observing the color change of an indicator"
    ],
    "correctAnswer": 0,
    "hint": "The relative strengths of the acid and base, measured by their Ka and Kb, determine whether the solution is acidic, basic, or neutral."
  },
  {
    "question": "What happens when the Ka of the weak acid is greater than the Kb of the weak base in a salt solution?",
    "options": [
      "The solution becomes acidic",
      "The solution becomes basic",
      "The solution becomes neutral",
      "The solution remains unchanged"
    ],
    "correctAnswer": 0,
    "hint": "If the acid dissociation constant (Ka) is greater than the base dissociation constant (Kb), the solution will be acidic."
  }
]

export default function HydrolysisOfSalts() {
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
      <h1 className="text-3xl font-bold mb-6">1.4 Hydrolysis of Salts</h1>

      <p>
        Hydrolysis is a common form of a chemical reaction where water is used to break down the chemical bonds between substances. The term hydrolysis is derived from the Greek words "hydro" (meaning water) and "lysis" (meaning to break or unbind). In hydrolysis, water molecules get attached to two parts of a molecule, with one part receiving the <InlineMath>{'H^+'}</InlineMath> ion and the other receiving the <InlineMath>{'OH^-'}</InlineMath> group. The process of salt hydrolysis refers to the interaction of the anion and cation of a salt, or both, with water.
      </p>

      <p>
        Depending on the strengths of the parent acids and bases, the cation of a salt can act as an acid, base, or be neutral.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Neutralization Reaction Between a Strong Acid and a Strong Base</h2>
      <p>
        The reaction between a strong acid (such as HCl) and a strong base (such as NaOH) can be represented by the ionic equation:
      </p>

      <BlockMath>{'NaOH(aq) + HCl(aq) → NaCl(aq) + H_2O(l)'}</BlockMath>
      <p>
        In terms of the net ionic equation:
      </p>

      <BlockMath>{'H^+(aq) + OH^-(aq) → H_2O(l)'}</BlockMath>

      <p>
        The anions derived from strong acids are weak conjugate bases and do not undergo hydrolysis. Similarly, the cations derived from strong bases are weak conjugate acids and also do not undergo hydrolysis. In the reaction above, chloride ions (<InlineMath>{'Cl^-'}</InlineMath>) and sodium ions (<InlineMath>{'Na+'}</InlineMath>) do not hydrolyze, and the solution remains neutral (pH = 7).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Neutralization of a Weak Acid and a Strong Base</h2>
      <p>
        Consider the neutralization reaction between acetic acid (a weak acid) and sodium hydroxide (a strong base):
      </p>
      <BlockMath>{'CH_3COOH(aq) + NaOH(aq) → CH_3COONa(aq) + H_2O(aq)'}</BlockMath>

      <p>
        The acetate ion (<InlineMath>{'CH_3COO^-'}</InlineMath>) undergoes hydrolysis as follows:
      </p>

      <BlockMath>{'CH_3COO^-(aq) + H_2O(aq) → CH_3COOH(aq) + OH^-(aq)'}</BlockMath>

      <p>
        As a result, the pH at the equivalence point will be greater than 7 due to the excess <InlineMath>{'OH^-'}</InlineMath> ions formed. This situation is similar to the hydrolysis of sodium acetate (<InlineMath>{'CH_3COONa'}</InlineMath>), where the anion of the weak acid is a moderately strong base and can undergo hydrolysis, making the solution basic.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Hydrolysis of Salts from Weak Bases and Strong Acids</h2>
      <p>
        When a weak base is neutralized by a strong acid, the product is a salt containing the conjugate acid of the weak base. This conjugate acid is a strong acid. For example, ammonium chloride (<InlineMath>{'NH_4Cl'}</InlineMath>) is a salt formed by the reaction of ammonia (NH₃) with hydrochloric acid (HCl):
      </p>

      <BlockMath>{'NH_3(aq) + HCl(aq) → NH_4Cl(aq)'}</BlockMath>

      <p>
        In a solution of this salt, chloride ions (<InlineMath>{'Cl^-'}</InlineMath>) are very weak bases and will not accept protons to a measurable extent. However, the ammonium ion (<InlineMath>{'NH_4^+'}</InlineMath>), the conjugate acid of ammonia, reacts with water and increases the hydronium ion concentration:
      </p>

      <BlockMath>{'NH_4^+(aq) + H_2O(l) → H_3O^+(aq) + NH_3(aq)'}</BlockMath>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Hydrolysis of Salts from Weak Acids and Weak Bases</h2>
      <p>
        Solutions of salts formed by the reaction of a weak acid and a weak base involve both cationic and anionic hydrolysis. To predict whether the solution is acidic or basic, you need to compare the Ka (acid dissociation constant) of the weak acid and the Kb (base dissociation constant) of the weak base. 
      </p>

      <p>
        - If the Ka is greater than the Kb, the solution will be acidic.  
        - If the Ka is less than the Kb, the solution will be basic.  
        - If Ka and Kb are equal, the solution will be neutral.
      </p>

      <p>
        For example, solutions of ammonium formate (<InlineMath>{'NH_4CHO_2'}</InlineMath>) are slightly acidic because the Ka of ammonium ion (<InlineMath>{'NH_4^+'}</InlineMath>, 5.6 × 10⁻¹⁰) is somewhat larger than the Kb of formate ion (<InlineMath>{'CHO_2^-'}</InlineMath>, 5.9 × 10⁻¹¹).
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