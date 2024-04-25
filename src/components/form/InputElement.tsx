import styled from "styled-components";

export const InputElement  = ()=>{
    return <>
        <InputBox>
            <input type="text"/>
            <button type="button">등록하기</button>
        </InputBox>
    </>
}

const InputBox  = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position:absolute;
    bottom:4rem;
    left:50%;
    transform: translateX(-50%);
    width:90%;
    
    input{
        position:relative;
        width:100%;
        height:6rem;
        margin-right:1rem;
        padding:1rem 2rem;
        font-size:2rem;
        border-radius: 1rem;
    }    
    button{
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position:relative;
        width:10rem;
        height:6rem;
        color:#fff;
        font-size:2rem;
        border-radius: 1rem;
        background-color:var(--theme-button-type2);
        cursor: pointer;
    }
`