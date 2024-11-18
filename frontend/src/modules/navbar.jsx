import React from "react";
import { HashLink as Link } from "react-router-hash-link"; 


export default function Navbar() {
  return (
  <>
    <nav className="nav-bar p-0">
      <div className="container nav-bar-element align-items">
        <Link smooth to="#projecten" className="nav-link text-center pt-1">
          Mijn projecten
        </Link>
      </div>
    </nav>
  </>
  )
}