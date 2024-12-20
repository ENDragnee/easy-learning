'use client';

import { useState } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is the main cause of carbon dioxide (CO₂) emissions in the atmosphere?",
    "options": [
      "Combustion of fossil fuels",
      "Deforestation",
      "Cement production",
      "All of the above"
    ],
    "correctAnswer": 3,
    "hint": "Carbon dioxide is released through activities like fuel use, deforestation, and cement production."
  },
  {
    "question": "Which greenhouse gas has the longest time spent in the atmosphere?",
    "options": [
      "Methane (CH₄)",
      "Carbon Dioxide (CO₂)",
      "Nitrous Oxide (N₂O)",
      "Halogenated Compounds (CFCs)"
    ],
    "correctAnswer": 1,
    "hint": "Carbon dioxide can remain in the atmosphere for up to 30,000 years, affecting global warming for a long time."
  },
  {
    "question": "What is the major source of methane (CH₄) emissions?",
    "options": [
      "Fossil fuel combustion",
      "Livestock production",
      "Cement production",
      "Deforestation"
    ],
    "correctAnswer": 1,
    "hint": "Methane is primarily produced by livestock, agriculture, sewage treatment, and certain industrial processes."
  },
  {
    "question": "Which greenhouse gas contributes the most to global warming?",
    "options": [
      "Methane (CH₄)",
      "Carbon Dioxide (CO₂)",
      "Halogenated Compounds (CFCs)",
      "Tropospheric Ozone (O₃)"
    ],
    "correctAnswer": 1,
    "hint": "Carbon dioxide is the largest contributor to global warming, with a contribution of about 52.92%."
  },
  {
    "question": "Which gas does not absorb infrared radiation and, therefore, does not contribute to the greenhouse effect?",
    "options": [
      "Oxygen (O₂)",
      "Carbon Dioxide (CO₂)",
      "Methane (CH₄)",
      "Nitrous Oxide (N₂O)"
    ],
    "correctAnswer": 0,
    "hint": "Oxygen is abundant in the atmosphere but does not absorb infrared radiation, unlike greenhouse gases."
  },
  {
    "question": "What is the average time methane (CH₄) stays in the atmosphere?",
    "options": [
      "12 years",
      "200 years",
      "114 years",
      "Tens of thousands of years"
    ],
    "correctAnswer": 0,
    "hint": "Methane typically stays in the atmosphere for around 12 years before breaking down."
  },
  {
    "question": "How does green chemistry help in reducing climate change?",
    "options": [
      "By increasing the use of harmful substances",
      "By designing processes that minimize hazardous waste",
      "By promoting fossil fuel use",
      "By reducing the energy efficiency of chemical processes"
    ],
    "correctAnswer": 1,
    "hint": "Green chemistry aims to design processes that minimize the use and generation of hazardous substances."
  },
  {
    "question": "Which of the following gases is associated with the use of fertilizers and contributes to global warming?",
    "options": [
      "Nitrous Oxide (N₂O)",
      "Carbon Dioxide (CO₂)",
      "Tropospheric Ozone (O₃)",
      "Methane (CH₄)"
    ],
    "correctAnswer": 0,
    "hint": "Nitrous oxide is produced during the use of fertilizers and can remain in the atmosphere for up to 114 years."
  }
]

export default function GlobalWarmingAndClimateChange() {
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
      <h1 className="text-3xl font-bold mb-6">Global Warming and Climate Change</h1>

      <p>
        In this sub-section, we will discuss the role of several chemical reactions that occur in the atmosphere, as well as direct emissions of some greenhouse gases into the atmosphere which cause global warming. In general, the relationship between chemistry and climate change will be explored under two headings: global warming and climate change from the standpoint of chemistry, and greenhouse gas chemistry and its impacts on climate change.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Why Chemistry is so Important in the Fight Against Climate Change?</h2>
      <p>
        Any human activity has a definite impact on the environment. In this context, climate change is one of the main current concerns and challenges for mankind. Data in our hands reveals the existence of a global warming process, and urgent actions are needed before dramatic and irreversible (on a human scale) climate changes take place. The emission of certain substances to the atmosphere produces a greenhouse effect contributing to global warming. Even if their origin is diverse, many of these emitted gases or substances resulted from:
      </p>
      
      <p>
        Certain types of chemical reactions, mainly from the combustion of fuel:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`C_XH_Y + O_2 -> CO_2 + H_2O + \text{heat energy}`}</BlockMath>
      </div>
      <p>Where X and Y represent the carbon and hydrogen numbers of the hydrocarbon compound.</p>

      <p>
        Some of them may be manufactured products like CFCs, solvents, and volatile organic compounds.
      </p>

      <p>
        Some have a natural origin, such as methane generated by living organisms, particularly in the oceans.
      </p>

      <p>
        In other cases, however, they are associated with human activities. The most well-known is carbon dioxide (CO₂), and its increasing content in the atmosphere is mainly associated with the combustion of fossil fuels.
      </p>

      <p>
        According to data from the US Department of Energy, global emissions of carbon dioxide resulting from the combustion of fossil fuels have increased by a factor of 10 since 1900. A variety of other gases contribute to the greenhouse effect, including solvents, chlorofluorocarbons, volatile organic compounds (VOCs), nitrogen, and sulfur oxides. Some of them can have, intrinsically, an even greater greenhouse effect than CO₂, but in general, they are released to the atmosphere in much smaller amounts. Besides, some of them, like nitrogen oxides, are generated concomitantly with CO₂ in combustion.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Greenhouse Effect</h2>
      <p>
        The greenhouse effect happens when certain gases, known as greenhouse gases, accumulate in Earth’s atmosphere. Greenhouse gases include carbon dioxide (CO₂), methane (CH₄), nitrous oxide (N₂O), ozone (O₃), water vapor (H₂O), and fluorinated gases. These gases warm our planet by absorbing infrared (IR) radiation that would otherwise escape into space. Without this warming effect, called the greenhouse effect, the average temperature on Earth would be a chilly 255 K (that’s -18°C, or the temperature on an extremely cold winter day). 
      </p>

      <p>
        Because these greenhouse gases in our atmosphere absorb IR light, Earth’s average temperature is 288 K (that’s 15°C, about the temperature on a slightly cool spring day). Thus, Earth is 33 K warmer than what would be expected if there were no greenhouse effect.
      </p>

      <p>
        For example, CO₂ (g) and H₂O (g) do absorb IR light and, upon doing so, gain energy which is transferred to the rest of the Earth. Even though these gases are present in small amounts, they are very good at absorbing infrared light. Thus, these atmospheric gases are the main contributors to the greenhouse effect.
      </p>

      <p>
        On the other hand, both N₂ (g) and O₂ (g) are present in very large amounts in the atmosphere, but these gases do not absorb IR light and therefore do not contribute to the greenhouse effect.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Contribution of Greenhouse Gases to Global Warming</h2>
      <p>
        Not all greenhouse gases produced by human activities have the same effect, nor do they come from the same sources. Each lasts for a different time in the atmosphere. Here are the five gases of human origin that contribute most to global warming:
      </p>

      <table className="table-auto border-collapse border border-gray-300 w-full mt-6">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Greenhouse Gas</th>
            <th className="border border-gray-300 px-4 py-2">Sources of Emission</th>
            <th className="border border-gray-300 px-4 py-2">Time Spent in Atmosphere</th>
            <th className="border border-gray-300 px-4 py-2">Contribution to Global Warming</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Carbon Dioxide (CO₂)</td>
            <td className="border border-gray-300 px-4 py-2">Processes like fuel use, deforestation, and cement production</td>
            <td className="border border-gray-300 px-4 py-2">80% lasts for 200 years, the other 20% can last up to 30,000 years</td>
            <td className="border border-gray-300 px-4 py-2">52.92%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Methane (CH₄)</td>
            <td className="border border-gray-300 px-4 py-2">Livestock production, agriculture, sewage treatment, oil and gas distribution, coal mining, fuel use</td>
            <td className="border border-gray-300 px-4 py-2">Lasts an average of 12 years</td>
            <td className="border border-gray-300 px-4 py-2">14.88%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Halogenated Compounds (CFCs, HCFCs)</td>
            <td className="border border-gray-300 px-4 py-2">Chemical production in refrigeration, air conditioning, electronics, etc.</td>
            <td className="border border-gray-300 px-4 py-2">Varies from months to tens of thousands of years</td>
            <td className="border border-gray-300 px-4 py-2">10.78%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Tropospheric Ozone (O₃)</td>
            <td className="border border-gray-300 px-4 py-2">Generated by combustion of carbon monoxide, nitrogen dioxide, and VOCs</td>
            <td className="border border-gray-300 px-4 py-2">Lasts for months</td>
            <td className="border border-gray-300 px-4 py-2">10.72%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Nitrous Oxide (N₂O)</td>
            <td className="border border-gray-300 px-4 py-2">Use of fertilizers, fuel, chemical production, and sewage treatment</td>
            <td className="border border-gray-300 px-4 py-2">Up to 114 years</td>
            <td className="border border-gray-300 px-4 py-2">10.70%</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Green Chemistry and Cleaner Production</h2>
      <p>
        Green chemistry is an area of chemistry that seeks to design chemical products and processes that minimize the use and generation of hazardous substances. By promoting cleaner production, we can reduce the impact of human activities on the environment and help mitigate climate change.
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
