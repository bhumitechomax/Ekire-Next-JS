"use client";
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [loading , setLoading] = useState(true);
  //   const [success, setSuccess] = useState(null);
  //   const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const user = Cookies.get('user');
    const accessToken = Cookies.get('accessToken');

    if (user && accessToken) {
      setIsLoggedIn(true);
      setLoading(false);
    } else {
      router.push('/login'); // Redirect to login if not logged in
      
    }
  }, [router]);




  useEffect(() => {
    // Fetch user from localStorage
    const userData = Cookies.get("user");
    if (userData) {
      const user = JSON.parse(userData);
      setUserName(`${user.firstName} ${user.lastName}`);
      setUserEmail(user.email);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/logout`, {
        method: "GET", // Confirm your backend accepts GET for logout
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      });

      const contentType = res.headers.get("content-type");

      let result = {};
      if (contentType && contentType.includes("application/json")) {
        result = await res.json();
      } else {
        const text = await res.text();
        console.warn("Received non-JSON response:", text);
        throw new Error("Unexpected response from server.");
      }

      if (res.ok && result.success) {
        // Clear cookies
        Cookies.remove("accessToken");
        Cookies.remove("user");
        Cookies.remove("email");

        router.push("/login");
      } else {
        alert(result.message || "Logout failed, please try again.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Logout failed. Check console for details.");
    }
  };

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Fragment>
        <header className="header-main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 col-sm-4 d-flex align-items-center header-left p-0">
                <span className="header-toggle me-3">
                  <i className="iconoir-view-grid" />
                </span>
              </div>
              <div className="col-6 col-sm-8 d-flex align-items-center justify-content-end header-right p-0">
                <ul className="d-flex align-items-center">
                  <li className="header-language">
                    <div className="flex-shrink-0 dropdown" id="lang_selector">
                      <a
                        aria-expanded="false"
                        className="d-block head-icon ps-0"
                        data-bs-toggle="dropdown"
                        href="#"
                      >
                        <div className="lang-flag lang-en ">
                          <span className="flag rounded-circle overflow-hidden">
                            <i />
                          </span>
                        </div>
                      </a>
                      <ul className="dropdown-menu language-dropdown header-card border-0">
                        <li
                          className="lang lang-en selected dropdown-item p-2"
                          data-bs-placement="top"
                          data-bs-toggle="tooltip"
                          title="US"
                        >
                          <span className="d-flex align-items-center">
                            <i className="flag-icon flag-icon-usa flag-icon-squared b-r-10 f-s-22" />
                            <span className="ps-2">English</span>
                          </span>
                        </li>
                        <li
                          className="lang lang-pt dropdown-item p-2"
                          data-bs-title="tooltip"
                          data-bs-placement="top"
                          title="FR"
                        >
                          <span className="d-flex align-items-center">
                            <i className="flag-icon flag-icon-fra flag-icon-squared b-r-10 f-s-22" />
                            <span className="ps-2">Française </span>
                          </span>
                        </li>
                        <li
                          className="lang lang-es dropdown-item p-2"
                          data-bs-title="tooltip"
                          data-bs-placement="top"
                          title="UK"
                        >
                          <span className="d-flex align-items-center">
                            <i className="flag-icon flag-icon-gbr flag-icon-squared b-r-10 f-s-22" />
                            <span className="ps-2">English</span>
                          </span>
                        </li>
                        <li
                          className="lang lang-es dropdown-item p-2"
                          data-bs-title="tooltip"
                          data-bs-placement="top"
                          title="Ru"
                        >
                          <span className="d-flex align-items-center">
                            <i className="flag-icon flag-icon-rus flag-icon-squared b-r-10 f-s-22" />
                            <span className="ps-2">Русская</span>
                          </span>
                        </li>
                        <li
                          className="lang lang-es dropdown-item p-2"
                          data-bs-title="tooltip"
                          data-bs-placement="top"
                          title="IT"
                        >
                          <span className="d-flex align-items-center">
                            <i className="flag-icon flag-icon-ita flag-icon-squared b-r-10 f-s-22" />
                            <span className="ps-2">française</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="header-dark">
                    <div className="sun-logo head-icon">
                      <i className="iconoir-sun-light"></i>
                    </div>
                    <div className="moon-logo head-icon">
                      <i className="iconoir-half-moon"></i>
                    </div>
                  </li>
                  <li className="header-notification">
                    <a
                      aria-controls="notificationcanvasRight"
                      className="d-block head-icon position-relative"
                      data-bs-target="#notificationcanvasRight"
                      data-bs-toggle="offcanvas"
                      href="#"
                      role="button"
                    >
                      <i className="iconoir-bell" />
                      <span className="position-absolute translate-middle p-1 bg-success border border-light rounded-circle animate__animated animate__fadeIn animate__infinite animate__slower" />
                    </a>
                    <div
                      aria-labelledby="notificationcanvasRightLabel"
                      className="offcanvas offcanvas-end header-notification-canvas"
                      id="notificationcanvasRight"
                      tabIndex={-1}
                    >
                      <div className="offcanvas-header">
                        <h5
                          className="offcanvas-title"
                          id="notificationcanvasRightLabel"
                        >
                          Notification
                        </h5>
                        <button
                          aria-label="Close"
                          className="btn-close"
                          data-bs-dismiss="offcanvas"
                          type="button"
                        />
                      </div>
                      <div className="offcanvas-body notification-offcanvas-body app-scroll p-0">
                        <div className="head-container notification-head-container">
                          <div className="notification-message head-box">
                            <div className="message-images">
                              <span className="bg-secondary h-35 w-35 d-flex-center b-r-10 position-relative">
                                <Image
                                  alt="avtar"
                                  className="img-fluid b-r-10"
                                  src="/assets/images/ai_avtar/6.jpg"
                                  width={35}
                                  height={35}
                                />
                                <span className="position-absolute bottom-30 end-0 p-1 bg-secondary border border-light rounded-circle notification-avtar" />
                              </span>
                            </div>
                            <div className="message-content-box flex-grow-1 ps-2">
                              <a
                                className="f-s-15 text-secondary mb-0"
                                href="#"
                                target="_blank"
                              >
                                <span className="f-w-500 text-secondary">
                                  Gene Hart
                                </span>{" "}
                                wants to edit{" "}
                                <span className="f-w-500 text-secondary">
                                  Report.doc
                                </span>
                              </a>
                              <div>
                                <a
                                  className="d-inline-block f-w-500 text-success me-1"
                                  href="#"
                                >
                                  Approve
                                </a>
                                <a
                                  className="d-inline-block f-w-500 text-danger"
                                  href="#"
                                >
                                  Deny
                                </a>
                              </div>
                              <span className="badge text-light-primary mt-2">
                                {" "}
                                sep 23{" "}
                              </span>
                            </div>
                            <div className="align-self-start text-end">
                              <i className="iconoir-xmark close-btn" />
                            </div>
                          </div>
                          <div className="notification-message head-box">
                            <div className="message-images">
                              <span className="bg-light-dark h-35 w-35 d-flex-center b-r-10 position-relative">
                                <i className="ph-duotone  ph-truck f-s-18" />
                              </span>
                            </div>
                            <div className="message-content-box flex-grow-1 ps-2">
                              <a
                                className="f-s-15 text-secondary mb-0"
                                href="#"
                                target="_blank"
                              >
                                Hey
                                <span className="f-w-500 text-secondary">
                                  Emery McKenzie
                                </span>
                                , get ready: Your order from{" "}
                                <span className="f-w-500 text-secondary">
                                  @Shopper.com
                                </span>
                                is out for delivery today!
                              </a>
                              <span className="badge text-light-info mt-2">
                                {" "}
                                sep 23{" "}
                              </span>
                            </div>
                            <div className="align-self-start text-end">
                              <i className="iconoir-xmark close-btn" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="header-profile">
                    <a
                      aria-controls="profilecanvasRight"
                      className="d-block head-icon"
                      data-bs-target="#profilecanvasRight"
                      data-bs-toggle="offcanvas"
                      href="#"
                      role="button"
                    >
                      <Image
                        alt="avtar"
                        className="b-r-50 h-35 w-35 bg-dark"
                        src="/assets/images/avtar/woman.jpg"
                        width={35}
                        height={35}
                      />
                    </a>
                    <div
                      aria-labelledby="profilecanvasRight"
                      className="offcanvas offcanvas-end header-profile-canvas"
                      id="profilecanvasRight"
                      tabIndex={-1}
                    >
                      <div className="offcanvas-body app-scroll">
                        <ul>
                          <li className="d-flex gap-3 mb-3">
                            <div className="d-flex-center">
                              <span className="h-45 w-45 d-flex-center b-r-10 position-relative">
                                <Image
                                  alt=""
                                  className="img-fluid b-r-10"
                                  src="/assets/images/avtar/woman.jpg"
                                  width={35}
                                  height={35}
                                />
                              </span>
                            </div>
                            <div className="text-center mt-2">
                              <h6 className="mb-0">
                                {" "}
                                {userName ? userName : "Guest"}{" "}
                                <Image
                                  alt="instagram-check-mark"
                                  className="w-20 h-20"
                                  src="/assets/images/profile-app/01.png"
                                  width={20}
                                  height={20}
                                />
                              </h6>

                              <p className="f-s-12 mb-0 text-secondary">
                                {userEmail ? userEmail : "guest@gmail.com"}
                              </p>
                            </div>
                          </li>
                          <li>
                            <Link className="f-w-500" href="/account">
                              <i className="iconoir-user-love pe-1 f-s-20" />{" "}
                              Profile Details
                            </Link>
                          </li>
                          <li>
                            <Link className="f-w-500" href="/account">
                              <i className="iconoir-settings pe-1 f-s-20" />{" "}
                              Settings
                            </Link>
                          </li>
                          <li className="app-divider-v dotted py-1" />

                          <li>
                            <div className="d-flex align-items-center justify-content-between">
                              <a className="f-w-500" href="#">
                                <i className="iconoir-bell-notification pe-1 f-s-20" />
                                Notification
                              </a>
                              <div className="flex-shrink-0">
                                <div className="form-check form-switch">
                                  <input
                                    defaultChecked
                                    className="form-check-input form-check-primary"
                                    id="basicSwitch"
                                    type="checkbox"
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="app-divider-v dotted py-1" />
                          <li>
                            <a className="f-w-500" href="/help" target="_blank">
                              <i className="iconoir-help-circle pe-1 f-s-20" />{" "}
                              Help
                            </a>
                          </li>
                          <li>
                            <a className="f-w-500" href="#" target="_blank">
                              <i className="iconoir-dollar pe-1 f-s-20" />
                              Pricing
                            </a>
                          </li>
                          <li>
                            <a
                              className="mb-0 text-secondary f-w-500"
                              href="/signup"
                              target="_blank"
                            >
                              <i className="iconoir-plus pe-1 f-s-20" /> Add
                              account
                            </a>
                          </li>
                          <li>
                            <a
                              className="mb-0 btn btn-light-danger btn-sm justify-content-center"
                              onClick={handleLogout}
                              role="button"
                            >
                              <i className="ph-duotone ph-sign-out pe-1 f-s-20" />{" "}
                              Log Out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </Fragment>
    </>
  );
};

export default Header;
