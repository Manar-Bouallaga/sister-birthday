"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, Heart, Gift } from "lucide-react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [isBirthday, setIsBirthday] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const currentYear = new Date().getFullYear()
      let birthdayDate = new Date(currentYear, 7, 4) // August 4th (month is 0-indexed)

      // If birthday has passed this year, set it for next year
      if (birthdayDate.getTime() < now) {
        birthdayDate = new Date(currentYear + 1, 7, 4)
      }

      const difference = birthdayDate.getTime() - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
        setIsBirthday(false)
      } else {
        // Check if today is the birthday
        const today = new Date()
        const todayMonth = today.getMonth()
        const todayDate = today.getDate()

        if (todayMonth === 7 && todayDate === 4) {
          setIsBirthday(true)
        }
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (isBirthday) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-sky-500/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-12 shadow-2xl">
          <Gift className="w-24 h-24 mx-auto mb-6 animate-bounce text-blue-500" />
          <h3 className="text-6xl font-bold mb-6 text-blue-600" style={{ fontFamily: "Dancing Script, cursive" }}>
            🎉 Happy Birthday! 🎉
          </h3>
          <p className="text-2xl leading-relaxed text-gray-700">
            Today is your special day my love! Happy Birthday! 💕
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-8 h-8 fill-blue-400 text-blue-400 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Calendar className="w-16 h-16 mx-auto mb-4 text-indigo-500" />
        <h3 className="text-3xl font-bold text-gray-800 mb-2" style={{ fontFamily: "Dancing Script, cursive" }}>
          Time Until Your Birthday
        </h3>
        <p className="text-xl text-gray-600">August 4th - The Most Beautiful Day of the Year 💕</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {[
          { value: timeLeft.days, label: "Days", icon: Calendar, gradient: "from-blue-500/20 to-blue-600/20" },
          { value: timeLeft.hours, label: "Hours", icon: Clock, gradient: "from-indigo-500/20 to-indigo-600/20" },
          { value: timeLeft.minutes, label: "Minutes", icon: Clock, gradient: "from-sky-500/20 to-sky-600/20" },
          { value: timeLeft.seconds, label: "Seconds", icon: Heart, gradient: "from-blue-400/20 to-blue-500/20" },
        ].map((item, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-blue-200/30 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-300/30">
              <item.icon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2 tabular-nums">
              {item.value.toString().padStart(2, "0")}
            </div>
            <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">{item.label}</div>
          </div>
        ))}
      </div>

      
    </div>
  )
}
