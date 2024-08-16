import Headline from '../../components/headline/Headline'
import {AllProductsContext} from '../../utils/AllProductsContext'
import { useContext } from 'react'
import ProductCard from '../../components/productCard/ProductCard'

const Recomindation = () => {
    const {products} = useContext(AllProductsContext)
    return (
        <>
        <Headline title={"Recommendation"} />
        <div className="recomindation">
                {products.map((p , index) => {   
                    if (p.recommendation){
                        return (<ProductCard className="productCard" key ={index} product={p} />)
                    }   
                })}
            </div>
        </>
    )
}

export default Recomindation