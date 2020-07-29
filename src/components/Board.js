import React from 'react';
import Square from './Square';
import styled from 'styled-components';
import {range} from '../utils/Utils'

const BoardRow = styled.div`
    display: grid;
    grid-template-columns: 33.33333333% 33.33333333% 33.33333333%; 
`

const Board = (props) => {
    // function range(start, end) {
    //     return Array.from({ length: end - start + 1 }, (_, i) => i)
    // }
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
  
