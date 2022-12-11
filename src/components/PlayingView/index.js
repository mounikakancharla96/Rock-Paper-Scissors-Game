import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import './index.css'

import {
  PlayingContainer,
  ScoreContainer,
  Three,
  Names,
  ScoreCard,
  ScoreName,
  TrueScore,
  GameContainer,
  Option12,
  OptionButton,
  OptionImage,
  RulesContainer,
  CloseButton,
  PopupView,
  PopupCloseButton,
  PopupImage,
  ResultContainer,
  ResultImageContainer,
  ResultMainContainer,
  ResultName,
  ResultText,
  PlayAgainButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class PlayingView extends Component {
  state = {
    score: 0,
    isButtonClicked: true,
    gameResult: 'YOU WON',
    choiceArray: [choicesList[0], choicesList[1]],
  }

  getResult = (option1, option2) => {
    if (option1.id === 'ROCK') {
      switch (option2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (option1.id === 'PAPER') {
      switch (option2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (option2.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  getRandomButtons = id => {
    const {score} = this.state

    const ComputerChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]

    const userChoice = choicesList.filter(eachChoice => eachChoice.id === id)

    const result = this.getResult(userChoice[0], ComputerChoice)

    let updatedScore = score

    if (result === 'YOU WON') {
      updatedScore = score + 1
    } else if (result === 'YOU LOSE') {
      updatedScore = score - 1
    } else {
      updatedScore = score
    }
    this.setState({
      isButtonClicked: false,
      choiceArray: [userChoice[0], ComputerChoice],
      gameResult: result,
      score: updatedScore,
    })
  }

  getResults1 = () => {
    this.getRandomButtons(choicesList[0].id)
  }

  getResults2 = () => {
    this.getRandomButtons(choicesList[1].id)
  }

  getResults3 = () => {
    this.getRandomButtons(choicesList[2].id)
  }

  restartGame = () => this.setState({isButtonClicked: true})

  renderResultContainer = () => {
    const {gameResult, choiceArray} = this.state
    return (
      <ResultMainContainer>
        <ResultContainer>
          <ResultImageContainer>
            <ResultName>YOU</ResultName>
            <OptionImage src={choiceArray[0].imageUrl} alt="your choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultName>OPPONENT</ResultName>
            <OptionImage src={choiceArray[1].imageUrl} alt="opponent choice" />
          </ResultImageContainer>
        </ResultContainer>
        <ResultImageContainer>
          <ResultText>{gameResult}</ResultText>
          <PlayAgainButton type="button" onClick={this.restartGame}>
            PLAY AGAIN
          </PlayAgainButton>
        </ResultImageContainer>
      </ResultMainContainer>
    )
  }

  renderGameContainer = () => (
    <GameContainer>
      <Option12>
        <OptionButton
          type="button"
          onClick={this.getResults1}
          data-testid="rockButton"
        >
          <OptionImage
            src={choicesList[0].imageUrl}
            alt={choicesList[0].id}
            key={choicesList[0].id}
          />
        </OptionButton>
        <OptionButton
          type="button"
          onClick={this.getResults2}
          data-testid="scissorsButton"
        >
          <OptionImage
            src={choicesList[1].imageUrl}
            alt={choicesList[1].id}
            key={choicesList[1].id}
          />
        </OptionButton>
      </Option12>
      <OptionButton
        type="button"
        onClick={this.getResults3}
        data-testid="paperButton"
      >
        <OptionImage
          src={choicesList[2].imageUrl}
          alt={choicesList[2].id}
          key={choicesList[2].id}
        />
      </OptionButton>
    </GameContainer>
  )

  render() {
    const {score, isButtonClicked} = this.state
    return (
      <PlayingContainer>
        <ScoreContainer>
          <Three>
            <Names>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </Names>
          </Three>
          <ScoreCard>
            <ScoreName>Score</ScoreName>
            <TrueScore>{score}</TrueScore>
          </ScoreCard>
        </ScoreContainer>
        {isButtonClicked && this.renderGameContainer()}
        {!isButtonClicked && this.renderResultContainer()}
        <RulesContainer>
          <Popup modal trigger={<CloseButton>RULES</CloseButton>}>
            {close => (
              <PopupView>
                <PopupCloseButton type="button" onClick={() => close()}>
                  <RiCloseLine className="close-btn" />
                </PopupCloseButton>
                <PopupImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupView>
            )}
          </Popup>
        </RulesContainer>
      </PlayingContainer>
    )
  }
}

export default PlayingView
