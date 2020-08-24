import React, {useState} from 'react';
import styled from 'styled-components';
import Board from './Board';
import {calculateWinner} from '../utils/Utils'

const GameContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
const GameBoard = styled.div`
    
`;
const GameInfo = styled.div`
    margin-left: 20px;
`;

const Background = styled.div`
    margin: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: black;
    opacity: 0.5;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    color: white;
    font-size: 35px;
`
const Form = styled.form`
    display: flex;
    flex-flow: column;
    
`
const Input = styled.input.attrs(({type}) =>({
    type: type || 'text'
}))`
`
const Label = styled.label`
    color: white;
`

const Game = () => {
    const initialState = {
        history:[{
            squares: [],
          }],
        stepNumber: 0,
        xIsNext: true,
        clear: false
    }
  
  const [playerOne, setPlayerOne] = useState('')
  const [playerTwo, setPlayerTwo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    document.querySelector(Background).style.visibility = 'hidden';
    return [playerOne, playerTwo]
  }
    
    const [state, setState] = useState(initialState);
    
    const history = state.history;
    const current = history[state.stepNumber];
    let winner = calculateWinner(current.squares);

    const handleClick = (i) => {
        const history = state.history.slice(0, state.stepNumber + 1);
        const current = history[history.length -1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {return;}
        squares[i]= state.xIsNext ? 'X' : 'O';
        setState({ 
          history: history.concat([
            {
              squares: squares
            }
          ]),
          stepNumber: history.length,
          xIsNext: !state.xIsNext,
        });
    }

    const jumpTo = (step) => {
      setState({
        history: step === 0 ? [{squares:[]}]: history,
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }
    
    const moves = history.map((step, move) => {
        const desc = move ? 'Go to move #' + move : 'Go to game start' ;
          return(
            <li key={move}>
            <button onClick={() => jumpTo(move)}>{desc}</button>
          </li>
          )
      })

    let status;
    winner ? status = 'Winner: ' + (winner === 'X' ? winner = playerOne : winner = playerTwo) : status = 'Next player: ' + (state.xIsNext ? playerOne : playerTwo);

    return (
      <>
      <Background>
          <Title>Welcome to tic tac toe</Title>
          <Form onSubmit={handleSubmit}>
              <Label>Player 1</Label>
              <Input value={playerOne} onChange={e => setPlayerOne(e.target.value)}/>
              <Label>Player 2</Label>
              <Input value={playerTwo} onChange={e => setPlayerTwo(e.target.value)}/>
              <Input type="submit"/>
          </Form>
      </Background>
      <GameContainer>
        <GameBoard>
            <Board 
            squares={current.squares}
            onClick={i => handleClick(i)}
            />
        </GameBoard>
        <GameInfo>
            <div>{status}</div>
            <ul>{moves}</ul>
        </GameInfo>
      </GameContainer>
    </>
    )
}
export default Game;