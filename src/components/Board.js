import React from 'react';
import Square from './Square';
// import BoardRow from './BoardRow';
import styled from 'styled-components';

const BoardRow = styled.div`
    display: grid;
    grid-template-columns: 30% 30% 30%; 
`

const Board = (props) => {
    let cases = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      return (
        <BoardRow>
        {cases.map((value, index) => {
            return (<Square
            key={index} 
            value={props.squares[value]}
            onClick={()=> {props.onClick(value)}}
          />)
        })}
          
        </BoardRow>
      );
    }

export default Board;
  
