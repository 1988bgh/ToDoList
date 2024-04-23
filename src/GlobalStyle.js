import { createGlobalStyle } from 'styled-components';

export  const GlobalStyles = createGlobalStyle`
    :root{
        font-size:62.5%;
    }
    @media screen and (max-width:1024px) {
        
    }

    @media screen and (max-width:1024px) {

    }
    
    *{
        padding:0;
        margin:0;
        box-sizing: border-box;
    }
    html,
    body,
    #root{
        width:100%;
        height:100%;
    }
    html{
        overflow-y: auto;
    }
`