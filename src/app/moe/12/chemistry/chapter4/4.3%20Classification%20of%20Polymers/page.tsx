'use client';

import { useState } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What type of polymer is made from only one type of monomer?",
    "options": [
      "Homopolymer",
      "Copolymer",
      "Condensation polymer",
      "Addition polymer"
    ],
    "correctAnswer": 0,
    "hint": "Homopolymers are made from a single type of monomer."
  },
  {
    "question": "Which of the following is an example of a copolymer?",
    "options": [
      "Polyethylene",
      "Polystyrene",
      "Polypropylene",
      "Polyethylene terephthalate"
    ],
    "correctAnswer": 3,
    "hint": "Polyethylene terephthalate is a copolymer formed by two types of monomers."
  },
  {
    "question": "What is a key characteristic of random copolymers?",
    "options": [
      "Monomer units alternate in a regular pattern",
      "Monomer units are randomly arranged",
      "Monomers do not form bonds",
      "The polymer is made from a single monomer"
    ],
    "correctAnswer": 1,
    "hint": "In random copolymers, the monomer units are arranged randomly."
  },
  {
    "question": "What distinguishes addition polymers from condensation polymers?",
    "options": [
      "Addition polymers involve the loss of small molecules like water",
      "Addition polymers are formed from unsaturated monomers",
      "Condensation polymers are made from only one type of monomer",
      "Addition polymers are always natural"
    ],
    "correctAnswer": 1,
    "hint": "Addition polymers are formed by the addition reaction of unsaturated monomers."
  },
  {
    "question": "Which of the following is an example of a natural polymer?",
    "options": [
      "Polyethylene",
      "Polystyrene",
      "Polysaccharides",
      "Polyvinyl chloride"
    ],
    "correctAnswer": 2,
    "hint": "Polysaccharides, such as starch and cellulose, are natural polymers."
  },
  {
    "question": "Which polymer is produced by the polymerization of propylene?",
    "options": [
      "Polyethylene",
      "Polypropylene",
      "Polystyrene",
      "Polyvinyl chloride"
    ],
    "correctAnswer": 1,
    "hint": "Polypropylene is produced from the polymerization of propylene."
  },
  {
    "question": "Which polymer is commonly used to make pipes and raincoats?",
    "options": [
      "Polyethylene",
      "Polystyrene",
      "Polyvinyl chloride (PVC)",
      "Polypropylene"
    ],
    "correctAnswer": 2,
    "hint": "Polyvinyl chloride (PVC) is widely used for pipes and raincoats."
  },
  {
    "question": "What is a characteristic of thermoplastics?",
    "options": [
      "They decompose irreversibly at high temperatures",
      "They can melt and resolidify",
      "They are always natural polymers",
      "They form covalent bonds between chains"
    ],
    "correctAnswer": 1,
    "hint": "Thermoplastics can melt and resolidify when heated."
  },
  {
    "question": "Which of the following is an example of a thermoset polymer?",
    "options": [
      "Polypropylene",
      "Polyvinyl chloride",
      "Bakelite",
      "Polyethylene"
    ],
    "correctAnswer": 2,
    "hint": "Bakelite is an example of a thermoset polymer, which decomposes at high temperatures."
  }
]

export default function ClassificationOfPolymers() {
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
      <h1 className="text-3xl font-bold mb-6">4.3 Classification of Polymers</h1>

      <p>
        There are a number of methods of classifying polymers. A few of the methods of polymers classification are listed below.
        A polymer might be made from identical or different types of monomers. This could be used to classify polymers as homopolymers or copolymers.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Homopolymers</h2>
      <p>
        Homopolymers are those made from only one type of monomer. For example, polyethylene is synthesized by the polymerization of one type monomer, ethene (ethylene).
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`n CH_2 = CH_2 -> {\text{Catalyst}} -[CH_2 - CH_2]_n`}</BlockMath>
      </div>
      <p>(monomer: Ethene, polymer: Polyethylene)</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Copolymers</h2>
      <p>
        Copolymers are those prepared by polymerizing more than one kind of monomer unit. For instance, ethene (H<sub>2</sub>C=CH<sub>2</sub>) and propene (H<sub>2</sub>C=CH–CH<sub>3</sub>) can be copolymerized to produce a polymer that has two kinds of repeating units.
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`n CH_2 = CH_2 + m CH_2 = CHCH_3 -> {\text{Catalyst}} (CH_2 - CH_2)_n + (CH_2 - CHCH_3)_m`}</BlockMath>
      </div>

      <p>Random and Regular Copolymers (Where, A and B represent monomer units).</p>

      <p className="text-xl font-semibold mt-6 mb-4">Random Copolymer</p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`A - B - A - B - A - B - A`}</BlockMath>
      </div>

      <p className="text-xl font-semibold mt-6 mb-4">Regular Copolymer</p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`A - B - A - B - A - B - A - B - A`}</BlockMath>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Condensation and Addition Polymers</h2>
      <p>
        Another classification system of polymers is based on the nature of the chemical reactions employed in the polymerization. Here the two major groups are the condensation and the addition polymers.
      </p>
      <p>
        Condensation polymers are those prepared from monomers where reaction is accompanied by the loss of a small molecule, usually of water, for example polyesters which are formed by the condensation shown in the reaction:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`n HO - R - OH + n HOOC - R' - COOH -> {\text{Catalyst}} (HO - R - COO - R' - COO)_n + (n-1) H_2O`}</BlockMath>
      </div>
      <p>By contrast, addition polymers are those formed by the addition reaction of an unsaturated monomer, such as takes place in the polymerization of vinyl chloride.</p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`n CH_2 = CHCl -> {\text{Catalyst}} -(CH_2 - CHCl)_n`}</BlockMath>
      </div>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Natural Polymers</h2>
      <p>
        Natural polymers occur in nature and can be extracted, and are often referred to as biopolymers. Common natural polymers include carbohydrates, proteins, and macromolecules such as polysaccharides and nucleic acids.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Carbohydrates</h3>
      <p>Examples include monosaccharides (glucose, fructose, galactose, ribose) and disaccharides (sucrose, lactose, maltose).</p>
      <h3 className="text-xl font-semibold mt-6 mb-4">Structures</h3>
      <p>Glucose and sucrose structures are shown below:</p>
      <div className="flex justify-center">
        <div className="mr-6">
          <img src="/path/to/glucose-structure.png" alt="Glucose structure" className="max-w-xs" />
          <p className="text-center">Glucose</p>
        </div>
        <div>
          <img src="/path/to/sucrose-structure.png" alt="Sucrose structure" className="max-w-xs" />
          <p className="text-center">Sucrose</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Macromolecules</h2>
      <p>
        Macromolecules such as polysaccharides (e.g., starch, cellulose), proteins (e.g., enzymes), and polyisoprenes (e.g., natural rubber) are examples of natural polymers. See Figure 4.2 for some examples.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Synthetic Polymers</h3>
      <p>
        Synthetic polymers are those which are human-made. For example, polyethylene (Figure 4.3) is widely used in making squeeze bottles, plastic wrapping, garment bags, trash bags, and electrical insulation.
      </p>
      <img src="/path/to/polyethylene-structure.png" alt="Polyethylene structure" className="max-w-xs" />

      <h3 className="text-xl font-semibold mt-6 mb-4">Polypropylene</h3>
      <p>Polypropylene is produced by the addition polymerization of propylene (CH<sub>2</sub>=CHCH<sub>3</sub>) and has a variety of uses like making ropes, fishing nets, and bottles.</p>
      <img src="/path/to/polypropylene-structure.png" alt="Polypropylene structure" className="max-w-xs" />

      <h3 className="text-xl font-semibold mt-6 mb-4">Polyvinyl Chloride (PVC)</h3>
      <p>Polyvinyl chloride (PVC) is widely used for making pipes, leather-like materials, shoes, and raincoats.</p>
      <img src="/path/to/pvc-structure.png" alt="PVC structure" className="max-w-xs" />

      <h3 className="text-xl font-semibold mt-6 mb-4">Polymethyl Methacrylate (PMMA)</h3>
      <p>PMMA is used as a glass substitute in products such as airplane windows and streetlights.</p>
      <img src="/path/to/pmma-structure.png" alt="PMMA structure" className="max-w-xs" />

      <h3 className="text-xl font-semibold mt-6 mb-4">Polytetrafluoroethylene (PTFE)</h3>
      <p>PTFE (Teflon) is known for its chemical resistance and low coefficient of friction, used in food preparation surfaces and electrical insulation.</p>
      <img src="/path/to/ptfe-structure.png" alt="PTFE structure" className="max-w-xs" />

      <h2 className="text-2xl font-semibold mt-6 mb-4">Thermoplastics vs. Thermosets</h2>
      <p>
        Polymers can be classified by their response to thermal treatment into thermoplastics and thermosets. Thermoplastics can melt and resolidify, while thermosets decompose irreversibly at high temperatures.
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-4">Thermoplastics</h3>
      <p>Examples include polyethylene, polypropylene, and polyvinyl chloride.</p>
      <h3 className="text-xl font-semibold mt-6 mb-4">Thermosets</h3>
      <p>Examples include Bakelite, epoxy resin, and silicone resin.</p>
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
