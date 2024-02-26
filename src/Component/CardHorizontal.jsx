import Tag from "./miniComponents/Tag";
import productImage from '../assets/product.png'
import ratingStars from '../assets/rating.svg'
import Button from "./miniComponents/Button";
import SpecialHighlight from "./miniComponents/SpecialHighlight";
import blueDownArrow from '../assets/blueDownArrow.svg'

function CardHorizontal(props) {
    const { tag, index, name, text, highlight, mainHighlight, rating, ratingComment, specialHighlight } = props;
    return (
        <>
            <div className="cornerTopping">
                {tag && <Tag text={tag} />}
                <p className="index">{index}</p>
            </div>
            <section className="cardHorizontal">
                <div className="cardImage">
                    <img src={productImage} alt="" />
                    <p>{name}</p>
                </div>
                <div id="cardText">
                    <p><span className="highlight">{highlight}</span>{text}</p>
                    <span className="highlight2">Main highlights</span>
                    {mainHighlight ? (<p>{mainHighlight}</p>) : <SpecialHighlight />}
                    <a><p className="sort">Show more <img src={blueDownArrow} alt="" /></p></a>
                </div>
                <div className="RNB">
                    <div className="rating">
                        <h2>{rating}</h2>
                        <p>{ratingComment}</p>
                        <img src={ratingStars} alt="" />
                    </div>
                    <Button text={"View"} />
                </div>
            </section>
        </>
    )
}

export default CardHorizontal;