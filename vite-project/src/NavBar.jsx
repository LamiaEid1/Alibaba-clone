import React, { useState, useEffect } from 'react';
import "./NavBar.css";
import logo from "./assets/Alibaba-Logo.png";
import shopImage from "./assets/shopping-cart.png";
import userImage from "./assets/user.png";
import web from "./assets/web.png";
import search from "./assets/211817_search_strong_icon.png";
import category from "./assets/icons8-category-24.png";
import menuIcon from "./assets/icons8-category-24.png";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="static-navbar">
        <div className="navbar-left">
          <h1>Alibaba.com</h1>
          <div className="wrapper">
          
          </div>
        </div>
        <div className="navbar-right">
          <div className="deliver-to">
            <span>Deliver to: US</span>
            <span>
              <img src={web} alt="US Flag" />
              English-USD
            </span>
          </div>
          <ul className="nav-links">
            <li id="shop-img-icon">
              <a href="" title="shopping cart icons">
                <img src={shopImage} alt="Shopping Cart" />
              </a>
            </li>
            <li className="sign-in">
              <img src={userImage} alt="User" className="user-icon" />
              <span>Sign In</span>
            </li>
            <li>
              <button className="sign-up-button">Sign Up</button>
            </li>
          </ul>
          <img
            src={menuIcon}
            alt="Menu"
            className="mobile-menu-icon"
            onClick={toggleMobileMenu}
          />
        </div>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>All categories</li>
          <li>Featured selections</li>
          <li>Trade Assurance</li>
          <li>Sign In</li>
          <li>Sign Up</li>
        </ul>
      </div>

      <nav className={`scroll-navbar ${isScrolled ? "visible" : "hidden"}`}>
        <div className='logo'>
          <img src={logo} alt="Alibaba Logo" className="logo-img" />
        </div>
        <div className='searchdiv'>
          <select name="" id="select">
            <option value="">Products</option>
            <option value="">item 2</option>
          </select>
          <input className='main-search' type="text" placeholder='March Expo' />
          <div className='searchIcon'>
            <img className='searchIcon-img' src={search} alt="" />
          </div>
        </div>
        <div className="navbar-right">
          <div className="deliver-to">
            <span>Deliver to: US</span>
            <span>
              <img src={web} alt="US Flag" />
              English-USD
            </span>
          </div>
          <ul className="nav-links">
            <li id="shop-img-icon">
              <a href="" title="shopping cart icons">
                <img src={shopImage} alt="Shopping Cart" />
              </a>
            </li>
            <li className="sign-in">
              <img src={userImage} alt="User" className="user-icon" />
              <span>Sign In</span>
            </li>
            <li>
              <button className="sign-up-button">Sign Up</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;