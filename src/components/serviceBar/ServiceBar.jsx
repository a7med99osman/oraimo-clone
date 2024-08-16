// ICONS
import { TbTruckDelivery } from "react-icons/tb";
import { IoCashOutline } from "react-icons/io5";
import { LuWrench } from "react-icons/lu";
// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import required modules
import { Navigation, Pagination , Autoplay  } from 'swiper/modules';
// CONTEXT
import {IsMobileContext} from '../../utils/IsMobileContext'
import { useContext } from 'react';


const ServiceBar = () => {
    const {isMobile} = useContext(IsMobileContext)
    return (
        <>
        {!isMobile ? (<section className="serviceBar">
            <div className="service">
                <TbTruckDelivery className="serviceIcon" />
                <h4>Fast Free Shipping over EGP500</h4>
            </div>
            <div className="service">
                <IoCashOutline className="serviceIcon"  />
                <h4>Cash on Delivery</h4>
            </div>
            <div className="service">
                <LuWrench className="serviceIcon" />
                <h4>Hassle-Free Warranty</h4>
            </div>
        </section>) 
        // FOR MOBILE SHOW SWIPER
        :(
                    <Swiper className="serviceSwiper"
                        modules={[Navigation, Pagination , Autoplay ]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{ delay: 2000 }}
                        loop ={true}
                        >
                            <SwiperSlide className="seriveSwiperSlide">
                                    <div className="service">
                                        <TbTruckDelivery className="serviceIcon" />
                                        <h4>Fast Free Shipping over EGP500</h4>
                                    </div>
                            </SwiperSlide >
                            <SwiperSlide className="seriveSwiperSlide">
                                    <div className="service">
                                        <IoCashOutline className="serviceIcon" />
                                        <h4>Cash on Delivery</h4>
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="seriveSwiperSlide">
                                    <div className="service">
                                        <LuWrench className="serviceIcon" />
                                        <h4>Hassle-Free Warranty</h4>
                                    </div>
                            </SwiperSlide>
                    </Swiper>
                    )
        
        
        
        }
        </>
    )
}

export default ServiceBar