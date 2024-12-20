'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is electromagnetism composed of?",
    "options": [
      "Gravity and sound",
      "Electric fields and magnetic fields",
      "Thermal fields and gravitational forces",
      "Radio waves and sound waves"
    ],
    "correctAnswer": 1,
    "hint": "Electromagnetism involves the combination of electric and magnetic forces."
  },
  {
    "question": "Who discovered the relationship between electricity and magnetism through an experiment with a compass needle?",
    "options": [
      "Michael Faraday",
      "Joseph Henry",
      "Hans Christian Oersted",
      "Albert Einstein"
    ],
    "correctAnswer": 2,
    "hint": "Hans Christian Oersted observed that an electric current affected a nearby compass needle in 1819."
  },
  {
    "question": "Which type of magnet generates a magnetic field due to its internal structure?",
    "options": [
      "Temporary magnet",
      "Electromagnet",
      "Permanent magnet",
      "Metallic magnet"
    ],
    "correctAnswer": 2,
    "hint": "A permanent magnet generates its magnetic field from its internal structure."
  },
  {
    "question": "What happens to an electromagnet when the electric current is turned off?",
    "options": [
      "It gains more magnetism",
      "It retains its magnetic field",
      "It loses its magnetism",
      "It changes direction of the magnetic field"
    ],
    "correctAnswer": 2,
    "hint": "An electromagnet only has a magnetic field when an electric current flows through it."
  },
  {
    "question": "What is a key difference between an electric field and a magnetic field?",
    "options": [
      "Electric fields form closed loops, while magnetic fields do not.",
      "Electric fields are measured in Tesla, whereas magnetic fields are in Newton per Coulomb.",
      "Electric fields start on a positive charge and end on a negative charge, whereas magnetic fields do not have start or end points.",
      "Electric fields only exist around metals, while magnetic fields only exist in the air."
    ],
    "correctAnswer": 2,
    "hint": "Electric field lines follow charges, while magnetic field lines form closed loops without starting or ending points."
  },
  {
    "question": "Which materials exhibit magnetic properties as per the document?",
    "options": [
      "Gold and silver",
      "Iron, nickel, and cobalt",
      "Plastic and wood",
      "Copper and aluminum"
    ],
    "correctAnswer": 1,
    "hint": "Magnetic materials include substances like iron, nickel, and cobalt."
  },
  {
    "question": "How does the Earth's magnetic field behave internally?",
    "options": [
      "Like a giant electrical circuit",
      "Like a giant bar magnet",
      "Like a gravitational field",
      "Like a thermal conductor"
    ],
    "correctAnswer": 1,
    "hint": "Earth's magnetic field is similar to a giant bar magnet with north and south poles."
  },
  {
    "question": "What is the SI unit for measuring a magnetic field?",
    "options": [
      "Volt per meter",
      "Newton per Coulomb",
      "Tesla",
      "Watt per second"
    ],
    "correctAnswer": 2,
    "hint": "The SI unit for the strength of a magnetic field is Tesla."
  }
]


export default function Electromagnetism() {
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
      <h1 className="text-3xl font-bold mb-6">Unit 4: Electromagnetism</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4.1 Introduction</h2>
      <p>
        Electromagnetism is one of the fundamental forces of nature, consisting of the elements of electricity and
        magnetism. It involves the study of the electromagnetic force, which is carried by electromagnetic fields composed
        of electric fields and magnetic fields. At the subatomic level, electromagnetism governs the attraction and repulsion
        of electrically charged particles. For example, when electrically charged particles such as electrons are set in motion,
        they create a magnetic field. If these particles oscillate, they produce electromagnetic radiation, such as radio waves.
      </p>

      <p>
        Electricity and magnetism have been known to humanity for centuries. However, their relationship was discovered in 1819,
        when Hans Christian Oersted observed that an electric current in a wire deflected a nearby compass needle during a lecture
        demonstration. This experiment was the first reproducible observation of a connection between electricity and magnetism.
        Oersted found that a current-carrying wire produced a magnetic field, with the field's strength and direction dependent on
        the magnitude and direction of the current.
      </p>

      <p>
        In the 1820s, Michael Faraday and Joseph Henry independently demonstrated further connections between electricity and magnetism.
        They showed that an electric current could be induced in a circuit either by moving a magnet near the circuit or by varying the
        current in a nearby circuit. This discovery laid the foundation for the study of electromagnetic induction.
      </p>

      <p>
        The discovery of electromagnetism marked the birth of modern science and technology. It is now understood that all magnetic
        phenomena result from forces arising due to electric charges in motion. Without an understanding of electromagnetism, the
        invention of devices such as radios, televisions, computers, tape recorders, CD players, electric motors, and generators
        would not have been possible.
      </p>
      <h1 className="text-3xl font-bold mb-6">4.1 Magnets and Magnetic Field</h1>

      <p>
        A magnet generates a magnetic field, which represents the magnetic force existing in the region around the magnet.
        A magnetic pole is the part of a magnet that exerts the strongest force on other magnets or magnetic materials such
        as iron, nickel, and cobalt. Every magnet has two poles: a north pole (N) and a south pole (S). Like poles (N-N or S-S)
        repel each other, and opposite poles (N-S) attract each other.
      </p>

      <p>
        Although the force between two magnetic poles is similar to the force between two electric charges, electric charges
        can be isolated (as a positive and negative charge), whereas it is not possible to separate the north and south poles
        of a magnet. That is, magnetic poles are always found in pairs. No matter how many times a permanent magnet is cut into
        two, each piece always has a north and a south pole.
      </p>

      <p>
        Permanent and electromagnets are the two major types of materials that exhibit magnetic properties. Permanent magnets
        are materials where the magnetic field is generated by the internal structure of the material itself. Once permanent
        magnets are magnetized, they hold their magnetic property for a very long time.
      </p>

      <p>
        An electromagnet usually consists of wire wound into a coil. The electromagnet generates a magnetic field when an
        electric current is supplied to it, and it loses its magnetism when the current is turned off. Figure 4.2 shows a simple
        electromagnet consisting of a coil of wire wrapped around an iron core. The iron core serves to increase the strength of
        the magnetic field created.
      </p>

      <p>
        The Earth has a magnetic field. The magnetic field behaves like a giant bar magnet inside the Earth, with the North
        magnetic pole corresponding to the South Geographic Pole and vice versa. A compass needle aligns itself in a north-south
        direction to line up with Earth’s magnetic field.
      </p>

      <p>
        The magnetic field is the region around a magnet or a moving electric charge within which the force of magnetism acts.
        As you have learned in previous grades, an electric field surrounds an electric charge. Similarly, a magnetic field also
        surrounds a magnet. The magnetic field is a vector quantity, and the vector points in the direction that a compass would point.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Differences Between Electric Field and Magnetic Field</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>
          The SI unit of an electric field is Newton per coulomb, whereas the SI unit of magnetic field is Tesla.
        </li>
        <li>
          The region around the electric charge where the electric force exists is called an electric field. The region around the
          magnet where the pole of the magnet exhibits a force of attraction or repulsion is called a magnetic field.
        </li>
        <li>
          The electric field is produced by a unit charge, i.e., either a positive or a negative charge, whereas the magnetic field
          is caused by a dipole of the magnet (i.e., the north and south poles).
        </li>
        <li>
          The electric field lines start on a positive charge and end on a negative charge, whereas the magnetic field lines do
          not have starting or ending points.
        </li>
        <li>
          The electric field lines do not form a loop, whereas the magnetic field lines form a closed loop.
        </li>
      </ul>
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