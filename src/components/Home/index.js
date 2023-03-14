import {Component} from 'react'
import './index.css'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {ActualScore} from './styledComponents'
import 'reactjs-popup/dist/index.css'
import ButtonContainer from '../ButtonContainer'
import RenderResults from '../RenderResults'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testId: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testId: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testId: 'paperButton',
  },
]

class Home extends Component {
  state = {
    gameOver: false,
    userClick: [],
    opponentClick: [],
    score: 0,
    resultMsg: '',
  }

  decideWinner = id => {
    const userClick = choicesList.find(eachChoice => eachChoice.id === id)
    const opponentClick = choicesList[Math.floor(Math.random() * 3)]

    if (userClick.id === opponentClick.id) {
      this.setState({resultMsg: 'IT IS DRAW', gameOver: true})
    } else if (
      (userClick.id === 'ROCK' && opponentClick.id === 'SCISSORS') ||
      (userClick.id === 'SCISSORS' && opponentClick.id === 'PAPER') ||
      (userClick.id === 'PAPER' && opponentClick.id === 'ROCK')
    ) {
      this.setState(prevState => ({
        resultMsg: 'YOU WON',
        score: prevState.score + 1,
        gameOver: true,
      }))
    } else {
      this.setState(prevState => ({
        resultMsg: 'YOU LOSE',
        score: prevState.score - 1,
        gameOver: true,
      }))
    }
    this.setState({userClick, opponentClick})
  }
  //   prevState.score === 0 ? prevState.score :

  updateGameOver = () => {
    this.setState({
      gameOver: false,
    })
  }

  render() {
    const {gameOver, resultMsg, userClick, opponentClick, score} = this.state
    return (
      <div className="homeContainer">
        <div className="header_card">
          <h1 className="heading">
            ROCK <br /> PAPER <br /> SCISSORS
          </h1>
          <div className="scoreCardContainer">
            <p className="Score">Score</p>
            <ActualScore>{score}</ActualScore>
          </div>
        </div>
        {gameOver && (
          <RenderResults
            updateGameOver={this.updateGameOver}
            resultMsg={resultMsg}
            userClick={userClick}
            opponentClick={opponentClick}
          />
        )}
        {!gameOver && (
          <ul className="buttons_container">
            {choicesList.map(eachChoice => (
              <ButtonContainer
                eachChoice={eachChoice}
                key={eachChoice.id}
                decideWinner={this.decideWinner}
              />
            ))}
          </ul>
        )}

        <div className="popup-container">
          <Popup
            modal
            trigger={
              <div className="button_div">
                <button type="button" className="rules">
                  RULES
                </button>
              </div>
            }
          >
            {close => (
              <>
                <div className="button_div">
                  <button
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    <RiCloseLine />
                  </button>
                </div>
                <div>
                  <img
                    className="rulesImg"
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default Home
