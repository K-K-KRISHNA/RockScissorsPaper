import {Component} from 'react'
import CardItem from '../CardItem'
import ResultCardItem from '../ResultCardItem'

import ReactPopUp from '../ReactPopUp'
import {
  Score,
  TriggerButton2,
  SubCard,
  Para,
  ButtonCard2,
  Content,
  Paragraph,
  ScoreCard,
  MainContainer,
  ResultCard,
  ButtonCard,
  Heading,
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

class Game extends Component {
  state = {
    score: 0,
    result: '',
    user: choicesList[0],
    ai: choicesList[1],
    generalView: true,
  }

  onUserClick = item => {
    // console.log(id
    let {score, generalView} = this.state
    generalView = false
    const random = Math.floor(Math.random() * 3)
    const user = item
    const ai = choicesList[random]
    let result = 'YOU LOSE'
    if (user === ai) {
      result = 'IT IS DRAW'
    } else if (
      (user.id === 'ROCK' && ai.id === 'SCISSORS') ||
      (user.id === 'SCISSORS' && ai.id === 'PAPER') ||
      (user.id === 'PAPER' && ai.id === 'ROCK')
    ) {
      result = 'YOU WON'
      score += 1
    } else {
      score -= 1
    }
    this.setState({score, user, ai, result, generalView})
  }

  GameResultView = (user, ai, result) => (
    <>
      <ButtonCard2>
        <ResultCard>
          <Paragraph>YOU</Paragraph>
          <ResultCardItem item={user} alt="your choice" />
        </ResultCard>
        <ResultCard>
          <Paragraph>OPPONENT</Paragraph>
          <ResultCardItem item={ai} alt="opponent choice" />
        </ResultCard>
      </ButtonCard2>
      <Paragraph>{result}</Paragraph>
      <TriggerButton2 onClick={this.replay}>PLAY AGAIN</TriggerButton2>
    </>
  )

  replay = () => {
    this.setState({generalView: true})
  }

  normalView = () => (
    <ButtonCard>
      <CardItem
        onUserClick={this.onUserClick}
        item={choicesList[0]}
        key={choicesList[0].id}
        testid="rockButton"
      />
      <CardItem
        onUserClick={this.onUserClick}
        item={choicesList[1]}
        key={choicesList[1].id}
        testid="scissorsButton"
      />
      <CardItem
        onUserClick={this.onUserClick}
        item={choicesList[2]}
        key={choicesList[2].id}
        testid="paperButton"
      />
    </ButtonCard>
  )

  render() {
    const {score, result, generalView, user, ai} = this.state
    return (
      <MainContainer>
        <ScoreCard>
          <SubCard>
            <Content>ROCK</Content>
            <Content>PAPER</Content>
            <Content>SCISSORS</Content>
          </SubCard>
          <Score>
            <Para>Score</Para>
            <Para>{score}</Para>
          </Score>
        </ScoreCard>
        <Heading>Rock Paper Scissors</Heading>
        {!generalView
          ? this.GameResultView(user, ai, result)
          : this.normalView()}
        <ReactPopUp />
      </MainContainer>
    )
  }
}

export default Game
