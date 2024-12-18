'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { useState } from 'react';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is torque in rotational dynamics?",
    "options": [
      "The force that acts along a straight line",
      "The rotational effect of force",
      "The resistance to linear acceleration",
      "The measure of rotational inertia"
    ],
    "correctAnswer": 1,
    "hint": "It causes an object to acquire angular acceleration."
  },
  {
    "question": "What is the formula for torque?",
    "options": [
      "τ = rF",
      "τ = rF sinθ",
      "τ = F/r",
      "τ = r²F"
    ],
    "correctAnswer": 1,
    "hint": "It involves the angle θ between r and F."
  },
  {
    "question": "What is the SI unit of torque?",
    "options": [
      "Newton meter (Nm)",
      "Kilogram meter squared (kg·m²)",
      "Joule (J)",
      "Meter per second squared (m/s²)"
    ],
    "correctAnswer": 0,
    "hint": "It combines the units of force and distance."
  },
  {
    "question": "Which rule determines the direction of torque?",
    "options": [
      "Left-hand rule",
      "Newton's second law",
      "Right-hand rule",
      "Conservation of angular momentum"
    ],
    "correctAnswer": 2,
    "hint": "It involves curling your fingers in the direction of rotation."
  },
  {
    "question": "What does the moment of inertia measure?",
    "options": [
      "Rotational inertia",
      "Linear inertia",
      "The rate of change of angular velocity",
      "The net torque acting on a body"
    ],
    "correctAnswer": 0,
    "hint": "It is the rotational analog of mass."
  },
  {
    "question": "What is the formula for the moment of inertia of a single point mass?",
    "options": [
      "I = m r²",
      "I = m r",
      "I = m r³",
      "I = m/r²"
    ],
    "correctAnswer": 0,
    "hint": "It depends on the mass and radius of rotation."
  },
  {
    "question": "What is the SI unit of moment of inertia?",
    "options": [
      "Nm",
      "kg·m",
      "kg·m²",
      "m²/s²"
    ],
    "correctAnswer": 2,
    "hint": "It combines mass and the square of distance."
  },
  {
    "question": "How do you calculate the moment of inertia for multiple particles?",
    "options": [
      "I = m₁r₁ + m₂r₂ + m₃r₃",
      "I = Σmr²",
      "I = τ/Iα",
      "I = Fd sinθ"
    ],
    "correctAnswer": 1,
    "hint": "It involves summing the products of mass and radius squared for each particle."
  },
  {
    "question": "What is the formula for net torque acting on an object?",
    "options": [
      "τ_net = Στ",
      "τ_net = ΣIα",
      "τ_net = Σmr",
      "τ_net = ΣFd"
    ],
    "correctAnswer": 0,
    "hint": "It involves summing all individual torques."
  },
  {
    "question": "What is the relationship between net torque and angular acceleration?",
    "options": [
      "τ = mα",
      "τ = Iα",
      "τ = I/α",
      "τ = Fα"
    ],
    "correctAnswer": 1,
    "hint": "It is analogous to F = ma in linear motion."
  },
  {
    "question": "How does angular acceleration relate to net torque?",
    "options": [
      "It is inversely proportional to net torque.",
      "It is directly proportional to net torque.",
      "It is independent of net torque.",
      "It depends only on the radius of rotation."
    ],
    "correctAnswer": 1,
    "hint": "Think of the rotational equivalent of Newton's second law."
  },
  {
    "question": "What does the symbol I represent in the equation τ = Iα?",
    "options": [
      "Torque",
      "Moment of inertia",
      "Angular acceleration",
      "Radius of rotation"
    ],
    "correctAnswer": 1,
    "hint": "It measures the resistance to changes in angular velocity."
  }
]

export default function RotationalDynamics() {
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
      <h1 className="text-3xl font-bold mb-6">2.3 Rotational Dynamics</h1>
      <p>
        Having developed the kinematics of rotational motion, we now turn to the
        dynamics of rotational motion. Just as force played a big role in linear
        dynamics, we have a torque in rotational dynamics. We begin by defining
        this quantity and showing how it acts on objects in rotational motion.
        Next, we relate torque to our study of kinematics through an equation
        very similar to Newton’s second law.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Torque</h2>
      <p>
        Torque is the rotational effect of force. Torque is what causes an
        object to acquire angular acceleration. If <InlineMath math="F" /> is the force acting on
        an object and <InlineMath math="r" /> is the distance from the axis of rotation to the point
        of application of the force, as shown in Figure 2.14, the magnitude of
        the torque is given by:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="τ = r F \sin\theta" />
      </div>
      <p>
        where <InlineMath math="\theta" /> is the angle between <InlineMath math="r" /> and <InlineMath math="F" /> when they are drawn from the
        same origin. Torque is a vector quantity, meaning it has both a
        direction and a magnitude. Its SI unit is Nm. The direction of the
        torque is along the axis of rotation. It is determined by a right-hand
        rule: when you curl the fingers of your right hand in the direction of
        the rotation, your thumb points in the direction of the torque.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Moment of Inertia (I)</h2>
      <p>
        The moment of inertia of an object is the quantitative measure of
        rotational inertia, just as mass is the quantitative measure of linear
        inertia in translational motion. The greater the moment of inertia of a
        rigid object or system of particles, the greater is its resistance to
        change in angular velocity about a fixed axis of rotation.
      </p>
      <p>
        The moment of inertia depends on the mass and axis of rotation of the
        body. The moment of inertia is given the symbol <InlineMath math="I" />. For a single
        point mass, as shown in Figure 2.16, rotating at radius <InlineMath math="r" /> from the
        axis of rotation, the moment of inertia is:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="I = m r^2" />
      </div>
      <p>
        From the formula, the SI unit of moment of inertia is <InlineMath math="\text{kg} \cdot \text{m}^2" />. Moment of
        inertia is a scalar quantity.
      </p>
      <p>
        The moment of inertia for more than one particle around a fixed axis is:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="I = m_1 r_1^2 + m_2 r_2^2 + m_3 r_3^2 + \dots" />
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Torque and Angular Acceleration</h2>
      <p>
        When a number of individual forces act on a rotating object, we can
        calculate the net torque:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="\tau_{\text{net}} = \tau_1 + \tau_2 + \tau_3 + \dots" />
      </div>
      <p>
        We can relate the net torque to angular acceleration <InlineMath math="\alpha" />, by analogy
        with Newton’s second law of motion (<InlineMath math="F = ma" />). We replace <InlineMath math="m" /> by{' '}
        <InlineMath math="I" /> and <InlineMath math="a" /> by <InlineMath math="\alpha" />.
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="\tau = I \alpha" />
      </div>
      <p>
        The angular acceleration of a rotating object is proportional to the net
        torque on the object.
      </p>
      <div className="relative w-full overflow-hidden aspect-video">
        <iframe src="https://phet.colorado.edu/sims/cheerpj/rotation/latest/rotation.html?simulation=torque"
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
