'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is the process of converting an AC voltage supply into a unidirectional DC voltage supply called?",
    "options": [
      "Amplification",
      "Rectification",
      "Capacitation",
      "Inductance"
    ],
    "correctAnswer": 1,
    "hint": "This process uses a diode to change alternating current into direct current."
  },
  {
    "question": "What disadvantage is present in a half-wave rectifier compared to a full-wave rectifier?",
    "options": [
      "It requires more diodes",
      "It only conducts current during one half-cycle of an AC waveform",
      "It stores more energy",
      "It uses fewer components"
    ],
    "correctAnswer": 1,
    "hint": "In half-wave rectification, only half of the AC cycle is converted to DC."
  },
  {
    "question": "Which device emits light when an electrical current flows through it?",
    "options": [
      "Photodiode",
      "LED (Light Emitting Diode)",
      "Resistor",
      "Transistor"
    ],
    "correctAnswer": 1,
    "hint": "This diode emits photons when electrons cross the P-N junction."
  },
  {
    "question": "How does a photodiode generate an electrical current?",
    "options": [
      "By blocking current completely",
      "By converting photons into electron-hole pairs",
      "By storing electrical energy",
      "By amplifying electrical signals"
    ],
    "correctAnswer": 1,
    "hint": "Photons absorbed in the depletion region create moving charge carriers forming current."
  },
  {
    "question": "What is the purpose of using diodes in over-voltage protection circuits?",
    "options": [
      "To increase voltage",
      "To amplify electrical signals",
      "To protect devices by shutting down the switch after detecting over-voltage",
      "To store energy efficiently"
    ],
    "correctAnswer": 2,
    "hint": "Diodes protect electronic circuits by preventing damage caused by voltage spikes."
  }
]

export default function Rectification() {
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
      <h1 className="text-3xl font-bold mb-6">5.3 Rectification</h1>

      <p>
        A P-N junction diode conducts electricity when it is forward biased and it does not conduct electricity when it is reverse biased. Hence, it is used to rectify an alternating current (AC) voltage supply. The process in which an AC voltage supply is converted into a unidirectional (DC) voltage is known as rectification and the electric circuit used for the conversion is called a rectifier. When the AC input is applied to a junction diode, it becomes forward biased during the positive half cycle and reverse biased during the negative half-cycle. Rectification is the main function of diodes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Half Wave Rectification</h2>
      <p>
        A half-wave rectifier only allows one half-cycle of an AC voltage waveform to pass by blocking the other half-cycle. Therefore, the current in the circuit flows in only one direction. A half-wave rectifier consists of a diode and a load resistor connected in series to the cathode end of the diode. The basic principle of a half-wave rectifier is shown in Figure 5.9.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Working Principle of Half Wave Rectifier</h3>
      <p>
        In a half-wave rectifier circuit during the positive half-cycle of the input, the diode is forward biased. Current flows through the load resistor and a voltage is developed across it. During the negative half-cycle, the diode is reverse biased and does not conduct. Therefore, in the negative half-cycle of the supply, no current flows in the load resistor as no voltage appears across it. Thus, the DC voltage across the load is sinusoidal for the first half-cycle only and a pure AC input signal is converted into a DC pulsating output signal.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Full Wave Rectification</h2>
      <p>
        The fact that the current flows only during half of each cycle in a half-wave rectifier is a disadvantage. To overcome this disadvantage, a full-wave rectifier can be used. Figure 5.10 shows a basic full-wave rectifier circuit, which uses four diodes arranged in a particular way.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Working Principle of Full Wave Bridge Rectifier</h3>
      <p>
        The four diodes, labeled D1 to D4, are arranged in such a way that only two diodes conduct current during each half-cycle. During the positive half-cycle of the supply, diodes D1 and D2 conduct in series. However, diodes D3 and D4 are reverse biased and so the current flows through the load resistor. During the negative half-cycle of the supply, diodes D3 and D4 conduct in series, but diodes D1 and D2 switch off as they are now reverse biased. The current flowing through the load is in the same direction as before.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Diodes and Capacitor</h2>
      <p>
        A capacitor is used in rectifier circuits to smooth the fluctuations of the output voltage. A capacitor stores charge and releases it later. The capacitor is connected across the terminals as shown in Figure 5.12. During the positive quarter-cycle of the output voltage, the capacitor is charged to the peak voltage. Then, as the rectifier voltage falls, the capacitor discharges and provides the required current to the load resistor from its stored charge. This charging and discharging process of the capacitor smooths out the waveform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Practical Uses of Diodes</h2>

      <h3 className="text-xl font-semibold mt-6 mb-4">Light Emitting Diodes (LED)</h3>
      <p>
        A light emitting diode (LED) is a P-N junction diode which can emit light when an electrical current flows through it. It uses a special kind of doping so that when an electron crosses the P-N junction, a photon is emitted, which creates light. The frequency (color) of the light emitted is determined by the type of semiconductor material used in the construction of the diode. LED allows the current to flow in the forward direction and blocks the current in the reverse direction. LEDs are very efficient producers of light.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Photodiode</h3>
      <p>
        A photodiode is a semiconductor device with a P-N junction that converts photons (or light) into electrical current. Photons absorbed in the depletion region (or close to it) will create electron-hole pairs, which will move to opposite ends of the diode due to the electric field. Electrons will move toward the positive potential on the cathode, and the holes will move toward the negative potential on the anode. These moving charge carriers form the current (photocurrent) in the photodiode.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Logic Gates</h2>
      <p>
        Diodes and resistors can be combined with other components to construct AND and OR logic gates. This is referred to as diode-resistor logic. These are discussed in detail in section 5.5.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Over-Voltage Protection</h2>
      <p>
        Excess voltage can damage our electronic devices. Sensitive electronic devices need to be protected from fluctuations in voltage; the diode is perfect for this. Diodes achieve this by shutting down the switch after sensing an over-voltage condition.
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
