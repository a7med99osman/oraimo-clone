import Headline from '../../components/headline/Headline'
import {AllProductsContext} from '../../utils/AllProductsContext'
import { useContext } from 'react'
import ProductCard from '../../components/productCard/ProductCard'
export const Shop = () => {
    const {products} = useContext(AllProductsContext)
    
    return (
        <>
            <Headline title={"oraimo products"} />
            <div className='shop'>
                {products.map((p , index) => {
                        return (<ProductCard className="productCard" key ={index} product={p} />)
                })}
            </div>
        </>
        
    )
}
