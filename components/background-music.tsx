"use client"

import { useState, useRef, useEffect } from "react"
import { Music, VolumeX, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3 // Set volume to 30%
      audioRef.current.loop = true
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(console.error)
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex space-x-2">
      <Button
        onClick={togglePlay}
        className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full w-12 h-12 p-0 shadow-lg"
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        <Music className={`w-5 h-5 ${isPlaying ? "animate-pulse" : ""}`} />
      </Button>

      <Button
        onClick={toggleMute}
        className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full w-12 h-12 p-0 shadow-lg"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </Button>

      <audio ref={audioRef} preload="auto" onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}>
        <source src="/happy-birthday.mp3?height=1&width=1" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
