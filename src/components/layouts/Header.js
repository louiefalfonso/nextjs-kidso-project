"use client";
import Link from "next/link";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="header-area header-three">
      <div id="header-sticky" className="menu-area">
        <div className="container">
          <div className="second-menu">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <Link href="/">
                    <img src="../img/logo/logo.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="main-menu text-right text-xl-right">
                  <Navigation />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block mt-30 mb-30 text-right text-xl-right">
                <div className="login">
                  <ul>
                    <li>
                      <div className="header-btn second-header-btn">
                        <Link href="/contact" className="btn">
                          Get Started
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile-menu" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
