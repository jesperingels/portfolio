import Navigation from "../Navigation/Navigation";
import Link from "next/link";
import "./Header.css";

const Header = () => (
  <header>
    <input type="checkbox" id="checkbox"></input>
    <div className="menu-logo"></div>
    <div className="mobile-menu"></div>
    <div className="logo">
      {/* <Link href="https://afstuderen-exploratie.jesperingels.now.sh/"> */}
      <a href="/">Home</a>
      {/* </Link> */}
    </div>
    <Navigation>
      <Link href="/">
        <a id="mobile-home">Home</a>
      </Link>
    </Navigation>
  </header>
);

export default Header;
