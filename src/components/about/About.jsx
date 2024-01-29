import "./About.css";
import ME from "../../assets/me2.jpg";
// import { FaAward } from "react-icons/fa";
import { LiaProjectDiagramSolid } from "react-icons/lia";
// import { VscFolderActive } from "react-icons/vsc";
// import { RiChatSmile2Fill } from "react-icons/ri";
import { IoBicycle } from "react-icons/io5";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <LiaProjectDiagramSolid className="about_icon" />
              <h5>Projects</h5>
              <small>9+ Completed</small>
            </article>
            <article className="about_card2">
              <IoBicycle className="about_icon" />
              <h5>"Striving to achieve milestones"</h5>
              {/* <small>3+ Years Working</small> */}
            </article>
            {/* <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article> */}
          </div>

          <p>
            Hey there! 👋 I'm Akhtar, a front-end developer passionate about
            crafting engaging and user-friendly websites. Armed with skills in
            HTML, CSS, and JavaScript, React.js I turn designs into interactive digital
            experiences. With an eye for detail and a love for clean code, I
            thrive on creating visually appealing and seamless interfaces. Let's
            build something awesome together!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
