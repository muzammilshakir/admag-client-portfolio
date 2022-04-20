import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import emailjs from '@emailjs/browser';
import axios from 'axios';
export default function SignUp() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [snakMessage, setSnakMessage] = useState('')
    const [code, setCode] = useState(1234)
    const [verifyCode, setverifyCode] = useState(1234)
    const [show, setShow] = useState(false)
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const API_URL = "https://admag-server.herokuapp.com";
    const { vertical, horizontal, open } = state;

    const handleClick = () => {
        setState({ open: true, vertical: 'top', horizontal: 'center', });
        console.log('handnskds')
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            // check if email is already in use
            if (show === false) {
                axios.get(`${API_URL}/api/hirer/`)
                    .then(res => {
                        const exist = res.data.find(user => user.email === email)
                        if (exist !== undefined) {
                            console.log(exist)
                            setSnakMessage('Email already in use')
                            handleClick()
                        }
                        else {
                            var val = Math.floor(1000 + Math.random() * 9000);
                            setCode(val);
                            const data = {
                                name: username,
                                email: email,
                                message: "verification Code",
                                code: val
                            }
                            emailjs.send("service_wk08sb9", "template_7yta6qd", data, "KXYZ9ZykUcU8KiTFN")
                            setShow(true)

                        }
                    })

            }
            else if (show === true && code === parseInt(verifyCode)) {
                axios.post(`${API_URL}/api/hirer`, {
                    email: email,
                    username: username,
                    password: password
                })
                    .then(res => {
                        console.log(res.data)
                        setSnakMessage('Successfully registered')
                        handleClick();
                        window.location.href = "https://admag-client.vercel.app"

                    })
                    .catch(err => {
                        setSnakMessage('Error signing up')
                        handleClick();
                        console.log(err)
                    })

            }
            else {
                setSnakMessage('Verification code is incorrect')
                handleClick()
            }

        }
        else {
            setSnakMessage("Passwords do not match")
            handleClick()
        }
    }



    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message={snakMessage}
                key={vertical + horizontal}
            />
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
                <section className="signin signup">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="signin-from-wrapper">
                                    <div className="signin-from-inner">
                                        <h2 className="title">Sign Up Now!</h2>
                                        <br />
                                        <form className="singn-form" onSubmit={handleSubmit} >
                                            <input style={{ background: "#eaf7ff", border: "1px solid #80cdfc" }} type="text" placeholder="Name" onChange={(e) => setUsername(e.target.value)} required />
                                            <input style={{ background: "#eaf7ff", border: "1px solid #80cdfc" }} type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                                            <input style={{ background: "#eaf7ff", border: "1px solid #80cdfc" }} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />

                                            <input style={{ background: "#eaf7ff", border: "1px solid #80cdfc" }} type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
                                            {show ?
                                                <>
                                                    <input style={{ background: "#eaf7ff", border: "1px solid #80cdfc" }} type="number" placeholder="Code" onChange={(e) => setverifyCode(e.target.value)} required />
                                                    <button className="pix-btn" >Sign Up</button>
                                                </>
                                                :
                                                <button className="pix-btn" >Send Code</button>
                                            }

                                            {/* <p>Already have an account? <a href="signin">Sign in</a> now.</p> */}
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
                            </div>
                        </div>
                    </div>
                    <div className="signin-banner signup-banner">
                        <div className="animate-image-inner">
                            <div className="image-one">
                                <img src="media/newImages/signup-1.png" alt="" className="wow pixFadeLeft" />
                            </div>
                            <div className="image-two">
                                <img src="media/newImages/signup2.png" alt="" className=" wow pixFadeRight" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
