import "./About.css";
import ME from "../../assets/me2.jpg";
import { FaAward } from "react-icons/fa";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { VscFolderActive } from "react-icons/vsc";
import { RiChatSmile2Fill } from "react-icons/ri";
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum cum
            optio possimus aliquam accusantium sed. Reiciendis voluptate ut quas
            nulla culpa, provident optio necessitatibus nam? Totam voluptate,
            repudiandae, doloremque eos laudantium ab, ipsa officiis debitis
            facere tenetur nisi voluptas incidunt a sint veritatis minima
            obcaecati
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
