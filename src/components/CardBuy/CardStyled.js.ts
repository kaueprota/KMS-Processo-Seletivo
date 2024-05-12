import styled from "styled-components";

export const CardBuyStyled = styled.div`
        background-color: white;
        width: 218px;
        height: 285px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        padding: 16px 10px 0px 10px;
        position: relative;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.14);

    .productInfor{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .productInfor img{
        width: 52%;
    }

    .namePrice{
        display: flex;
        padding-top: 12px;
    }

    .namePrice h2:nth-child(1){
        font-size: 16px;
        width: 82%;
    }

    .namePrice h2:nth-child(2){
        font-size: 15px;
        background-color: rgba(55, 55, 55, 1);
        color: white;
        border-radius: 8px;
        padding: 6px 7px 6px 7px;
        font-weight: 700;
        height: fit-content;
    }

    .productInfor p{
        font-size: 13px;
        font-weight: 300;
        padding-top: 6px;
    }

    .buttonBuy{
        width: 100%;
        background-color: rgba(15, 82, 186, 1);
        color: white;
        height: 32px;
        position: absolute;
        left: 0;
        border-radius: 0px 0px 8px 8px;
        bottom: 0;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .buttonBuy h2{
        font-size: 14px;
        font-weight: 600;
    }

`