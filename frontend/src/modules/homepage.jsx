import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
import Navbar from "./navbar";
import { Test } from "./testing";
import MijnProjecten from "./cards";
import Info from "./info";
import SoftwareKennis from "./softwareKennis";
import HuidigProject from "./huidigProject";
import { useState } from "react";
import NavbarSmall from "./navbar-small";


export default function Homepage() {
  const [isModalOpen1, setIsModalOpen1] = useState(false)
  const [isModalOpen2, setIsModalOpen2] = useState(false)

  const closeModal = (modal) => {
    if (modal === 1) setIsModalOpen1(false)
    if (modal === 2) setIsModalOpen2(false)
  }

  const openCreateModal = (modal) => {
    if (!isModalOpen1 && modal === 1) setIsModalOpen1(true)
    if (!isModalOpen2 && modal === 2) setIsModalOpen2(true)
  }

  const toggleModal = (modal) => {
    if (modal === 1) {
      if (isModalOpen1) {
        closeModal(1)
      } else {
        openCreateModal(1)
      }
    } else {
      if (isModalOpen2) {
        closeModal(2)
      } else {
        openCreateModal(2)
      }
    }
  }



  return (
  <>
    <div className="container-fluid full_con bg-dark bg-gradient p-0">
      {/*de bovenste bar word de introductie*/}
      <div className="row justify-content-start bg-dark">
        <div className="col-1 justify-content-center d-none d-xl-flex">
          <button className="img-button" onClick={() => {openCreateModal(1)}}>
            <img src="/src/images/my_picture.jpg" className="my-picture" />
          </button>
        </div>

        <div className="col-1 justify-content-center d-flex d-xl-none">
          <button className="btn-navbar-toggler"
          onClick={() => {toggleModal(2)}}>
            <img src="/src/images/nav-bar-toggler.png" alt="" />
          </button>
        </div>

        <div className="col text-center">
          <h1>Jens Laurijssen</h1>
          {isModalOpen1 && <div className="modal">
            <div className="row">
              <div className="col">
                <img src="/src/images/my_picture.jpg" className="my-picture-modal" />
              </div>

              <div className="col-2">
                <button className="closing-button-modal" onClick={() => {closeModal(1)}}>&times;</button> 
              </div>
            </div> 
          </div>}

          {isModalOpen2 && <NavbarSmall />}
        </div>
      </div>

      {/*pagina met verticale navbar*/}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-1 d-none d-xl-block bg-dark text-center p-0">
            <section id='nav-bar'>
              <Navbar />
            </section>
          </div>
          <div className="col-lg-11 col-md-12 p-0">
            <div className="container-xl scrollable-container">
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