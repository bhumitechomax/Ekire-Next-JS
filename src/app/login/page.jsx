"use client";
import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { signIn } from 'next-auth/react';



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    console.log(email, password);
    // e.preventDefault();

    // Prepare the form data
    const formData = {
      email,
      password,
    };
    // const handleSubmit = async (e) => {
      e.preventDefault();
     
  
      // const result = await signIn('credentials', {
      //   redirect: false,
      //   email,
      //   password,
      // });
      // console.log(result , "result");
      // if (result.ok) {
      //   router.push('/'); // 🔁 redirect after login
      // } else {
      //   setError('Invalid credentials');
      // }
    // };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(formData);

      const result = await res.json();
      console.log(result);

      if (res.ok && result.success) {
        // Store access token and user data in localStorage
        Cookies.set("accessToken", result.data.accessToken, { expires: 7 }); // expires in 7 days
        Cookies.set("user", JSON.stringify(result.data.user), { expires: 7 });
        Cookies.set("email", result.data.user.email, { expires: 7 });
        setSuccess(result.message || "Login successful!");

        router.push("/");

        // Redirect to home page after successful login
        // window.location.href = '/';
      } else {
        setError(result.message || "Login failed, please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Network error. Please try again.");
    }
  };
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError(null);
        setSuccess(null);
      }, 10000); // Disable after 10 seconds

      return () => clearTimeout(timer); // Clean up the timer if component is unmounted
    }
  }, [error, success]);

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
                        <img
                          alt=""
                          className="img-fluid "
                          src="../assets/images/logo/1.png"
                        />
                      </span>
                    </div>
                    <div className="signup-bg-img p-5">
                      <img
                        alt=""
                        className="img-fluid"
                        src="/assets/images/New/login.svg"
                        width={436}
                        height={536}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 form-contentbox">
                  <div className="form-container">
                    <form
                      className="app-form rounded-control"
                      onSubmit={handleLogin}
                    >
                      {error && (
                        <div className="alert alert-danger">{error}</div>
                      )}
                      {success && (
                        <div className="alert alert-success">{success}</div>
                      )}
                      <div className="row">
                        <div className="col-12">
                          <div className="mb-5 text-center text-lg-start">
                            <h2 className="text-white f-w-600">
                              Welcome To axelit!{" "}
                            </h2>
                            <p>
                              Sign in with your data that you enterd during your
                              registration
                            </p>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="email">
                              Email
                            </label>
                            <input
                              className="form-control"
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              id="email"
                              placeholder="Enter Your email"
                              type="email"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                            <Link
                              className="link-white float-end"
                              href="/forgot_pwd"
                            >
                              Forgot Password ?
                            </Link>
                            <input
                              className="form-control"
                              name="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              id="password"
                              placeholder="Enter Your Password"
                              type="password"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-check mb-3 d-flex align-items-center gap-2">
                            <input
                              className="form-check-input"
                              id="checkDefault"
                              type="checkbox"
                              defaultValue
                            />
                            <label
                              className="form-check-label text-white"
                              htmlFor="checkDefault"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="mb-3">
                            <button
                              className="btn btn-light-white w-100"
                              type="submit"
                              role="button"
                            >
                              Sign In
                            </button>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-center text-white text-lg-start">
                            Don't Have Your Account yet?{" "}
                            <a
                              className="link-white text-decoration-underline"
                              href="/signup "
                            >
                              Sign up
                            </a>
                          </div>
                        </div>
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
export default Login;
