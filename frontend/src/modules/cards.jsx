import React from "react";


export default function MijnProjecten() {
  return (
    <section id='projecten'>
      <div className="container p-4 mt-5 pb-5">
        <h1 className="text-center pb-5">mijn projecten</h1>
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
                    <p className="card-text">een klasiek spel geschreven in pyhton met als framework pygame.</p>
                    <p className="card-text pb-3">de code is opgebouwd in drie lagen. de BLL, de presentatie layer en de main layer</p>
                    <button className="btn btn-outline-primary">ga naar</button>
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
                    <button className="btn btn-outline-primary">ga naar</button>
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