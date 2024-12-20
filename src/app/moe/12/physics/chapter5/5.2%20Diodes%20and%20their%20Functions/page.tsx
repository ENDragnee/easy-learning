'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is a diode primarily used for in electronic circuits?",
    "options": [
      "To amplify signals",
      "To only conduct current in one direction",
      "To store energy",
      "To create resistance"
    ],
    "correctAnswer": 1,
    "hint": "A diode only allows current to flow in one direction while blocking it in the other."
  },
  {
    "question": "What is formed when an N-type semiconductor is joined with a P-type semiconductor?",
    "options": [
      "A capacitor",
      "A P-N junction diode",
      "A resistor",
      "An inductor"
    ],
    "correctAnswer": 1,
    "hint": "The P-N junction is a key component in semiconductor diodes."
  },
  {
    "question": "What happens to the depletion region when a P-N junction is reverse biased?",
    "options": [
      "It becomes thinner",
      "It remains the same",
      "It increases in width",
      "It disappears completely"
    ],
    "correctAnswer": 2,
    "hint": "In reverse bias, the depletion region widens, blocking current flow."
  },
  {
    "question": "What is the barrier potential of a silicon P-N junction diode?",
    "options": [
      "0.3V",
      "0.5V",
      "0.7V",
      "1.0V"
    ],
    "correctAnswer": 2,
    "hint": "The barrier potential depends on the material; silicon typically has a barrier of 0.7V."
  },
  {
    "question": "Which bias condition allows current to flow easily through a P-N junction diode?",
    "options": [
      "Reverse biased",
      "Zero biased",
      "Forward biased",
      "Infinite biased"
    ],
    "correctAnswer": 2,
    "hint": "Forward biasing connects the positive terminal of a battery to the P-side of the diode."
  },
  {
    "question": "What is the cut-in voltage for a germanium diode?",
    "options": [
      "0.3V",
      "0.5V",
      "0.7V",
      "1.0V"
    ],
    "correctAnswer": 0,
    "hint": "The cut-in voltage for germanium diodes is approximately 0.3V."
  },
  {
    "question": "What is the result of a breakdown voltage condition in a reverse-biased diode?",
    "options": [
      "Current increases sharply",
      "Current decreases to zero",
      "Current remains constant",
      "No current flows"
    ],
    "correctAnswer": 0,
    "hint": "At breakdown voltage, the current through the diode increases dramatically."
  },
  {
    "question": "Why are resistors used in series with diodes in forward biasing conditions?",
    "options": [
      "To increase the voltage",
      "To limit current flow",
      "To decrease resistance",
      "To store charge"
    ],
    "correctAnswer": 1,
    "hint": "Resistors prevent excessive current through the diode by limiting it."
  },
  {
    "question": "What materials are commonly used in the construction of semiconductor diodes?",
    "options": [
      "Copper and zinc",
      "Silicon, germanium, and gallium arsenide",
      "Gold and silver",
      "Magnesium and boron"
    ],
    "correctAnswer": 1,
    "hint": "Materials like silicon, germanium, and gallium arsenide are key in semiconductor diodes."
  },
  {
    "question": "What is the term for the absence of charge carriers that creates a positive region in a P-type semiconductor?",
    "options": [
      "Depletion region",
      "Hole",
      "Electron pair",
      "Resistance region"
    ],
    "correctAnswer": 1,
    "hint": "Holes act as positive charge carriers in P-type semiconductors."
  }
]

export default function DiodesAndTheirFunctions() {
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
    <div className="ppx-6 sm:px-6 sm:text-xs md:text-base py-6 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">5.2 Diodes and their Functions</h1>

      <p>
        A diode is a two-terminal electronic component that only conducts current in one direction and blocks current in the reverse direction. Diodes are made from a variety of materials including silicon, germanium, and gallium arsenide, etc.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">P-N Junction Diode</h2>
      <p>
        Semiconductor diodes are the most common type of diode. When an N-type semiconductor is joined with a P-type semiconductor, a P-N junction diode is formed. When a P-N junction is formed, some of the electrons in the N-region diffuse across the junction and combine with holes to form negative ions on the P-side. This leaves behind positive ions in the N-region.
      </p>
      <p>
        The combination of electrons and holes near the junction creates a narrow region called the depletion region. Within the depletion region, there are very few mobile electrons and holes.
      </p>
      <p>
        The electric field created by the ions in the depletion region prevents any further diffusion across the junction by establishing a barrier potential. The barrier potential is the potential difference required to move the electrons through the electric field. The barrier potential of a P-N junction depends on the type of semiconductor material: approximately 0.7V for silicon and 0.3V for germanium.
      </p>
      <p>
        Figure 5.5 shows the symbol of a diode, with the arrowhead pointing in the direction of conventional current flow, meaning the anode is connected to the P-side and the cathode to the N-side.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Biasing of P-N Junction Diode</h2>
      <p>
        Applying a suitable DC voltage to a diode is known as biasing. Biasing can be done in two ways: forward biasing and reverse biasing. Diodes in both forward and reverse bias are useful for computer chips, solar cells, and other electronic devices. Zero biasing occurs when no external voltage is applied to the P-N junction diode.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Forward Biased</h3>
      <p>
        When the positive terminal of the battery is connected to the P-type semiconductor and the negative terminal to the N-type semiconductor, the P-N junction diode is said to be forward biased. In this condition, the electrons move toward the junction due to being repelled by the negative terminal of the battery, while holes move toward the junction as they are repelled by the positive terminal.
      </p>
      <p>
        When a forward biasing voltage is applied, the depletion region becomes very thin, allowing current to flow easily.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Reverse Biased</h3>
      <p>
        When the negative terminal of the battery is connected to the P-type semiconductor and the positive terminal to the N-type semiconductor, the P-N junction diode is reverse biased. In reverse bias, the free electrons from the N-type semiconductor and the holes from the P-type semiconductor move away from the P-N junction, increasing the width of the depletion region and blocking current flow.
      </p>
      <p>
        This results in a high resistance path with nearly zero current flowing through the diode.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Current-Voltage (I-V) Characteristics of the Semiconductor Diode</h2>
      <p>
        From the I-V curve, we can see that current is very low if the forward voltage is lower than the cut-in voltage. The cut-in voltage is the voltage at which forward diode current begins to increase rapidly. Once the forward bias exceeds the cut-in voltage (0.3V for germanium diodes, 0.7V for silicon diodes), current increases dramatically, and the diode behaves almost like a short-circuit.
      </p>
      <p>
        Since the diode can conduct high current above the cut-in voltage, resistors are used in series to limit the current flow.
      </p>
      <p>
        In reverse bias, a small current (called the reverse bias or leakage current) flows due to minority charge carriers. If the reverse bias voltage becomes too high, a sharp change in the reverse current characteristics occurs, known as breakdown voltage. At breakdown voltage, the current increases rapidly.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">External Resources</h2>
      <p>
        You can watch this related video on YouTube: 
        <div className="relative aspect-w-16 aspect-h-9 sm:aspect-h-[10] mb-6">
        <iframe
          src="https://youtu.be/g54vURe47gM?si=jNHnVmk_AdYitShv"
          className="w-full h-full"
          style={{ minHeight: "450px" }} // Ensures larger height
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
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
