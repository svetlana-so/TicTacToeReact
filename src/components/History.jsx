export default function History({ history, replayMode, winner, startReplay }) {
  const moves = history.map((squares, move) => {
    let description = null

    if (move > 0 && !replayMode) {
      let changedSquareIndex
      squares.forEach((square, index) => {
        if (history[move - 1][index] !== square) {
          changedSquareIndex = index
        }
      })

      if (changedSquareIndex !== undefined) {
        const row = Math.floor(changedSquareIndex / 3) + 1
        const col = (changedSquareIndex % 3) + 1

        const player = move % 2 === 1 ? 'Player 1: X' : 'Player 2: O'
        console.log(history)
        description = `${player} placed on (${row}, ${col})`
      }
    }

    return <li key={move}>{description && <div>{description}</div>}</li>
  })

  return (
    <div className="card text-center ">
      {winner && <div className="card-header">Winner is: {winner} !</div>}
      <div className="card-body">
        <ol className="list-group list-group-numbered">{moves}</ol>
      </div>
      <div className="card-footer d-flex gap-2">
        <button className="btn btn-primary w-50" onClick={() => startReplay()}>
          Watch Replay
        </button>
        <button className="btn btn-primary w-50">Restart</button>
      </div>
    </div>
  )
}
