'use client';

import { useState } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is the common-ion effect?",
    "options": [
      "The shift in an ionic equilibrium caused by the addition of a solute that provides an ion that participates in the equilibrium",
      "The dissolution of an ionic compound in water",
      "The dissociation of a weak acid into ions",
      "The increase in solubility of a salt when a common ion is added"
    ],
    "correctAnswer": 0,
    "hint": "The common-ion effect occurs when a solute adds an ion that is already present in the equilibrium, causing a shift."
  },
  {
    "question": "What happens to the ionization of acetic acid when HCl is added to the solution?",
    "options": [
      "It increases",
      "It remains unchanged",
      "It decreases",
      "It shifts to the right"
    ],
    "correctAnswer": 2,
    "hint": "According to Le Châtelier’s principle, the presence of H₃O⁺ ions from HCl suppresses the ionization of acetic acid."
  },
  {
    "question": "What is a buffer solution?",
    "options": [
      "A solution that resists changes in pH when small amounts of acid or base are added",
      "A solution that only neutralizes acids",
      "A solution with a pH of 7",
      "A solution that dissolves strong acids"
    ],
    "correctAnswer": 0,
    "hint": "Buffer solutions maintain a relatively constant pH by neutralizing added acids or bases."
  },
  {
    "question": "What components make up a typical buffer solution?",
    "options": [
      "A strong acid and its conjugate base",
      "A weak acid and its conjugate base, or a weak base and its conjugate acid",
      "A strong base and its conjugate acid",
      "Water and salt"
    ],
    "correctAnswer": 1,
    "hint": "A buffer typically contains a weak acid and its conjugate base, or a weak base and its conjugate acid."
  },
  {
    "question": "What happens when an acid is added to a buffer solution?",
    "options": [
      "The conjugate base reacts with H⁺ ions to form the weak acid",
      "The buffer becomes more acidic",
      "The pH of the solution decreases dramatically",
      "The acid is neutralized by the buffer’s conjugate base"
    ],
    "correctAnswer": 0,
    "hint": "In a buffer, the conjugate base neutralizes the added H⁺ ions by forming the weak acid."
  },
  {
    "question": "How does a buffer resist pH changes when a base is added?",
    "options": [
      "The base reacts with water to form OH⁻ ions",
      "The weak acid in the buffer neutralizes OH⁻ ions",
      "The conjugate acid reacts with OH⁻ ions to form the conjugate base",
      "The pH remains unaffected"
    ],
    "correctAnswer": 1,
    "hint": "When a base is added to a buffer, the acid in the buffer neutralizes the OH⁻ ions, preventing a significant change in pH."
  },
  {
    "question": "What is the pH of blood typically maintained at?",
    "options": [
      "1.5",
      "7.4",
      "10",
      "12"
    ],
    "correctAnswer": 1,
    "hint": "The pH of blood is maintained around 7.4 by buffers to ensure proper enzyme function and other physiological processes."
  },
  {
    "question": "What does the Henderson-Hasselbalch equation relate to in buffer solutions?",
    "options": [
      "The relationship between the pH and the concentration ratio of acid and conjugate base",
      "The ionization constant of the weak acid",
      "The solubility of the salt in the solution",
      "The concentration of OH⁻ ions"
    ],
    "correctAnswer": 0,
    "hint": "The Henderson-Hasselbalch equation is used to estimate the pH of a buffer solution based on the ratio of conjugate base to weak acid concentrations."
  }
]

export default function CommonIonEffect() {
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
      <h1 className="text-3xl font-bold mb-6">1.3 Common-Ion Effect and Buffer Solutions</h1>

      <p>
        The common-ion effect is the shift in an ionic equilibrium caused by the addition of a solute that provides an ion that
        participates in the equilibrium. It occurs when a given ion is added to an equilibrium mixture that already contains that
        ion.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Common-Ion Effect Example</h2>
      <p>
        Consider a solution of acetic acid, <InlineMath>{'CH_3COOH'}</InlineMath>, in which the following acid-ionization
        equilibrium exists:
      </p>
      <div className='overflow-x-auto text-xs'>
        <BlockMath>{'CH_3COOH (aq) + H_2O (l) ⇌ CH_3COO⁻ (aq) + H₃O⁺ (aq)'}</BlockMath>
      </div>
      <p>
        If HCl (aq) is added to this solution, it dissociates to provide H₃O⁺ ions, which are present on the right side of the
        equation for acetic acid ionization. According to Le Châtelier’s principle, the equilibrium will shift to the left, suppressing
        the ionization of acetic acid. This is an example of the common-ion effect.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Common-Ion Effect and Buffer Solution</h2>
      <p>
        When sodium acetate and acetic acid are dissolved in the same solution, they dissociate and ionize to produce CH₃COO⁻ ions.
        This results in a shift in the equilibrium, which can be represented as:
      </p>
      <div className='overflow-x-auto text-xs'>
        <BlockMath>{'CH_3COOH (aq) + H_2O (l) ⇌ CH_3COO⁻ (aq) + H₃O⁺ (aq)'}</BlockMath>
      </div>
      <p>
        The degree of ionization of acetic acid decreases by the addition of a strong acid, which is an example of the common-ion effect.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Buffer Solutions</h2>
      <p>
        A buffer solution resists changes in pH when small amounts of acid or base are added, or when the solution is diluted with a
        pure solvent. This property is crucial for maintaining an optimal pH in chemical and biological systems. A buffer typically
        consists of a weak acid and its conjugate base, or a weak base and its conjugate acid. The conjugate forms are referred to as
        "salts."
      </p>

      <p>
        To prepare a simple buffer solution, a comparable amount of acetic acid (<InlineMath>{'CH_3COOH'}</InlineMath>) and sodium
        acetate (<InlineMath>{'CH_3COONa'}</InlineMath>) are added to water. The equilibrium concentrations of both the acid and the
        conjugate base (from <InlineMath>{'CH_3COONa'}</InlineMath>) are assumed to be the same as the starting concentrations.
        This assumption is valid because acetic acid is a weak acid, and its dissociation is minimal.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">How a Buffer Resists pH Changes</h2>
      <p>
        If an acid is added to the buffer solution, the H⁺ ions will be consumed by the conjugate base (CH₃COO⁻) according to the
        equation:
      </p>
      <BlockMath>{'CH_3COO⁻ (aq) + H⁺ (aq) ⇌ CH_3COOH (aq)'}</BlockMath>
      <p>
        If a base is added, the OH⁻ ions will be neutralized by the acid in the buffer:
      </p>
      <BlockMath>{'CH_3COOH (aq) + OH⁻ (aq) ⇌ CH_3COO⁻ (aq) + H₂O (l)'}</BlockMath>

      <p>
        Therefore, a buffer resists pH changes by neutralizing H⁺ and OH⁻ ions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Buffer Importance in Biological Systems</h2>
      <p>
        Buffers are critical in maintaining the pH of chemical and biological systems. For example, the pH of blood is around 7.4,
        while the gastric juice in the stomach has a pH of about 1.5. These pH values are crucial for enzyme function and osmotic
        pressure regulation, and are maintained by buffers.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Henderson-Hasselbalch Equation</h2>
      <p>
        The pH of a buffer solution can be estimated using the Henderson-Hasselbalch equation, which is derived from the acid dissociation constant (Kₐ):
      </p>

      <BlockMath>{'HA ⇌ H⁺ + A⁻'}</BlockMath>
      <BlockMath>{'K_a = \\frac{[H⁺][A⁻]}{[HA]}'}</BlockMath>
      <p>
        The concentration ratio of the acid species to base species determines the <InlineMath>{'[H⁺]'}</InlineMath>. By rearranging the
        expression to isolate <InlineMath>{'[H⁺]'}</InlineMath>, we get:
      </p>
      <BlockMath>{'[H⁺] = K_a \\times \\frac{[HA]}{[A⁻]}'}</BlockMath>
      <p>
        Taking the negative logarithm of both sides, we obtain:
      </p>
      <BlockMath>{'pH = pK_a - \\log \\left( \\frac{[A⁻]}{[HA]} \\right)'}</BlockMath>
      <p>
        The general form of the Henderson-Hasselbalch equation for any conjugate acid-base pair is:
      </p>
      <BlockMath>{'pH = pK_a + \\log \\left( \\frac{[Conjugate base]}{[Weak acid]} \\right)'}</BlockMath>
      <p>
        Similarly, for a weak base dissociation:
      </p>
      <BlockMath>{'pOH = pK_b + \\log \\left( \\frac{[Conjugate acid]}{[Weak base]} \\right)'}</BlockMath>
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