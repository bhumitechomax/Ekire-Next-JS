import Image from 'next/image';
import "../../public/assets/css/themify-icons.css";
import Link from 'next/link';

export default function Navbar () {
    return (

        <>
           
                <nav>
                    <div className="app-logo">
                        <Link className="logo d-inline-block" href="/">
                            <Image alt="#" src="/assets/images/logo/1.png" width={140} height={37} />
                        </Link>
                        <span className="bg-light-primary toggle-semi-nav">
                            <i className="ti-angle-double-right f-s-20" />
                        </span>
                    </div>
                    <div className="app-nav" id="app-simple-bar">
                        <ul className="main-nav p-0 mt-2">
                            <li className="menu-title">
                                <span>Management</span>
                            </li>
                            <li>
                                <a aria-expanded="false" data-bs-toggle="collapse" href="#dashboard">
                                    <i className="iconoir-home-alt" />
                                    dashboard
                                    <span className="badge text-primary-dark bg-primary-300  badge-notification ms-2">4</span>
                                </a>
                                <ul className="collapse" id="dashboard">
                                    <li><Link href="/">Dashboard</Link></li>
                                    <li><Link href="/design">Design your own dashbaord</Link></li>
                                </ul>
                            </li>
                            <li className="no-sub">
                                <Link href="/project">
                                    <i className="iconoir-view-grid" /> Projects
                                </Link>
                            </li>

                            <li className="menu-title">
                                <span>Infrastructure</span>
                            </li>
                            <li className="no-sub">
                                <Link href="/server">
                                <i className="iconoir-apple-shortcuts" /> Servers
                                </Link>
                            </li>
                            <li className="no-sub">
                                <Link href="/sshKeys">
                                    <i className="iconoir-keyframes-minus" /> SSH Keys
                                </Link>
                            </li>

                            <li className="menu-title">
                                <span>Billing & Finance</span>
                            </li>
                            <li className="no-sub">
                                <Link href="/finance">
                                    <i className="iconoir-wallet" /> Finance
                                </Link>
                            </li>
                            <li className="no-sub">
                                <Link href="/billing">
                                    <i className="iconoir-wallet" /> Billing
                                </Link>
                            </li>

                            <li className="menu-title">
                                <span>Support</span>
                            </li>
                            <li className="no-sub">
                                <Link href="/support">
                                    <i className="ph ph-chat-centered-text" /> Support
                                </Link>
                            </li>
                            <li className="no-sub">
                                <Link href="/chat">
                                    <i className="iconoir-multi-bubble" /> Chat Now
                                </Link>
                            </li>
                            <li className="no-sub">
                                <Link href="/help">
                                    <i className="iconoir-help-square" /> Help
                                </Link>
                            </li>

                            <li className="menu-title">
                                <span>Account Management</span>
                            </li>
                            <li className="no-sub">
                                <Link href="/account">
                                    <i className="iconoir-user" /> Accounts
                                </Link>
                            </li>
                            {/* <li className="no-sub">
                                <Link href="/login">
                                    <i className="iconoir-user" /> LogIn
                                </Link>
                            </li>
                            <li className="no-sub">
                                <Link href="/signup">
                                    <i className="iconoir-user" /> Sign Up
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className="menu-navs">
                        <span className="menu-previous"><i className="ti ti-chevron-left" /></span>
                        <span className="menu-next"><i className="ti ti-chevron-right" /></span>
                    </div>
                </nav>
                
            
        </>
    );
}
