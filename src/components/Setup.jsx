import { symbolOptions } from '@/utils/emojis'
import { PLAYER_TYPE } from '@/utils/constants'
import RandomCard from '@/components/RandomCard'

export default function Setup({ players, onSubmit }) {
  const handleSubmit = event => {
    event.preventDefault()

    const players = [
      {
        name: event.target.player1Name.value,
        symbol: event.target.player1Symbol.value,
        type: event.target.player1Type.value,
      },
      {
        name: event.target.player2Name.value,
        symbol: event.target.player2Symbol.value,
        type: event.target.player2Type.value,
      },
    ]

    console.log(players)

    onSubmit({ players })
  }
  return (
    <form onSubmit={handleSubmit}>
      <RandomCard />
      <div className="row">
        <div className="col">
          <h2>Player 1</h2>
          <div className="row">
            <div className="col-8 mb-3">
              <label htmlFor="player1Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="player1Name"
                defaultValue={players[0].name}
              />{' '}
            </div>
            <div className="col mb-3">
              <label htmlFor="player1Symbol" className="form-label">
                Symbol
              </label>
              <select className="form-select" id="player1Symbol" defaultValue={players[0].symbol}>
                {symbolOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="player1Type" className="form-label">
              Player Type
            </label>
            <select className="form-select" id="player1Type" defaultValue={players[0].type}>
              {Object.keys(PLAYER_TYPE).map(type => (
                <option key={type} value={PLAYER_TYPE[type]}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col">
          <h2>Player 2</h2>
          <div className="row">
            <div className="col-8 mb-3">
              <label htmlFor="player2Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="player2Name"
                defaultValue={players[1].name}
              />{' '}
            </div>
            <div className="col mb-3">
              <label htmlFor="player2Symbol" className="form-label">
                Symbol
              </label>
              <select className="form-select" id="player2Symbol" defaultValue={players[1].symbol}>
                {symbolOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="player2Type" className="form-label">
              Player Type
            </label>

            <select className="form-select" id="player2Type" defaultValue={players[0].type}>
              {Object.keys(PLAYER_TYPE).map(type => (
                <option key={type} value={PLAYER_TYPE[type]}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <button type="submit" className="btn btn-lg btn-light">
          Start Game
        </button>
      </div>
    </form>
  )
}
