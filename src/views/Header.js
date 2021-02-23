import React from 'react';
import { NavLink } from "react-router-dom";
import Full_logo from "../images/LOGO/FULL_logo.png";
import WHITE_88 from "../images/LOGO/WHITE_88.png";
import WHITE_88_ONLY from "../images/LOGO/WHITE_88_ONLY.png";
    
const navlinkArray = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About Us",
        path: "/about-us"
    },
    {
        title: "Store Policies",
        path: "/store-policies"
    },
    {
        title: "Weekly Ad",
        path: "/weekly-ad"
    },
    {
        title: "Food Court",
        path: "/food-court"
    },
    {
        title: "Contact Us",
        path: "/contact-us"
    }

]

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn : true
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.displayNavigation = this.displayNavigation.bind(this);
    }
    handleToggle() {
        this.setState({ isToggleOn: !this.state.isToggleOn});
        console.log(this.state.isToggleOn);
        this.displayNavigation();
    }    
    
    displayNavigation() {
        let hamburgerButton = document.querySelector("#nav-toggle-bar");
        let navMenu = document.querySelector(".nav-items-container");
        let overlay = document.querySelector(".overlay");
        if (this.state.isToggleOn) {
            hamburgerButton.classList.add("open");
            navMenu.classList.add("display-nav-for-mobile");
            navMenu.classList.remove("hide-for-mobile");
            overlay.classList.remove("hide-for-mobile");
        } else {
            navMenu.classList.remove("display-nav-for-mobile");
            navMenu.classList.add("hide-for-mobile");
            overlay.classList.add("hide-for-mobile");
            hamburgerButton.classList.remove("open");
        }

    }
    render() {
        const navlinks = navlinkArray.map((navlink, index) => {
            return <NavLink key={index} className="nav-path" to={navlink.path} onClick={this.handleToggle}>{navlink.title}</NavLink>
        })
        return (
            <header className="header">
            <div className="header-menu">
                <a href="/">
                    <span><img id="header-logo" src={WHITE_88_ONLY} alt="88 Marketplace Logo" /></span>
                </a>
                <a className="hide-for-desktop" id="nav-toggle-bar" onClick={this.handleToggle} >
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                </a>
            </div>
                <nav className="nav-items-container hide-for-mobile" onClick={this.handleToggle} >
                    {navlinks}
                </nav>
                <div className="overlay hide-for-mobile" onClick={this.handleToggle}></div>

            </header>
        )
    }
}

export default Header;

// <Navpath className="nav-path" to="/" onClick={this.displayNavigation}>Home</Navpath>
// <Navpath className="nav-path" to="/about-us" onClick={this.displayNavigation}>About Us</Navpath>
// <Navpath className="nav-path" to="/store-policies" onClick={this.displayNavigation}>Store Policies</Navpath>
// <Navpath className="nav-path" to="/weekly-ad" onClick={this.displayNavigation}>Weekly Ad</Navpath>
// <Navpath className="nav-path" to="/food-court" onClick={this.displayNavigation}>Food Court</Navpath>
// <Navpath className="nav-path" to="contact-us" onClick={this.displayNavigation}>Contact Us</Navpath>