import React from 'react'
import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <>
      {/* <!-- Start Navbar --> */}
      <div className="header-position">
        <div className="header">
          <div className="container">
            <div className="header-top-wrap">
              <div className="header-content">
                <p>Learn the latest trends indrive business innovation with the <span>Oxford Fintech
                  Programe</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="dropdown">
            <a href="Educational_web.html"><button className="dropbtn">Home <i className="fa fa-angle-down"></i></button></a>
            <div className="dropdown-content">
              <a href="#">Main demo</a>
              <a href="#">Course hub</a>
              <a href="#">Distant learning</a>
              <a href="#">Kindergarten</a>
              <a href="#">Language</a>
              <a href="#">University</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Pages <i className="fa fa-angle-down"></i></button>
            <div className="dropdown-content">
              <a href="#">About us</a>
              <a href="#">Team</a>
              <a href="#">Team single</a>
              <a href="#">Event</a>
              <a href="#">Faq's</a>
              <a href="#">404 Page</a>
              <a href="#">Login register</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Courses <i className="fa fa-angle-down"></i></button>
            <div className="dropdown-content">
              <a href="#">Course grid</a>
              <a href="#">Course list</a>
              <a href="#">Course details</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Blog <i className="fa fa-angle-down"></i></button>
            <div className="dropdown-content">
              <a href="#">Blog</a>
              <a href="#">Blog list</a>
              <a href="#">Blog details</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="Contact-Education-web.html"><button className="dropbtn">Contact</button></a>
          </div>
          <div className="searchbar">
            <input type="text" placeholder="Search Courses"
              style={{ padding: "15px", borderRadius: "5px", backgroundColor: "#F3F3F3", border: "none", fontSize: "16px" }} />
            <i style={{ fontSize: "16px", marginLeft: "-2rem", color: "#020202" }} className="fa icon-hover">&#xf002;</i>
            <div className="butt">
              <a style={{ color: "#2F3034", fontFamily: "sans-serif" }} href="#"><i className="fa fa-user"
                style={{ marginRight: "-0.9rem" }}></i> Login &nbsp;/&nbsp;Register</a>
              <a style={{ color: "#2F3034", fontFamily: "sans-serif" }} href="#"><i
                className="fa-solid fa-cart-shopping"></i></a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Navbar --> */}
    </>
  )
}

export default Header