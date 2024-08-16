import Headline from '../../components/headline/Headline'
const HomeGrid = () => {
    return (
        <section className='HomeGrid'>
        <Headline title={"WHY BUY FROM oraimo"} />
        <div className="homeGrid" >
            <div className="innerSection">
                <div className="singlDiv">
                    <img src="https://cdn-img.oraimo.com/2024/01/26/cs-man-l.png" alt="" />
                    <h6>ACCESSIBLE CUSTOMER SERVICE</h6>
                </div>
                <div className="singlDiv">
                    <img src="https://cdn-img.oraimo.com/2024/01/26/cart-care-l.png" alt="" />
                    <h6>NATIONWIDE OFFLINE AFTER-SALES OUTLETS</h6>
                </div>
            </div>
            <div className="innerSection">
                <div className="singlDiv">
                    <img src="https://cdn-img.oraimo.com/2024/01/26/1-year-warranty-l.png" alt="" />
                    <h6>1 YEAR WARRANTY, <br/>ONLY REPLACE NO REPAIR</h6>
                </div>
                <div className="singlDiv">
                    <img src="https://cdn-img.oraimo.com/2024/01/26/free-shipping-l.png" alt="" />
                    <h6>FREE SHIPPING OVER EGP 500 <br/> DOOR TO DOOR DELIVERY</h6>
                </div>
                <div className="singlDiv">
                    <img src="https://cdn-img.oraimo.com/2024/01/26/point-l.png" alt="" />
                    <h6>BUY TO GET ORAIMO EXPLORER POINTS,<br /> EXTRA POINTS FOR MEMBERS</h6>
                </div>
            </div>
            <div className="innerSection">
                    <div className="singlDiv">
                        <img src="https://cdn-img.oraimo.com/2024/01/26/authenticity-&-best-price-l.png" alt="" />
                        <h6>ORAIMO AUTHENTICITY <br/> & BEST PRICE GUARANTEED</h6>
                    </div>
                    <div className="singlDiv">
                        <img src="https://cdn-img.oraimo.com/2024/01/26/o-club-eg-l.png" alt="" />
                        <h6>ESHOP EXCLUSIVE COMMUNITY EVENTS, SCAN <br />TO JOIN O-CLUB EG NOW!</h6>
                    </div>
            </div>
        </div>
        </section>
    )
}

export default HomeGrid