'use client';

import { useState } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is the primary cause of sulfur dioxide (SO2) in the atmosphere?",
    "options": [
      "Combustion of coal and petroleum",
      "Thunderstorms",
      "Ozone layer depletion",
      "Recycling of sulfur from the soil"
    ],
    "correctAnswer": 0,
    "hint": "Sulfur dioxide enters the air primarily from the combustion of coal and petroleum."
  },
  {
    "question": "Which of the following gases makes up the majority of the atmosphere?",
    "options": [
      "Oxygen",
      "Nitrogen",
      "Argon",
      "Carbon Dioxide"
    ],
    "correctAnswer": 1,
    "hint": "Nitrogen constitutes 78% of the Earth's atmosphere."
  },
  {
    "question": "What is the effect of carbon monoxide exposure on the human body?",
    "options": [
      "Increases oxygen-carrying capacity of blood",
      "Reduces oxygen-carrying capacity of blood",
      "Improves vision",
      "Reduces headaches"
    ],
    "correctAnswer": 1,
    "hint": "Carbon monoxide binds with hemoglobin, reducing the oxygen-carrying capacity of blood."
  },
  {
    "question": "What method can help reduce air pollution by decreasing the use of private vehicles?",
    "options": [
      "Using public transport",
      "Using air conditioners",
      "Using plastic bags",
      "Using fossil fuels"
    ],
    "correctAnswer": 0,
    "hint": "Public transport reduces the number of individual vehicles on the road, cutting down air pollution."
  },
  {
    "question": "What is a major water pollutant associated with the excessive use of fertilizers?",
    "options": [
      "Oil spills",
      "Nitrates and phosphates",
      "Sulfur dioxide",
      "Lead compounds"
    ],
    "correctAnswer": 1,
    "hint": "Nitrates and phosphates from fertilizers are key contributors to water pollution."
  },
  {
    "question": "What is eutrophication in the context of water pollution?",
    "options": [
      "Increase in oxygen levels in water",
      "Excessive growth of aquatic plants due to fertilizers",
      "Increase in temperature of water bodies",
      "Reduction in water pollution"
    ],
    "correctAnswer": 1,
    "hint": "Eutrophication occurs when excess fertilizers lead to rapid growth of surface-water plants like algae."
  },
  {
    "question": "Which of the following is a method of reducing water pollution?",
    "options": [
      "Using organic fertilizers",
      "Discharging untreated sewage into rivers",
      "Increasing the use of chemical fertilizers",
      "Releasing oil spills into oceans"
    ],
    "correctAnswer": 0,
    "hint": "Organic fertilizers help reduce water pollution by minimizing harmful chemical runoff."
  },
  {
    "question": "Which of the following is a cause of land pollution?",
    "options": [
      "Spillage of oil from leaking pipelines",
      "Using organic fertilizers",
      "Recycling waste",
      "Planting trees"
    ],
    "correctAnswer": 0,
    "hint": "Oil spillage from pipelines is a major contributor to land pollution."
  },
  {
    "question": "How can the use of non-biodegradable waste contribute to land pollution?",
    "options": [
      "It decomposes easily in soil",
      "It does not decompose naturally and causes environmental harm",
      "It improves soil fertility",
      "It helps in plant growth"
    ],
    "correctAnswer": 1,
    "hint": "Non-biodegradable wastes like plastics do not decompose and cause long-term harm to the environment."
  }
]

export default function EnvironmentalPollution() {
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
      <h1 className="text-3xl font-bold mb-6">Environmental Pollution</h1>
      
      <p>
        Pollution is any discharge of a solid, liquid or gaseous substance or radiation (energy) into an environment that causes unwanted changes. Pollution causes short-term or long-term harm that affects the earth’s ecological balance and lowers the quality of life in the environment. A pollutant is any substance that changes air, water or any other natural resource in a way that impairs the use of the resource. Pollutants are discharged into the environment as a result of natural events (like a volcanic eruption) and as a result of human activities (such as the operation of chemical industries, agriculture, etc.). Pollutants can be classified by the type of pollution they cause: air pollution, water pollution, and land pollution.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Atmosphere as a Solution</h2>
      <p>
        The atmosphere is considered as a solution. Several different gases make up our atmosphere. Since nitrogen (N<sub>2</sub>) is present in the greatest amount in the atmosphere, nitrogen is the “solvent” in our atmospheric “solution”. The solute present in largest amount is oxygen (O<sub>2</sub>), but certainly there are many others.
      </p>
      <p>
        <strong>Table 5.1: Gases in the Atmosphere</strong>
      </p>
      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Percent by Volume</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Nitrogen</td>
            <td className="border px-4 py-2">78%</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Oxygen</td>
            <td className="border px-4 py-2">20.95%</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Argon</td>
            <td className="border px-4 py-2">0.93%</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Gaseous Water</td>
            <td className="border px-4 py-2">0.08%</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Carbon Dioxide</td>
            <td className="border px-4 py-2">0.04% and increasing</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Air Pollution</h2>
      <p>
        Air pollution is caused by the presence of contaminant gaseous substances in the air that affect the lives of plants and animals on Earth. Some common air pollutants include sulfur dioxide (SO<sub>2</sub>), nitrogen oxides (NOx), carbon monoxide (CO), ozone (O<sub>3</sub>), hydrocarbons, particulates, chlorofluorocarbons (CFCs), and lead compounds.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Sulfur Dioxide (SO<sub>2</sub>)</h3>
      <p>
        Sulfur dioxide enters the atmospheric air from the combustion of coal and petroleum, and during the extraction of metals from their sulfide ores. It causes coughing, chest pains, and shortness of breath. It is thought to be a cause for bronchitis and lung diseases.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Oxides of Nitrogen</h3>
      <p>
        These can be formed in the atmosphere by natural processes like thunderstorms. Combustion of fossil fuel containing nitrogen compounds as impurities and exhaust gases from furnaces and engines increase the amount of nitric oxide, NO, and nitrogen dioxide, NO<sub>2</sub>, in the atmosphere. Nitric oxide, NO, catalyzes the decomposition of ozone in the upper layer of the atmosphere to oxygen, thus decreasing the ozone layer:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`2O (g) ⇌ NO → 3O (g)`}</BlockMath>
      </div>
      <p>
        Nitric oxide is oxidized by oxygen to nitrogen dioxide in the presence of ultraviolet light:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`2NO (g) + O_2 (g) → 2NO_2 (g)`}</BlockMath>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">Carbon Monoxide</h3>
      <p>
        Most of the carbon monoxide escapes into the atmosphere due to the incomplete combustion of fuel. Prolonged exposure to carbon monoxide impairs vision, produces headaches, and exerts strain on the heart. It also reduces the oxygen-carrying capacity of the blood by reacting with hemoglobin.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Methods of Reducing Air Pollution</h2>
      <ul className="list-disc ml-8">
        <li>Using public transport</li>
        <li>Turning off lights when not in use</li>
        <li>Recycling and reusing</li>
        <li>Avoiding plastic bags</li>
        <li>Reducing forest fires and smoking</li>
        <li>Using fans instead of air conditioners</li>
        <li>Using filters for chimneys</li>
        <li>Implementing afforestation</li>
        <li>Avoiding the use of products with chemicals</li>
        <li>Avoiding the use of crackers</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Water Pollution</h2>
      <p>
        Water pollution is the degradation of the quality of water due to the discharge of untreated sewage, industrial and agricultural waste, and oil spills. Major water pollutants include nitrate and phosphate fertilizers, untreated sewage, insecticides, and herbicides.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Eutrophication</h3>
      <p>
        Excessive discharge of fertilizers into water systems accelerates the growth of surface-water plants, such as algae. When these aquatic plants die, bacteria consume the oxygen in the water, depleting it and killing aquatic animals like fish.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Methods of Reducing Water Pollution</h2>
      <ul className="list-disc ml-8">
        <li>Treating water before discharge into rivers and lakes</li>
        <li>Avoiding unnatural temperature changes in natural water systems</li>
        <li>Recycling industrial and agricultural wastes</li>
        <li>Using organic fertilizers and biological methods to control pests</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Land Pollution</h2>
      <p>
        Land pollution is caused by the improper disposal of waste, including oil spills, harmful chemicals, and non-biodegradable wastes like plastics.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Causes of Land Pollution</h3>
      <ul className="list-disc ml-8">
        <li>Spillage of oil from leaking pipelines</li>
        <li>Leaching of harmful chemicals from buried waste</li>
        <li>Dumping of non-biodegradable waste like plastics</li>
        <li>Excessive use of synthetic fertilizers</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Methods of Reducing Land Pollution</h2>
      <p>
        Reducing non-biodegradable waste is a critical strategy in reducing land pollution. Non-biodegradable waste, like plastics, does not decompose naturally and can cause serious environmental harm.
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
