import React from 'react';
import { GlobalStyles } from "./GlobalStyle";
import {InputElement} from "./components/form/InputElement";
import { Container } from "./components/layout/Container";
import {TodayElement} from "./components/ui/TodayElement";

function App() {

  return <>
    <GlobalStyles/>
    <Container>
      <TodayElement/>
      <InputElement/>
    </Container>
  </>
}

export default App;
