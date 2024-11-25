import React from "react";
import { HashLink as Link } from "react-router-hash-link"; 


export default function NavbarSmall() {
  return (
    <div className="nav-bar justify-content-center text-center d-block d-xl-none">
      <div className="row">
        <div className="col-3">
          <Link smooth to="#projecten" className="nav-link">
            <div className="nav-bar-element justify-content-center p-1">
              Mijn projecten
            </div>
          </Link>
        </div>

        <div className="col-3">
          <Link smooth to="#info" className="nav-link">
            <div className="nav-bar-element justify-content-center p-1">
              Over mij
            </div>
          </Link>
        </div>

        <div className="col-3">
          <Link smooth to="#softwareKennis" className="nav-link">
            <div className="nav-bar-element justify-content-center p-1">
              Software kennis
            </div>
          </Link>
        </div>

        <div className="col-3">
          <Link smooth to="#huidigProject" className="nav-link">
            <div className="nav-bar-element justify-content-center p-1">
              Huidig Project
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}