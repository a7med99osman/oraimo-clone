// React Dom
import {  Link, NavLink } from "react-router-dom"
// React Icons
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
// Context
import { IsMobileContext } from "../../utils/IsMobileContext";
import { useContext, useState } from "react";

import { useSelector } from "react-redux";


const Header = () => {
    const cartProducts = useSelector((state) => {
        return state.Cart.cart
    })
    const {isMobile} = useContext(IsMobileContext)
    const [menuOn , setMenuOn] = useState(false)
    function handleMenu(){
        if (menuOn){
            setMenuOn(false)
        }
        else{
            setMenuOn(true)
        }
    }
    return (
        <div className="Header">
            <div className="logo">
                <Link to={"/"}><img src="https://cdn-static.oraimo.com/img/logo.png" alt="" /></Link>
            </div>
            {!isMobile &&(
                        <div className="nav">
                            <ul>
                                <NavLink to={"/"}>Home</NavLink>
                                <NavLink to={"/about"}>About</NavLink>
                                <NavLink to={"/shop"}>Shop</NavLink>
                                <NavLink to={"/contact"}>Contact</NavLink>
                            </ul>
                        </div>
            )}
            <div className="icons">
                <div  className="icon">
                    <CiHeart style={{color : "white" , width : "30px" , height : "30px"}} />
                    <span>0</span>
                </div>
                <Link to={'/cart'}>
                    <div className="icon">
                        <IoCartOutline style={{color : "white" , width : "30px" , height : "30px"}} />
                        <span>{cartProducts?.length}</span>
                    </div>
                </Link>
                {/* MENU ICONS */}
                    {(isMobile && !menuOn) &&  (
                        <RxHamburgerMenu  onClick={handleMenu}  style={{color : "white" , width : "30px" , height : "30px" , cursor : "pointer"}} />
                    )}
                    {(isMobile && menuOn) &&  (
                        <IoCloseOutline onClick={handleMenu}  style={{color : "white" , width : "30px" , height : "30px" , cursor : "pointer"}} />
                    )}
                {/* ====MENU ICONS==== */}
            </div>
            {isMobile &&(
                <div style={{transform:menuOn? "translateY(0%)" : ""}} className="mobileMenu" >
                        <ul>
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/about"}>About</NavLink>
                            <NavLink to={"/shop"}>Shop</NavLink>
                            <NavLink to={"/contact"}>Contact</NavLink>
                        </ul>
                </div>
            )}
        </div>
    )
}

export default Header