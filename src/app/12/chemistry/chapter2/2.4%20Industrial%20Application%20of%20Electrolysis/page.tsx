'use client';

import { useState } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is the term used for a mineral from which a metal can be extracted economically?",
    "options": [
      "Ore",
      "Gemstone",
      "Rock",
      "Mineral"
    ],
    "correctAnswer": 0,
    "hint": "An ore is a mineral from which a metal can be extracted economically."
  },
  {
    "question": "Which method is used to extract metals more reactive than carbon?",
    "options": [
      "Electrolysis",
      "Reduction with carbon",
      "Displacement reaction",
      "Distillation"
    ],
    "correctAnswer": 0,
    "hint": "Metals more reactive than carbon are extracted using electrolysis."
  },
  {
    "question": "What is the electrolyte used in the electrolysis of aluminum extraction?",
    "options": [
      "Molten aluminum oxide (Al₂O₃)",
      "Aluminum chloride (AlCl₃)",
      "Copper sulfate (CuSO₄)",
      "Sulfuric acid (H₂SO₄)"
    ],
    "correctAnswer": 0,
    "hint": "The electrolyte used in the electrolysis of aluminum extraction is molten aluminum oxide (Al₂O₃)."
  },
  {
    "question": "In the extraction of aluminum, what is reduced at the cathode?",
    "options": [
      "Aluminum cations (Al³⁺)",
      "Oxygen anions (O²⁻)",
      "Aluminum oxide (Al₂O₃)",
      "Aluminum metal"
    ],
    "correctAnswer": 0,
    "hint": "At the cathode, aluminum cations (Al³⁺) are reduced to form molten aluminum."
  },
  {
    "question": "What forms at the anode during the electrolysis of aluminum oxide?",
    "options": [
      "Oxygen gas (O₂)",
      "Aluminum metal",
      "Aluminum cations (Al³⁺)",
      "Oxygen anions (O²⁻)"
    ],
    "correctAnswer": 0,
    "hint": "At the anode, oxygen anions (O²⁻) are oxidized to release oxygen gas."
  },
  {
    "question": "In the electrolytic refining of copper, what happens to the impure copper at the anode?",
    "options": [
      "It dissolves into the electrolyte.",
      "It gets deposited onto the cathode.",
      "It remains unchanged.",
      "It forms anode mud."
    ],
    "correctAnswer": 0,
    "hint": "At the anode, impure copper dissolves into the electrolyte during the refining process."
  },
  {
    "question": "What is the role of the cathode in the electrolytic refining of copper?",
    "options": [
      "To deposit pure copper from the electrolyte",
      "To dissolve impure copper",
      "To form anode mud",
      "To produce oxygen gas"
    ],
    "correctAnswer": 0,
    "hint": "In electrolytic refining, pure copper is deposited onto the cathode from the electrolyte."
  },
  {
    "question": "What is electroplating commonly used for?",
    "options": [
      "To coat a metal with a layer of another metal",
      "To extract metals from ores",
      "To purify metals",
      "To produce alloys"
    ],
    "correctAnswer": 0,
    "hint": "Electroplating is used to coat a metal with a layer of another metal, often for decorative or protective purposes."
  },
  {
    "question": "In the electroplating of an iron key with copper, which metal is the anode?",
    "options": [
      "Copper",
      "Iron",
      "Gold",
      "Zinc"
    ],
    "correctAnswer": 0,
    "hint": "In the electroplating process, copper is used as the anode to provide copper ions for plating the iron key."
  }
]

export default function IndustrialApplicationOfElectrolysis() {
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
      <h1 className="text-3xl font-bold mb-6">2.4 Industrial Application of Electrolysis</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Extraction of Metals</h2>
      <p>
        Metals and their alloys are extensively used in our day-to-day life. They are used for making machines, railways, motor vehicles, bridges, buildings, agricultural tools, aircraft, ships, etc. Therefore, production of a variety of metals in large quantities is necessary for the economic growth of a country. Only a few metals, such as gold, silver, mercury, etc., occur in the Free State in nature. Most of the other metals, however, occur in the earth’s crust in the combined form, i.e., as compounds with different anions such as oxides, sulphides, halides, etc.
      </p>
      <p>
        A naturally occurring material in which a metal or its compound occurs is called a mineral. A mineral from which a metal can be extracted economically is called an ore. An ore is that mineral in which a metal is present in appreciable quantities and from which the metal can be extracted economically.
      </p>
      <p>
        If a metal is less reactive than carbon, it can be extracted by reacting it with carbon in a displacement reaction. In a displacement reaction, the more reactive metal is able to take the place of a less reactive metal in a compound, since the more reactive metal forms stronger bonds. Carbon replaces the less reactive metal in a redox reaction, where the carbon is oxidized and the metal is reduced. This method is called reduction using carbon. But metals more reactive than carbon are extracted using electrolysis. Electrolysis is a process that uses electricity to separate the elements in a compound. Aluminum, for example, is a reactive and the most abundant metal on Earth, but it is most commonly found as its ore, aluminum oxide (Al<sub>2</sub>O<sub>3</sub>).
      </p>
      <p>
        We can extract aluminum from its ore using the industrial setup of the electrolytic cell. Electrolysis is used to remove the oxygen and extract aluminum, which means that reduction takes place. The electrolyte is molten aluminum oxide, and the electrodes are graphite. The aluminum (Al<sup>3+</sup>) cations are attracted to the cathode, where they are reduced to form molten aluminum.
      </p>
      <BlockMath>{`4 Al^{3+} + 12e^{-} → 4 Al`}</BlockMath>
      <p>
        The aluminum is deposited on the bottom of the cell and drains away. The oxygen (O<sub>2</sub><sup>-</sup>) anions are attracted to the anode, where they are oxidized to release oxygen gas.
      </p>
      <BlockMath>{`6O^{2-} → 3O_2 + 12e^{-}`}</BlockMath>
      <BlockMath>{`4 Al^{3+} + 6O^{2-} → 4 Al + 3O_2`}</BlockMath>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Electrolytic Refining of Metals</h2>
      <p>
        Many metals, such as copper, zinc, tin, nickel, silver, gold, etc., are refined by electrolysis. In this process, the impure metal is made the anode and a thin strip of pure metal is made the cathode. The solution of the metal salt is used as an electrolyte. When current passes through the electrolyte, the pure metal from the anode dissolves into the electrolyte. An equivalent amount of pure metal from the electrolyte is deposited on the cathode. The insoluble impurities settle down at the bottom of the anode and are known as anode mud, whereas the soluble impurities go into the solution.
      </p>
      <p>
        For example, in the electrolytic refining of copper, the electrolyte is a solution of acidified copper sulfate (CuSO<sub>4</sub>). The anode is impure copper, whereas the cathode is a strip of pure copper. On passing electric current, pure copper is deposited on the cathode.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Electroplating of Metals</h2>
      <p>
        Electroplating is the process of plating one metal onto another by electrolysis, most commonly for decorative purposes or to prevent corrosion of a metal. There are also specific types of electroplating such as copper plating, silver plating, and chromium plating. Electroplating allows manufacturers to use inexpensive metals such as steel or zinc for the majority of the product and then apply different metals on the outside to account for appearance, protection, and other properties desired for the product. In the process of electroplating, an external source of electric current is usually applied. This takes place in an electrolytic cell. The metal on which electroplating takes place is made the cathode (negative terminal), while the metal which is going to be plated as a layer on the metal is made the anode (positive terminal). The salt solution of the metal to be deposited is taken as the electrolyte.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Experiment 2.3 - Electroplating of an Iron Key with Copper Metal</h3>
      <p><strong>Objective:</strong> To conduct Electroplating of an iron key with copper metal</p>
      <p><strong>Apparatus and Chemicals:</strong> Beaker, sandpaper, copper wire, power supply (DC) or dry cells, distilled water, 1M copper sulfate solution, 1M H<sub>2</sub>SO<sub>4</sub> solution, copper rod, and an iron key.</p>

      <p>
        <strong>Procedure:</strong>
      </p>
      <ol className="list-decimal ml-8">
        <li>
          Dissolve two teaspoonfuls of CuSO<sub>4</sub> in 250 mL of distilled water in a clean and dry beaker. To increase conduction, add a few drops of dilute H<sub>2</sub>SO<sub>4</sub> solution to CuSO<sub>4</sub> solution. Take a copper plate of 10 cm x 4 cm size and an iron key. Use sandpaper to clean the copper plate and iron key. Rinse them with water and dry them.
        </li>
        <li>
          Place the cleaned copper plate in the CuSO<sub>4</sub> solution and connect it to the positive terminal of a battery. This copper plate becomes the anode.
        </li>
        <li>
          Place the cleaned iron key in the CuSO<sub>4</sub> solution at a small distance from the copper plate and connect the negative terminal of a battery to the iron key. This iron key becomes the cathode.
        </li>
        <li>
          Switch on the electric current and allow it to pass for about 15 minutes.
        </li>
        <li>
          Remove the copper plate and the iron key from the CuSO<sub>4</sub> solution.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Electrosynthesis of Nonmetals and Compounds</h2>
      <p>
        Many nonmetals and compounds can be produced using electrolysis. For example, the chlorine-alkali industry is an important part of the chemical industry, which produces chlorine (a nonmetal) and sodium hydroxide (a compound) through the electrolysis of raw material brine. The reactions that take place at the electrodes (when graphite electrodes are used) are as follows:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`Anode reaction: 2Cl^{-} (aq) → Cl_2 (g) + 2e^{-}`}</BlockMath>
        <BlockMath>{`Cathode reaction: 2H_2O (l) + 2e^{-} → H_2 (g) + 2OH^{-} (aq)`}</BlockMath>
        <BlockMath>{`Overall cell reaction: 2NaCl (aq) + 2H_2O (l) → 2Na^{+} (aq) + 2OH^{-} (aq) + Cl_2 (g) + H_2 (g)`}</BlockMath>
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
