import calculateWinner from '@/utils/calculateWinner'
import Square from '@/components/Square'
import './Board.css'

export default function Board({ currentPlayer, squares, onPlay, players }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return
    }
    // Avoiding direct data mutation lets you keep
    // previous versions of the data intact, and reuse them later.
    const nextSquares = squares.slice()
    nextSquares[i] = players[currentPlayer ? 0 : 1].symbol
    console.log(nextSquares[i])
    onPlay(nextSquares)
  }

  return (
    <div className="board" style={{ '--columns': 3, '--rows': 3 }}>
      <Square
        className="square display-3 text-bg-dark is-selected"
        value={squares[0]}
        onSquareClick={() => handleClick(0)}
      />
      <Square
        className="square display-3"
        value={squares[1]}
        onSquareClick={() => handleClick(1)}
      />
      <Square
        className="square display-3"
        value={squares[2]}
        onSquareClick={() => handleClick(2)}
      />

      <Square
        className="square display-3"
        value={squares[3]}
        onSquareClick={() => handleClick(3)}
      />
      <Square
        className="square display-3"
        value={squares[4]}
        onSquareClick={() => handleClick(4)}
      />
      <Square
        className="square display-3"
        value={squares[5]}
        onSquareClick={() => handleClick(5)}
      />

      <Square
        className="square display-3"
        value={squares[6]}
        onSquareClick={() => handleClick(6)}
      />
      <Square
        className="square display-3"
        value={squares[7]}
        onSquareClick={() => handleClick(7)}
      />
      <Square
        className="square display-3"
        value={squares[8]}
        onSquareClick={() => handleClick(8)}
      />
    </div>
  )
}
