import React from 'react';
import Square from './Square';
import styled from 'styled-components';
import {range} from '../utils/Utils'

const BoardRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 606px; 
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
  
