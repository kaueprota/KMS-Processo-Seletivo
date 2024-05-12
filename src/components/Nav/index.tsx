import { NavStyled } from "./NavStyled.js.ts"
import cartImg from "../../assets/images/Cart.svg"
import {useState } from 'react';
import CardsStyled from "../CardsCart/index.tsx";
import CloseButton from "../UI/CloseButton"

export default function Nav(){

    const [active, setMode] = useState(false);
    const ActiveMode = () => {
        if(active == false){
            setMode(!active);
        }
    };

    const DisableMode= () => {
        setMode(!active);
    }

    return(
        <NavStyled>
            
            <div className="logo">
                <h2>MKS<span>Sistemas</span></h2>
            </div>
            <div className={active ? "cartActive" : "cart"} onClick={ActiveMode}>
                {active && (
                    <>
                    <div className="topCart">
                        <h2>Carrinho de compras</h2>
                        <CloseButton size={40} left={364} top={11} onClick={DisableMode}></CloseButton>

                    </div>
                    <div className="cardsCart">
                        <CardsStyled></CardsStyled>
                        <CardsStyled></CardsStyled>
                    </div>
                    </>
                )}
                {!active && (
                    <>
                    <img src={cartImg} alt="" />
                    <p>0</p>
                    </>
                )}

                {active && (
                    <>
                    <div className="finalCart">
                        <div className="valueText">
                            <h2>Total</h2>
                            <h2>R$798</h2>
                        </div>
                        <div className="finalizeBuy">
                            <button>
                                <h2>Finalizar Compra</h2>
                            </button>
                        </div>
                    </div>
                    
                    </>
                )}

            </div>
        </NavStyled>
    )
}