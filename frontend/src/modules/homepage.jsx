import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
import Navbar from "./navbar";
import { Test } from "./testing";
import MijnProjecten from "./cards";
import Info from "./info";


export default function Homepage() {
  return (
  <>
    <div className="container-fluid full_con bg-dark bg-gradient p-0">
      {/*de bovenste bar word de introductie*/}
      <div className="row justify-content-start bg-dark">
        <div className="col-2 text-center">
          <p>image</p>
        </div>

        <div className="col text-center">
          <h1>Jens Laurijssen</h1>
        </div>
      </div>

      {/*pagina met verticale navbar*/}
      <div className="container-fluid">
        <div className="row justify-content-start">
          <div className="col-1 bg-dark text-center p-0">
            <section id='nav-bar'>
              <Navbar />
            </section>
          </div>
          <div className="col p-0">
            <div className="scrollable-container">
              <MijnProjecten />
              <Info />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*<Link to='/testing_bootstrap'><button>go to bootstrap</button></Link>*/}
  </>
  );
}