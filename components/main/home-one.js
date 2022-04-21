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
                      A one stop solution for all Billboards Advertisement.
                    </h1>
                    <p className="description wow pixFadeUp" data-wow-delay="0.5s">
                      Admag is a one stop solution for all billboards managers and hirers buy giving them online access to manage and schedule their ads from anywhere and at any time.
                    </p>
                  </div>{/* /.banner-content */}
                </div>{/* /.col-lg-6 */}
                <div className="col-lg-6">
                  <div className="promo-mockup wow pixFadeLeft">
                    <img src="media/newImages/billWhite.png" alt="mpckup" />
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
              <h2 className="title">A simple 3-Step process to book any billboard you want to run your ad campaign on</h2>
            </div>{/* /.section-title */}
            <div className="row">
              <div className="col-md-4">
                <div className="saaspik-icon-box-wrapper style-one wow pixFadeLeft" data-wow-delay="0.3s">
                  <div className="saaspik-icon-box-icon">
                    <img src="media/newImages/saas-2-1.png" alt="" />
                  </div>
                  <div className="pixsass-icon-box-content">
                    <h3 className="pixsass-icon-box-title"><a href="#">Just login to Admag </a></h3>
                  </div>
                </div>{/* /.pixsass-box style-one */}
              </div>{/* /.col-md-4 */}
              <div className="col-md-4">
                <div className="saaspik-icon-box-wrapper style-one wow pixFadeLeft" data-wow-delay="0.5s">
                  <div className="saaspik-icon-box-icon">
                    <img src="media/newImages/saas-2-2.png" alt="" />
                  </div>
                  <div className="pixsass-icon-box-content">
                    <h3 className="pixsass-icon-box-title">Scroll, search and select your desired billboard.</h3>
                  </div>
                </div>{/* /.pixsass-box style-one */}
              </div>{/* /.col-md-4 */}
              <div className="col-md-4">
                <div className="saaspik-icon-box-wrapper style-one wow pixFadeLeft" data-wow-delay="0.7s">
                  <div className="saaspik-icon-box-icon">
                    <img src="media/newImages/saas-2-3.png" alt="" />
                  </div>
                  <div className="pixsass-icon-box-content">
                    <h3 className="pixsass-icon-box-title">Schedule your ad and book it</h3>
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
                  <img src="media/newImages/addlistWhite.PNG" style={{borderRadius:"2%"}} className="wow pixFadeRight" data-wow-delay="0.3s" alt="feature-image" />
                </div>
                {/* <div className="image-two">
                  <div className="image-two-inner" data-parallax="{&quot;x&quot; : -30}">
                    <img src="media/newImages/saas-3-2.png" className="wow pixFadeLeft" data-wow-delay="0.5s" alt="feature-image" />
                  </div>
                </div> */}
              </div>
              <div className="col-lg-6 offset-lg-6">
                <div className="editor-content">
                  <div className="section-title style-two">
                    <h2 className="title wow pixFadeUp" data-wow-delay="0.3s">
                      We provide useful analytics that will help to track your performance and activity.
                    </h2>
                  </div>
                  <div className="description wow pixFadeUp" data-wow-delay="0.7s">
                    <p>
                      The user will get to know about real traffic analysis th see roughly how many individuals passed through the billboard.This includes detection of individuals, cars, motebikes, busus and truck in the view of camera installed over the billboard.
                    </p>
                  </div>
                </div>{/* /.editor-content */}
              </div>{/* /.col-lg-6 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
          <div className="shape-bg">
            {/* <img src="media/background/shape_bg.png" className="wow fadeInLeft" alt="shape-bg" /> */}
          </div>
        </section>
        <section className="genera-informes">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pix-order-one">
                <div className="section-title style-two">
                  <h5 className="title wow pixFadeUp">
                    A user centric interface that provides all the relevant information about your previous orders and their statictics.
                  </h5>

                </div>{/* /.section-title style-two */}
                <ul className="list-items wow pixFadeUp" data-wow-delay="0.4s">
                  <li>Quick Access</li>
                  <li>Easily Manage</li>
                  <li>24/7 Support</li>
                </ul>
              </div>{/* /.col-lg-6 */}
              <div className="informes-feature-image">
                <div className="image-one" data-parallax="{&quot;y&quot; : 20}">
                  <img src="media/newImages/addWhite.PNG" style={{borderRadius:"2%"}} className="wow pixFadeDown" alt="informes" />
                </div>
                {/* <div className="image-two" data-parallax="{&quot;y&quot; : -20}">
                  <img src="media/newImages/saas-4-2.png" className=" mw-none wow pixFadeDown" data-wow-delay="0.3s" alt="informes" />
                </div> */}
              </div>
            </div>{/* /.row */}
          </div>{/* /.container */}
          <div className="shape-bg">
            <img src="media/background/shape.png" className="wow fadeInRight" alt="shape-bg" />
          </div>
        </section>
        <section className="testimonials swiper-init" style={{ backgroundColor: "#0b70b3" }}>
          <div className="container">
            <div className="section-title text-center">
              <h2 className="title wow pixFadeUp" data-wow-delay="0.3s" style={{ color: "black" }}>Our Team</h2>
            </div>
            <div className="testimonial-wrapper wow pixFadeUp" data-wow-delay="0.5s">
              <div className="swiper-container" id="testimonial" data-speed={700} data-autoplay={5000}>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial">
                      <div className="single-bio-thumb">
                        <img src="media/testimonial/muz.jpg" alt="testimonial" />
                      </div>
                      <div className="testimonial-content">
                        <p> I am a highly motivated, self driven and a highly ambitious boy who just love the time spent on doing programming related tasks.I am quite meticulous in solving bugs and errors. I am a self learned person and I am really blessed to be in the era of Internet as my learning faculities are not limited to the currently available organic approach of contemporary learning.</p>
                      </div>
                      <div className="bio-info">
                        <h3 className="name">Muzammil Shakir</h3>
                        <span className="job">Full Stack Engineer</span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial">
                      <div className="single-bio-thumb">
                        <img src="media/testimonial/abdu.jpeg" alt="testimonial" />
                      </div>
                      {/* /.single-bio-thumb */}
                      <div className="testimonial-content">
                        <p>I am very upfront person who remains honest in his dealings.I am very keen in active learning I have a special interest in web technology stack.I owe a great deal of gratitude to my alma mater as it provided me the opportunity to become more pressure-resistant, a good problem solver and a better communicator.</p>
                      </div>
                      {/* /.testimonial-content */}
                      <div className="bio-info">
                        <h3 className="name">Abdul Waheed</h3>
                        <span className="job">Full Stack Engineer</span>
                      </div>
                      {/* /.bio-info */}
                    </div>
                    {/* /.testimonial */}
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial">
                      <div className="single-bio-thumb">
                        <img src="media/testimonial/zoh.jpeg" alt="testimonial" />
                      </div>
                      {/* /.single-bio-thumb */}
                      <div className="testimonial-content">
                        <p>I am a very ambitious person who sees himself in a leadership role in the technology domain in the years to come. I am very keen in doing the projrct manamgement related tasks as it allows me the opportunity to interact with diverse people with different skills and backgrounds. Every human has a story to tell and to learn from. </p>
                      </div>
                      {/* /.testimonial-content */}
                      <div className="bio-info">
                        <h3 className="name">Zohaib Khalid</h3>
                        <span className="job">Project Manager</span>
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
        </section>
        <section className="pricing">
          <div className="faq-section">
            <div className="container">
              <div className="section-title text-center">
                <h3 className="sub-title wow pixFadeUp">Frequently ask Question</h3>
                <h2 className="title wow pixFadeUp" data-wow-delay="0.3s">
                  Want to ask something?
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
                              How to sign up for the system?
                            </button>
                          </h5>
                        </div>
                        <div id="collapse001" className="collapse show" aria-labelledby="heading100" data-parent="#accordion" style={{}}>
                          <div className="card-body">
                            <p>
                              On the Home Screen, there is a Free Sign Up button on top right side of screen. Click it and a sign up form will be open.                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="heading200">
                          <h5>
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse100" aria-expanded="true" aria-controls="collapse100">
                              How to book a billboard for advertisement?                            </button>
                          </h5>
                        </div>
                        <div id="collapse100" className="collapse" aria-labelledby="heading200" data-parent="#accordion" style={{}}>
                          <div className="card-body">
                            <p>
                              Login to your account, click View adverstiment on the top right, press Add button. It will open up advertisement booking form. Choose the billboard, upload a picture or video, schedule a time and press enter.                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-circle wow pixFadeLeft">
            {/* <img src="media/background/circle8.png" data-parallax="{&quot;y&quot; : 130}" alt="circle" /> */}
          </div>
        </section>
        <footer id="footer" >
          <div className="container">

            <div className="site-info">
              <div className="copyright">
                <p>© 2022 All Rights Reserved Musketeers Tech&#174;</p>
              </div>

            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
