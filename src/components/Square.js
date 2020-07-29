import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.div`
  height: 200px;
  width: 200px;
  background: #fff;
  border: 1px solid #999;
`
const Btn = styled.button `
    font-size: 164px;
    font-weight: bold;
    height: 100%;
    width: 100%;
    background: transparent;
    border: 0;
`

const Square = (props) => {
    return (
      <BtnContainer>
        <Btn onClick={props.onClick}>
          {props.value}
        </Btn>
      </BtnContainer>
    );
}

export default Square;