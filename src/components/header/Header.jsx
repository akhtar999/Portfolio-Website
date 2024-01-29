import Cta from "./CTA";
import ME from "../../assets/me.png";
import "./Header.css";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I&apos;m</h5>
        <h1>
          <span>Akhtar</span>ul Islam
        </h1>
        <h5 className="text-light">Front-End Developer</h5>
        <Cta />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
