import Template from "../components/Template/Template";

import "../public/css/global.css";

const Afstuderen = () => (
  <Template>
    <h1>Afstuderen</h1>
    <p>
      Voor het afstuderen aan de opleiding: Communication & Multimedia Design in
      Breda heb ik mij bezig gehouden met een onderzoek naar de inzet van de
      Microsoft HoloLens bij de snoepfabrikant 'Perfetti van Melle'.
    </p>

    <p>
      Op{" "}
      <a href="https://afstuderen-exploratie.jesperingels.now.sh/">
        deze website
      </a>{" "}
      vindt je alle informatie over m'n afstudeer-project.{" "}
      <i>
        Ik heb de website zelf geprogrammeerd, het design is een beetje
        hetzelfde als m'n portfolio
      </i>
      🤫
    </p>
    <p>
      <a href="https://github.com/jesperingels/afstuderen-exploratie">Dit</a> is
      de github repository voor de website van m'n afstuderen. Ik heb de website
      gemaakt in het javascript framework{" "}
      <a href="https://nextjs.org/">'Next.js'</a>.
    </p>

    <div className="img-wrapper">
      <div className="img-placeholder width-100pr"></div>
      <img
        alt="Uitleg in de fabriek"
        className="width-33pr"
        src="/img/oc1.jpg"
      />
      <img
        alt="Uitleg in de fabriek"
        className="width-33pr"
        src="/img/oc2.jpg"
      />
      <img
        alt="Uitleg in de fabriek"
        className="width-33pr"
        src="/img/oc3.jpg"
      />
    </div>

    <p>
      Ik ben gaan onderzoeken hoe de HoloLens binnen het bedrijf past en hoe
      medewerkers met de bril omgaan.{" "}
    </p>
    <p>Dit heb ik onderandere gedaan door gebruikers testen uit te voeren:</p>
    <iframe
      width="743"
      height="418"
      src="https://www.youtube.com/embed/y3hod6Z-Cfc"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>

    <p>
      Na mijn onderzoek bij Perfetti van Melle heb ik mijn bevindingen
      gepresenteerd voor het management en alle betrokkenen in de fabriek. Na de
      presentatie was iedereen erg enthousiast en willen ze in de fabriek graag
      aan de slag met de HoloLens.
    </p>

    <div className="img-wrapper">
      <div className="img-placeholder width-100pr"></div>
      <img
        alt="Uitleg in de fabriek"
        className="width-100pr"
        src="/img/presentatiePVM.jpeg"
      />
    </div>
    <p>
      Vervolgens heb ik op school mijn werk gepresenteerd op de
      afstudeer-expositie van mijn opleiding: Communication & Multimedia Design.
      De week erna kreeg ik te horen dat ik mijn opleiding met dit
      afstudeerproject succesvol heb afgerond!
    </p>
    <div className="img-wrapper">
      <div className="img-placeholder width-100pr"></div>
      <img
        alt="Uitleg in de fabriek"
        className="width-100pr"
        src="/img/expo2.jpg"
      />
    </div>
  </Template>
);

export default Afstuderen;
