import React from "react";
import { Link } from "react-router-dom";


export default function Buttons() {
  return (
    <div className="container-fluid text-center btns-excirsise pb-5 pt-3">
      <h2>learning buttons</h2>
      <div className="row p-3">
        <div className="col">
          <button className="btn btn-warning">warning</button>
        </div>

        <div className="col">
          <Link to='/'>
            <button className="btn btn-info">go back</button>
          </Link>
        </div>

        <div className="col">
          <button className="btn btn-secondary">test</button>
        </div>
      </div>

      <div className="row p-3">
        <div className="col">
          <button className="btn btn-outline-danger">wrong</button>
        </div>

        <div className="col">
          <button className="btn btn-info btn-lg">large button</button>
        </div>

        <div className="col">
          <button className="btn btn-secondary btn-sm">small button</button>
        </div>
      </div>
    </div>
  )
}