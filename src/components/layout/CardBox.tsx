import styled from "styled-components";

interface ILayout {
    children: React.ReactNode;
}

export const CardBox = ({children}:ILayout) =>{
    return <Wrapper>
        {children}
    </Wrapper>
}

const Wrapper = styled.div`
    position:relative;
    flex-grow: 1;
    padding:3rem;
    border-radius: 5rem 5rem 0 0;
    background-color: whitesmoke;
    box-shadow: 0 0 1rem rgb(0,0,0,0.1);
`