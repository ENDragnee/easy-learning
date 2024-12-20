'use client';

import { useState } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is the ability of a substance to transmit electricity called?",
    "options": [
      "Electrical conductivity",
      "Electrolysis",
      "Metallic conduction",
      "Electrolytic conduction"
    ],
    "correctAnswer": 0,
    "hint": "Electrical conductivity refers to the ability of a substance to transmit electricity."
  },
  {
    "question": "Which of the following describes electronic conductors?",
    "options": [
      "They conduct electricity through the movement of ions.",
      "They conduct electricity through the movement of electrons.",
      "They require an electrical field to conduct electricity.",
      "They do not conduct electricity at high temperatures."
    ],
    "correctAnswer": 1,
    "hint": "Electronic conductors, such as metals, conduct electricity through the movement of delocalized electrons."
  },
  {
    "question": "What happens to the conductivity of metals as temperature increases?",
    "options": [
      "It increases.",
      "It decreases.",
      "It stays the same.",
      "It fluctuates."
    ],
    "correctAnswer": 1,
    "hint": "The conductivity of metals decreases with increasing temperature due to enhanced thermal vibrations."
  },
  {
    "question": "What is the role of ions in electrolytic conduction?",
    "options": [
      "They move towards the cathode.",
      "They transfer electricity through metallic conductors.",
      "They move towards the anode.",
      "They remain stationary in the solution."
    ],
    "correctAnswer": 0,
    "hint": "In electrolytic conduction, ions move towards the respective electrodes, carrying charge."
  },
  {
    "question": "Which of the following substances would conduct electricity in solution?",
    "options": [
      "Sugar",
      "Water",
      "Salt",
      "Oil"
    ],
    "correctAnswer": 2,
    "hint": "Salt dissociates into ions in solution, allowing it to conduct electricity."
  },
  {
    "question": "What is an electrochemical cell?",
    "options": [
      "A device that uses chemical reactions to generate electrical energy",
      "A device that generates heat energy",
      "A battery used in electronic devices",
      "A cell used for chemical synthesis"
    ],
    "correctAnswer": 0,
    "hint": "An electrochemical cell converts chemical energy into electrical energy or vice versa."
  },
  {
    "question": "What does preferential discharge refer to in electrolysis?",
    "options": [
      "The preference of certain ions to be discharged at electrodes.",
      "The complete discharge of ions in solution.",
      "The movement of ions without any discharge.",
      "The random discharge of ions at the electrodes."
    ],
    "correctAnswer": 0,
    "hint": "Preferential discharge occurs when certain ions are more likely to be discharged at electrodes than others."
  },
  {
    "question": "Which factor does NOT affect preferential discharge of ions during electrolysis?",
    "options": [
      "Ion concentration",
      "Position in the electrochemical series",
      "Nature of the electrode",
      "Size of the container"
    ],
    "correctAnswer": 3,
    "hint": "The size of the container does not affect preferential discharge; the concentration and electrochemical series do."
  },
  {
    "question": "In the electrolysis of dilute sulfuric acid, what is reduced at the cathode?",
    "options": [
      "H₂ gas",
      "O₂ gas",
      "SO₄²⁻",
      "OH⁻"
    ],
    "correctAnswer": 0,
    "hint": "At the cathode, hydrogen ions (H⁺) are reduced to form hydrogen gas (H₂)."
  }
]

export default function ElectrolysisOfAqueousSolutions() {
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
      <h1 className="text-3xl font-bold mb-6">2.2 Electrolysis of Aqueous Solutions</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Introduction</h2>
      <div>
        Before we study the electrolysis of aqueous solutions, let us consider some important concepts about conductivity. Electrical conductivity is the ability of a substance to transmit electricity. The substances, which allow the passage of electric current, are called conductors. Conductors of electricity are further classified into two types depending on their mode of transport of electrical charges inside them. These are electronic (metallic) conductors and electrolytic conductors.
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Metallic Conduction</h2>
      <div>
        Metals and alloys conduct electricity due to the movement (mobility) of delocalized outer shell electrons present inside them and are known as electronic conductors (or metallic conductors). In metallic conductors:
        <ul className="list-disc pl-5 mt-4">
          <li>There is only a flow of electrical energy but no transfer of matter.</li>
          <li>Electrical conduction through metals does not bring about any chemical transformations.</li>
          <li>Free and mobile electrons of the metallic atoms or their solid solutions, such as alloys, are responsible for electrical conductance.</li>
          <li>Conductivity of metals decreases with increase in temperature due to the enhanced thermal vibration of metal atoms disrupting the movement of electrons passing through them.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Electrolytic Conduction</h2>
      <div>
        Electrovalent (or ionic) compounds conduct electricity in their dissolved state (in solutions) or in their fused state only. These compounds consist of ions of opposite charges, and in aqueous solution, they exist as ions. In the presence of an applied electrical field, these ions migrate to their respective electrodes, exhibiting electrical conductivity. This mobility of ions is responsible for conduction of electricity through electrolytes and is referred to as electrolytic conduction. In the electrolytic conduction:
        <ul className="list-disc pl-5 mt-4">
          <li>Passage of current through electrolytes is accompanied by chemical changes.</li>
          <li>There is an actual transfer of matter since ions move towards respective electrodes.</li>
          <li>The conductivity of electrolytes increases with an increase in temperature due to increased ionic mobility.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Experiment 2.1: Electrical Conductivity Test</h2>
      <div>
        <h3 className="text-xl font-semibold mt-4 mb-2">Objective:</h3>
        <div>To classify substances as electrical conductors and insulators.</div>

        <h3 className="text-xl font-semibold mt-4 mb-2">Materials and Chemicals:</h3>
        <ul className="list-disc pl-5 mt-4">
          <li>Copper wire, light bulb, power supply (DC) or dry cells, scotch tape, distilled water, 1M NaCl solution, 1M H2SO4 solution, 1M CH3COOH solution, 1M sugar solution, magnesium ribbon, and an iron nail.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Procedure:</h3>
        <ol className="list-decimal pl-5 mt-4">
          <li>Polish the strip of copper and connect the two ends of the copper wire as shown in Figure 2.2a. Do the same for the iron nail and magnesium. Record your observations.</li>
          <li>Rinse the 100 mL beaker thoroughly with distilled water and fill it to the 50 mL mark. Insert the two ends of the copper wire as shown in Figure 2.2b. Record your observation.</li>
        </ol>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Electrochemical Cells</h2>
      <div>
        An electrochemical cell is a device that can generate electrical energy from the chemical reactions occurring in it, or use the electrical energy supplied to it to facilitate chemical reactions in it. These devices are capable of converting chemical energy into electrical energy, or vice versa. A common example of an electrochemical cell is a standard 1.5-volt cell, which is used to power many electrical appliances such as TV remotes and clocks. There are two types of electrochemical cells:
        <ul className="list-disc pl-5 mt-4">
          <li>Galvanic cells (also known as Voltaic cells)</li>
          <li>Electrolytic cells</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">What Does Preferential Discharge Mean?</h2>
      <div>
        During electrolysis, the cations being positively charged get attracted towards the negatively charged electrode (cathode), and anions being negatively charged get attracted towards the positively charged electrode (anode). If more than one cation or anion reaches an electrode, only one of them preferentially gets discharged at that electrode. This is called the preferential discharge of ions during electrolysis. 
      </div>

      <h3 className="text-xl font-semibold mt-4 mb-2">Factors Affecting Preferential Discharge:</h3>
      <ul className="list-disc pl-5 mt-4">
        <li><strong>Position of Ions in the Electrochemical Series:</strong> The ions that are lower in the electrochemical series are discharged in preference to those above them.</li>
        <li><strong>Concentration of Ions:</strong> Higher the concentration of ions in the solution, the greater the probability that those ions will be discharged.</li>
        <li><strong>The Nature of the Electrode:</strong> If the electrode is inert (e.g., graphite, platinum), it does not play a role in deciding which ions get discharged. However, if the electrode is active (e.g., copper, silver), it may participate in the reactions and influence the discharge of ions.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Reactivity Series of Metals</h2>
      <div>
        <h3 className="text-xl font-semibold mt-4 mb-2">Activity of Metals:</h3>
        <div>
          The reactivity series is a list of metals in decreasing order of their reactivity. This series helps to determine the products of single displacement reactions. For example:
          <BlockMath math="Zn(s) + Cu^{2+}(aq) \rightarrow Zn^{2+}(aq) + Cu(s)" />
        </div>

        <div className="mt-4">
          In the reaction above, zinc displaces copper from its ionic form in solution because zinc is more reactive than copper.
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Electrolysis of Aqueous Solutions</h2>
      <div>
        Electrolysis involves the decomposition of ionic compounds into their elements by passing a direct current through the compound in an aqueous solution. The ions move towards the electrodes, where they are reduced or oxidized, depending on the charge of the electrode. Cations move towards the cathode, while anions move towards the anode.
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Electrolysis of Dilute Sulfuric Acid Solution</h2>
      <div>
        When a dilute solution of sulfuric acid is electrolyzed, the ions present are H<sup>+</sup>, OH<sup>-</sup>, and SO<sub>4</sub><sup>2-</sup>. The reduction at the cathode is represented as:
        <BlockMath math="4H^{+}(aq) + 4e^{-} \rightarrow 2H_2(g)" />
      </div>

      <h3 className="text-xl font-semibold mt-4 mb-2">Anode (Oxidation):</h3>
      <BlockMath math="4OH^{-}(aq) \rightarrow 2H_2O(l) + O_2(g) + 4e^{-}" />

      <div className="mt-4">
        The overall reaction at the anode is the oxidation of hydroxide ions to oxygen gas.
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
