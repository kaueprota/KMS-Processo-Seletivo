import styled from "styled-components";

export const NavStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 81px;
    background-color: rgba(15, 82, 186, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: calc(100% / 20.56);
    padding-right: calc(100% / 20.56);
    z-index: 2;

    .logo{
        color: white;
        cursor: pointer;
        padding: 3px;
    }

    .logo h2{
        font-size: 40px;
        font-weight: 600;
    }

    .logo span{
        font-size: 20px;
        font-weight: 300;
        margin-left: 6px;
    }

    .cart{
        padding: 2px 19px;
        background-color: white;
        width: 90px;
        height: 45px;
        top: 29px;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }

    .cart img{
        min-width: 50%;
    }

    .cart p{
        font-weight: 700;
        font-size: 18px;
    }

    .cartActive{
        padding-top: 43px;
        padding-left: calc(90vw / 20.56);
        padding-right: calc(90vw / 20.56);
        flex-direction: column;
        position: fixed;
        z-index: 10;
        top: 0;
        right: 0;
        width: calc(100% / 3);
        height: 100%;
        background-color: rgba(15, 82, 186, 1);
        border-radius: 0px;
        box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.5);
        color: white;
    }

    .topCart{
        position: relative;
        display: flex;
        width: 100%;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 53px;
    }

    .topCart h2{
        font-weight:700;
        font-size: 27px;
        width: 71%;
    }

    .valueText{
        display: flex;
        position: relative;
        top: -13px;
        justify-content: space-between;
        padding-left: calc(90vw / 20.56);
        padding-right: calc(90vw / 20.56);
    }

    .valueText h2{
        font-weight: 700;
        font-family: 28px;
    }

    .finalizeBuy{
        width: 100%;
        display: flex;
        height: 97px;
        background-color: black;
        cursor: pointer;
        justify-content: center;
        align-items: center;
    }
    
    .finalizeBuy button{
        color: white;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .finalizeBuy button h2{
        font-weight: 700;
        font-family: 28px;
    }

    .cardsCart{
        display: flex;
        gap: 18px;
        flex-direction: column;
        overflow-y: auto;
        width: 100%;
        padding: 12px 10px 0px 10px;
        height: 59%;
    }

    .finalCart{
        position: absolute;
        left: 0px;
        top: calc(100vh - 124px);
        width: 100%;
    }

` 