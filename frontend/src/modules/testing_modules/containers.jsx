import React from "react";


export default function Containers() {
  return (
    <div className="container-fluid text-center pb-5 pt-3 container-learning">
      <h2>learning containers</h2>

      <div className="container">
        <h3>this is a normal container</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, quas! Pariatur sunt itaque, unde omnis illo debitis beatae incidunt voluptatibus, nulla dolor distinctio natus id! Molestias corrupti molestiae quaerat minima!</p>
      </div>

      <div className="container-fluid">
        <h3>this is a fluid container</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit suscipit eaque repellat optio cupiditate ex, laborum amet pariatur nostrum similique! Dolorum dolores veniam amet ea maxime tenetur molestiae unde ullam?</p>
      </div>

      <div className="container-lg">
        <h3>100% width intil screen is large, then container</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero sequi dolorem molestias fuga culpa, reiciendis sunt, in ipsa sit laborum facilis error debitis tenetur molestiae repellat, quos qui quod a!</p>
      </div>

      <div className="container-xl">
        <h3>100% width intil screen is extra large, then container</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque illo quos sint excepturi laborum quidem laboriosam, esse quibusdam est labore modi dicta eligendi voluptas sunt tempora ullam sed distinctio veniam.</p>
      </div>
    </div>
  )
}