import Template from "../components/Template/Template";

import "../public/css/global.css";

const WebDesign = () => (
  <Template>
    <h1>Web Design</h1>
    <p>
      <strong>Opdracht</strong>
    </p>
    <br />
    <p>
      Maak een prototype waardoor de doelgroep (Larissa) door een website kan
      navigeren. Belangrijk detail, Larissa is blind.
    </p>
    <a href="https://jesper-webdesign-hover.herokuapp.com/">
      <div className="img-wrapper">
        <div className="img-placeholder width-100pr"></div>
        <img
          alt="Afbeelding van website"
          className="width-100pr"
          src="/img/webdesign.png"
        />
      </div>
    </a>

    <p>
      Bij dit concept bedacht ik me dat juist blinde mensen een heel goed gehoor
      hebben. Dus had ik al snel het idee om iets met geluid te gaan doen. Door
      te experimenteren en te testen is er uiteindelijk een geslaagd prototype
      uitgekomen.
    </p>
    <p>Larissa was blij verrast</p>
  </Template>
);

export default WebDesign;
