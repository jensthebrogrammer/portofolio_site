import React from "react";


export default function HuidigProject() {
  return (
    <section id='huidigProject'>
      <div className="container-fluid bg-dark p-0 huidig_project">
        <div className="row text-center justify-content-center">
          <div className="d-xxl-block col-5 d-none">
            <img src='\src\images\code_webscraper.png' className="img-fluid rounded-start img-huidig-project" />
          </div>

          <div className="col-xxl-7 col-10">
            <h1 className="text-center mb-5">Weather site</h1>

            <div className="fs-5 mb-5">
              Op dit moment ben ik bezig met een weer website bouwen. De bedoeling is dat ik data kan halen van 1 of meerdere weerstations en die wervolgens op mijn website kan weergeven. 
            </div>

            <p className="fs-5 mb-5">
              Het is mij al gelukt om een webscraper te bouwen voor de website "Buienalarm" en een backend te bouwen in Python die de data naar de frontend stuurt.
              De volgende stap is een frontend webserver maken die de data mooi presenteerd.
            </p>

            <p className="fs-5 mb-5">
              Ik gebruik verschillende softwarepakketten om dit te bouwen. Python voor de webscraper samen met de BeautifulSoup library, Python voor de backend samen met Flask als framework. Voor de frontend ben ik van plan Javascript te gebruiken samen met React, Vite, en Bootstrap als frameworks.
            </p>

            <div className="d-inline">bezoek mijn github repository: </div>
            <a href="https://github.com/jensthebrogrammer/weather_site">https://github.com/jensthebrogrammer/weather_site</a>
          </div>
        </div>

        <div className="d-xxl-none d-block mt-5">
          <img src='\src\images\printscreen_webscraper2.png' className="img-fluid rounded-start img-huidig-project" />
        </div>
      </div>
    </section>
  )
}