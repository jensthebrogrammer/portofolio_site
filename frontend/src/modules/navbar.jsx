import React from "react";
import { HashLink as Link } from "react-router-hash-link"; 

export default function Navbar() {
  return (
    <>
      <nav className="nav-bar p-0 text-center">
        <Link smooth to="#projecten" className="nav-link text-center">
          <div className="container nav-bar-element align-items-center justify-content-center p-3">
            Mijn projecten
          </div>
        </Link>

        <Link smooth to="#info" className="nav-link text-center">
          <div className="container nav-bar-element align-items-center justify-content-center p-3">
            Over mij
          </div>
        </Link>

        <Link smooth to="#softwareKennis" className="nav-link text-center">
          <div className="container nav-bar-element align-items-center justify-content-center p-3">
            Software kennis
          </div>
        </Link>
        
        <Link smooth to="#huidigProject" className="nav-link text-center">
          <div className="container nav-bar-element align-items-center justify-content-center p-3">
            Huidig project
          </div>
        </Link>
      </nav>
    </>
  );
}
