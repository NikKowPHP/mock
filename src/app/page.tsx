import Image from 'next/image'
import { Button } from "@/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="AI Chat App Logo" width={40} height={40} />
          <span className="text-xl font-bold">AI Chat App</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
            <li><a href="#demo" className="hover:text-blue-400 transition-colors">Demo</a></li>
            <li><a href="#cta" className="hover:text-blue-400 transition-colors">Get Started</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Chat with AI, Create Mockups, Generate Placeholders</h1>
        <p className="text-xl mb-10 text-gray-300">Experience the future of mobile app design and AI interaction</p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
          Get Started
        </Button>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard 
              title="AI Chat Agents" 
              description="Engage in intelligent conversations with our advanced AI agents."
              icon="💬"
            />
            <FeatureCard 
              title="Mock Device Frames" 
              description="Create realistic device mockups for your app screenshots."
              icon="📱"
            />
            <FeatureCard 
              title="Chat Placeholders" 
              description="Generate placeholder images for chat interfaces from URLs."
              icon="🖼️"
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">See It in Action</h2>
        <div className="flex justify-center">
          <div className="relative w-72 h-[600px]">
            <Image 
              src="/placeholder.svg?height=600&width=288" 
              alt="App Demo" 
              width={288} 
              height={600}
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-3xl"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm mb-2">AI: How can I assist you today?</p>
              <div className="bg-blue-600 rounded-full p-2 text-sm inline-block">User: Create a mockup of our chat</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your App Experience?</h2>
          <p className="text-xl mb-10">Join thousands of developers and designers using our AI-powered tools</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors">
            Start Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2023 AI Chat App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-gray-700 rounded-lg p-6 text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

