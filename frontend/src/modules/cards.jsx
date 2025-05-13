import React from "react";


export default function MijnProjecten() {
  return (
    <section id='projecten'>
      <div className="container p-4 mt-5 pb-5">
        <h1 className="text-center pb-5">Mijn projecten</h1>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12 my-3 d-flex justify-content-center p-0">
            <div className="card bg-dark">
              <div className="row">
                <div className="col-5">
                  <img src='\src\images\printscreen_gorillas.png' className="img-fluid rounded-start img-card" />
                </div>

                <div className="col-7">
                  <div className="card-body">
                    <h3 className="card-title">Gorillas</h3>
                    <p className="card-text">Een klasiek spel geschreven in python met als framework pygame.</p>
                    <p className="card-text pb-3">de code is opgebouwd in drie lagen. de BLL, de presentatie layer en de main layer</p>
                    <a href="https://github.com/jensthebrogrammer/gorillas-tisp"
                    className="d-none d-sm-block">
                      <button className="btn btn-outline-primary">ga naar</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 my-3 d-flex justify-content-center p-0">
            <div className="card bg-dark">
              <div className="row">
                <div className="col-5">
                  <img src='\src\images\screenshot_school_agenda.png' className="img-fluid rounded-start img-card" />
                </div>

                <div className="col-7">
                  <div className="card-body">
                    <h3 className="card-title">School agenda</h3>
                    <p className="card-text">Dit is een clone van de klassieke school agenda van Smartschool.</p>
                    <p className="card-text pb-3">De site is volledig functioneel. Je kan lessen en taken toevoegen en kleuren geven aan bepaalde lessen.</p>

                    <a href="https://github.com/jensthebrogrammer/school_agenda"
                    className="d-none d-sm-block">
                      <button className="btn btn-outline-primary">ga naar</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


        <div className="row justify-content-center my-5">
          <div className="col-lg-6 col-12 my-3 d-flex justify-content-center p-0">
            <div className="card bg-dark">
              <div className="row">
                <div className="col-5">
                  <img src='\src\images\printscreen_whack-a-mole.png' className="img-fluid rounded-start img-card" />
                </div>

                <div className="col-7">
                  <div className="card-body">
                    <h3 className="card-title">Whack a mole</h3>
                    <p className="card-text">Een spel geschreven om te kunnen samenwerken met een spelbord.</p>
                    <p className="card-text pb-3">Je kan dit spel ook gewoon op de computer spelen met de toetsen ASD. Het is gemaakt in Python met Pygame als framework</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 my-3 d-flex justify-content-center p-0">
            <div className="card bg-dark">
              <div className="row">
                <div className="col-5">
                  <img src='\src\images\afbeelding_rolstoel.png' className="img-fluid rounded-start img-card" />
                </div>

                <div className="col-7">
                  <div className="card-body">
                    <h3 className="card-title">Rolstoel</h3>
                    <p className="card-text">Een remote controlled rolstoel.</p>
                    <p className="card-text pb-3">Ik heb vooral het electronica gedeelte gedaan en het programmeren (arduino).
                      de rolstoel heeft veschillende bestuuringsmodussen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}