import Board from './components/Board/Board'
import Setup from '@/components/Setup'
import Status from '@/components/Status'
import { useState } from 'react'
import calculateWinner from './utils/calculateWinner'


import { DEFAULT_BOARD_SIZE, PLAYER_TYPE, GAME_STATE } from '@/utils/constants'
import NextMove from './components/NextMove'

export default function Game() {
  const [players, setPlayers] = useState([
    {
      name: 'Player 1',
      symbol: '❌',
      type: PLAYER_TYPE.HUMAN,
    },
    {
      name: 'Player 2',
      symbol: '⭕️',
      type: PLAYER_TYPE.HUMAN,
    },
  ])
  const [gameState, setGameState] = useState(GAME_STATE.SETUP)
  const [boardSize] = useState(DEFAULT_BOARD_SIZE)

  const handleSubmit = ({ players }) => {
    setPlayers(players)
    setGameState(GAME_STATE.IDLE)
  }

  const [currentPlayer, setcurrentPlayer] = useState(true)
  const [history, setHistory] = useState([Array(boardSize * boardSize).fill(null)])
  const currentSquares = history[history.length - 1]
  const winner = calculateWinner(currentSquares)
  const isDraw = !winner && currentSquares.every(square => square);
  

  function gameOn(nextSquares) {
    setHistory([...history, nextSquares])
    setcurrentPlayer(!currentPlayer)
  }

  const resetGame = boardSize => {
    setHistory([Array(boardSize * boardSize).fill(null)])
    setcurrentPlayer(true)
  }

  const handleNewGameClick = () => {
    setGameState(GAME_STATE.SETUP)
    resetGame(boardSize)
  }

  const handleRestartClick = () => {
    resetGame(boardSize)
  }

  if (gameState === GAME_STATE.SETUP) {
    return (
      <div className="container">
        <h1 className="typing-animation">Tic-Tac-Toe Emoji</h1>
        <Setup players={players} onSubmit={handleSubmit} />
      </div>
    )
  }

  return (
    <div className="container">
      {!(winner || isDraw) && <NextMove players={players} currentPlayer={currentPlayer} />}
      <div className="game-board">
        <Board
        players={players} 
          boardSize={boardSize}
          currentPlayer={currentPlayer}
          squares={currentSquares}
          onPlay={gameOn}
        />
      </div>
      <div className="game-info">
        <Status winner={winner} isDraw={isDraw}  onNewGameClick={handleNewGameClick} onRestartClick={handleRestartClick}/>
      </div>
    </div>
  )
}
