"use client"

import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  role: "user" | "ai"
  content: string
}

const placeholderData: Message[] = [
  { role: "user", content: "What is the capital of France?" },
  { role: "ai", content: "The capital of France is Paris. It's also the largest city in France and one of the most popular tourist destinations in the world." },
  { role: "user", content: "Can you tell me about the Eiffel Tower?" },
  { role: "ai", content: "The Eiffel Tower is a wrought-iron lattice tower located on the Champ de Mars in Paris. It was constructed from 1887 to 1889 as the entrance arch to the 1889 World's Fair. The tower is 324 meters (1,063 ft) tall and was the tallest man-made structure in the world for 41 years until the Chrysler Building in New York City was finished in 1930. It's named after the engineer Gustave Eiffel, whose company designed and built the tower." },
  { role: "user", content: "What's a famous museum in Paris?" },
  { role: "ai", content: "One of the most famous museums in Paris is the Louvre Museum (Musée du Louvre). It's the world's largest art museum and a historic monument in Paris. The museum is housed in the Louvre Palace, originally built as a fortress in the late 12th to 13th century. The Louvre showcases approximately 38,000 objects from prehistory to the 21st century. Its most famous piece is Leonardo da Vinci's Mona Lisa." },
]

export function ResponseTab() {
  return (
    <ScrollArea className="h-full p-4">
      {placeholderData.map((message, index) => (
        <div
          key={index}
          className={`mb-4 ${
            message.role === "user" ? "text-right" : "text-left"
          }`}
        >
          <span
            className={`inline-block p-2 rounded-lg ${
              message.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary"
            }`}
          >
            {message.content}
          </span>
        </div>
      ))}
    </ScrollArea>
  )
}

