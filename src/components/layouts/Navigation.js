import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <>
      <nav id="mobile-menu">
        <ul>
          <li>
            <Link href="/" passHref className={pathname == "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/aboutus"
              passHref
              className={pathname == "/aboutus" ? "active" : ""}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/classes"
              passHref
              className={pathname == "/classes" ? "active" : ""}
            >
              Classes
            </Link>
          </li>
          <li>
            <Link
              href="/teachers"
              passHref
              className={pathname == "/teachers" ? "active" : ""}
            >
              Teachers
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              passHref
              className={pathname == "/services" ? "active" : ""}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contactus"
              passHref
              className={pathname == "/contactus" ? "active" : ""}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
