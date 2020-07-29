import React, {Fragment} from 'react';
import Game from './components/Game';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    body {
    font: 14px "Century Gothic", Futura, sans-serif;
    margin: 20px;
  }
`

const App = () =>{
    return (
        <Fragment>
            <Normalize/>
            <GlobalStyle/>
            <Game/>
        </Fragment>
      );
}

export default App;

  
  