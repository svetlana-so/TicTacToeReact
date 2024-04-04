export default function Status({ winner, isDraw }) {
  
  return (
    <div className="py-4 row">
      <div className="card-body">
        {winner && <h1 className="text-success">The Winner is {winner} ! Congratulations! 🎉</h1>}
        {isDraw && <h1 className="text-danger">It&apos;s a Draw!</h1>}
      </div>
      {(winner || isDraw) && ( 
        <div className="d-flex gap-2 justify-content-center mt-4">
          <button className="btn btn-sm btn-dark">Restart Game</button>
          <button className="btn btn-sm btn-primary">New Game</button>
        </div>
      )}
    </div>
  )
}
