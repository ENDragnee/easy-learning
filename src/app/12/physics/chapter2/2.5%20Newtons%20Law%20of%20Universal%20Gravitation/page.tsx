'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "Who first proposed that the force of attraction between masses is universal?",
    "options": [
      "Galileo Galilei",
      "Isaac Newton",
      "Johannes Kepler",
      "Nicolaus Copernicus"
    ],
    "correctAnswer": 1,
    "hint": "This scientist formulated the law of universal gravitation in 1666."
  },
  {
    "question": "What is the formula for the gravitational force between two masses?",
    "options": [
      "F = ma",
      "F = Gm_1m_2",
      "F = Gm_1m_2/r^2",
      "F = mv^2/r"
    ],
    "correctAnswer": 2,
    "hint": "It involves the product of two masses and the inverse square of the distance."
  },
  {
    "question": "What is the value of the universal gravitational constant (G)?",
    "options": [
      "9.8 m/s²",
      "6.67 × 10⁻¹¹ Nm²/kg²",
      "5.97 × 10²⁴ kg",
      "1.4957 × 10¹¹ m"
    ],
    "correctAnswer": 1,
    "hint": "It is a constant used in the formula for gravitational force."
  },
  {
    "question": "What happens to the gravitational force if the distance between two masses is doubled?",
    "options": [
      "It remains the same",
      "It doubles",
      "It decreases by a factor of four",
      "It increases by a factor of four"
    ],
    "correctAnswer": 2,
    "hint": "Gravitational force is inversely proportional to the square of the distance."
  },
  {
    "question": "What is the acceleration due to gravity on Earth's surface?",
    "options": [
      "6.67 × 10⁻¹¹ m/s²",
      "9.8 m/s²",
      "5.97 × 10²⁴ m/s²",
      "1.4957 × 10¹¹ m/s²"
    ],
    "correctAnswer": 1,
    "hint": "This is the value of g derived from Newton’s universal gravitation equation."
  },
  {
    "question": "What provides the centripetal force for planets in orbit around the Sun?",
    "options": [
      "Tangential velocity",
      "Gravitational attraction of the Sun",
      "Centrifugal force",
      "Electromagnetic force"
    ],
    "correctAnswer": 1,
    "hint": "This force pulls planets toward the center of their orbit."
  },
  {
    "question": "What is the formula for centripetal force?",
    "options": [
      "F = Gm_1m_2/r²",
      "F = mv²/r",
      "F = ma",
      "F = mg"
    ],
    "correctAnswer": 1,
    "hint": "This formula involves the tangential velocity and radius of orbit."
  },
  {
    "question": "What does the equation v² = GM_s/r describe?",
    "options": [
      "Gravitational force",
      "Centripetal force",
      "Orbital speed",
      "Orbital period"
    ],
    "correctAnswer": 2,
    "hint": "It relates speed to the Sun’s mass and orbital radius."
  },
  {
    "question": "How is the orbital period (T) related to the orbital radius (r)?",
    "options": [
      "T² ∝ r³",
      "T ∝ r²",
      "T² ∝ r²",
      "T ∝ r³"
    ],
    "correctAnswer": 0,
    "hint": "This is Kepler’s third law as derived from Newton’s equations."
  },
  {
    "question": "What force causes the Moon to orbit the Earth?",
    "options": [
      "Centripetal force",
      "Gravitational force",
      "Tangential velocity",
      "Inertia"
    ],
    "correctAnswer": 1,
    "hint": "This is the same force that causes objects to fall to the ground."
  },
  {
    "question": "What happens to the gravitational force when the mass of one object is doubled?",
    "options": [
      "It remains the same",
      "It doubles",
      "It decreases by half",
      "It increases by a factor of four"
    ],
    "correctAnswer": 1,
    "hint": "Gravitational force is directly proportional to the product of the masses."
  },
  {
    "question": "Which equation relates orbital speed to orbital period?",
    "options": [
      "v = GM_s/r",
      "v = 2πr/T",
      "v = mv²/r",
      "v = GM_sT²/r³"
    ],
    "correctAnswer": 1,
    "hint": "It involves the radius and the time for one revolution."
  }
]

export default function UniversalGravitation() {
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
      <h1 className="text-3xl font-bold mb-6">2.5 Newton’s Law of Universal Gravitation</h1>
      <p>
        Planets orbit the Sun. If we look more closely at the Solar System, we see almost
        unimaginable numbers of stars, galaxies, and other celestUniversalGravitationial objects orbiting one another 
        and interacting through gravity. All these motions are governed by gravitational force.
      </p>

      <p>
        Galileo Galilei (1564–1642) pointed out that heavy and light objects fall toward Earth 
        at the same rate (so long as air resistance is the same for each). But it took Sir Isaac 
        Newton (in 1666) to realize that this force of attraction between masses is universal.
      </p>

      <p>
        Newton proved that the force that causes, for example, an apple to fall toward the ground 
        is the same force that causes the Moon to orbit Earth. This universal force also acts 
        between the Earth and the Sun, or any other star and its satellites. Each attracts the other.
      </p>

      <p>
        Newton defined this attraction mathematically. The force of attraction between two masses 
        is directly proportional to the product of their masses and inversely proportional to the 
        square of the distance between their centers:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="F = \frac{G m_1 m_2}{r^2}" />
      </div>
      <p>
        where <InlineMath math="G" /> is the universal gravitational constant (
        <InlineMath math="6.67 \times 10^{-11} \, \text{Nm}^2/\text{kg}^2" />
        ), <InlineMath math="m_1" /> and <InlineMath math="m_2" /> are the masses of the two 
        objects, and <InlineMath math="r" /> is the distance between their centers.
      </p>
      <div className="relative w-full overflow-hidden aspect-video">
        <iframe src="https://phet.colorado.edu/sims/html/gravity-force-lab/latest/gravity-force-lab_en.html"
          width="800"
          height="600"
          className='responsive-iframe top-0 left-0 w-full h-full'
          allowFullScreen>
        </iframe>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Acceleration Due to Gravity</h2>
      <p>
        The gravitational force is always attractive and depends only on the masses involved and the 
        distance between them. By substituting <InlineMath math="g" /> for <InlineMath math="a" /> 
        in Newton’s second law of motion, <InlineMath math="F = ma" />, we get:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="F_g = mg" />
      </div>
      <p>
        Combining this with the universal gravitation equation gives:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="mg = \frac{G M_E m}{r_E^2}" />
      </div>
      <p>
        Cancelling <InlineMath math="m" /> and substituting values for <InlineMath math="G" />, 
        the Earth's mass <InlineMath math="M_E" />, and radius <InlineMath math="r_E" />, we 
        calculate <InlineMath math="g" />:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="g = \frac{(6.673 \times 10^{-11}) (5.97 \times 10^{24})}{(6.38 \times 10^6)^2} \approx 9.8 \, \text{m/s}^2" />
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Centripetal Force and Orbital Motion</h2>
      <p>
        Newton’s law of universal gravitation also explains orbital motion. A force pulling an object 
        toward the center of a circle is called centripetal force. For planets, this force is the 
        gravitational pull of the Sun. Without it, planets would travel in straight lines.
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="F_c = \frac{mv^2}{r}" />
      </div>
      <p>
        Here, <InlineMath math="v" /> is the tangential speed, <InlineMath math="r" /> is the radius 
        of the orbit, and <InlineMath math="m" /> is the mass of the planet.
      </p>

      <p>
        The gravitational attraction of the Sun provides the centripetal force. Combining centripetal 
        force with the universal gravitation equation:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="\frac{m_p v^2}{r} = \frac{G M_s m_p}{r^2}" />
      </div>
      <p>
        Simplifying:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="v^2 = \frac{G M_s}{r}" />
      </div>
      <p>
        The orbital speed <InlineMath math="v" /> is related to the orbital period 
        <InlineMath math="T" /> by:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="v = \frac{2\pi r}{T}" />
      </div>
      <p>
        Substituting:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="T^2 = \frac{4\pi^2 r^3}{G M_s}" />
      </div>
      <p>
        This is Kepler’s third law, where the square of the period is proportional to the cube of 
        the distance from the Sun.
      </p>
      <div className="relative w-full overflow-hidden aspect-video">
        <iframe src="https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_en.html"
          className='responsive-iframe top-0 left-0 w-full h-full'
          width="800"
          height="600"
          allowFullScreen>
        </iframe>
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
