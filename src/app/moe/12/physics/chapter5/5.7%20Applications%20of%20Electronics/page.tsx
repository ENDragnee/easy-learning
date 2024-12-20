'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';
const quizQuestions = [
  {
    "question": "In which industry are electronics used to manage aircraft power and measure factors like temperature and pressure?",
    "options": [
      "Automobile",
      "Medical",
      "Aerospace",
      "Communication"
    ],
    "correctAnswer": 2,
    "hint": "Electronics play a crucial role in commercial airlines for instruments measuring physical factors."
  },
  {
    "question": "How are electronics helping in modern agriculture to improve crop yield and growth conditions?",
    "options": [
      "By controlling irrigation manually",
      "Using e-Agri Sensors to monitor crop health and soil conditions",
      "By replacing tractors with traditional plows",
      "By increasing soil salinity artificially"
    ],
    "correctAnswer": 1,
    "hint": "e-Agri sensors aid in tracking crop health, moisture, and soil salinity in farming systems."
  },
  {
    "question": "Which electronic component acts as a barrier to electron and hole flow in a P-N junction diode?",
    "options": [
      "Depletion region",
      "Emitter region",
      "Base region",
      "Collector region"
    ],
    "correctAnswer": 0,
    "hint": "The depletion region in a P-N junction diode prevents the flow of mobile charge carriers."
  },
  {
    "question": "What is the primary purpose of a full-wave rectifier in an electronic system?",
    "options": [
      "Convert DC voltage to AC",
      "Convert AC voltage to DC by using a complete cycle",
      "Amplify sound in speakers",
      "Generate light in LEDs"
    ],
    "correctAnswer": 1,
    "hint": "A full-wave rectifier transforms the entire cycle of an AC voltage supply into a DC output."
  },
  {
    "question": "In which sector do electronic technologies support reconnaissance and combat with tools like drones and infrared detectors?",
    "options": [
      "Healthcare",
      "Agriculture",
      "Automobile",
      "Military"
    ],
    "correctAnswer": 3,
    "hint": "Military electronics enhance targeting and situational awareness with devices like UAVs and infrared cameras."
  }
]

export default function ElectronicsApplications() {
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
      <h1 className="text-3xl font-bold mb-6">5.7 Applications of Electronics</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Aerospace Industry</h2>
      <p>
        Electronics are widely used in aerospace, including in space shuttles, satellite power supplies, and aircraft power management. In commercial airlines, there are numerous instruments used to measure various physical factors such as temperature, pressure, and elevation.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Medical</h2>
      <p>
        The development of electronics, particularly computers, has revolutionized the medical field. Machines such as X-rays, MRIs, and other diagnostic tools combine physics and electronics to provide insights into human health. Recent innovations, such as robotic check-ups, needle-free diabetes care, and electronic aspirin, highlight the significant role of electronics in modern medical advancements.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Automobile</h2>
      <p>
        Electronics are crucial in modern vehicles, powering systems like car computers, telematics, and in-car entertainment. Early automotive electronics were used to control engine functions, known as engine control units (ECUs). Today, electronics are integral to systems in engines, transmissions, chassis, active safety, driver assistance, passenger comfort, and entertainment.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Agriculture</h2>
      <p>
        In agriculture, electronics are employed to monitor crops and soil conditions. For instance, e-Agri Sensors Centre produces devices to track crop health, moisture levels, and soil salinity. These technologies aid in enhancing crop yield and ensuring optimal growth conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Communication</h2>
      <p>
        Electronic devices and systems facilitate the acquisition, processing, storage, and transfer of information. These technologies are the backbone of modern communication networks, enabling everything from phone calls to internet browsing.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">6. Residential</h2>
      <p>
        Electronics make everyday life easier with appliances like air conditioners, refrigerators, cooking appliances, and personal computers. Mobile phones, a ubiquitous tool, are essential in modern life, connecting people across the globe.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">7. Military</h2>
      <p>
        Electronics play a key role in modern military technology, including unmanned aerial vehicles (UAVs) and drones, which are used for reconnaissance and combat. Military electronics also enhance the precision of weapons, with devices such as infrared detectors, night vision cameras, and magnetic anomaly detectors improving targeting and situational awareness.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Important Electronics Components</h3>
      <ul className="list-disc ml-6">
        <li>A junction diode is created by joining N-type and P-type materials together.</li>
        <li>The depletion region is where no mobile charge carriers exist in a P-N junction diode, acting as a barrier to electron and hole flow.</li>
        <li>Biasing is the process of applying a suitable DC voltage to a diode to control its behavior.</li>
        <li>The I-V characteristic curve represents the relationship between current and applied voltage across a diode's terminals.</li>
        <li>Rectification is the conversion of AC voltage to DC voltage.</li>
        <li>A half-wave rectifier only allows one half-cycle of an AC waveform to pass, blocking the other half-cycle.</li>
        <li>A full-wave rectifier transforms the complete cycle of an AC voltage supply into DC.</li>
        <li>Capacitors are used in rectifiers to smooth voltage fluctuations.</li>
        <li>Light-emitting diodes (LEDs) emit light when electricity passes through them.</li>
        <li>Bipolar junction transistors (BJTs) consist of three layers: emitter, base, and collector, and play a key role in amplification and switching.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4">Conclusion</h3>
      <p>
        Electronics have a vast range of applications across various industries, from space exploration and healthcare to automotive and military use. As technology continues to evolve, the role of electronics in everyday life becomes more significant, providing solutions that improve efficiency, safety, and convenience in many sectors.
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
