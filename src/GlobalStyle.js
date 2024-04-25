import { createGlobalStyle } from 'styled-components';

export  const GlobalStyles = createGlobalStyle`
     
    :root{
        font-size:62.5%;
        --theme-background:#F1EEDC;
        --theme-card:#F1EEDC;
        --theme-button-type1:#BED7DC;
        --theme-button-type2:#B3C8CF;
        --theme-black:#1d1d1d;
    }
    @media screen and (max-width:1024px) {
        
    }
        
    *{
        padding:0;
        margin:0;
        box-sizing: border-box;
        font-family: 'Pretendard',sans-serif;
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
    body{
        background-color:var(--theme-background);
    }
    input,
    button{
        border:none;
        outline: none;
    }
`