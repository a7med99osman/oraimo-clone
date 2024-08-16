import { useState } from "react"
// ICONS
import { FaTrash } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { remove } from "../../utils/slices/CartSlice";


const CartProductCard = ({product}) => {
    // REDUX
    const dispatch = useDispatch()

    function handleRemoveItem(id){
        dispatch(remove({
            productId : id 
        }))
    }
    let twoWordTitle = (product.title).split(' ').slice(0, 2).join(' ');
    // EVENTS HANDLERS
    function handleMinse(){
        if (quantity > 1){
            let quantityMinse = quantity-1
            setQuantity(quantityMinse)
        }
    }
    function handlePlus(){
            let quantityPlus = quantity + 1
            setQuantity(quantityPlus)
    }
    const [quantity , setQuantity] = useState(1)
    return (
        <div className="cartProductCard">
            <div className="imgAndTitle">
                <img src={product.img} alt="" />
                <h3>{twoWordTitle}</h3>
            </div>
            <div className="price">
                <h3>Price</h3>
                <h3>{product.priceNow} EGP</h3>
            </div>
            <div className="quantity">
                <h3>QTY</h3>
                <div><span onClick={handleMinse} className="minse">-</span><span className="qty">{quantity}</span> <span onClick={handlePlus} className="plus">+</span></div>
            </div>
            <div className="totalPrice">
                <h3>Total Price</h3>
                <h3>{product.priceNow*quantity} EGP</h3>
            </div>
            <div onClick={() => {handleRemoveItem(product.id)}} className="trashIcons">
            <FaTrash className="icon" />
            </div>
        </div>
    )
}

export default CartProductCard