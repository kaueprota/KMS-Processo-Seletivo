import { CardsStyled } from "./CardsStyled.js";
import appleImg from "../../assets/images/apple-watch.png"
import CloseButton from "../UI/CloseButton"

export default function CardsCart(){
    const click = () =>{
        console.log("teste")
    }

    return(
        <CardsStyled>
            <CloseButton size={25} top={-11} left={-6} onClick={click}></CloseButton>
            <img src={appleImg} alt="" />
            <p className="productName">Apple Watch Series 4 GPS</p>
            <div className="quantity-input">
                <span>Qtd:</span>
                <button type="button" className="decrease-button">-</button>
                <input type="text" className="quantity" value="1"/>
                <button type="button" className="increase-button">+</button>
            </div>
            <p className="productPrice">R$399</p>
        </CardsStyled>
    )
}