import styled from "styled-components";

interface ILayout {
    children: React.ReactNode;
}

export const Container = ({children}:ILayout) =>{
    return <Wrapper>
        {children}
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width:76.8rem;
    height:100%;
    margin:0 auto;
`