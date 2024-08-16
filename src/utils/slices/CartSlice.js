import { createSlice } from "@reduxjs/toolkit";

if (JSON.parse(localStorage.getItem("cartProducts") == null)){
    localStorage.setItem("cartProducts" , JSON.stringify([]))
}

const initialState ={
    cart : JSON.parse(localStorage.getItem("cartProducts"))
}

export const CartSlice = createSlice({
    
    name : "cart",
    initialState : initialState,
    reducers : {
        add : (currentState , action) => {
            currentState.cart.push(action.payload.product)
            localStorage.setItem("cartProducts" , JSON.stringify(currentState.cart))           
        },
        remove : (currentState , action) => {
            let cartProducts = JSON.parse(localStorage.getItem("cartProducts"))
            let newCartProducts = cartProducts.filter((p) => {
                return p.id != action.payload.productId
            })
            localStorage.setItem("cartProducts" , JSON.stringify(newCartProducts))
            window.location.reload() 
        }
    }
})

export const {add , remove} =CartSlice.actions
export default CartSlice.reducer