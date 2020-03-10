import TimelineItem from '../TimelineItem/TimelineItem'

const Main = () => (
    <main>
      <TimelineItem
        itemTitle='Afstudeerstage'
        itemText='Mijn afstudeerproject ben ik begonnen bij Handpicked Labs, onderdeel van Handpicked Agencies in Breda. Voor dit project ben ik onderzoek gaan doen naar de Microsoft HoloLens als voorbereiding op het onderzoek wat ik zal doen in de fabriek bij Perfetti Van Melle. '
        linkHref='afstuderen'
        linkText='Bekijk meer'
        imgSrc='./img/afstuderen.jpg'
        imgAlt='HoloLens bij Perfetti van Melle'
      />
      
      <TimelineItem
        itemTitle='Web Design'
        itemText='Tijdens de minor: "Web-Development" in Amsterdam heb ik een website gemaakt voor iemand die blind is. '
        linkHref='web-design'
        linkText='Bekijk meer'
        imgSrc='./img/webdesign.png'
        imgAlt='Afbeelding van website'
      />

      <TimelineItem
        itemTitle='CSS to the rescue'
        itemText="In het 1e blok van de minor: Web-Development op de Hogeschool van Amsterdam heb ik het vak 'CSS to the rescue' gehad " 
        linkHref='cssttr'
        linkText='Bekijk meer'
        imgSrc='/img/cssttr.png'
        imgAlt='Afbeelding van website'
      />

      <TimelineItem
        itemTitle='Rondom - Podotherapeuten'
        itemText="Tijdens mijn werkzaamheden als Student Front-end Developer bij het bedrijf Stofloos heb ik gewerkt aan de website voor Rondom Podotherapeuten" 
        linkHref='rondom'
        linkText='Bekijk meer'
        imgSrc='/img/rondom.png'
        imgAlt='Afbeelding van website'
      />


    </main>
  );
  
  export default Main;