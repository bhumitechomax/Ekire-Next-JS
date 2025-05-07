"use client";
import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        telephone: ''
      });

const [error, setError] = useState([]);
const [success, setSuccess] = useState(null);
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    
        // Example POST request (Uncomment if you have a backend to send this to)
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        const result = await res.json();

        if(res.ok && result.success) {
            Cookies.set('accessToken', result.data.accessToken, { expires: 7 });
            Cookies.set('user', JSON.stringify(result.data.user), { expires: 7 });

            setSuccess(result.message);

            window.location.href = '/';

        }
        else{
            setError(result.message);
        }
        console.log(result);
      };

      useEffect(() => {
  const timer = setTimeout(() => {
  
    setSuccess('');
    setError('');
  }, 5000); // 5000 ms = 5 seconds

  return () => clearTimeout(timer); // cleanup on re-render
}, [ success, error]);

    return (
        <Fragment>
            <div className="sign-in-bg">
                <video autoPlay muted loop className="sign-in-video-bg">
                    <source src="/assets/images/video/two.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="sign-in-overlay"></div>

                <div className="app-wrapper d-block position-relative z-index-1">
                    <div className="main-container">
                        {/* Body main section starts */}
                        <div className="container">
                            <div className="row sign-in-content-bg">
                                <div className="col-lg-6 image-contentbox d-none d-lg-block">
                                    <div className="form-container ">
                                        <div className="signup-content mt-4">
                                            <span>
                                                <img alt="" className="img-fluid " src="../assets/images/logo/1.png" />
                                            </span>
                                        </div>
                                        <div className="signup-bg-img p-5">
                                            <img alt="" className="img-fluid" src="/assets/images/New/signup.svg" width={436} height={536} />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-6 form-contentbox">
                                    <div className="form-container">
                                        <form className="app-form rounded-control" onSubmit={handleSubmit}>
                                            {success && <div className="alert alert-success">{success}</div>}
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="mb-5 text-center text-lg-start">
                                                        <h2 className="text-white f-w-600">Create Account</h2>
                                                        <p>Get Started For Free Today!</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="firstName">First Name</label>
                                                        <input className="form-control"  onChange={handleChange} name="firstName" id="firstName" placeholder="Enter Your First name" required type="text" />
                                                        {error.firstName && (
                                                            <div className="text-danger small">{error.firstName[0]}</div>
                                                            )}      
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="lastName">Last Name</label>
                                                        <input className="form-control"  onChange={handleChange} name="lastName" id="lastName" placeholder="Enter Your Last name" required type="text" />
                                                        {error.lastName && (
                                                            <div className="text-danger small">{error.lastName[0]}</div>
                                                            )}
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="email">Email</label>
                                                        <input className="form-control"   onChange={handleChange} name="email" id="email" placeholder="Enter Your Email" required type="email" />
                                                        {error.email && (
                                                            <div className="text-danger small">{error.email[0]}</div>
                                                            )}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="password">Password</label>
                                                        <input className="form-control" name="password"  onChange={handleChange} id="password" placeholder="Enter Your Password" required type="password" />
                                                        {error.password && (
                                                            <div className="text-danger small">{error.password[0]}</div>
                                                            )}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="telephone">Telephone</label>
                                                        <input className="form-control" name="telephone"  onChange={handleChange} id="telephone" placeholder="Enter Your telephone" required type="tel" />
                                                        {error.telephone && (
                                                            <div className="text-danger small">{error.telephone[0]}</div>
                                                            )}
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-flex justify-content-between gap-3">
                                                        <div className="form-check mb-3 d-flex align-items-center gap-2">
                                                            <input className="form-check-input" id="checkDefault" type="checkbox" defaultValue />
                                                            <label className="form-check-label text-white" htmlFor="checkDefault">
                                                                Accept Terms &amp; Conditions
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="mb-3">
                                                        <button className="btn btn-light-white w-100" type="submit" role="button">Sign
                                                            Up</button>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="text-center text-white text-lg-start">
                                                        Already Have A Account? <a className="link-white text-decoration-underline" href="/login">
                                                            Sign in</a>
                                                    </div>
                                                </div>
                                                <div className="mt-2"> 
                                                    <p className="text-white">Have question? Reach out to our support team, and we'll assist you promptly.</p>
                                                </div>
                                                <Link href="mailto:person@gmail.com" className="text-white">Contact Support</Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Body main section ends */}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default SignUp;
