import React from "react";
import Bar from "./kennisBar";


export default function SoftwareKennis() {
  return (
    <section id='softwareKennis'>
      <div className="container">
        <p className="h1 text-center pt-5 pb-5">Software kennis</p>

        <Bar name={"Python"} size={"7"}/>
        <Bar name={"Javascript"} size={"4"}/>
        <Bar name={"React"} size={"5"}/>
        <Bar name={"Bootstrap"} size={"3"}/>
        <Bar name={"Html"} size={"5"}/>
        <Bar name={"Css"} size={"2"}/>
        <Bar name={"C++ (arduino)"} size={"6"}/>
        <Bar name={"Microsoft Office"} size={"5"}/>
        <Bar name={"Github"} size={"3"}/>
        <Bar name={"Notion"} size={"4"}/>

      </div>
    </section>
  )
}