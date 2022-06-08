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
                            <img src="assets/img/logoW.svg" alt="site logo" className="main-logo" />
                            <img src="assets/img/logo.svg" alt="site logo" className="sticky-logo" />
                        </a>
                    </div>

                    <nav className="site-nav">
                        <div className="close-menu">
                            {/* <span>Close</span> */}
                            <i className="ei ei-icon_close"></i>
                        </div>

                        <div className="site-logo">
                            <a href="" className="logo">
                                <img style={{ padding: "10px" }} src="assets/img/logoW.svg" alt="site logo" className="main-logo" />
                                <img src="assets/img/logo.svg" alt="site logo" className="sticky-logo" />
                            </a>
                        </div>

                        <div className="menu-wrapper" data-top="992">
                            <ul className="site-main-menu">
                                <li className="menu-item-has-children">
                                    <a href="signup" className="nav-btn">Register</a>
                                </li>
                                <li className="menu-item-has-children">
                                <a href="https://admag-client.vercel.app" className="nav-btn">Login</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
