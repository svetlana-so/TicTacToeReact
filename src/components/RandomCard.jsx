import { useState, useEffect } from 'react'
import { symbolOptions } from '@/utils/emojis'

export default function RandomCard() {
  const [randomEmoji, setRandomEmoji] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * symbolOptions.length)
      setRandomEmoji(symbolOptions[randomIndex])
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="emojiContainer">
      <div className="emoji">{randomEmoji.label}</div>
    </div>
  )
}
