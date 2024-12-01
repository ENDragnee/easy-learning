"use client"

import { useState, useCallback } from 'react'
import { Clock } from "@/components/clock"
import { MainMenu } from "@/components/main-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContextMenu } from "@/components/context-menu"
import { ScrollProgressBar } from "@/components/scroll-progress-bar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Notification } from "@/components/notification"

export default function Home() {
  const [selectedText, setSelectedText] = useState("")
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 })
  const [aiDialogOpen, setAiDialogOpen] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")

  const handleSessionEnd = useCallback((isStudySession: boolean) => {
    const message = isStudySession
      ? "Break's over! Start your study session."
      : "Time's up! Start your break.";
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);
  }, []);

  const handleAskAI = () => {
    setAiDialogOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#404552] text-black dark:text-white">
      <ScrollProgressBar />
      <Clock onSessionEnd={handleSessionEnd} />
      <header className="fixed top-4 right-4 z-40 flex items-center space-x-2">
        <ThemeToggle />
        <MainMenu />
      </header>

      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4">
          <div className="prose dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold mb-6">4.1 The Concept of Force and Newton's Laws of Motion</h1>
            
            <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
            <p>At the end of this unit, you should be able to:</p>
            <ul>
              <li>Demonstrate an understanding of the relationship between net force and the acceleration of an object in linear motion</li>
              <li>Analyze the effect of a net force in quantitative terms, using graphs, free-body diagrams, and vector diagrams</li>
              <li>Describe the first condition of equilibrium quantitatively</li>
              <li>Demonstrate an understanding, in qualitative and quantitative terms, of the concepts of work, energy, energy transformations, and power</li>
              <li>Design and carry out experiments and solve problems involving energy transformations and the law of conservation of energy</li>
              <li>Realize that momentum is an inherent property of moving objects</li>
              <li>Express the relationship between impulse and momentum</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">The Concept of Force</h2>
            <p>In physics, a force is any interaction that, when unopposed, will change the motion of an object. Forces can be described as a push or pull on an object. They can be due to phenomena such as gravity, magnetism, or anything that causes mass to accelerate.</p>

            <h3 className="text-xl font-semibold mb-3">Types of Forces</h3>
            <p>Forces can be broadly categorized into two types:</p>
            <ol>
              <li><strong>Contact forces:</strong> These forces act between objects that are physically touching each other. Examples include friction, normal force, and tension.</li>
              <li><strong>Field forces:</strong> These forces act between objects that are not in physical contact. Examples include gravitational force, electromagnetic force, and nuclear forces.</li>
            </ol>

            <h3 className="text-xl font-semibold mb-3">Fundamental Forces in Nature</h3>
            <p>There are four fundamental forces in nature:</p>
            <ol>
              <li><strong>Strong nuclear force:</strong> This force holds quarks together to form hadrons like protons and neutrons. It's the strongest of the four forces but only acts over very short distances.</li>
              <li><strong>Electromagnetic force:</strong> This force acts between electrically charged particles. It's responsible for holding atoms and molecules together.</li>
              <li><strong>Weak nuclear force:</strong> This force is responsible for some forms of radioactive decay. It acts over even shorter distances than the strong nuclear force.</li>
              <li><strong>Gravitational force:</strong> This is the weakest of the four forces, but it acts over the longest distances. It's responsible for the attraction between masses and shapes the large-scale structure of the universe.</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-4">Newton's Laws of Motion</h2>
            <p>Sir Isaac Newton formulated three laws that describe the fundamental nature of force and motion. These laws form the foundation of classical mechanics.</p>

            <h3 className="text-xl font-semibold mb-3">Newton's First Law of Motion</h3>
            <p>"An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force."</p>
            <p>This law introduces the concept of inertia, which is the resistance of any physical object to changes in its velocity. The mass of an object is a measure of its inertia.</p>

            <h3 className="text-xl font-semibold mb-3">Newton's Second Law of Motion</h3>
            <p>"The acceleration of an object as produced by a net force is directly proportional to the magnitude of the net force, in the same direction as the net force, and inversely proportional to the mass of the object."</p>
            <p>This is often expressed mathematically as F = ma, where F is the net force, m is the mass of the object, and a is the acceleration.</p>

            <h3 className="text-xl font-semibold mb-3">Newton's Third Law of Motion</h3>
            <p>"For every action, there is an equal and opposite reaction."</p>
            <p>This means that in every interaction, there is a pair of forces acting on the two interacting objects. The size of the forces on the first object equals the size of the force on the second object.</p>

            <h2 className="text-2xl font-semibold mb-4">Applications of Newton's Laws</h2>
            <p>Newton's laws have numerous practical applications in everyday life and technology:</p>
            <ul>
              <li><strong>Seat belts and airbags:</strong> These safety features in vehicles work based on Newton's first law. They prevent passengers from continuing in motion when the vehicle suddenly stops.</li>
              <li><strong>Rocket propulsion:</strong> Rockets work on the principle of Newton's third law. The downward thrust of exhaust gases produces an equal and opposite upward force on the rocket.</li>
              <li><strong>Sports:</strong> Many aspects of sports, from the trajectory of a thrown ball to the force needed to start or stop motion, can be explained using Newton's laws.</li>
              <li><strong>Construction and engineering:</strong> Understanding forces and their effects is crucial in designing stable structures and efficient machines.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <p>Understanding force and Newton's laws of motion is fundamental to physics and our understanding of the physical world. These concepts form the basis for more advanced topics in mechanics and continue to be relevant in modern physics and engineering.</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 dark:border-[#4b5162] py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <p className="text-sm text-gray-500 dark:text-[#7c818c]">
              © 2024 Educational Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {contextMenu.visible && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={() => setContextMenu({ visible: false, x: 0, y: 0 })}
          onAskAI={handleAskAI}
        />
      )}

      <Dialog open={aiDialogOpen} onOpenChange={setAiDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ask AI about the selected text</DialogTitle>
            <DialogDescription>
              You&apos;ve selected: &quot;{selectedText}&quot;
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <p>AI response would go here...</p>
          </div>
        </DialogContent>
      </Dialog>
      {showNotification && (
        <Notification message={notificationMessage} />
      )}
    </div>
  )
}

