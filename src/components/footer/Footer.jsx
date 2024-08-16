import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="footer">
            <div className="socialIcons">
                <h3>FOLLOW US</h3>
                <ul>
                    <li><FaWhatsapp className="icon" /></li>
                    <li><FaInstagram className="icon" /></li>
                    <li><FaFacebook className="icon" /></li>
                    <li><FaYoutube className="icon" /></li>
                    <li><FaTiktok className="icon" /></li>
                </ul>
            </div>
            <div className="footerBar">
                <div className="customerService">
                    <h2>Customer Service:::</h2>
                    <h6>Service Hours</h6>
                    <h3>unday-Thursday 10AM to 5PM</h3>
                    <h6>Customer Serivce</h6>
                    <h3>Phone: 01017566497 / 01271169444</h3>
                    <h3>Whatsapp: 01017566497 / 01271169444</h3>
                    <h3>Email: Care.eg@oraimo.com</h3>
                </div>
                    <ul className="aboutOraimo"> <h2>About oraimo:::</h2>
                        <li>About Us</li>
                        <li>Wher To Buy</li>
                        <li>Contact Us</li>
                        <li>Explorer Points Program</li>
                        <li>O-Club</li>
                    </ul>
                    <ul className="Terms"><h2>Terms:::</h2> 
                        <li>Warranty</li>
                        <li>Shipping & Delivery</li>
                        <li>Return & Refund Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <ul className="getHelp"><h2>Get Help::</h2>
                        <li>Track Order</li>
                        <li>Product Authentication</li>
                    </ul>
                </div>
                <div className="copyRight">
                    <img src="https://cdn-static.oraimo.com/img/logo2.png" alt="" />
                    <h3>© 2013-2024 oraimo Copyright.</h3>
                </div>
        </section>
    )
}

export default Footer