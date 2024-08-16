import CartProductCard from '../../components/cartProductCard/CartProductCard'
export const Cart = () => {

    const cartProducts = JSON.parse(localStorage.getItem("cartProducts"))

    console.log(cartProducts);
    return (
        <div className='cart'>
                {cartProducts.length == 0 ? (<div className="emptyCart"><h2>Your Cart Is Empty ..</h2></div>): ""}
            {cartProducts.map((p , index) => {
                return (<CartProductCard  key ={index} product= {p} />)
            })}
        </div>
    )
}
