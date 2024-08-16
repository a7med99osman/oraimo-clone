import { Swiper, SwiperSlide } from 'swiper/react';
import {IsMobileContext} from '../../utils/IsMobileContext'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import required modules
import { Navigation, Pagination , Autoplay  } from 'swiper/modules';
import { useContext } from 'react';

export default function BannerSwiper ()  {
    const {isMobile} = useContext(IsMobileContext)
    return (
        <div className= "bannerSwiper">
        <Swiper
            modules={[Navigation, Pagination , Autoplay ]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop ={true}
            >
                <SwiperSlide>{isMobile ? (<img src="https://cdn-img.oraimo.com/2024/04/16/EN-mo.png" alt="" />) : (<img src="https://cdn-img.oraimo.com/2024/04/16/EN-pc.png" alt="" />)}</SwiperSlide>
                <SwiperSlide>{isMobile ? (<img src="https://cdn-img.oraimo.com/2024/03/26/oclub-mobile.jpg" alt="" />): (<img src="https://cdn-img.oraimo.com/2024/03/26/oclub-pc.jpg" alt="" />)}</SwiperSlide>
                <SwiperSlide>{isMobile ? (<img src="https://cdn-img.oraimo.com/2024/05/17/mobile.png" alt="" />): (<img src="https://cdn-img.oraimo.com/2024/05/17/pc.png" alt="" />)}</SwiperSlide>
                <SwiperSlide>{isMobile ? (<img src="https://cdn-img.oraimo.com/2024/01/12/award-m.jpg" alt="" />): (<img src="https://cdn-img.oraimo.com/2024/01/12/award-pc.jpg" alt="" />)}</SwiperSlide>
                <SwiperSlide>{isMobile ? (<img src="https://cdn-img.oraimo.com/2024/06/28/pc-en-fd-2.png" alt="" />): (<img src="https://cdn-img.oraimo.com/2024/06/28/pc-en-fd2.png" alt="" />)}</SwiperSlide>
                <SwiperSlide>{isMobile ? (<img src="https://cdn-img.oraimo.com/2024/05/14/banner-8.jpg" alt="" />): (<img src="https://cdn-img.oraimo.com/2024/05/14/banner-7.jpg" alt="" />)}</SwiperSlide>
                <SwiperSlide>{isMobile ? (<img src="https://cdn-img.oraimo.com/2024/05/24/OTW-340-MB-EN.png" alt="" />): (<img src="https://cdn-img.oraimo.com/2024/05/24/OTW-340-PC-EN.png" alt="" />)}</SwiperSlide>
                <SwiperSlide>{isMobile ? (<img src="https://cdn-img.oraimo.com/2024/01/12/brand-M.jpg" alt="" />): (<img src="https://cdn-img.oraimo.com/2024/01/12/brand-pc.jpg" alt="" />)}</SwiperSlide>
        </Swiper>
        </div>
    );
}