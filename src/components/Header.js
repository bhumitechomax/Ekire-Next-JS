"use client";
import React, { Fragment, useEffect } from "react";
import Image from "next/image";

const Header = () => {


    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    // useEffect(() => {
    //     const themeToggleBtn = document.querySelector(".header-dark");
    //     const sunLogo = document.querySelector(".sun-logo");
    //     const moonLogo = document.querySelector(".moon-logo");
    
    //     const handleThemeToggle = () => {
    //       sunLogo?.classList.toggle("sun");
    //       moonLogo?.classList.toggle("moon");
    
    //       const isDark = document.body.classList.contains("dark");
    
    //       if (isDark) {
    //         document.body.classList.remove("dark");
    //         document.body.classList.add("light");
    //         localStorage.setItem("theme-mode", "light");
    //       } else {
    //         document.body.classList.remove("light");
    //         document.body.classList.add("dark");
    //         localStorage.setItem("theme-mode", "dark");
    //       }
    //     };
    
    //     // Attach click event
    //     themeToggleBtn?.addEventListener("click", handleThemeToggle);
    
        
    
    //     // Cleanup
    //     return () => {
    //       themeToggleBtn?.removeEventListener("click", handleThemeToggle);
    //     };
    //   }, []);

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
                                            <a aria-expanded="false" className="d-block head-icon ps-0" data-bs-toggle="dropdown" href="#">
                                                <div className="lang-flag lang-en ">
                                                    <span className="flag rounded-circle overflow-hidden">
                                                        <i />
                                                    </span>
                                                </div>
                                            </a>
                                            <ul className="dropdown-menu language-dropdown header-card border-0">
                                                <li className="lang lang-en selected dropdown-item p-2" data-bs-placement="top" data-bs-toggle="tooltip" title="US">
                                                    <span className="d-flex align-items-center">
                                                        <i className="flag-icon flag-icon-usa flag-icon-squared b-r-10 f-s-22" />
                                                        <span className="ps-2">English</span>
                                                    </span>
                                                </li>
                                                <li className="lang lang-pt dropdown-item p-2" data-bs-title="tooltip" data-bs-placement="top" title="FR">
                                                    <span className="d-flex align-items-center">
                                                        <i className="flag-icon flag-icon-fra flag-icon-squared b-r-10 f-s-22" />
                                                        <span className="ps-2">Française </span>
                                                    </span>
                                                </li>
                                                <li className="lang lang-es dropdown-item p-2" data-bs-title="tooltip" data-bs-placement="top" title="UK">
                                                    <span className="d-flex align-items-center">
                                                        <i className="flag-icon flag-icon-gbr flag-icon-squared b-r-10 f-s-22" />
                                                        <span className="ps-2">English</span>
                                                    </span>
                                                </li>
                                                <li className="lang lang-es dropdown-item p-2" data-bs-title="tooltip" data-bs-placement="top" title="Ru">
                                                    <span className="d-flex align-items-center">
                                                        <i className="flag-icon flag-icon-rus flag-icon-squared b-r-10 f-s-22" />
                                                        <span className="ps-2">Русская</span>
                                                    </span>
                                                </li>
                                                <li className="lang lang-es dropdown-item p-2" data-bs-title="tooltip" data-bs-placement="top" title="IT">
                                                    <span className="d-flex align-items-center">
                                                        <i className="flag-icon flag-icon-ita flag-icon-squared b-r-10 f-s-22" />
                                                        <span className="ps-2">française</span>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="header-apps">
                                        <a aria-controls="appscanvasRights" className="d-block head-icon" data-bs-target="#appscanvasRights" data-bs-toggle="offcanvas" href="#" role="button">
                                            <i className="iconoir-key-command" />
                                        </a>
                                        <div aria-labelledby="appscanvasRightsLabel" className="offcanvas offcanvas-end header-apps-canvas" id="appscanvasRights" tabIndex={-1}>
                                            <div className="offcanvas-header">
                                                <h5 className="offcanvas-title" id="appscanvasRightsLabel">Shortcut</h5>
                                                <div className="app-dropdown flex-shrink-0">
                                                    <a aria-expanded="false" className=" p-1" data-bs-auto-close="outside" data-bs-toggle="dropdown" href="#" role="button">
                                                        <i className="ph-bold  ph-faders-horizontal f-s-20" />
                                                    </a>
                                                    <ul className="dropdown-menu mb-3 p-2">
                                                        <li className="dropdown-item">
                                                            <a href="setting.html" target="_blank">
                                                                Privacy Settings
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item">
                                                            <a href="setting.html" target="_blank">
                                                                Account Settings
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item">
                                                            <a href="setting.html" target="_blank">
                                                                Accessibility
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-divider" />
                                                        <li className="dropdown-item border-0">
                                                            <a aria-expanded="false" data-bs-toggle="dropdown" href="#" role="button">
                                                                More Settings
                                                            </a>
                                                            <ul className="dropdown-menu sub-menu">
                                                                <li className="dropdown-item">
                                                                    <a href="setting.html" target="_blank">
                                                                        Backup and Restore
                                                                    </a>
                                                                </li>
                                                                <li className="dropdown-item">
                                                                    <a href="setting.html" target="_blank">
                                                                        <span>Data Usage</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropdown-item">
                                                                    <a href="setting.html" target="_blank">
                                                                        <span>Theme</span>
                                                                    </a>
                                                                </li>
                                                                <li className="dropdown-item d-flex align-items-center justify-content-between">
                                                                    <a href="setting.html" target="_blank">
                                                                        <p className="mb-0">Notification</p>
                                                                    </a>
                                                                    <div className="flex-shrink-0">
                                                                        <div className="form-check form-switch">
                                                                            <input className="form-check-input  form-check-primary" id="notificationSwitch" type="checkbox" />
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="offcanvas-body app-scroll">
                                                <div className="row row-cols-3">
                                                    <div className="d-flex-center text-center mb-3">
                                                        <a href="product.html" target="_blank">
                                                            <span className="text-light-info h-45 w-45 d-flex-center b-r-15">
                                                                <i className="ph-duotone  ph-shopping-bag-open f-s-30" />
                                                            </span>
                                                            <p className="mb-0 f-w-500 text-info">E-shop</p>
                                                        </a>
                                                    </div>
                                                    <div className="d-flex-center text-center mb-3">
                                                        <a href="email.html" target="_blank">
                                                            <span className="text-light-primary h-45 w-45 d-flex-center b-r-15 position-relative">
                                                                <i className="ph-duotone  ph-envelope f-s-30" />
                                                                <span className="position-absolute top-space-5 start-100 translate-middle p-1 bg-primary-dark rounded-circle animate__animated animate__fadeIn animate__infinite animate__fast" />
                                                            </span>
                                                            <p className="mb-0 f-w-500 text-primary">Email</p>
                                                        </a>
                                                    </div>
                                                    <div className="d-flex-center text-center mb-3">
                                                        <a href="chat.html" target="_blank">
                                                            <span className="text-light-danger h-45 w-45 d-flex-center b-r-15 position-relative">
                                                                <i className="ph-duotone  ph-chat-circle-text f-s-30" />
                                                                <span className="position-absolute top-space-5 start-100 translate-middle badge rounded-pill bg-success badge-notification">
                                                                    99+
                                                                    <span className="visually-hidden">unread messages</span>
                                                                </span>
                                                            </span>
                                                            <p className="mb-0 f-w-500 text-danger">Chat</p>
                                                        </a>
                                                    </div>
                                                    <div className="d-flex-center text-center mb-3">
                                                        <a href="project_app.html" target="_blank">
                                                            <span className="text-light-warning h-45 w-45 d-flex-center b-r-15">
                                                                <i className="ph-duotone ph-projector-screen-chart f-s-30" />
                                                            </span>
                                                            <p className="mb-0 f-w-500 text-warning">Project</p>
                                                        </a>
                                                    </div>
                                                    <div className="d-flex-center text-center mb-3">
                                                        <a href="invoice.html" target="_blank">
                                                            <span className="text-light-secondary h-45 w-45 d-flex-center b-r-15">
                                                                <i className="ph-duotone ph-scroll f-s-30" />
                                                            </span>
                                                            <p className="mb-0 f-w-500 text-secondary">Invoice</p>
                                                        </a>
                                                    </div>
                                                    <div className="d-flex-center text-center mb-3">
                                                        <a href="blog.html" target="_blank">
                                                            <span className="text-light-primary h-45 w-45 d-flex-center b-r-15">
                                                                <i className="ph-duotone ph-notebook f-s-30" />
                                                            </span>
                                                            <p className="mb-0 f-w-500 text-primary">Blog</p>
                                                        </a>
                                                    </div>
                                                    <div className="d-flex-center text-center mb-3">
                                                        <a href="profile.html" target="_blank">
                                                            <span className="text-light-primary h-45 w-45 d-flex-center b-r-15 position-relative">
                                                                <i className="ph-duotone ph-users-three f-s-30" />
                                                                <span className="position-absolute top-space-5 start-100 translate-middle badge rounded-pill bg-danger badge-notification">
                                                                    <i className="ti ti-bell-ringing" />
                                                                </span>
                                                            </span>
                                                            <p className="mb-0 f-w-500 text-primary">Profile</p>
                                                        </a>
                                                    </div>
                                                    <div className="d-flex-center text-center mb-3">
                                                        <a href="gallery.html" target="_blank">
                                                            <span className="text-light-success h-45 w-45 d-flex-center b-r-15">
                                                                <i className="ph-duotone ph-google-photos-logo f-s-30" />
                                                            </span>
                                                            <p className="mb-0 f-w-500 text-success">Gallery</p>
                                                        </a>
                                                    </div>
                                                    <div className="d-flex-center text-center mb-3">
                                                        <a href="kanban_board.html" target="_blank">
                                                            <span className="text-light-info h-45 w-45 d-flex-center b-r-15">
                                                                <i className="ph-duotone ph-selection-foreground text-info f-s-30" />
                                                            </span>
                                                            <p className="mb-0 f-w-500 text-secondary">Task </p>
                                                        </a>
                                                    </div>
                                                    <div className="d-flex-center text-center mb-3">
                                                        <a href="calendar.html" target="_blank">
                                                            <span className="text-light-dark h-45 w-45 d-flex-center b-r-15">
                                                                <i className="ph-duotone ph-calendar f-s-30" />
                                                            </span>
                                                            <p className="mb-0 f-w-500 text-dark">Calen..</p>
                                                        </a>
                                                    </div>
                                                    <div className="d-flex-center text-center mb-3">
                                                        <a href="filemanager.html" target="_blank">
                                                            <span className="text-light-danger h-45 w-45 d-flex-center b-r-15">
                                                                <i className="ph-duotone ph-folder-open f-s-30" />
                                                            </span>
                                                            <p className="mb-0 f-w-500 text-danger">File Ma..</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
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
                                        <a aria-controls="notificationcanvasRight" className="d-block head-icon position-relative" data-bs-target="#notificationcanvasRight" data-bs-toggle="offcanvas" href="#" role="button">
                                            <i className="iconoir-bell" />
                                            <span className="position-absolute translate-middle p-1 bg-success border border-light rounded-circle animate__animated animate__fadeIn animate__infinite animate__slower" />
                                        </a>
                                        <div aria-labelledby="notificationcanvasRightLabel" className="offcanvas offcanvas-end header-notification-canvas" id="notificationcanvasRight" tabIndex={-1}>
                                            <div className="offcanvas-header">
                                                <h5 className="offcanvas-title" id="notificationcanvasRightLabel">
                                                    Notification</h5>
                                                <button aria-label="Close" className="btn-close" data-bs-dismiss="offcanvas" type="button" />
                                            </div>
                                            <div className="offcanvas-body notification-offcanvas-body app-scroll p-0">
                                                <div className="head-container notification-head-container">
                                                    <div className="notification-message head-box">
                                                        <div className="message-images">
                                                            <span className="bg-secondary h-35 w-35 d-flex-center b-r-10 position-relative">
                                                                <Image alt="avtar" className="img-fluid b-r-10" src="/assets/images/ai_avtar/6.jpg" width={35} height={35} />
                                                                <span className="position-absolute bottom-30 end-0 p-1 bg-secondary border border-light rounded-circle notification-avtar" />
                                                            </span>
                                                        </div>
                                                        <div className="message-content-box flex-grow-1 ps-2">
                                                            <a className="f-s-15 text-secondary mb-0" href="read_email.html" target="_blank"><span className="f-w-500 text-secondary">Gene Hart</span> wants to
                                                                edit <span className="f-w-500 text-secondary">Report.doc</span></a>
                                                            <div>
                                                                <a className="d-inline-block f-w-500 text-success me-1" href="#">Approve</a>
                                                                <a className="d-inline-block f-w-500 text-danger" href="#">Deny</a>
                                                            </div>
                                                            <span className="badge text-light-primary mt-2"> sep 23 </span>
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
                                                            <a className="f-s-15 text-secondary mb-0" href="read_email.html" target="_blank">Hey
                                                                <span className="f-w-500 text-secondary">Emery McKenzie</span>,
                                                                get ready: Your order from <span className="f-w-500 text-secondary">@Shopper.com</span>
                                                                is out for delivery today!</a>
                                                            <span className="badge text-light-info mt-2"> sep 23 </span>
                                                        </div>
                                                        <div className="align-self-start text-end">
                                                            <i className="iconoir-xmark close-btn" />
                                                        </div>
                                                    </div>
                                                    <div className="notification-message head-box">
                                                        <div className="message-images">
                                                            <span className="bg-secondary h-35 w-35 d-flex-center b-r-10 position-relative">
                                                                <Image alt="" className="img-fluid b-r-10" src="/assets/images/ai_avtar/2.jpg" width={35} height={35} />
                                                                <span className="position-absolute  end-0 p-1 bg-secondary border border-light rounded-circle notification-avtar" />
                                                            </span>
                                                        </div>
                                                        <div className="message-content-box flex-grow-1 ps-2">
                                                            <a className="f-s-15 text-secondary mb-0" href="read_email.html" target="_blank"><span className="f-w-500 text-secondary">Simon Young</span> shared
                                                                a file called <span className="f-w-500 text-secondary">Dropdown.pdf</span></a>
                                                            <span className="badge text-light-success mt-2"> 30 min</span>
                                                        </div>
                                                        <div className="align-self-start text-end">
                                                            <i className="iconoir-xmark close-btn" />
                                                        </div>
                                                    </div>
                                                    <div className="notification-message head-box">
                                                        <div className="message-images">
                                                            <span className="bg-secondary h-35 w-35 d-flex-center b-r-10 position-relative">
                                                                <Image alt="" className="img-fluid b-r-10" src="/assets/images/ai_avtar/5.jpg" width={35} height={35} />
                                                                <span className="position-absolute end-0 p-1 bg-secondary border border-light rounded-circle notification-avtar" />
                                                            </span>
                                                        </div>
                                                        <div className="message-content-box flex-grow-1 ps-2">
                                                            <a className="f-s-15 text-secondary mb-0" href="read_email.html" target="_blank"><span className="f-w-500 text-secondary">Becky G. Hayes</span> has
                                                                added a comment to <span className="f-w-500 text-secondary">Final_Report.pdf</span></a>
                                                            <span className="badge text-light-warning mt-2"> 45 min</span>
                                                        </div>
                                                        <div className="align-self-start text-end">
                                                            <i className="iconoir-xmark close-btn" />
                                                        </div>
                                                    </div>
                                                    <div className="notification-message head-box">
                                                        <div className="message-images">
                                                            <span className="bg-secondary h-35 w-35 d-flex-center b-r-10 position-relative">
                                                                <Image alt="" className="img-fluid b-r-10" src="/assets/images/ai_avtar/1.jpg" width={35} height={35} />
                                                                <span className="position-absolute  end-0 p-1 bg-secondary border border-light rounded-circle notification-avtar" />
                                                            </span>
                                                        </div>
                                                        <div className="message-content-box flex-grow-1 ps-2">
                                                            <a className="f-s-15 text-secondary mb-0" href="read_email.html" target="_blank"><span className="f-w-600 text-secondary">Romaine Nadeau</span>
                                                                invited you to join a meeting
                                                            </a>
                                                            <div>
                                                                <a className="d-inline-block f-w-500 text-success me-1" href="#">Join</a>
                                                                <a className="d-inline-block f-w-500 text-danger" href="#">Decline</a>
                                                            </div>
                                                            <span className="badge text-light-secondary mt-2"> 1 hour ago </span>
                                                        </div>
                                                        <div className="align-self-start text-end">
                                                            <i className="iconoir-xmark close-btn" />
                                                        </div>
                                                    </div>
                                                    <div className="hidden-massage py-4 px-3">
                                                        <Image alt="" className="w-50 h-50 mb-3 mt-2" src="/assets/images/icons/bell.png" width={35} height={35} />
                                                        <div>
                                                            <h6 className="mb-0">Notification Not Found</h6>
                                                            <p className="text-secondary">When you have any notifications added
                                                                here,will
                                                                appear here.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="header-profile">
                                        <a aria-controls="profilecanvasRight" className="d-block head-icon" data-bs-target="#profilecanvasRight" data-bs-toggle="offcanvas" href="#" role="button">
                                            <Image alt="avtar" className="b-r-50 h-35 w-35 bg-dark" src="/assets/images/avtar/woman.jpg" width={35} height={35} />
                                        </a>
                                        <div aria-labelledby="profilecanvasRight" className="offcanvas offcanvas-end header-profile-canvas" id="profilecanvasRight" tabIndex={-1}>
                                            <div className="offcanvas-body app-scroll">
                                                <ul >
                                                    <li className="d-flex gap-3 mb-3">
                                                        <div className="d-flex-center">
                                                            <span className="h-45 w-45 d-flex-center b-r-10 position-relative">
                                                                <Image alt="" className="img-fluid b-r-10" src="/assets/images/avtar/woman.jpg" width={35} height={35} />
                                                            </span>
                                                        </div>
                                                        <div className="text-center mt-2">
                                                            <h6 className="mb-0"> Laura Monaldo <Image alt="instagram-check-mark" className="w-20 h-20" src="/assets/images/profile-app/01.png" width={20} height={20} /></h6>
                                                            <p className="f-s-12 mb-0 text-secondary">lauradesign@gmail.com</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a className="f-w-500" href="profile.html" target="_blank">
                                                            <i className="iconoir-user-love pe-1 f-s-20" /> Profile
                                                            Details
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="f-w-500" href="setting.html" target="_blank">
                                                            <i className="iconoir-settings pe-1 f-s-20" /> Settings
                                                        </a>
                                                    </li>
                                                    <li className="app-divider-v dotted py-1" />
                                                    <li>
                                                        <a className="f-w-500" href="setting.html" target="_blank">
                                                            <i className="iconoir-eye-closed pe-1 f-s-20" /> Hide Settings
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <a className="f-w-500" href="#">
                                                                <i className="iconoir-bell-notification pe-1 f-s-20" />
                                                                Notification
                                                            </a>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch">
                                                                    <input defaultChecked className="form-check-input form-check-primary" id="basicSwitch" type="checkbox" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <a className="f-w-500" href="#">
                                                                    <i className="ph-duotone  ph-detective pe-1 f-s-20" />
                                                                    Incognito
                                                                </a>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input form-check-primary" id="incognitoSwitch" type="checkbox" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="app-divider-v dotted py-1" />
                                                    <li>
                                                        <a className="f-w-500" href="faq.html" target="_blank">
                                                            <i className="iconoir-help-circle pe-1 f-s-20" /> Help
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="f-w-500" href="pricing.html" target="_blank">
                                                            <i className="iconoir-dollar pe-1 f-s-20" />
                                                            Pricing
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="mb-0 text-secondary f-w-500" href="sign_up.html" target="_blank">
                                                            <i className="iconoir-plus pe-1 f-s-20" /> Add account
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="mb-0 btn btn-light-danger btn-sm justify-content-center " href="sign_in.html" role="button">
                                                            <i className="ph-duotone  ph-sign-out pe-1 f-s-20" /> Log Out
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
