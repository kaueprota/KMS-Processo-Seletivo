import styled from "styled-components";

interface CloseStyledProps {
    size: number;
    top: number;
    left: number;
}

export const CloseStyled = styled.div<CloseStyledProps>`
    min-width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 100%;
    background-color: black;
    position: absolute;
    cursor: pointer;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    transition: 0.3s;

    &&::after{
        content: "";
        position: absolute;
        background-color: white;
        width: 65%;
        height: 2px;
        transform: rotate(45deg);
        top: 50%;
        left: 18%;
    }
    &&::before{
        content: "";
        position: absolute;
        background-color: white;
        width: 65%;
        height: 2px;
        transform: rotate(-45deg);
        top: 50%;
        left: 18%;
    }

    &&:hover{
        background-color: rgb(50,50,50);
    }
`