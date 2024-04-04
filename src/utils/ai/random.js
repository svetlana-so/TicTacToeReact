import { AI_TURN_DELAY_MS } from '@/utils/constants'

export async function getNextMove(squares) {
  const availableSquares = squares.reduce((accumulator, square, index) => {
    if (!square) {
      accumulator.push(index)
    }

    return accumulator
  }, [])

  const randomIndex = Math.floor(Math.random() * availableSquares.length)

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(availableSquares[randomIndex])
    }, AI_TURN_DELAY_MS)
  })
}
