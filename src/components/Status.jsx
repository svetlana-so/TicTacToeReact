 import calculateWinner from "@/utils/calculateWinner"

 export default function Status({squares, xIsNext}) {
    const winner = calculateWinner(squares)

    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else if (!squares.includes(null)) {
      // Check if there are no empty squares
      status = "It's a draw!"
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O')
    }
  
    return (
<div className="row">
  <div className="col d-flex">
    <div className="card flex-grow-1">
      <div className="card-header">
        <div className="spinner-grow text-primary spinner-grow-sm me-2" role="status">
          <span className="visually-hidden">Waiting...</span>
</div>
Player 1
      </div>
      <div className="card-body d-flex align-items-center justify-content-center">
        <h5 className="card-title">X</h5>
      </div>
      <div className="card-footer">Human</div>
    </div>
</div>
  <div className="col d-flex">
    <div className="card flex-grow-1">
      <div className="card-header">Player 2</div>
      <div className="card-body d-flex align-items-center justify-content-center">
        <h5 className="card-title">O</h5>
      </div>
      <div className="card-footer">Human</div>
    </div>
</div>
<div className="col-8">
    <div className="card">
      <div className="card-header">{status}</div>
      <div className="card-body">
        <h5>Game In Progress</h5>
        <p className="card-text">Current move (#1): Player 1</p>
        {/* Element to show when there is a winner */}
        {/* <p className="text-success">Winner: Player 1</p> */}
        {/* Element to show when there is a draw */}
        {/* <p className="text-danger">Draw</p> */}
      </div>
      <div className="card-footer">
        <div className="d-flex gap-2">
          <button className="btn btn-sm btn-dark">Restart Game</button>
          <button className="btn btn-sm btn-primary">New Game</button>
        </div>
      </div>
    </div>
  </div>
</div>)
}