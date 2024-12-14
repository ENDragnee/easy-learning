import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface QuizQuestionProps {
  question: string
  options: string[]
  correctAnswer: number
  hint: string
  selectedAnswer: number | null
  showResults: boolean
  onSelectAnswer: (index: number) => void
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  options,
  correctAnswer,
  hint,
  selectedAnswer,
  showResults,
  onSelectAnswer,
}) => {
  const [showHint, setShowHint] = useState(false)

  return (
    <div className="space-y-4 p-6">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <RadioGroup value={selectedAnswer?.toString()} onValueChange={(value) => onSelectAnswer(parseInt(value))}>
        {options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <RadioGroupItem 
              value={index.toString()} 
              id={`option-${index}`}
              className="text-[#5294e2]"
              disabled={showResults}
            />
            <Label 
              htmlFor={`option-${index}`}
              className={`
                flex-grow p-2 rounded-md cursor-pointer
                ${selectedAnswer === index ? 'bg-[#4c566a] text-white' : 'bg-[#3b4252] text-[#d8dee9]'}
                ${showResults && index === correctAnswer ? 'bg-[#5294e2] text-white' : ''}
                ${showResults && selectedAnswer === index && index !== correctAnswer ? 'bg-[#bf616a] text-white' : ''}
                hover:bg-[#4c566a] hover:text-white
                transition-colors duration-300
              `}
            >
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
      <div className="flex justify-between items-center mt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowHint(!showHint)}
          className="text-[#81a1c1] hover:text-[#88c0d0]"
        >
          {showHint ? 'Hide Hint' : 'Show Hint'}
        </Button>
      </div>
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-[#81a1c1] mt-2"
          >
            Hint: {hint}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`text-sm mt-2 ${selectedAnswer === correctAnswer ? 'text-[#a3be8c]' : 'text-[#bf616a]'}`}
          >
            {selectedAnswer === correctAnswer ? 'Correct!' : 'Incorrect. The correct answer is: ' + options[correctAnswer]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default QuizQuestion

