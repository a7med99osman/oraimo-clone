import { Swiper, SwiperSlide } from 'swiper/react';
import {IsMobileContext} from '../../utils/IsMobileContext'
import { useContext } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import required modules
import { Navigation, Pagination , Autoplay  } from 'swiper/modules';
// import { useContext } from 'react';

const FooterSwiper = () => {
    const {isMobile} = useContext(IsMobileContext)
    return (
        <div className= "footerSwiper">
            <Swiper className='swiper'
                modules={[Navigation, Pagination , Autoplay ]}
                spaceBetween={!isMobile ? 70 : 10}
                slidesPerView={!isMobile ? 4 : 2}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop ={true}
                >
                    <SwiperSlide className='swiperSlide'><img src="https://test-oraimo-shop.s3.eu-west-1.amazonaws.com/2023/07/07/Post-3-oraimo(3).jpg" alt="" /></SwiperSlide>
                    <SwiperSlide className='swiperSlide'><img src="https://test-oraimo-shop.s3.eu-west-1.amazonaws.com/2023/07/07/Post-8-oraimo(4).jpg" alt="" /></SwiperSlide>
                    <SwiperSlide className='swiperSlide'><img src="https://test-oraimo-shop.s3.eu-west-1.amazonaws.com/2023/07/07/Post-6-oraimo(1).jpg" alt="" /></SwiperSlide>
                    <SwiperSlide className='swiperSlide'><img src="https://test-oraimo-shop.s3.eu-west-1.amazonaws.com/2023/07/07/Post-15-oraimo(1).jpg" alt="" /></SwiperSlide>
                    <SwiperSlide className='swiperSlide'><img src="https://test-oraimo-shop.s3.eu-west-1.amazonaws.com/2023/07/07/Post-1-oraimo(2).jpg" alt="" /></SwiperSlide>
                    <SwiperSlide className='swiperSlide'><img src="https://test-oraimo-shop.s3.eu-west-1.amazonaws.com/2023/07/07/Post-1-oraimo(4).jpg" alt="" /></SwiperSlide>
                    <SwiperSlide className='swiperSlide'><img src="https://test-oraimo-shop.s3.eu-west-1.amazonaws.com/2023/07/07/Post-3-oraimo.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide className='swiperSlide'><img src="https://test-oraimo-shop.s3.eu-west-1.amazonaws.com/2023/07/07/Post-8-oraimo(1).jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default FooterSwiper