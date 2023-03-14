import './index.css'
import {StyledImg} from './styledComponents'

const ButtonContainer = props => {
  const {eachChoice, decideWinner} = props
  const {id, imageUrl, testId} = eachChoice

  const winner = () => {
    decideWinner(id)
  }

  return (
    <li>
      <button onClick={winner} data-testid={testId} type="button">
        <StyledImg src={imageUrl} alt={id} />
      </button>
    </li>
  )
}
export default ButtonContainer
