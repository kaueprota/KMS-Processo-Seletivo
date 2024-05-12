import styled from "styled-components";

export const CardsStyled = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    padding: 5px 26px;
    justify-content: space-between;
    background-color: white;
    width: 100%;
    min-height: 101px;
    border-radius: 8px;
    color: black;

    span{
        position: absolute;
        top: -15px;
        font-size: 9px;
    }

    img{
        width: 17%;
    }

    .productName{
        font-size: 13px;
        width: 29%;
    }



    .quantity-input {
        height: 29%;
        border: 1px rgba(191, 191, 191, 1) solid;
        border-radius: 8px;
        width: 20%;
        padding: 5px 0px;
        display: flex;
        position: relative;
}

    .quantity-input input {
        text-align: center;
        border: none;
        width: 130%;
        height: 100%;
        font-size: 11px;
        border-right: 1px rgba(191, 191, 191, 1) solid;
        border-left: 1px rgba(191, 191, 191, 1) solid;
    }

    .quantity-input button {
        display: flex;
        width: 100%;
        height: 100%;
        border: none;
        background-color: #fff;
        cursor: pointer;
        font-size: 18px;
        color: #333;
        align-items: center;
        justify-content: center;
    }

    .quantity-input button:hover {
    background-color: #f0f0f0;
    }

    .productPrice{
    font-size: 14px;
    font-weight: 700;
    }

`;