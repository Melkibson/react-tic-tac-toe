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

const Game = () => {
    const initialState = {
        history:[{
            squares: Array(9).fill(null),
          }],
        stepNumber: 0,
        xIsNext: true,
    }
    
    const [state, setState] = useState(initialState);
    
    const history = state.history;
    const current = history[state.stepNumber];
    const winner = calculateWinner(current.squares);

    const handleClick = (i) => {
        const history = state.history.slice(0, state.stepNumber + 1);
        const current = history[history.length -1];
        const squares = current.squares.slice();
        setState({ 
          history: history.concat([
            {
              squares: squares
            }
          ]),
          stepNumber: history.length,
          xIsNext: !state.xIsNext,
        });   

        if (calculateWinner(squares) || squares[i]) {return;}
        squares[i]= state.xIsNext ? 'X' : 'O';
        
             
    }

    const jumpTo = (step) => {
      setState({
        history: history,
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }
    const moves = history.map((step, move) => {
        const desc = move ? 'Go to move #' + move : 'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{desc}</button>
          </li>
        )
      })

    let status;
    winner ? status = 'Winner: ' + winner : status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');

    return (
      <GameContainer>
        <GameBoard>
            <Board 
            squares={current.squares}
            onClick={i => handleClick(i)}
            />
        </GameBoard>
        <GameInfo>
            <div>{status}</div>
            <ol>{moves}</ol>
        </GameInfo>
      </GameContainer>
    )
}
export default Game;