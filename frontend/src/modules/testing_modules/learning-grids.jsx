import React from "react";


export default function Grids() {
  return (
    <div className="container-fluid text-center pb-5 pt-3">
      <h2>learning grids</h2>
      <div className="container-fluid con-widht">
        <div 
        className="row p-5 justify-content-center">
          <div className="col-4">
            <button className="btn btn-primary btn-lg  rounded-circle round-button">large button</button>
          </div>

          <div className="col-4">
            <button className="btn btn-secondary btn-lg rounded-circle round-button">large button</button>
          </div>
        </div>

        <div className="row p-5">
          <div className="col">
            <button className="btn btn-danger btn-lg rounded-circle round-button">large button</button>
          </div>

          <div className="col">
            <button className="btn btn-outline-warning btn-lg rounded-circle round-button">large button</button>
          </div>

          <div className="col">
            <button className="btn btn-info btn-lg rounded-circle round-button">large button</button>
          </div>
        </div>

        <div className="row p-5 justify-content-center">
          <div className="col-4">
            <button className="btn btn-light btn-lg rounded-circle round-button">large button</button>
          </div>

          <div className="col-4">
            <button className="btn btn-danger btn-lg rounded-circle round-button">large button</button>
          </div>
        </div>
      </div>
    </div>
  )
}