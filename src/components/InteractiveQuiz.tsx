"use client"

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import QuizQuestion from './QuizQuestion'
import { X } from 'lucide-react'

const quizData = [
  {
    question: 'What is the moment of inertia of a solid sphere rotating about its diameter?',
    options: ['2/5 MR²', '1/2 MR²', '2/3 MR²', 'MR²'],
    correctAnswer: 0,
    hint: 'Consider the distribution of mass around the axis of rotation.',
  },
  {
    question: 'What is the angular velocity of a wheel making 120 revolutions per minute?',
    options: ['2π rad/s', '4π rad/s', '12π rad/s', '6π rad/s'],
    correctAnswer: 3,
    hint: '1 revolution is equivalent to 2π radians.',
  },
  {
    question: 'Which physical quantity is conserved in rotational motion if no external torque is applied?',
    options: ['Angular Momentum', 'Kinetic Energy', 'Linear Momentum', 'Potential Energy'],
    correctAnswer: 0,
    hint: 'Think about the rotational analog of Newton’s first law.',
  },
  {
    question: 'What is the relation between torque (τ), moment of inertia (I), and angular acceleration (α)?',
    options: ['τ = Iα', 'τ = I/α', 'τ = α/I', 'τ = I²α'],
    correctAnswer: 0,
    hint: 'This is analogous to F = ma in linear motion.',
  },
  {
    question: 'A disc of radius R and mass M is rolling without slipping. What is its total kinetic energy?',
    options: ['1/2 MR²', '1/2 MV² + 1/2 Iω²', 'MV²', 'MRω²'],
    correctAnswer: 1,
    hint: 'It includes both translational and rotational kinetic energy.',
  },
]

const InteractiveQuiz: React.FC = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(new Array(quizData.length).fill(null))
  const [showResults, setShowResults] = useState(false)
  const quizRef = useRef<HTMLDivElement>(null)

  const handleQuizToggle = () => {
    setIsQuizOpen(!isQuizOpen)
    if (!isQuizOpen) {
      setCurrentQuestion(0)
      setSelectedAnswers(new Array(quizData.length).fill(null))
      setShowResults(false)
    }
  }

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers(prev => {
      const newAnswers = [...prev]
      newAnswers[questionIndex] = answerIndex
      return newAnswers
    })
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  useEffect(() => {
    if (isQuizOpen && quizRef.current) {
      quizRef.current.scrollTo({
        top: currentQuestion * quizRef.current.clientHeight,
        behavior: 'smooth'
      })
    }
  }, [currentQuestion, isQuizOpen])

  return (
    <div className="flex justify-center items-center bg-transparent p-4 m-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={isQuizOpen ? "card" : "button"}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            width: isQuizOpen ? '24rem' : 'auto', 
            height: isQuizOpen ? '30rem' : 'auto' 
          }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`bg-[#3b4252] shadow-xl border-0 ${isQuizOpen ? 'rounded-lg' : ''}`}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {!isQuizOpen ? (
            <Button
              onClick={handleQuizToggle}
              className="bg-[#5294e2] hover:bg-[#5294e2]/90 text-white"
            >
              Exercise
            </Button>
          ) : (
            <Card className="w-full h-full bg-[#3b4252] text-white">
              <CardHeader className="flex flex-row items-center justify-between bg-[#4c566a] rounded-t-lg">
                <CardTitle>Quiz</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleQuizToggle}
                  className="text-[#d8dee9] hover:text-white hover:bg-[#4c566a]"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <div ref={quizRef} className="h-[400px] overflow-y-auto snap-y snap-mandatory">
                  {quizData.map((question, index) => (
                    <div key={index} className="snap-start h-full">
                      <QuizQuestion
                        question={question.question}
                        options={question.options}
                        correctAnswer={question.correctAnswer}
                        hint={question.hint}
                        selectedAnswer={selectedAnswers[index]}
                        showResults={showResults}
                        onSelectAnswer={(answerIndex) => handleAnswerSelect(index, answerIndex)}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="justify-end">
                <Button
                  onClick={handleSubmit}
                  className="bg-[#5294e2] hover:bg-[#5294e2]/90 text-white"
                  disabled={selectedAnswers.some(answer => answer === null)}
                >
                  Submit
                </Button>
              </CardFooter>
            </Card>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default InteractiveQuiz
