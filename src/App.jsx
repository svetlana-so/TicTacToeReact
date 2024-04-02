import Board from './components/Board'
import Setup from '@/components/Setup'
import History from '@/components/History'

import { useState } from 'react'
import calculateWinner from './utils/calculateWinner'
import { startReplay } from './utils/startReplay'
import { DEFAULT_BOARD_SIZE, PLAYER_TYPE, GAME_STATE } from '@/utils/constants'


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
  const [boardSize, setBoardSize] = useState(DEFAULT_BOARD_SIZE)


  const handleSubmit = ({ players, boardSize }) => {
    setPlayers(players)
    setBoardSize(boardSize)
    setGameState(GAME_STATE.IDLE)
  }
    


  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill(null)])
  const currentSquares = history[history.length - 1]
  const winner = calculateWinner(currentSquares)
  const [replayMode, setReplayMode] = useState(false)

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares])
    setXIsNext(!xIsNext)
  }

  if (gameState === GAME_STATE.SETUP) {
    return (
      <div className="container">
         <h1 className="typing-animation">Tic-Tac-Toe Emoji</h1>
        <Setup boardSize={boardSize} players={players} onSubmit={handleSubmit} />
      </div>
  ) }

  return (
    <div className="container">

      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={() => startReplay(history, setReplayMode, handlePlay)} disabled={!winner}>
          Start Replay
        </button>
        <History history = { history} replayMode= {replayMode}/>
      </div>
    </div>
  )
}
