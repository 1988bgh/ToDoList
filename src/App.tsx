import React from 'react';
import { GlobalStyles } from "./GlobalStyle";
import {InputElement} from "./components/form/InputElement";
import { Container } from "./components/layout/Container";

function App() {
  return <>
    <GlobalStyles/>
    <Container>
      <InputElement/>
    </Container>
  </>
}
export default App;
