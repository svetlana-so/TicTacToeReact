export default function Status({ winner, isDraw, onNewGameClick,onRestartClick }) {
  
  return (
    <div className="py-4 row">
      <div className="card-body">
        {winner && <h1 className="text-light">The Winner is {winner} ! Congratulations! 🎉</h1>}
        {isDraw && <h1 className="text-danger">It&apos;s a Draw!</h1>}
      </div>
      {(winner || isDraw) && ( 
        <div className="d-flex gap-2 justify-content-center mt-4">
          <button className="btn btn-sm btn-dark" onClick={onRestartClick}>Restart Game</button>
          <button className="btn btn-sm btn-success" onClick={onNewGameClick}>New Game</button>
        </div>
      )}
    </div>
  )
}
