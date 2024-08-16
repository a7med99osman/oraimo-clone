// ICONS
import { FaStar } from "react-icons/fa6";
import { IoTimer } from "react-icons/io5";
import { MdBatteryCharging80 } from "react-icons/md";
import { Link } from "react-router-dom";
const ProductCard = ({product}) => {
    return (
        <div className="productCard">
            <div className="image">
                <Link to={`/productDetails/${product.id}`}>
                    <img src={product.img} alt="" />
                </Link>
                <div className="rate">
                    <h5>4.9</h5>
                    <FaStar className="starIcon"/>
                    <h6>({product.rate})</h6>
                </div>
            </div>
            <div className="titleDiv">
                <Link style={{textDecoration : "none"}} to={`/productDetails/${product.id}`}><h2 className="title">{product.title.substring(0,17)} ...</h2></Link>
            </div>
            <div className="discripeDiv">
                <IoTimer className="icon" />
                <h3>{product.discripe1.substring(0,17)}</h3>
            </div>
            <div className="discripeDiv">
                <MdBatteryCharging80 className="icon" />
                <h3>{product.discripe2.substring(0,17)}</h3>
            </div>
            <div className="price">
                <h3 className="priceNow">{product.priceNow} EGP</h3>
                <h4 className="priceBefore">{product.priceBefore} EGP</h4>
            </div>
        </div>
    )
}

export default ProductCard