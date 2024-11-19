import React from "react";
import { HashLink as Link } from "react-router-hash-link"; 


export default function Navbar() {
  return (
  <>
    <nav className="nav-bar p-0 text-center">
      <div className="container nav-bar-element align-items-center justify-content-center p-3">
        <Link smooth to="#projecten" className="nav-link text-center">
          Mijn projecten
        </Link>
      </div>

      <div className="container nav-bar-element align-items-center justify-content-center p-3">
        <Link smooth to="#info" className="nav-link text-center">
          Over mij
        </Link>
      </div>

      <div className="container nav-bar-element align-items-center justify-content-center">
        <Link smooth to="#softwareKennis" className="nav-link text-center">
          Software kennis
        </Link>
      </div>
    </nav>
  </>
  )
}