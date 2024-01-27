import "./Nav.css";
import { GoHome } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { IoChatbubblesOutline } from "react-icons/io5";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <GoHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <LuUser2 />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <LiaProjectDiagramSolid />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <IoChatbubblesOutline />
      </a>
    </nav>
  );
};

export default Nav;
