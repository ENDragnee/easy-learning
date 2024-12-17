"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GraduationCap, Lightbulb, Zap, Rocket } from 'lucide-react'
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react" // Add this import


export default function LandingPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleGetStarted = () => {
    if (session) {
      router.push("/main");
    } else {
      router.push("/auth/signin");
    }
  };
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="w-full px-4 lg:px-6 h-14 flex items-center justify-center">
          <div className="flex items-center justify-between w-full">
            <a className="flex items-center justify-center" href="#">
              <GraduationCap className="h-6 w-6" />
              <span className="ml-2 text-2xl font-bold">Lumo</span>
            </a>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Welcome to <span className="text-blue-500">Lumo</span>
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    The educational system that makes learning fun and interactive. Ignite your curiosity and unlock your potential.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button onClick={handleGetStarted}>Get Started</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </section>
            <section id="features" className="w-full py-12 md:py-24 lg:py-32">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                Why Choose Lumo?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                <div className="flex flex-col items-center text-center max-w-xs">
                  <Lightbulb className="h-12 w-12 mb-4 text-blue-500" />
                  <h3 className="text-xl font-bold mb-2">Interactive Learning</h3>
                  <p className="text-gray-500 dark:text-gray-400">Engage with content through quizzes, games, and simulations.</p>
                </div>
                <div className="flex flex-col items-center text-center max-w-xs">
                  <Zap className="h-12 w-12 mb-4 text-blue-500" />
                  <h3 className="text-xl font-bold mb-2">Personalized Experience</h3>
                  <p className="text-gray-500 dark:text-gray-400">Adaptive learning paths tailored to your unique needs.</p>
                </div>
                <div className="flex flex-col items-center text-center max-w-xs">
                  <Rocket className="h-12 w-12 mb-4 text-blue-500" />
                  <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
                  <p className="text-gray-500 dark:text-gray-400">Monitor your growth with detailed analytics and insights.</p>
                </div>
              </div>
            </section>
            <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Transform Your Learning?
                  </h2>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Join Lumo today and experience the future of education. Sign up for our newsletter to get started.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                    <Button type="submit">Subscribe</Button>
                  </form>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    By subscribing, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}

