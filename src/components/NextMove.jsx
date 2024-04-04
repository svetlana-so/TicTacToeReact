export default function NextMove({ players, currentPlayer }) {
  const activePlayerIndex = currentPlayer ? 0 : 1

  return (
    <div className="playersTurn">
      {players.map((player, index) => (
        <div
          key={player.symbol}
          className={`player ${index === activePlayerIndex ? 'active' : ''}`}
        >
          <div className={`${index === activePlayerIndex ? 'activePlayer' : ''}`}>
            {player.name} {player.symbol}
          </div>
        </div>
      ))}
    </div>
  )
}
