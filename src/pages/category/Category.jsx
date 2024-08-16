import { useParams } from 'react-router-dom'
import Headline from '../../components/headline/Headline'
import {AllProductsContext} from '../../utils/AllProductsContext'
import { useContext } from 'react'
import ProductCard from '../../components/productCard/ProductCard'

export const Category = () => {
    const {products} = useContext(AllProductsContext)
    const {slug} = useParams()
    
    console.log(products);
    return (
        <>
                <Headline title={slug} />
            <div className='category'>
                {products.map((p , index) => {
                    if(p.category === slug){
                        return (<ProductCard className="productCard" key ={index} product={p} />)
                    }
                })}
            </div>
        </>
    )
}

