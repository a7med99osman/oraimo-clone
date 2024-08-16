// ICONS
import { TiStarFullOutline } from "react-icons/ti";
import { IoTimer } from "react-icons/io5";
import { MdBatteryCharging80 } from "react-icons/md";
import { MdRunCircle } from "react-icons/md";
import { PiApplePodcastsLogoFill } from "react-icons/pi";
// 

// REDUX
import {useDispatch } from "react-redux";
import { add } from "../../utils/slices/CartSlice";


//
import { useParams } from "react-router-dom"
//
import { AllProductsContext } from '../../utils/AllProductsContext';
import { useContext } from "react";

export const ProductDetails = () => {
    const {products} = useContext(AllProductsContext)
    const {slug} = useParams()
    const currentProduct = products.find((p) => {
        return p.id == slug
    })
    // REDUX
    const dispatch = useDispatch()
    function handleAddtoCart(){
        alert("Product Added to Cart")
        dispatch(add({
            product : currentProduct
        }))
    }
    
    const product = products.filter((p) => {
        return p.id == Number(slug)
    })
    return (
    <section className="productDetails">
        <div className="breadCrambs">
            <h2><span>{product[0].category}</span> {'>>'} {product[0].title}</h2>
        </div>
        <div className="productDetailsDiv">
            <div className="imgDiv">
                <img src={product[0].img} alt="" />
            </div>
            <div className="detailsDiv">
                <h2>{product[0].title}</h2>
                <div className="rate">
                    <div className="stars">
                        <TiStarFullOutline className="starIcon"/>
                        <TiStarFullOutline className="starIcon"/>
                        <TiStarFullOutline className="starIcon"/>
                        <TiStarFullOutline className="starIcon"/>
                        <TiStarFullOutline className="starIcon"/>
                    </div>
                    <h3>({product[0].rate})</h3>
                </div>
                <div className="price">
                    <h3 className="priceNow">EGP {product[0].priceNow}</h3>
                    <h4 className="priceBefore">EGP {product[0].priceBefore}</h4>
                </div>
                <div className="detailsList">
                    <div className="list">
                        <PiApplePodcastsLogoFill className="checkIcon"/>
                        <h3>{product[0].discripe1}</h3>
                    </div>
                    <div className="list">
                        <MdRunCircle className="checkIcon"/>
                        <h3>{product[0].discripe2}</h3>
                    </div>
                    <div className="list">
                        <IoTimer className="checkIcon"/>
                        <h3>{product[0].discripe3}</h3>
                    </div>
                    <div className="list">
                        <MdBatteryCharging80 className="checkIcon"/>
                        <h3>{product[0].discripe4}</h3>
                    </div>
                </div>
            </div>
        </div>
                <div className="addCartBtn">
                    <button onClick={handleAddtoCart}>Add to Cart</button>
                </div>
    </section>
    )
}

