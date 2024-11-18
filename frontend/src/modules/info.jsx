import React from "react";


export default function Info() {
  return (
    <div className="container small">
      <div className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active text-center">
            <div className="d-block w-50 text-center">
              <h1 className="text-center">Over mij</h1>

              <p className="fs-3 pt-3">Beschrijving</p>
              <p className="fs-5 pb-5">
                Ik ben een gedreven student met een grote interesse in probleemoplossing en Software Engineering.
                Ik woon op een boerderij en heb dus al wel wat ervaring met werken. Als ik iets in mijn hoofd heb stop ik niet tot ik mijn idee gerealiseerd heb.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <p className="fs-3 pt-3">Opleiding</p>
            <p className="fs-5">
              Ik ben mijn middelbaar begonnen met de richting Flex. Een technische richting die mij de basis leerde over hoe een project word uitgepland en uitgewerkt.
              Daarna heb ik 2 jaar gespendeerd in de richting Electro- mechanische technieken. Daar leerde ik over hoe de elektriciteit in een huis werd gelegd en hoe verschillend componenten werken. Ook leerde ik hoe je iets moet 3D tekenen en hoe je bepaalde machines moest gebruiken. 
            </p>
            <p className="fs-5 pb-5">
              In mijn 5de studiejaar ben ik overgeschakeld naar Informatica- en communicatiewetenschappen. Ik heb altijd al een grote interesse gehad in software en elektronica. In deze richting kan ik mij meer focussen op mijn interesses. Ik heb dan ook al veel projecten gemaakt met school en als hobby.
              Ik hoop mijn laatste jaar in deze richting tot een goed einde te brengen en een goede indruk achter te laten.
            </p>
          </div>

          <div className="carousel-item">
            <p className="fs-3 pt-3">Toekomst</p>
            <p className="fs-5 pb-5">
              Ik ben op dit moment van plan om volgend jaar te beginnen aan een academische bachelor in Informatica. Tot nu toe heb ik deze richting enkel in Antwerpen gevonden, ik heb echter nog niet alles bekeken. Daarna ben ik van plan om een master te doen in Software Engineering. Momenteel ben ik extra wiskunde aan het studeren om dit idee te realiseren pt-3
            </p>

            <p className="fs-3 pt-3">github</p>
            <p className="fs-5 pb-5">je kan mij vinden Github via: <a href="https://github.com/jensthebrogrammer">https://github.com/jensthebrogrammer</a></p>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}