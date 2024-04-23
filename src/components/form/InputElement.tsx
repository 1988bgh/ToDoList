import styled from "styled-components";

export const InputElement  = ()=>{
    return <>
        <Input type="text"/>
    </>
}

const Input = styled.input`
    width:100%;
    padding:20px 30px;
    font-size:5rem;
    border:1px solid #eee;
    border-radius: 1rem;
`