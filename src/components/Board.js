import React from 'react';
import Square from './Square';
import styled from 'styled-components';
import {range} from '../utils/Utils'

const BoardRow = styled.div`
    display: grid;
    grid-template-columns: 33.33333333% 33.33333333% 33.33333333%; 
`

const Board = (props) => {
    let cases = range(0,8);
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
  
