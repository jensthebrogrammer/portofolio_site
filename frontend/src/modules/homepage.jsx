import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
import Navbar from "./navbar";
import { Test } from "./testing";
import MijnProjecten from "./cards";
import Info from "./info";
import SoftwareKennis from "./softwareKennis";
import HuidigProject from "./huidigProject";


export default function Homepage() {
  return (
  <>
    <div className="container-fluid full_con bg-dark bg-gradient p-0">
      {/*de bovenste bar word de introductie*/}
      <div className="row justify-content-start bg-dark">
        <div className="col-1 align-item-center justify-content-center d-flex">
          <img src="/src/images/my_picture.jpg" className="my-picture" />
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
              <SoftwareKennis />
              <HuidigProject />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*<Link to='/testing_bootstrap'><button>go to bootstrap</button></Link>*/}
  </>
  );
}