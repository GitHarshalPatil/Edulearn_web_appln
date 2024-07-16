import React from 'react'
import '../Styles/Home.css'
import energyImg from '../assets/images/energy.png'
import heroShape1 from '../assets/images/hero-shape1.png'
import studentImg from '../assets/images/student-img.png'
import heroImg from '../assets/images/hero-img.png'
// import 'App.css'

const Home = () => {
    return (
        <>
            {/* <!-- Start 50 50 Grid --> */}
            <div className="g_parent">
                <div className="parent">
                    <div className="row">
                        <div className="col-6">
                            <div className="gridbox">
                                <div className="box">
                                    <p className='on-energy'> <img
                                        src={energyImg} />
                                        Learn From 20,000+ Powerful Courses</p>
                                    <div className="name">
                                        <p> <b>Best platform to Empower Skills</b> <img src="public/images/text-shape2.png"
                                            className="skills-img" /></p>
                                    </div>
                                    <div id="button">
                                        <p><b> Try 7 days Free Trial </b></p>
                                    </div>
                                    <div className="para">
                                        <p><span style={{ color: "#1cb098" }}><b> No credit card required. </b></span>By clicking
                                            ‘Start
                                            a Free Trial’</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="posi">
                            <div className="col-6">
                                <div className="hero-shape-img">
                                    <img src={heroShape1} alt="" />
                                </div>
                                <img src={heroImg} />

                            </div>
                        </div>
                        <div className="student-box">
                            <div> <img src={studentImg} /></div>
                            <div>
                                <h1>100K+</h1>
                                <p> Total Enrolled Students</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End 50 50 grid --> */}

                {/* <!-- Start Top categories --> */}
                <div className="parent-1">
                    <div className="categories">
                        <div className="row">
                            <div className="col-12">
                                <p><b> Top categories</b> <img src="public/images/text-shape2.png"
                                    style={{ position: "absolute", top: "7rem", left: " 43%", width: "45%" }} alt="" /></p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Top categories --> */}

                    {/* <!-- Start categories --> */}
                    <div className="courses">
                        <div className="row">
                            <div className="col-3">

                                <p className="math"><img src="public/images/cat-icon1.png" className="icon-img" />Mathematics </p>

                            </div>
                            <div className="col-3">
                                <p className="idea"><img src="public/images/cat-icon2.png" className="icon-img" /> Idea Generate</p>
                            </div>
                            <div className="col-3">
                                <p className="chem"><img src="public/images/cat-icon3.png" className="icon-img" />Chemistry</p>
                            </div>
                            <div className="col-3">
                                <p className="idea"><img src="public/images/cat-icon4.png" className="icon-img" />Business Analysis</p>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-3">
                                <p className="idea"><img src="public/images/cat-icon5.png" className="icon-img" /> Development</p>
                            </div>
                            <div className="col-3">
                                <p className="math"><img src="public/images/cat-icon6.png" className="icon-img" />Email Marketing</p>
                            </div>
                            <div className="col-3">
                                <p className="idea"><img src="public/images/cat-icon7.png" className="icon-img" />Arestogoy</p>
                            </div>
                            <div className="col-3">
                                <p className="chem"><img src="public/images/cat-icon8.png" className="icon-img" />IT/Technology</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- End categories --> */}

                {/* <!-- Start categoris-2 --> */}
                <div className="categories-2">
                    <div className="row">
                        <div className="col-6">

                            <img src="public/images/offer-1.jpg" width="631px" />
                            <div className="offer-1">
                                <p>Learn together with</p>
                                <h1>For Enterprises!</h1>
                                <p>If you've been researching</p>
                                <p>exactly what skill you want</p>
                                <div className="button-2">
                                    <p><b>Join for Business</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <img src="public/images/offer-2.jpg" width="631px" />
                            <div className="background-ffffff">
                                <p>Get the skill</p>
                                <h1>For Individuals</h1>
                                <p>If you've been researching</p>
                                <p>exactly what skill you want</p>

                                <div className="button-2">
                                    <p><b>Try It For Free Now</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End categoris-2 --> */}


                {/* <!-- Start Popular courses --> */}
                <div className="categories-3">
                    <div>
                        <div className="row">
                            <div className="col-6">
                                <div className="popular">
                                    <p><b> Popular Courses</b></p> <img src="public/images/text-shape2.png" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="navbar-2">
                                    <ul>
                                        <li>Javascript</li>
                                        <li>Python</li>
                                        <li>Web Development</li>
                                        <li>Art & Design</li>
                                        <li>Business</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Popular courses --> */}

                {/* <!-- Start Card --> */}
                <div className="row">
                    <div className="card-box">
                        <div className="card1 cards">
                            <div className="box-content">
                                <img className="box-img" src="public/images/courses-1.jpg" />
                                <div className="card-position">
                                    <div className="beginner">
                                        <p id="beginner-color">Beginner</p>
                                        <i className="fa near-beginer">&#xf017;</i>
                                        <h4 style={{ color: "#B4B4B4" }}>2h 30m</h4>
                                        <p style={{ marginLeft: "2.4rem" }}>Free</p>
                                    </div>
                                    <a>Getting Started with the Linux Command Line</a>
                                    <div className="star">
                                        <p>
                                            <span>By</span> <span>Andrew Parker</span>
                                        </p>
                                        <i id="black-star" className="fa">&#xf006;&#xf006;&#xf006;</i>
                                        <i style={{ fontSize: "16px", marginLeft: "-1rem" }} className="fa">
                                            &#xf006;&#xf006;<span>(4.5)</span>
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card1 cards">
                            <div className="box-content">
                                <img className="box-img" src="public/images/courses-2.jpg" />
                                <div className="card-position">
                                    <div className="beginner">
                                        <p id="beginner-color">Beginner</p>
                                        <i className="fa near-beginer">&#xf017;</i>
                                        <h4 style={{ color: "#B4B4B4" }}>2h 30m</h4>
                                        <p style={{ marginLeft: "2.4rem" }}>Free</p>
                                    </div>
                                    <a>Getting Started with the Linux Command Line</a>
                                    <div className="star">
                                        <p><span>By</span> Andrew Parker</p>
                                        <i id="black-star" className="fa">&#xf006;&#xf006;&#xf006;</i>
                                        <i style={{ fontSize: "16px", marginLeft: "-1rem" }} className="fa">
                                            &#xf006;&#xf006;<span>(4.5)</span>
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card1 cards">
                            <div className="box-content">
                                <img className="box-img" src="public/images/courses-3.jpg" />                                <div className="card-position">
                                    <div className="beginner">
                                        <p id="beginner-color">Beginner</p>
                                        <i className="fa near-beginer">&#xf017;</i>
                                        <h4 style={{ color: "#B4B4B4" }}>2h 30m</h4>
                                        <p style={{ marginLeft: "2.4rem" }}>Free</p>
                                    </div>
                                    <a>Getting Started with the Linux Command Line</a>
                                    <div className="star">
                                        <p><span>By</span> Andrew Parker</p>
                                        <i id="black-star" className="fa">&#xf006;&#xf006;&#xf006;</i>
                                        <i style={{ fontSize: "16px", marginLeft: "-1rem" }} className="fa">
                                            &#xf006;&#xf006;<span>(4.5)</span>
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card1 cards">
                            <div className="box-content">
                                <img className="box-img" src="public/images/courses-4.jpg" />                                <div className="card-position">
                                    <div className="beginner">
                                        <p id="beginner-color">Beginner</p>
                                        <i className="fa near-beginer">&#xf017;</i>
                                        <h4 style={{ color: "#B4B4B4" }}>2h 30m</h4>
                                        <p style={{ marginLeft: "2.4rem" }}>Free</p>
                                    </div>
                                    <a>Getting Started with the Linux Command Line</a>
                                    <div className="star">
                                        <p><span>By</span> Andrew Parker</p>
                                        <i id="black-star" className="fa">&#xf006;&#xf006;&#xf006;</i>
                                        <i style={{ fontSize: "16px", marginLeft: "-1rem" }} className="fa">
                                            &#xf006;&#xf006;<span>(4.5)</span>
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card1 cards">
                            <div className="box-content">
                                <img className="box-img" src="public/images/courses-5.jpg" />                                <div className="card-position">
                                    <div className="beginner">
                                        <p id="beginner-color">Beginner</p>
                                        <i className="fa near-beginer">&#xf017;</i>
                                        <h4 style={{ color: "#B4B4B4" }}>2h 30m</h4>
                                        <p style={{ marginLeft: "2.4rem" }}>Free</p>
                                    </div>
                                    <a>Getting Started with the Linux Command Line</a>
                                    <div className="star">
                                        <p>
                                            <span>By</span> Andrew Parker
                                            <i id="black-star" className="fa">&#xf006;&#xf006;&#xf006;</i>
                                            <i style={{ fontSize: "16px", marginLeft: "-1rem" }} className="fa">&#xf006;&#xf006;<span>(4.5)</span></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card1 cards">
                            <div className="box-content">
                                <img className="box-img" src="public/images/courses-6.jpg" />                                <div className="card-position">
                                    <div className="beginner">
                                        <p id="beginner-color">Beginner</p>
                                        <i className="fa near-beginer">&#xf017;</i>
                                        <h4 style={{ color: "#B4B4B4" }}>2h 30m</h4>
                                        <p style={{ marginLeft: "2.4rem" }}>Free</p>
                                    </div>
                                    <a>Getting Started with the Linux Command Line</a>
                                    <div className="star">
                                        <p>
                                            <span>By</span> Andrew Parker
                                            <i id="black-star" className="fa">&#xf006;&#xf006;&#xf006;</i>
                                            <i style={{ fontSize: "16px", marginLeft: "-1rem" }} className="fa">&#xf006;&#xf006;<span>(4.5)</span></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card1 cards">
                            <div className="box-content">
                                <img className="box-img" src="public/images/courses-7.jpg" />                                <div className="card-position">
                                    <div className="beginner">
                                        <p id="beginner-color">Beginner</p>
                                        <i className="fa near-beginer">&#xf017;</i>
                                        <h4 style={{ color: "#B4B4B4" }}>2h 30m</h4>
                                        <p style={{ marginLeft: "2.4rem" }}>Free</p>
                                    </div>
                                    <a>Getting Started with the Linux Command Line</a>
                                    <div className="star">
                                        <p>
                                            <span>By</span> Andrew Parker
                                            <i id="black-star" className="fa">&#xf006;&#xf006;&#xf006;</i>
                                            <i style={{ fontSize: "16px", marginLeft: "-1rem" }} className="fa">&#xf006;&#xf006;<span>(4.5)</span></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card1 cards">
                            <div className="box-content">
                                <img className="box-img" src="public/images/courses-8.jpg" />                                <div className="card-position">
                                    <div className="beginner">
                                        <p id="beginner-color">Beginner</p>
                                        <i className="fa near-beginer">&#xf017;</i>
                                        <h4 style={{ color: "#B4B4B4" }}>2h 30m</h4>
                                        <p style={{ marginLeft: "2.4rem" }}>Free</p>
                                    </div>
                                    <a>Getting Started with the Linux Command Line</a>
                                    <div className="star">
                                        <p>
                                            <span>By</span> Andrew Parker
                                            <i id="black-star" className="fa">&#xf006;&#xf006;&#xf006;</i>
                                            <i style={{ fontSize: "16px", marginLeft: "-1rem" }} className="fa">&#xf006;&#xf006;<span>(4.5)</span></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Start Count */}
                <div className="count">
                    <div className="count-content">
                        <div className="count-img">
                            <img className="book-img" src="public/images/counter-1.png" />
                            <p className='count-img-p'>24k+</p>
                            <a>Total Students Enrolled</a>
                        </div>
                        <div className="count-img">
                            <img className="book-img2" src="public/images/counter-2.png" />
                            <p>3M+</p>
                            <a>Total Video Lessons</a>
                        </div>
                        <div className="count-img">
                            <img className="book-img" src="public/images/counter-1.png" />
                            <p>2.5+</p>
                            <a>Daily Live Classes</a>
                        </div>
                        <div className="count-img">
                            <img className="book-img2" src="public/images/counter-2.png" />
                            <p>75+</p>
                            <a>Total Exam Categories</a>
                        </div>
                    </div>
                </div>
                {/* End count */}


                {/* <!-- Start 50 50 grid Below count content --> */}
                <div className="trusted-grid">
                    <div className="row">
                        <div className="col-6">
                            <div className="trus-content">
                                <p className="trusted-content">The trusted market leader</p>
                                <p className="trusted-content"> in talent transformation</p>
                                <p className="trusted-content">through education</p>
                            </div>
                            <div className="trusted-button">
                                <a>Start Learning Now</a>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="brand-img">
                                <div className="col-1">
                                    <img src="public/images/brand-1.png" width="80px" height="56px" />
                                </div>
                                <div className="col-1">
                                    <img src="public/images/brand-2.png" width="71px" height="62px" />
                                </div>
                                <div className="col-1">
                                    <img src="public/images/brand-3.png" width="65px" height="58px" />
                                </div>
                            </div>
                            <div className="brand-img2">
                                <div className="col-1">
                                    <img src="public/images/brand-4.png" width="54px" height="66px" />
                                </div>
                                <div className="col-1">
                                    <img src="public/images/brand-5.png" width="74px" height="66px" />
                                </div>
                                <div className="col-1">
                                    <img src="public/images/brand-6.png" width="80px" height="64px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End 50 50 grid Below count content --> */}


                {/* <!-- Start Succes Stories --> */}
                <div className="succes-stories">
                    <div className="row">
                        <div className="col-6">
                            <div className="succes-stories-content">
                                <p
                                    className="succ-stories">
                                    Succes Stories</p>
                                <p
                                    className="succ-story-content">
                                    In total, it was a big succes, I would get emails about what a fantastic resource it
                                    was.
                                </p>
                                <p className="succ-story-para">Vergenia radar</p>
                                <div className="succes-stories-icon"><i style={{ fontSize: "16px" }} className="fa">&#xf111;<i
                                    style={{ fontSize: "16px" }} className="fa fafa">&#xf111;<i style={{ fontSize: "16px" }}
                                        className="fa fafa">&#xf111;</i></i></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="succes-stories-img">
                                <img className="succes-img" src="public/images/testi-1.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Succes Stories --> */}

                {/* <!-- Start Latest News --> */}
                <div className="latest">
                    <div className="row">
                        <div className="categories">
                            <div className="row">
                                <div className="col-12">
                                    <p><b> Latest News</b> <img src="public/images/text-shape2.png"
                                        className="latest-news-img" alt="" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Latest News --> */}

                {/* <!-- Start 3 cards --> */}
                <div className="row">
                    <div className="card-box">
                        <div className="card1 cards">
                            <div className="box-content">
                                <img className="three-card-img" src="public/images/blog-1.jpg" />
                                <div className="card-position">
                                    <div className="beginners">
                                        <h4 style={{ color: "#B4B4B4" }}><i style={{ fontSize: "16px" }} className='fas'>&#xf406;</i>Admin
                                            &nbsp;&nbsp;&nbsp;<i style={{ fontSize: "16px" }} className='far'>&#xf073;</i> 09 Jun, 2023
                                        </h4>
                                    </div>
                                    <div className="three-card-center">
                                        <a>How to Make Your UX Design Portfolio Stand Out</a>
                                    </div>
                                    <div className="READ-MORE">
                                        <a href="#">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card1 cards">
                            <div className="box-content">
                                <img className="three-card-img" src="public/images/blog-2.jpg" />
                                <div className="card-position">
                                    <div className="beginners">
                                        <h4 style={{ color: "#B4B4B4" }}><i style={{ fontSize: "16px" }} className='fas'>&#xf406;</i>Admin
                                            &nbsp;&nbsp;&nbsp;<i style={{ fontSize: "16px" }} className='far'>&#xf073;</i> 11 Jun, 2023
                                        </h4>
                                    </div>
                                    <div className="three-card-center">
                                        <a>The Complete Digital Marketing Learning Path</a>
                                    </div>
                                    <div className="READ-MORE">
                                        <a href="#">READ MORE</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card1 cards">
                            <div className="box-content">
                                <img className="three-card-img" src="public/images/blog-3.jpg" />
                                <div className="card-position">
                                    <div className="beginners">
                                        <h4 style={{ color: "#B4B4B4" }}><i style={{ fontSize: "16px" }} className='fas'>&#xf406;</i>Admin
                                            &nbsp;&nbsp;&nbsp;<i style={{ fontSize: "16px" }} className='far'>&#xf073;</i> 11 Jun, 2023
                                        </h4>
                                    </div>
                                    <div className="three-card-center">
                                        <a>How To Start Learn Online Study From Your Home</a>
                                    </div>
                                    <div className="READ-MORE">
                                        <a href="#">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- <div className="three-cards"><div className="cards-setup"><div className="row"><div className="col-10"><div className="cards-img-setup">
                            <div className="box-1" style="background-image: url(blog-1.jpg);"></div>
                            <div className="box-1" style="background-image: url(blog-2.jpg);"></div>
                            <div className="box-1" style="background-image: url(blog-3.jpg);"></div>
                        </div></div></div></div> --> */}
                </div>
                {/* <!-- End 3 cards --> */}

                {/* <!-- Start  --> */}
                <div className="get-subscription">
                    <div className="row">
                        <div className="col-12">
                            <div className="col-4">
                                <div className="subscription-img">
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="subscription-content">
                                    <p>A subscription that's more than just classNamees</p>
                                    <a>Get Subscription</a>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="subscription-img2">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End --> */}


                {/* <!-- Start Footer --> */}
                <div className="footer">
                    <div><br /><br /></div>
                    <div className="row">
                        <div className="middle">
                            <div className="col-3">
                                <img src="public/images/logo-white.png" />
                                <p className="footer-contain">World largest online learning platform. </p>
                                <p className="footer-contain">Download our apps to start learning</p>
                                <i className="fa fa-phone footer-icon"
                                >
                                </i>
                                <p className="footer-contain"> Call us free </p>
                                <p className="footer-no"> +91 458 654 528</p>
                                {/* <!-- <p className="footer-no">+91 458 654 528</p> --> */}
                            </div>
                            <div className="col-3">
                                <div className="links">
                                    <h3>Trending Courses</h3>
                                    <a href="#">Home</a>
                                    <a href="#">Pricing</a>
                                    <a href="#">Compare planes</a>
                                    <a href="#">Contact us</a>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="links">
                                    <h3>Study Material</h3>
                                    <p>Blog</p>
                                    <p>Weekly webinar</p>
                                    <p>Academy</p>
                                    <p>Free Ebooks & checklists</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="links">
                                    <h3>Download Now</h3>
                                    <img src="public/images/app-1.jpg" />
                                    <img src="public/images/app-2.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-last">
                                <p className="copyright">© Copyright 2023 upstudy All rights reserved.</p>
                                <div className="icon">
                                    <i style={{ fontSize: "24px", color: "white" }} className="fa">&#xf09a;</i>
                                    <i style={{ fontSize: "24px", color: "white" }} className="fa">&#xf081;</i>
                                    <i style={{ fontSize: "24px", color: "white" }} className="fa">&#xf0e1;</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Footer --> */}
            </div>
        </>
    )
}

export default Home