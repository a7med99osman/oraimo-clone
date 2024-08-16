//Components
import ProductCard from '../productCard/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import {IsMobileContext} from '../../utils/IsMobileContext'
import { AllProductsContext } from '../../utils/AllProductsContext';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import required modules
import { Navigation, Pagination , Autoplay  } from 'swiper/modules';
import { useContext } from 'react';


const ProductSwiper = () => {
    const {products} = useContext(AllProductsContext)
    const {isMobile} = useContext(IsMobileContext)
    return (
        <div className='producsSwiperDiv'>
        <Swiper className='productSwiper'
            modules={[Navigation, Pagination , Autoplay]}
            spaceBetween={ isMobile? 10 : 40 } 
            slidesPerView={ isMobile? 2 : 4 }  // 4 pc
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop ={true}
            >
                {products.map((product , index) => {
                    if (product.bestSeller === true){
                        return(<SwiperSlide key={index} className='productSwiperSlider'><ProductCard product={product}/></SwiperSlide>)
                    }
                })}
        </Swiper>
        </div>
    );
}

export default ProductSwiper