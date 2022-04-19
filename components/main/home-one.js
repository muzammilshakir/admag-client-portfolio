import React from 'react'

export default function HomeOne() {
    return (
        <div>
        <a href="#main_content" data-type="section-switch" className="return-to-top">
          <i className="fa fa-chevron-up" />
        </a>
        <div className="page-loader">
          <div className="loader">
            {/* Loader */}
            <div className="blobs">
              <div className="blob-center" />
              <div className="blob" />
              <div className="blob" />
              <div className="blob" />
              <div className="blob" />
              <div className="blob" />
              <div className="blob" />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
                  <feColorMatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>{/* /.page-loader */}
        <div id="main_content">
       
          <section className="banner banner-one">
            <div className="circle-shape" data-parallax="{&quot;y&quot; : 230}"><img src="media/banner/circle-shape.png" alt="circle" /></div>
            <div className="container">
              <div className="banner-content-wrap">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="banner-content">
                      <h1 className="banner-title wow pixFadeUp" data-wow-delay="0.3s">
                        Saas <span>Software <br />
                          Landing</span> is the<br />
                        Best Ever
                      </h1>
                      <p className="description wow pixFadeUp" data-wow-delay="0.5s">
                        Why I say old chap that is spiffing bits and bobs chimney<br />
                        pot cracking goal bamboozled.!
                      </p>
                      <a href="#" className="pxs-btn banner-btn wow pixFadeUp" data-wow-delay="0.6s">Get Started</a>
                    </div>{/* /.banner-content */}
                  </div>{/* /.col-lg-6 */}
                  <div className="col-lg-6">
                    <div className="promo-mockup wow pixFadeLeft">
                      <img src="media/newImages/saas-1.png" alt="mpckup" />
                    </div>{/* /.promo-mockup */}
                  </div>{/* /.col-lg-6 */}
                </div>{/* /.row */}
              </div>{/* /.banner-content-wrap */}
            </div>{/* /.container */}
            <div className="bg-shape">
              <img src="media/banner/shape-bg.png" alt="" />
            </div>
          </section>{/* /.banner banner-one */}
          {/*===========================*/}
          {/*=         Feature         =*/}
          {/*===========================*/}
          <section className="featured">
            <div className="container">
              <div className="section-title text-center wow pixFade">
                <h3 className="sub-title">Working Process</h3>
                <h2 className="title">The only app you will need</h2>
              </div>{/* /.section-title */}
              <div className="row">
                <div className="col-md-4">
                  <div className="saaspik-icon-box-wrapper style-one wow pixFadeLeft" data-wow-delay="0.3s">
                    <div className="saaspik-icon-box-icon">
                      <img src="media/newImages/saas-2-1.png" alt="" />
                    </div>
                    <div className="pixsass-icon-box-content">
                      <h3 className="pixsass-icon-box-title"><a href="#">New sharing made for<br /> people</a></h3>
                    </div>
                  </div>{/* /.pixsass-box style-one */}
                </div>{/* /.col-md-4 */}
                <div className="col-md-4">
                  <div className="saaspik-icon-box-wrapper style-one wow pixFadeLeft" data-wow-delay="0.5s">
                    <div className="saaspik-icon-box-icon">
                      <img src="media/newImages/saas-2-2.png" alt="" />
                    </div>
                    <div className="pixsass-icon-box-content">
                      <h3 className="pixsass-icon-box-title"><a href="#">One integrated solution <br />Manage</a></h3>
                    </div>
                  </div>{/* /.pixsass-box style-one */}
                </div>{/* /.col-md-4 */}
                <div className="col-md-4">
                  <div className="saaspik-icon-box-wrapper style-one wow pixFadeLeft" data-wow-delay="0.7s">
                    <div className="saaspik-icon-box-icon">
                      <img src="media/newImages/saas-2-3.png" alt="" />
                    </div>
                    <div className="pixsass-icon-box-content">
                      <h3 className="pixsass-icon-box-title"><a href="#">Thousand of features and <br />Custom option.</a></h3>
                    </div>
                  </div>{/* /.pixsass-box style-one */}
                </div>{/* /.col-md-4 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </section>{/* /.featured */}
          {/*=================================*/}
          {/*=         Editor Design         =*/}
          {/*=================================*/}
          <section className="editor-design">
            <div className="container">
              <div className="row">
                <div className="editure-feature-image wow pixFadeRight">
                  <div className="image-one" data-parallax="{&quot;x&quot; : 30}">
                    <img src="media/newImages/saas-3-1.png" className="wow pixFadeRight" data-wow-delay="0.3s" alt="feature-image" />
                  </div>
                  <div className="image-two">
                    <div className="image-two-inner" data-parallax="{&quot;x&quot; : -30}">
                      <img src="media/newImages/saas-3-2.png" className="wow pixFadeLeft" data-wow-delay="0.5s" alt="feature-image" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-6">
                  <div className="editor-content">
                    <div className="section-title style-two">
                      <h2 className="title wow pixFadeUp" data-wow-delay="0.3s">
                        An editor designed<br />
                        for contracts.
                      </h2>
                      <p className="wow pixFadeUp" data-wow-delay="0.5s">
                        Having attractive showcase has never<br />
                        been easier
                      </p>
                    </div>
                    <div className="description wow pixFadeUp" data-wow-delay="0.7s">
                      <p>
                        The bee's knees off his nut cack it's all gone to pot tinkety tonk old fruit blow off, tosser codswallop I chinwag. Brilliant bobby haggle James Bond tickety-boo horse play is spend a penny gutted mate absolutely.!
                      </p>
                      <a href="#" className="pix-btn wow pixFadeUp" data-wow-delay="0.9s">Discover More</a>
                    </div>
                  </div>{/* /.editor-content */}
                </div>{/* /.col-lg-6 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
            <div className="shape-bg">
              <img src="media/background/shape_bg.png" className="wow fadeInLeft" alt="shape-bg" />
            </div>
          </section>{/* /.editor-design */}
          {/*===================================*/}
          {/*=         Genera Informes         =*/}
          {/*===================================*/}
          <section className="genera-informes">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 pix-order-one">
                  <div className="section-title style-two">
                    <h2 className="title wow pixFadeUp">
                      Genera informes <br />completos con un solo
                    </h2>
                    <p className="wow pixFadeUp" data-wow-delay="0.3s">
                      Burke blow off arse gutted mate what a plonker cup<br /> of tea fantastic get stuffed mate.!
                    </p>
                  </div>{/* /.section-title style-two */}
                  <ul className="list-items wow pixFadeUp" data-wow-delay="0.4s">
                    <li>Quick Access</li>
                    <li>Easily Manage</li>
                    <li>7/24h Support</li>
                  </ul>
                  <a href="#" className="pix-btn btn-outline wow pixFadeUp" data-wow-delay="0.5s">Discover More</a>
                </div>{/* /.col-lg-6 */}
                <div className="informes-feature-image">
                  <div className="image-one" data-parallax="{&quot;y&quot; : 20}">
                    <img src="media/newImages/saas-4-1.png" className="wow pixFadeDown" alt="informes" />
                  </div>
                  <div className="image-two" data-parallax="{&quot;y&quot; : -20}">
                    <img src="media/newImages/saas-4-2.png" className=" mw-none wow pixFadeDown" data-wow-delay="0.3s" alt="informes" />
                  </div>
                </div>
              </div>{/* /.row */}
            </div>{/* /.container */}
            <div className="shape-bg">
              <img src="media/background/shape.png" className="wow fadeInRight" alt="shape-bg" />
            </div>
          </section>{/* /.genera-informes */}
          {/*=================================*/}
          {/*=         Revolutionize         =*/}
          {/*=================================*/}
          <section className="revolutionize">
            <div className="bg-angle" />
            <div className="container">
              <div className="section-title dark-title text-center">
                <h3 className="sub-title wow pixFadeUp">Updated Screen</h3>
                <h2 className="title wow pixFadeUp" data-wow-delay="0.3s">
                  Revolutionize your online<br />
                  business today
                </h2>
              </div>{/* /.section-title dark-title */}
              <div id="pix-tabs" className="wow pixFadeUp" data-wow-delay="0.5s">
                <ul id="pix-tabs-nav">
                  <li><a href="#tab1">Quick Access </a></li>
                  <li><a href="#tab2">Easily Manage </a></li>
                  <li><a href="#tab3">Data Transfer </a></li>
                  <li><a href="#tab4">7/24h Support</a></li>
                </ul> {/* tabs-nav */}
                <div id="pix-tabs-content">
                  <div id="tab1" className="content">
                    <img src="media/newImages/saas-5.jpg" alt="revolutionize" />
                    <div className="shape-shadow" />
                  </div>
                  <div id="tab2" className="content">
                    <img src="media/newImages/saas-5.jpg" alt="revolutionize" />
                    <div className="shape-shadow" />
                  </div>
                  <div id="tab3" className="content">
                    <img src="media/newImages/saas-5.jpg" alt="revolutionize" />
                    <div className="shape-shadow" />
                  </div>
                  <div id="tab4" className="content">
                    <img src="media/newImages/saas-5.jpg" alt="revolutionize" />
                    <div className="shape-shadow" />
                  </div>
                </div> {/* tabs-content */}
              </div> {/* Tabs */}
            </div>{/* /.container */}
          </section>{/* /.revolutionize */}
          {/*===========================*/}
          {/*=         Service         =*/}
          {/*===========================*/}
         
          <section className="testimonials swiper-init">
            <div className="container">
              <div className="section-title text-center">
                <h3 className="sub-title wow pixFadeUp">Testiimonial</h3>
                <h2 className="title wow pixFadeUp" data-wow-delay="0.3s">What our client say about us</h2>
              </div>{/* /.section-title */}
              <div className="testimonial-wrapper wow pixFadeUp" data-wow-delay="0.5s">
                <div className="swiper-container" id="testimonial" data-speed={700} data-autoplay={5000}>
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial">
                        <div className="single-bio-thumb">
                          <img src="media/testimonial/1.jpg" alt="testimonial" />
                        </div>
                        {/* /.single-bio-thumb */}
                        <div className="testimonial-content">
                          <p>Tosser nancy boy super tickety-boo lemon squeezy easy peasy quaint, hunky-dory baking cakes pear shaped butty do one, it's all gone to pot chinwag I cuppa Eaton. Porkies amongst cockup absolutely bladdered cobblers.!</p>
                        </div>
                        {/* /.testimonial-content */}
                        <div className="bio-info">
                          <h3 className="name">Desmond Eagle</h3>
                          <span className="job">Web designer</span>
                        </div>
                        {/* /.bio-info */}
                      </div>
                      {/* /.testimonial */}
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial">
                        <div className="single-bio-thumb">
                          <img src="media/testimonial/1.jpg" alt="testimonial" />
                        </div>
                        {/* /.single-bio-thumb */}
                        <div className="testimonial-content">
                          <p>Tosser nancy boy super tickety-boo lemon squeezy easy peasy quaint, hunky-dory baking cakes pear shaped butty do one, it's all gone to pot chinwag I cuppa Eaton. Porkies amongst cockup absolutely bladdered cobblers.!</p>
                        </div>
                        {/* /.testimonial-content */}
                        <div className="bio-info">
                          <h3 className="name">Desmond Eagle</h3>
                          <span className="job">Web designer</span>
                        </div>
                        {/* /.bio-info */}
                      </div>
                      {/* /.testimonial */}
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial">
                        <div className="single-bio-thumb">
                          <img src="media/testimonial/1.jpg" alt="testimonial" />
                        </div>
                        {/* /.single-bio-thumb */}
                        <div className="testimonial-content">
                          <p>Tosser nancy boy super tickety-boo lemon squeezy easy peasy quaint, hunky-dory baking cakes pear shaped butty do one, it's all gone to pot chinwag I cuppa Eaton. Porkies amongst cockup absolutely bladdered cobblers.!</p>
                        </div>
                        {/* /.testimonial-content */}
                        <div className="bio-info">
                          <h3 className="name">Desmond Eagle</h3>
                          <span className="job">Web designer</span>
                        </div>
                        {/* /.bio-info */}
                      </div>
                      {/* /.testimonial */}
                    </div>
                  </div>{/* /.swiper-wrapper */}
                </div>{/* /.swiper-container */}
                <div className="shape-shadow" />
                <div className="slider-nav wow pixFadeUp" data-wow-delay="0.3s">
                  <div id="slide-prev" className="swiper-button-prev">
                    <i className="ei ei-arrow_left" />
                  </div>
                  <div id="slide-next" className=" swiper-button-next">
                    <i className="ei ei-arrow_right" />
                  </div>
                </div>
              </div>
              {/* /.testimonial-wrapper */}
            </div>
            {/* /.container */}
            <div className="scroll-circle wow pixFadeDown">
              <img src="media/background/circle9.png" data-parallax="{&quot;y&quot; : 250}" alt="circle" />
            </div>
          </section>{/* /.testimonial */}
          {/*===========================*/}
          {/*=         Pricing         =*/}
          {/*===========================*/}
          <section className="pricing">
            {/* z */}
            {/* /.container */}
            <div className="faq-section">
              <div className="container">
                <div className="section-title text-center">
                  <h3 className="sub-title wow pixFadeUp">Frequently ask Question</h3>
                  <h2 className="title wow pixFadeUp" data-wow-delay="0.3s">
                    Want to ask something from us?
                  </h2>
                </div>
                {/* /.section-title */}
                <div className="tabs-wrapper wow pixFadeUp" data-wow-delay="0.4s">
                  
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="design" role="tabpanel" aria-labelledby="design-tab">
                      <div id="accordion" className="faq faq-two pixFade">
                        <div className="card active">
                          <div className="card-header" id="heading100">
                            <h5>
                              <button className="btn btn-link" data-toggle="collapse" data-target="#collapse001" aria-expanded="false" aria-controls="collapse001">
                                How to contact with Customer Service?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse001" className="collapse show" aria-labelledby="heading100" data-parent="#accordion" style={{}}>
                            <div className="card-body">
                              <p>
                                Easy peasy owt to do with me cras I don't want no agro what a load of rubbish starkers absolutely bladdered, old tinkety tonk old fruit so I said the full monty.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="heading200">
                            <h5>
                              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse100" aria-expanded="true" aria-controls="collapse100">
                                How delete my account?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse100" className="collapse" aria-labelledby="heading200" data-parent="#accordion" style={{}}>
                            <div className="card-body">
                              <p>
                                Easy peasy owt to do with me cras I don't want no agro what a load of rubbish starkers absolutely bladdered, old tinkety tonk old fruit so I said the full monty.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="heading300">
                            <h5>
                              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse200" aria-expanded="false" aria-controls="collapse200">
                                Where is the edit optioon on dashboard?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse200" className="collapse" aria-labelledby="heading300" data-parent="#accordion" style={{}}>
                            <div className="card-body">
                              <p>
                                Easy peasy owt to do with me cras I don't want no agro what a load of rubbish starkers absolutely bladdered, old tinkety tonk old fruit so I said the full monty.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="heading400">
                            <h5>
                              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse300" aria-expanded="false" aria-controls="collapse300">
                                Is there any custome pricing system?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse300" className="collapse" aria-labelledby="heading400" data-parent="#accordion" style={{}}>
                            <div className="card-body">
                              <p>
                                Easy peasy owt to do with me cras I don't want no agro what a load of rubbish starkers absolutely bladdered, old tinkety tonk old fruit so I said the full monty.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.tabs-wrapper */}
                {/* <div className="btn-container text-center mt-40 wow pixFadeUp">
                  <a href="#" className="pix-btn btn-outline">Explore Forum</a>
                </div> */}
                {/* /.btn-container text-center */}
              </div>
              {/* /.container */}
            </div>
            {/* /.faq-section */}
            <div className="scroll-circle wow pixFadeLeft">
              <img src="media/background/circle8.png" data-parallax="{&quot;y&quot; : 130}" alt="circle" />
            </div>
          </section>
          {/* /.pricing */}
          {/*==================================*/}
          {/*=         Call To Action         =*/}
          {/*==================================*/}
          <section className="call-to-action">
            <div className="overlay-bg"><img src="media/background/ellipse.png" alt="bg" /></div>
            <div className="container">
              <div className="action-content text-center wow pixFadeUp">
                <h2 className="title">
                  We are optimists who<br />
                  love to work together
                </h2>
                <p>
                  Spiffing good time nice one mush ummm I'm telling down the pub spend<br />
                  a penny only a quid such a fibber tomfoolery, on your bike.
                </p>
                <a href="signup" className="pix-btn btn-light">Free Sign Up</a>
              </div>
              {/* /.action-content */}
            </div>
            {/* /.container */}
            <div className="scroll-circle">
              <img src="media/background/circle13.png" data-parallax="{&quot;y&quot; : -130}" alt="circle" />
            </div>
            {/* /.scroll-circle */}
          </section>
          {/* /.call-to-action */}
          {/*=========================*/}
          {/*=        Footer         =*/}
          {/*=========================*/}
          <footer id="footer">
            <div className="container">
              
              <div className="site-info">
                <div className="copyright">
                  <p>© 2020 All Rights Reserved Design by <a href="http://www.pixelsigns.art" target="_blank">PixelSigns</a></p>
                </div>
                <ul className="site-info-menu">
                  <li><a href="#">Privacy &amp; Policy.</a></li>
                  <li><a href="#">Faq.</a></li>
                  <li><a href="#">Terms.</a></li>
                </ul>
              </div>{/* /.site-info */}
            </div>{/* /.container */}
          </footer>{/* /#footer */}
        </div>{/* /#site */}
        {/* Dependency Scripts */}
        {/* Site Scripts */}
      </div>
    )
}
