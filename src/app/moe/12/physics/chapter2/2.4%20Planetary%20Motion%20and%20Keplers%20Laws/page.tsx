'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What model of the Universe did Claudius Ptolemy propose?",
    "options": [
      "Heliocentric model",
      "Elliptical orbit model",
      "Geocentric model",
      "Planetary motion model"
    ],
    "correctAnswer": 2,
    "hint": "This model places Earth at the center of the Universe."
  },
  {
    "question": "Who proposed the heliocentric model?",
    "options": [
      "Johannes Kepler",
      "Tycho Brahe",
      "Nicolaus Copernicus",
      "Isaac Newton"
    ],
    "correctAnswer": 2,
    "hint": "This astronomer suggested that planets revolve around the Sun."
  },
  {
    "question": "What does Kepler’s first law describe?",
    "options": [
      "The relationship between orbital period and radius",
      "The sweeping of equal areas in equal times",
      "Elliptical orbits with the Sun at one focus",
      "The uniform speed of planets in orbit"
    ],
    "correctAnswer": 2,
    "hint": "It is also known as the law of ellipses."
  },
  {
    "question": "What shape is the orbit of a planet according to Kepler’s first law?",
    "options": [
      "Circular",
      "Elliptical",
      "Rectangular",
      "Parabolic"
    ],
    "correctAnswer": 1,
    "hint": "It is a closed curve with two foci."
  },
  {
    "question": "What does Kepler’s second law state?",
    "options": [
      "Planets move at constant speed along their orbits.",
      "A line joining the Sun and a planet sweeps out equal areas in equal time intervals.",
      "The orbital period squared is proportional to the orbital radius cubed.",
      "Planets have circular orbits with constant distance from the Sun."
    ],
    "correctAnswer": 1,
    "hint": "This law explains variations in a planet's speed."
  },
  {
    "question": "When is a planet's speed fastest according to Kepler’s second law?",
    "options": [
      "When it is at perihelion",
      "When it is at aphelion",
      "When it is equidistant from the Sun",
      "When it completes one orbit"
    ],
    "correctAnswer": 0,
    "hint": "This position is when the planet is closest to the Sun."
  },
  {
    "question": "What does Kepler’s third law compare?",
    "options": [
      "The elliptical and circular orbits of planets",
      "The orbital period and average radius of orbit",
      "The distance between the foci of an ellipse",
      "The mass of the planet and its distance from the Sun"
    ],
    "correctAnswer": 1,
    "hint": "It involves the ratio of T² to R³."
  },
  {
    "question": "What is the formula in Kepler’s third law?",
    "options": [
      "T²/R³ = K",
      "T/R = K",
      "T³/R² = K",
      "R³/T² = K"
    ],
    "correctAnswer": 0,
    "hint": "It relates the square of the orbital period to the cube of the radius."
  },
  {
    "question": "What does the proportionality constant K represent in Kepler’s third law?",
    "options": [
      "The mass of the planet",
      "The orbital radius of the planet",
      "A constant value nearly identical for all planets",
      "The gravitational force between the planet and the Sun"
    ],
    "correctAnswer": 2,
    "hint": "This constant is the same for planets in our solar system."
  },
  {
    "question": "Which law explains why planets move slower when farther from the Sun?",
    "options": [
      "Kepler’s First Law",
      "Kepler’s Second Law",
      "Kepler’s Third Law",
      "Newton’s Law of Gravitation"
    ],
    "correctAnswer": 1,
    "hint": "This law involves sweeping equal areas in equal times."
  }
]

export default function PlanetaryMotionAndKeplersLaws() {
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
      <h1 className="text-3xl font-bold mb-6">2.4 Planetary Motion and Kepler’s Laws</h1>
      <p>
        The planets orbit the Sun, maintaining their respective distances and
        not crossing each other as they revolve. Kepler’s laws describe how
        planetary bodies orbit around the Sun.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Kepler’s Laws</h2>
      <p>
        For thousands of years, humans have observed celestial objects' movements. 
        Early observations led to the geocentric model, placing Earth at the center of 
        the Universe, formalized by Claudius Ptolemy (c.100–c.170) and accepted for 1400 years.
      </p>
      <p>
        In 1543, Nicolaus Copernicus proposed the heliocentric model, where Earth and 
        other planets revolve in circular orbits around the Sun. Later, Tycho Brahe, a 
        Danish astronomer, meticulously recorded planetary positions, and Johannes Kepler, 
        his assistant, used Brahe's data to derive Kepler's three laws of planetary motion.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Kepler’s First Law</h3>
      <p>
        Kepler’s first law, the *law of ellipses*, states that the orbit of a planet
        around the Sun is an ellipse with the Sun at one focus. As the planet orbits,
        the distance between the planet and the Sun constantly changes.
      </p>
      <p>
        An ellipse is a closed curve where the sum of the distances from any point on
        the curve to two fixed points (the foci) is constant.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Kepler’s Second Law</h3>
      <p>
        Kepler’s second law, the *law of equal areas*, states that a line joining
        the Sun and a planet sweeps out equal areas during equal time intervals.
      </p>
      <p>
        This means that planets do not move at a constant speed along their orbits.
        Instead, they move faster when closer to the Sun (perihelion) and slower
        when farther away (aphelion).
      </p>
      <p>
        For example, as shown in Figure 2.21, the time it takes a planet to move
        from position A to B (sweeping out area A1) is the same as the time it
        takes to move from position C to D (sweeping out area A2) or from E to F
        (sweeping out area A3). The areas A1, A2, and A3 are all equal.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Kepler’s Third Law</h3>
      <p>
        Kepler’s third law compares the orbital period and the average radius of
        orbit of different planets. The orbital period <InlineMath math="T" /> is the time taken for
        one complete revolution around the Sun.
      </p>
      <p>
        The law states that the ratio of <InlineMath math="T^2" /> (the square of the orbital period) 
        to <InlineMath math="R^3" /> (the cube of the average orbital radius) is the same for all planets:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="\frac{T^2}{R^3} = K" />
      </div>
      <p>
        Here, <InlineMath math="K" /> is a proportionality constant that is nearly identical for all
        planets. This equation applies to both circular and elliptical orbits
        and is independent of the planet's mass.
      </p>
      <p>
        For instance, Table 2.2 compares the orbital period and average distance
        from the Sun for Earth and Mars, demonstrating that the <InlineMath math="T^2/R^3" /> ratio is
        consistent for all planets.
      </p>

      <table className="w-full mt-6 border-collapse border border-gray-300 text-center">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Planet</th>
            <th className="border border-gray-300 px-4 py-2">Period (s)</th>
            <th className="border border-gray-300 px-4 py-2">Average Distance (m)</th>
            <th className="border border-gray-300 px-4 py-2">
              <InlineMath math="T^2/R^3 \, (s^2/m^3)" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Earth</td>
            <td className="border border-gray-300 px-4 py-2">
              <InlineMath math="3.156 \times 10^7" />
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <InlineMath math="1.4957 \times 10^{11}" />
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <InlineMath math="2.977 \times 10^{-19}" />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Mars</td>
            <td className="border border-gray-300 px-4 py-2">
              <InlineMath math="5.93 \times 10^7" />
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <InlineMath math="2.278 \times 10^{11}" />
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <InlineMath math="2.975 \times 10^{-19}" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="relative w-full overflow-hidden aspect-video">
      <iframe src="https://phet.colorado.edu/sims/html/keplers-laws/latest/keplers-laws_en.html"
        scrolling='no'
        className='responsive-iframe top-0 left-0 w-full h-full'
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
