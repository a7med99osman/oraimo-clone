import FooterSwiper from "../footerSwiper/FooterSwiper";
import Headline from '../../components/headline/Headline'
import { TbBellRinging } from "react-icons/tb";

import { FaFacebook } from "react-icons/fa";
const OraimoEgypt = () => {

    return (
        <>
        <section className="oraimoEgypt">
            <div className="title">
                <FaFacebook className="fcIcon" />
                <h3>
                    @oraimoEgypt
                </h3>
            </div>
            <div className="followUs">
                <button>Follow us</button>
                <p>Are you an <span>explorer</span> at heart, always seeking new experiences? Join us at <span>oraimo</span> as we embark on exciting journeys together. Share your incredible moments with <span>oraimo</span>  by posting them on Facebook or Instagram using the hashtag <span>#oraimoegypt</span> and tagging <span>@oraimoegypt</span>. By doing so, you stand a chance to receive a special gift from us. Let's <span>Keep Exploring!</span>  #oraimo #oclubEG</p>
            </div>
        </section>
            <FooterSwiper />
            <Headline title={"NEWSLETTER"} />
            <div className="input">
                <input placeholder="Enter Your Email Address" /> 
                <button><TbBellRinging className="ring" /></button>
            </div>
                <h3 style={{textAlign : "center" , marginTop : "30px" , fontWeight : "400"}}>Get the Latest oraimo News and Giveaways</h3>
        </>
    )
}

export default OraimoEgypt