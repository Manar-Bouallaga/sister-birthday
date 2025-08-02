"use client"

import { useState, useEffect } from "react"
import { Heart, Gift, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CountdownTimer from "@/components/countdown-timer"
import BackgroundMusic from "@/components/background-music"

export default function BirthdayWebsite() {
  const [showConfetti, setShowConfetti] = useState(false)
type Position = {
  left: string
  top: string
}

const [positions, setPositions] = useState<Position[]>([])

useEffect(() => {
  const generated: Position[] = [...Array(15)].map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }))
  setPositions(generated)
}, [])

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50 relative">
      {/* Background Music */}
      <BackgroundMusic />

      {/* Background Hearts Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
  {positions.map((pos, i) => (
    <div key={i} className="absolute" style={pos}>
      <Heart className="w-6 h-6 text-blue-300 fill-blue-300" />
    </div>
  ))}
</div>


      {/* Hero Section */}
      <section id="section-0" className="min-h-screen flex items-center justify-center pt-20 relative z-10">
        <div className="text-center space-y-8 px-4">
          <div className="relative">
            <h1
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent mb-4"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              Happy Birthday
            </h1>
            <div className="absolute -top-4 -right-4">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>
          </div>

          <div className="relative">
            <h2
              className="text-4xl md:text-6xl font-semibold text-gray-700 mb-6"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              My Lovely Sister 
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            On your special day, I wish you all the happiness and joy in the world. You deserve all the love there is 💕
          </p>
        </div>
      </section>

      {/* Gallery Section */}
<section id="section-1" className="min-h-screen py-20 relative z-10">
  <div className="container mx-auto px-4">
    <h2
      className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent"
      style={{ fontFamily: "Dancing Script, cursive" }}
    >
      Special Photos

    </h2>

    <div className="max-w-6xl mx-auto">
      {/* Transparent Gallery Container */}
      <div className="relative overflow-hidden rounded-2xl border border-pink-200/30 backdrop-blur-sm bg-gradient-to-r from-pink-50/20 via-transparent to-blue-50/20">
        {/* Scrolling Images Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-6 py-8 px-6">
            {/* First loop of 10 images */}
            {[...Array(10)].map((_, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-96 h-72 relative group cursor-pointer"
              >
                <div className="w-full h-full rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                  <img
                    src={`/images/photo-${index + 1}.jpg`}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}

            {/* Duplicate loop for infinite scrolling */}
            {[...Array(10)].map((_, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-96 h-72 relative group cursor-pointer"
              >
                <div className="w-full h-full rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                  <img
                    src={`/images/photo-${index + 1}.jpg`}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Messages Section */}
      <section id="section-2" className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative z-10">
        <div className="container mx-auto px-4">
          <div className="relative">
            <h2
              className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              From Me to You
            </h2>
            
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  message: "I wish you a year filled with happiness and joy",
                  icon: "",
                },
                {
                  message: "May all your dreams and aspirations come true",
                  icon: "",
                },
                {
                  message: "May you always be in good health and wellness",
                  icon: "",
                },
              ].map((item, index) => (
                <div key={index} className="relative transform hover:scale-105 transition-all duration-300 group">
                  {/* Modern Glass Card */}
                  <div className="relative bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    

                    {/* Content */}
                    <div className="relative z-10 p-8 text-center">
                      {/* Icon container with glow effect */}
                      {/* <div className="relative w-20 h-20 mx-auto mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                        <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                          {item.icon}
                        </div>
                      </div> */}

                      {/* Message text */}
                      <p
                        className="text-gray-800 text-xl leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300"
                        style={{ fontFamily: "Dancing Script, cursive" }}
                      >
                        {item.message}
                      </p>

                      {/* Decorative line */}
                      <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto opacity-50 group-hover:opacity-100 group-hover:w-24 transition-all duration-300"></div>
                    </div>

                    

                    

                    
                  </div>

                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section id="section-3" className="min-h-screen py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            Birthday Countdown
          </h2>

          <CountdownTimer />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: "Dancing Script, cursive" }}>
            Happy Birthday My Love
          </h3>
          <p className="text-gray-300">I love you more than words can say 💕</p>
        </div>
      </footer>
    </div>
  )
}
