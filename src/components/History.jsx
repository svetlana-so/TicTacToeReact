
export default function History({ history, replayMode }) {
  const moves = history.map((squares, move) => {
    let description = null; // Initialize description with null
    
    if (move > 0 && !replayMode) {
      let changedSquareIndex;
      squares.forEach((square, index) => {
        if (history[move - 1][index] !== square) {
          changedSquareIndex = index;
        }
      });

      if (changedSquareIndex !== undefined) { // Check if changedSquareIndex is defined
        const row = Math.floor(changedSquareIndex / 3) + 1;
        const col = (changedSquareIndex % 3) + 1;

        const player = move % 2 === 1 ? 'Player 1: X' : 'Player 2: O';

        description = `${player} placed on (${row}, ${col})`;
      }
    }

    return (
      <li key={move}>
        {description && <div>{description}</div>}
      </li>
    );
  });

  return (
    <div className="card">
      <div className="card-header">History</div>
      <div className="card-body">
        <ol className="list-group list-group-numbered">
          {moves}
        </ol>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary">Watch Replay</button>
      </div>
    </div>
  );
}
