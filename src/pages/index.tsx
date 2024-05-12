import CardBuy from "../components/CardBuy"
import Nav from "../components/Nav"
import Tag from "../components/Tag"
import { Container } from "../components/UI/index.style"
import "./Home.css"

export default function Home(){
    return(
        <>
        <Container>
        <Nav></Nav>
                <div className="products">
                    <CardBuy></CardBuy>
                    <CardBuy></CardBuy>
                    <CardBuy></CardBuy>
                    <CardBuy></CardBuy>
                    <CardBuy></CardBuy>
                    <CardBuy></CardBuy>
                    <CardBuy></CardBuy>
                    <CardBuy></CardBuy>
                </div>
            <Tag/>
        </Container>
           
        </>
    )
}