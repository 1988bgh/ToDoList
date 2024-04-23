import styled from "styled-components";

interface ILayout {
    children: JSX.Element;
}

export const Container = ({children}:ILayout) =>{
    return <Wrapper>
        {children}
    </Wrapper>
}

const Wrapper = styled.div`
    width: 90%;
    max-width:1024px;
    height:100%;
    margin:0 auto;
    background-color:#f5f5f5;
`