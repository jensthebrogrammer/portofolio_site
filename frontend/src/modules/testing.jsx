import React from "react";
import Buttons from "./testing_modules/buttons";
import Containers from "./testing_modules/containers";
import Grids from "./testing_modules/learning-grids";
import { HashLink as Link } from "react-router-hash-link"; 


export function Test() {
  return (
    <>
      <h1 className="text-center pb-5">learning bootstrap</h1>

      <nav className="navbar">
        <Link smooth to="#learning-grids" className="nav-link">Grids</Link>
      </nav>

      <section id="learning-buttons">
        <Buttons />
      </section>

      <section id="learning-containers">
        <Containers />
      </section>

      <section id="learning-grids" className="my-5">
        <Grids />
      </section>
    </>
  )
}