'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "Which principle is the working foundation for the technology in computer hard drives?",
    "options": [
      "Electric field induction",
      "Magnetic induction",
      "Electromagnetic radiation",
      "Thermal conductivity"
    ],
    "correctAnswer": 1,
    "hint": "Hard drives utilize electromagnetic induction to record data."
  },
  {
    "question": "What is the primary function of electromagnetic induction in graphics tablets?",
    "options": [
      "To display images",
      "To create digital images using a pen",
      "To store digital data",
      "To charge the device"
    ],
    "correctAnswer": 1,
    "hint": "The magnetic field created by the pen induces an emf that translates into a digital line on the screen."
  },
  {
    "question": "Which household appliance uses electromagnetism to produce sound?",
    "options": [
      "Electric fans",
      "Electric bell",
      "Magnetic locks",
      "MRI machines"
    ],
    "correctAnswer": 1,
    "hint": "An electric bell operates by using electromagnets to activate a hammer and ring a bell."
  },
  {
    "question": "What is the primary function of a magnetic relay?",
    "options": [
      "To increase voltage",
      "To act as a switch activated by a magnetic field",
      "To generate electric power",
      "To convert DC to AC"
    ],
    "correctAnswer": 1,
    "hint": "Magnetic relays are switches that are activated magnetically to turn circuits 'ON' or 'OFF'."
  },
  {
    "question": "In a DC electric motor, what does the commutator do?",
    "options": [
      "It creates a permanent magnetic field",
      "It generates electricity from mechanical motion",
      "It reverses the current direction in the coil",
      "It increases the torque on the rotating coil"
    ],
    "correctAnswer": 2,
    "hint": "The commutator ensures the current direction is reversed to keep the motor rotating."
  },
  {
    "question": "What type of energy does an AC generator convert?",
    "options": [
      "Electrical energy to mechanical energy",
      "Mechanical energy to electrical energy",
      "Heat energy to electrical energy",
      "Chemical energy to electrical energy"
    ],
    "correctAnswer": 1,
    "hint": "An AC generator converts mechanical energy into electrical energy in the form of emf."
  },
  {
    "question": "What can powerful electromagnets potentially damage in electronic devices?",
    "options": [
      "The battery",
      "The screen",
      "The hard drive",
      "The power supply"
    ],
    "correctAnswer": 2,
    "hint": "Electromagnets can damage hard drives if they come into contact with computers."
  },
  {
    "question": "What factor can affect the lifting power of an electromagnet when lifting metal plates?",
    "options": [
      "The size of the electromagnet",
      "The weight of the plates and air gaps",
      "The voltage of the electromagnet",
      "The speed of the motor"
    ],
    "correctAnswer": 1,
    "hint": "Factors like air gaps and the weight of the plates impact the lifting power of the electromagnet."
  }
]

export default function ApplicationAndSafety() {
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
      <h1 className="text-3xl font-bold mb-6">4.7 Application and Safety</h1>

      <p>
        Over the last 200 years, physicists have discovered a lot about the natural world. Many of these discoveries, initially thought to be of little practical use, have led to revolutionary applications. Modern society now relies on electromagnetism in numerous ways. For example, computer hard drives use the principle of electromagnetism to record data. Historically, the reading of data on hard drives worked through electromagnetic induction, although most data is now carried in digital form as a series of 0s or 1s.
      </p>

      <p>
        Graphics tablets and tablet computers, where a specially designed pen is used to create digital images, also utilize electromagnetic induction principles. These tablets differ from the touch tablets we use every day. For instance, when signing a signature at a cash register, you may use a tablet that works with a magnetic field created by a pen. Beneath the screen, tiny wires are arranged in grids. As the magnetic field from the pen tip brushes over these wires, it creates a changing magnetic field, inducing an electromotive force (emf), which translates into the digital line drawn on the screen.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Applications of Electromagnetism</h2>
      <p>
        Electromagnetism has countless applications across various fields, from large-scale industrial machinery to small-scale electronic components. These include electric motors, generators, transformers, and other devices. The principles of Ampere's Law are utilized in solenoids, straight wires, cylindrical conductors, and toroidal solenoids.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Electromagnets at Home or School</h2>
      <p>
        Electromagnets are used in many everyday devices. Examples include electric bells, headphones, loudspeakers, MRI machines, electric fans, doorbells, and magnetic locks. Many household appliances are based on the working principle of electromagnetism.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Magnetic Relays</h2>
      <p>
        A magnetic relay is a switch or circuit breaker that is activated magnetically, allowing it to be turned ’ON’ or ’OFF’. A common example is the low-power reed relay used in telephone equipment. This relay consists of two flat nickel−iron blades separated by a small gap. When a magnetic field is applied along the length of the blades, the two blades assume opposite magnetic polarities, causing them to attract and close the circuit, thus turning it ’ON’.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Electric Bell</h2>
      <p>
        The electric bell operates on the principle of electromagnetism. When the switch is pressed, the electromagnet is activated and attracts a soft iron piece towards itself. This movement of the hammer hits the bell. As the hammer moves, the circuit is broken, disabling the electromagnet. This causes the hammer and soft iron to return to their initial position due to the spring, completing the circuit again. This process repeats, creating the ringing sound.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">DC Electric Motor</h2>
      <p>
        A DC electric motor consists of a loop placed between two permanent magnets. Connecting the ends of the loop to battery terminals turns the loop into an electromagnet. One side of the loop is attracted to the north pole of the magnet and the other to the south pole, causing the loop to rotate continuously. A commutator, which is the rotating interface between the loop and the stationary circuit, helps in maintaining the current direction. The permanent magnetic field creates a torque on the rotating coil, and brushes conduct current between stationary wires and moving parts.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">AC Generator</h2>
      <p>
        An AC generator is a mechanical device that converts mechanical energy into electrical energy in the form of alternating electromotive force (emf). For instance, the electricity generated at power plants comes from AC generators. These generators work based on Faraday's Law of electromagnetic induction, which involves a strong permanent magnet and a rectangular coil wound around an iron core. When the coil spins in the magnetic field, it generates an alternating emf.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Safety and Precautions</h2>
      <p>
        While electromagnets are generally safe for their various uses, precautions should be taken based on their context. For instance, powerful electromagnets that come into contact with laptops or computers can damage hard drives. Electromagnets can also affect monitors, especially for older cathode ray tube (CRT) televisions, as powerful magnets can distort the images by deflecting the electron beam used to create the image.
      </p>

      <p>
        Electromagnets also help lift and transport metal plates efficiently. However, when using them, factors like the weight of the plates, the surface conditions, and any air gaps between the magnet and the plate must be considered. If an air gap is present, it may impact the lifting power of the electromagnet.
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
