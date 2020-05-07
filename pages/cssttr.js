import Template from "../components/Template/Template";

import "../public/css/global.css";

const Cssttr = () => (
  <Template>
    <h1>CSS to the rescue</h1>
    <h3>Opdracht</h3>
    <p>
      Maak een magazine website door alleen maar gebruik te maken van HTML en
      CSS. In de CSS mag je geen gebruik maken van id's en classes. Ontwerp een
      feature in de website die iets doet met het batterij niveau en met het
      weer.
    </p>

    <a href="https://github.com/jesperingels/css-to-the-rescue-1819">
      Github repository
    </a>
    <a href="https://jesperingels.github.io/css-to-the-rescue-1819/assignment/index.html">
      <div className="img-wrapper">
        <div className="img-placeholder width-100pr"></div>
        <img
          alt="Afbeelding van website"
          className="width-100pr"
          src="/img/cssttr.png"
        />
      </div>
    </a>
    <p>
      Tijdens dit vak kregen we les van Vitaly Friedman - Co Founder van
      Smashing Magazine. Hij heeft me heel erg geïnspireerd in het feit dat je
      alles kunt maken wat je maar wilt op het web. Tegenwoordig zijn veel
      website's bijna kopieën van elkaar. Dus is het de uitdaging voor
      ontwerpers en developers om elke website weer een andere twist te geven
      die het voor de gebruiker een leuke en unieke ervaring maakt.
    </p>
    <div className="img-wrapper">
      <div className="img-placeholder width-50pr"></div>
      <img
        alt="Vitaly Friedman"
        className="width-500pr"
        src="/img/vitalyfriedman.jpg"
      />
    </div>
  </Template>
);

export default Cssttr;
