// COMPONENTS
import BannerSwiper from "../../components/bannerSwiper/BannerSwiper"
import ServiceBar from "../../components/serviceBar/ServiceBar"
import CategoryFilter from "../../components/categoryFilter/CategoryFilter"
import Headline from "../../components/headline/Headline"
import ProductSwiper from "../../components/productsSwiper/Productswiper"
import Recomindation from "../../components/recomindation/Recomindation"
import HomeGrid from '../../components/homeGrid/HomeGrid'
import OraimoEgypt from '../../components/oraimoEgypt/OraimoEgypt' 
import { IsMobileContext } from "../../utils/IsMobileContext"
import { useContext } from "react"

export const Home = () => {
    const {isMobile} = useContext(IsMobileContext)
    return (
        <div>
            <BannerSwiper />
            <ServiceBar />
            <CategoryFilter />
            <Headline title ={"Best Seller"} />
            <ProductSwiper />
            <div className="awardsbanner">
                {!isMobile? <img src="https://cdn-img.oraimo.com/2023/11/30/1920-600.jpg" alt="" /> 
                :
                <img  src="https://cdn-img.oraimo.com/2023/11/30/750-1040.jpg" alt="" />}
                
            </div>
            <Recomindation />
            <div  className="awardsbanner">
                {!isMobile? <img src="https://cdn-img.oraimo.com/2024/04/28/pc-ad.jpg" alt="" /> 
                :
                <img src="https://cdn-img.oraimo.com/2024/04/28/ad.jpg" alt="" />}
                
            </div>
            <HomeGrid />
            <OraimoEgypt />
        </div>
    )
}

