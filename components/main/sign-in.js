import React,{useState} from 'react'
export default function SignIn() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
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
     
     <section className="signin">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="signin-from-wrapper">
                <div className="signin-from-inner">
                  <h2 className="title">Sign In</h2>
                  <p>
                  </p>
                  <form action="#" className="singn-form">
                    <input style={{background:"#eaf7ff",border:"1px solid #80cdfc"}} type="text" placeholder="Email" />
                    <input style={{background:"#eaf7ff",border:"1px solid #80cdfc"}} type="password" placeholder="Password" />
                    {/* <div className="forget-link">
                      <div className="condition">
                        <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" defaultValue="value1" />
                        <label htmlFor="styled-checkbox-1" />
                        <span>Remember Me</span>
                      </div>
                      <a href="#" className="forget">Forget Password</a> 
                    </div> */}
                    <button type="submit" className="pix-btn">Sign In</button>
                    <p>Don’t have any account? <a href="signup">Sign up</a> now.</p>
                  </form>
                </div>
                {/* /.signin-from-inner */}
                <ul className="animate-ball">
                  <li className="ball" />
                  <li className="ball" />
                  <li className="ball" />
                  <li className="ball" />
                  <li className="ball" />
                </ul>
              </div>
              {/* /.signin-from-wrapper */}
            </div>
            {/* /.col-lg-7 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        <div className="signin-banner">
          <img src="media/animated/lock.png" alt="" className="image-one wow pixFadeDown" />
          <img src="media/animated/lock2.png" alt="" className="image-two wow pixFadeUp" />
        </div>
        {/* /.signin-banner */}
      </section>
      {/* /.signin */}
    </div>{/* /#site */}
    {/* Dependency Scripts */}
    {/* Site Scripts */}
  </div>
  )
}
