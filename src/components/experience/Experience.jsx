import "./Experience.css";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

import Skill from "./Skill";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        {/* FRONTEND */}
        <div className="container_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <Skill
              icon={<IoLogoJavascript />}
              title="JavaScript"
              experienceLevel="Experienced"
            />
            <Skill
              icon={<FaHtml5 />}
              title="HTML"
              experienceLevel="Experienced"
            />
            <Skill
              icon={<FaCss3Alt />}
              title="CSS"
              experienceLevel="Experienced"
            />
            <Skill
              icon={<FaReact />}
              title="React.js"
              experienceLevel="Experienced"
            />
            <Skill
              icon={<FaBootstrap />}
              title="Bootstrap"
              experienceLevel="Experienced"
            />
            <Skill
              icon={<SiTailwindcss />}
              title="Tailwind CSS"
              experienceLevel="Experienced"
            />
            <Skill
              icon={<FaFigma />}
              title="Figma Tool"
              experienceLevel="Experienced"
            />
            <Skill
              icon={<TbBrandRedux />}
              title="Redux Toolkit"
              experienceLevel="Intermediate"
            />
            <Skill
              icon={<SiJquery />}
              title="jQuery"
              experienceLevel="Experienced"
            />
          </div>
        </div>
        {/* BACKEND */}
        <div className="container_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <Skill
              icon={<FaNodeJs />}
              title="node.js"
              experienceLevel="Experienced"
            />
            <Skill
              icon={<SiMongodb />}
              title="MongoDB"
              experienceLevel="Experienced"
            />
            <Skill
              icon={<SiExpress />}
              title="Express.js"
              experienceLevel="Experienced"
            />
            <Skill
              icon={<GrGraphQl />}
              title="GraphQL"
              experienceLevel="Intermediate"
            />
            <Skill
              icon={<GrMysql />}
              title="MySQL"
              experienceLevel="Intermediate"
            />
            <Skill
              icon={<FaGitAlt />}
              title="Git"
              experienceLevel="Experienced"
            />
            <Skill
              icon={<SiCplusplus />}
              title="C++"
              experienceLevel="Intermediate"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
