import Template from "../components/Template/Template";

import "../public/css/global.css";

const Rondom = () => (
  <Template>
    <h1>Rondom - Podotherapeuten</h1>
    <p>
      Tijdens het half jaar dat ik werkzaam ben geweest bij{" "}
      <a href="https://stofloos.nl/">Stofloos</a> heb ik meegewerkt aan de
      website voor Rondom Podotherapeuten. Hierbij heb ik veel geleerd over het
      CMS Drupal, waar deze website op is gebouwd. Ik heb voornamelijk CSS
      geschreven voor de verschillende soorten pagina's.
    </p>
    <a href="https://rondompodotherapeuten.nl/">
      <div className="img-wrapper">
        <div className="img-placeholder width-100pr"></div>
        <img
          alt="Afbeelding van website"
          className="width-100pr"
          src="/img/rondom.png"
        />
      </div>
    </a>
  </Template>
);

export default Rondom;
