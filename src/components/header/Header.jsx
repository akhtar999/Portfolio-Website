import CTA from "./CTA";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Akhtarul Islam</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
