import Template from "../components/Template/Template";

import "../public/css/global.css";

const Contact = () => (
  <Template>
    <h1>Contact</h1>
    <div className="img-wrapper">
      <div className="img-placeholder width-70pr"></div>
      <a
        className="flex-center"
        href="https://www.linkedin.com/in/jesper-ingels-00702a141"
      >
        {" "}
        <img
          alt="Linkedin logo"
          className="social width-30pr"
          src="/img/linkedin2.png"
        />
      </a>
      <a className="flex-center" href="mailto:jesper.ingels@gmail.com">
        {" "}
        <img
          alt="Mail logo"
          className="social width-30pr"
          src="/img/mail.png"
        />
      </a>
    </div>
  </Template>
);

export default Contact;
