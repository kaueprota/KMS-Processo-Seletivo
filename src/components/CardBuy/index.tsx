import { CardBuyStyled } from "./CardStyled.js"
import imgApple from "../../assets/images/apple-watch.png"

export default function CardBuy() {
    return (
        <CardBuyStyled>
            <div className="productInfor">
                <img src={imgApple} alt="" />
                <div className="namePrice">
                    <h2>Apple Watch Series 4 GPS</h2>
                    <h2>R$399</h2>
                </div>
                <p>Redesigned from scratch and completely revised</p>
            </div>
            <button className="buttonBuy">
                <img src="" alt="" />
                <h2>COMPRAR</h2>
            </button>
        </CardBuyStyled>

    )
}