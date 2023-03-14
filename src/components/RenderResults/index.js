import './index.css'

const RenderResults = props => {
  const {resultMsg, updateGameOver, userClick, opponentClick} = props
  const changeGameOver = () => {
    updateGameOver()
  }

  return (
    <>
      <div className="results_div">
        <div className="user_div">
          <p className="heading">YOU</p>
          <img
            src={userClick.imageUrl}
            alt="your choice"
            className="resultImg"
          />
        </div>
        <div className="user_div">
          <p className="heading">OPPONENT</p>
          <img
            src={opponentClick.imageUrl}
            alt="opponent choice"
            className="resultImg"
          />
        </div>
      </div>
      <div className="play_again">
        <p className="resultMsg">{resultMsg}</p>
        <button onClick={changeGameOver} type="button" className="playAgain">
          Play Again
        </button>
      </div>
    </>
  )
}

export default RenderResults
