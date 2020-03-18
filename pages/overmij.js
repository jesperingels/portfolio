import Template from "../components/Template/Template";

import "../public/css/global.css";

const OverMij = () => (
  <Template>
    <h1>Over mij</h1>
    <p>
      Welkom op mijn porfolio! Ik ben Jesper Ingels, 22 jaar en woon in Breda.
    </p>
    <div className="img-wrapper">
      <div className="img-placeholder width-80pr"></div>
      <img
        alt="Foto van jesper"
        className="width-80pr"
        src="/img/jesperingels.jpg"
      />
    </div>
    <p>
      Sinds februari 2020 ben ik afgestudeerd aan de opleiding: Communication &
      Multimedia Design in Breda.
    </p>
    <p>
      Ik hou me vooral bezig met 'front-end' web development. Op de opleiding
      CMD Breda heb ik geleerd om "outside of the box" te denken. Zo probeer ik
      in de websites/webapps die ik maak, nieuwe/innovatieve manieren te
      verzinnen voor de alledaagse handelingen van gebruikers.
    </p>
    <div className="img-wrapper">
      <div className="img-placeholder width-70pr"></div>
      <img alt="Foto van jesper" className="width-70pr" src="/img/cmd.png" />
    </div>
    <h3>Opleiding</h3>
    <p>
      Op mijn opleiding heb ik geleerd ik te ontwerpen vanuit de gebruiker. Door
      op verschillende manieren inzichten uit de doelgroep te halen en dit mee
      te nemen in het ontwerp. Tijdens het ontwerpen maak ik gebruik van een
      heel breed scala aan ontwerpprogramma's. Met deze programma's heb ik
      ervaring:
    </p>
    <div className="img-wrapper">
      <div className="img-placeholder width-100pr"></div>
      <img
        alt="Foto van jesper"
        className="width-25pr img-padding"
        src="/img/aftereffects.png"
      />
      <img
        alt="Foto van jesper img-padding"
        className="width-25pr img-padding"
        src="/img/photoshop.png"
      />
      <img
        alt="Foto van jesper"
        className="width-25pr img-padding"
        src="/img/premierepro.png"
      />
      <img
        alt="Foto van jesper"
        className="width-25pr img-padding"
        src="/img/xd.png"
      />
    </div>
    <h3>Programmeren</h3>
    <p>
      Tijdens de periode dat ik werkzaam was bij Stofloos heb ik veel gewerkt
      met het CMS- Drupal en Wordpress. Hierbij was ik veel bezig met CSS en een
      klein beetje Javascript.{" "}
    </p>
    <p>
      Tijdens de Minor Web Development op de Hogeschool van Amsterdam, heb ik
      heel veel geleerd over Javascript. Onder andere NodeJS en Performance
      optimalisaties door gebruik te maken van een Service-worker
    </p>
    <div className="img-wrapper">
      <div className="img-placeholder width-100pr"></div>
      <img
        alt="HTML Logo"
        className="width-25pr img-padding"
        src="/img/htmllogo.png"
      />
      <img
        alt="CSS Logo"
        className="width-25pr img-padding"
        src="/img/csslogo.png"
      />
      <img
        alt="Javascript logo"
        className="width-25pr img-padding"
        src="/img/jslogo.png"
      />
      <img
        alt="Node.js logo"
        className="width-25pr img-padding"
        src="/img/nodejslogo.png"
      />
    </div>
  </Template>
);

export default OverMij;
