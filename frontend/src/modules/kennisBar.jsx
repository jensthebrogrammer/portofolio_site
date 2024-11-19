import React from "react";


export default function Bar({name, size}) {
  return (
    <div className="row p-3">
      <div className="col-2 text-end">
          <p className="fs-5">{name}</p>
      </div>
      <div id='color-overflow' className={"col-" + size}>                </div>
    </div>
  )
}