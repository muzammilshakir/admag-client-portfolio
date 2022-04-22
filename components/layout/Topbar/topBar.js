import React from 'react'

export default function Topbar() {
    return (
        <header className="site-header header_trans-fixed" data-top="992">
            <div className="container">
                <div className="header-inner">
                    <div className="toggle-menu">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>

                    <div className="site-mobile-logo">
                        <a href="" className="logo">
                            <img src="assets/img/logo.svg" alt="site logo" className="main-logo" />
                            <img src="assets/img/logo.svg" alt="site logo" className="sticky-logo" />
                        </a>
                    </div>

                    <nav className="site-nav">
                        <div className="close-menu">
                            <span>Close</span>
                            <i className="ei ei-icon_close"></i>
                        </div>

                        <div className="site-logo">
                            <a href="" className="logo">
                                <img style={{padding:"10px"}} src="assets/img/logoW.svg" alt="site logo" className="main-logo" />
                                <img src="assets/img/logo.svg" alt="site logo" className="sticky-logo" />
                            </a>
                        </div>

                        <div className="menu-wrapper" data-top="992">
                            <ul className="site-main-menu">
                                {/* <li className="menu-item-has-children">
                                    <a href="index.html">Home</a>
                                    <ul className="sub-menu">
                                        <li><a href="index.html">Home One</a></li>
                                        <li><a href="index-two.html">Home Two</a></li>
                                        <li><a href="index-three.html">Home Three</a></li>
                                        <li><a href="index-four.html">Home Four</a></li>
                                        <li><a href="index-five.html">Home Five</a></li>
                                        <li><a href="index-six.html">Home Six</a></li>
                                        <li><a href="index-seven.html">Home Seven</a></li>
                                        <li><a href="index-eight.html">Home Eight</a></li>
                                        <li><a href="index-nine.html">Home Nine</a></li>
                                        <li><a href="index-ten.html">Home Ten</a></li>
                                        <li><a href="index-eleven.html">Home Eleven</a></li>
                                    </ul>
                                </li> */}
                                {/* <li><a href="about.html">About</a></li>
                                <li className="menu-item-has-children">
                                    <a href="blog.html">Blog</a>
                                    <ul className="sub-menu">
                                        <li><a href="blog.html">Blog Standard</a></li>
                                        <li><a href="blog-grid.html">Blog Grid</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                    </ul>
                                </li> */}
                                {/* <li className="menu-item-has-children">
                                    <a href="#">Pages</a>

                                    <ul className="sub-menu">
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="service.html">Service</a></li>
                                        <li><a href="team.html">Our Team</a></li>
                                        <li><a href="pricing.html">Pricing</a></li>
                                        <li className="menu-item-has-children">
                                            <a href="portfolio.html">Portfolio</a>
                                            <ul className="sub-menu">
                                                <li><a href="portfolio-one.html">Style One</a></li>
                                                <li><a href="portfolio-two.html">Style Two</a></li>
                                                <li><a href="portfolio-three.html">Style Three</a></li>
                                                <li><a href="portfolio-single.html">Portfolio Single</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="faq.html">Faq's</a></li>
                                        <li><a href="error.html">Error 404</a></li>
                                        <li><a href="signin.html">Sing In</a></li>
                                        <li><a href="signup.html">Sing Up</a></li>
                                    </ul>
                                </li> */}

                                <li><a href="contact.html"></a></li>
                            </ul>

                            <div className="nav-right">
                                <a href="signup" className="nav-btn">Sign Up</a>
                            </div>
                            <div className="nav-right">
                                <a href="https://admag-client.vercel.app" className="nav-btn">Sign In</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
