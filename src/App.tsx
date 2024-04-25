import React from 'react';
import { GlobalStyles } from "./GlobalStyle";
import './fonts/fonts.css';
import {InputElement} from "./components/form/InputElement";
import { Container } from "./components/layout/Container";
import {TodayElement} from "./components/ui/TodayElement";
import {CardBox} from "./components/layout/CardBox";

function App() {

  return <>
    <GlobalStyles/>
    <Container>
      <TodayElement/>
      <CardBox>
        <InputElement/>
      </CardBox>
    </Container>
  </>
}

export default App;
