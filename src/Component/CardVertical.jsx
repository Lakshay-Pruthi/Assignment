import Button from "./miniComponents/Button";
import product from '../assets/product.png'

function CardVertical() {
    return (
        <>
            <div className="cardVertical">
                <img src={product} alt="" />
                <div className="discountTags">
                    <span className="discountTag">20% off</span>
                    <span className="discountTag">Limited time</span>
                </div>
                <h5 className="cvTitle">Webbuilder 1</h5>
                <p>Computer  Modern clasic with wix support</p>
                <div className="prices">
                    <span className="p1">$39.96</span>
                    <span className="p2">$49.96</span>
                    <span className="p3">(20%off)</span>
                </div>
                <Button text={"View deal"} />
            </div>
        </>
    )
}

export default CardVertical;