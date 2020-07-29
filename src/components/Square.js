import React from 'react';
import styled from 'styled-components';

const Button = styled.button `
    display: block;
`

const Square = (props) => {
    return (
      <Button className="square" onClick={props.onClick}>
        {props.value}
      </Button>
    );
}

export default Square;