import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem";
import p1 from "../../assets/portfolio1.png";
import p2 from "../../assets/portfolio2.png";
import p3 from "../../assets/portfolio3.png";
import p4 from "../../assets/portfolio4.png";
import p5 from "../../assets/portfolio5.png";
import p6 from "../../assets/portfolio6.png";
import p7 from "../../assets/portfolio7.png";
import p8 from "../../assets/portfolio8.png";
import p9 from "../../assets/portfolio9.png";
import p10 from "../../assets/portfolio10.png";
import p11 from "../../assets/portfolio11.png";
import p12 from "../../assets/portfolio12.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <PortfolioItem
          title="MERN Stack Chat Application"
          image={p12}
          githubLink="https://github.com/akhtar999/ChatBit"
        />
        <PortfolioItem
          title="E-commerce (React.js)"
          image={p3}
          githubLink="https://github.com/akhtar999/E-Commerce"
          demoLink="https://e-commerce-2c7af0.netlify.app"
        />
        <PortfolioItem
          title="MovieBuzz (React.js)"
          image={p4}
          githubLink="https://github.com"
          demoLink="https://movie-buzz-525302.netlify.app"
        />
        <PortfolioItem
          title="Tasktik (React.js)"
          image={p2}
          githubLink="https://github.com/akhtar999/Task-Tik"
          demoLink="https://task-tik-8b8539.netlify.app/"
        />
        <PortfolioItem
          title="tinDog (HTML | CSS)"
          image={p1}
          githubLink="https://github.com/akhtar999/tinDog"
          demoLink="https://tindog-151fd4.netlify.app"
        />
        <PortfolioItem
          title="Drum kit (JS | HTML | CSS)"
          image={p5}
          githubLink="https://github.com/akhtar999/Drum-Kit"
          demoLink="https://akhtar999.github.io/Drum-Kit"
        />
        <PortfolioItem
          title="Dice Game (JS | HTML | CSS)"
          image={p6}
          githubLink="https://github.com/akhtar999/Dice-game"
          demoLink="https://akhtar999.github.io/Dice-game"
        />
        <PortfolioItem
          title="Simon Game (JS | HTML | CSS)"
          image={p7}
          githubLink="https://github.com/akhtar999/Simon-Game"
          demoLink="https://akhtar999.github.io/Simon-Game"
        />
        <PortfolioItem
          title="Movie Seat Booking (JS | HTML | CSS)"
          image={p8}
          githubLink="https://github.com/akhtar999/Movie-Seat-booking"
          demoLink="https://akhtar999.github.io/Movie-Seat-booking"
        />
        <PortfolioItem
          title="Form Handling (JS | HTML | CSS)"
          image={p9}
          githubLink="https://github.com/akhtar999/Form-Handling"
          demoLink="https://akhtar999.github.io/Form-Handling"
        />
        <PortfolioItem
          title="Insta Like Animation (JS | HTML | CSS)"
          image={p10}
          githubLink="https://github.com/akhtar999/Instagram-Like-Animation"
          demoLink="https://akhtar999.github.io/Instagram-Like-Animation"
        />
        <PortfolioItem
          title="Facebook Add friend Card (JS | HTML | CSS)"
          image={p11}
          githubLink="https://github.com/akhtar999/Facebook-Add-Friend-Card"
          demoLink="https://akhtar999.github.io/Facebook-Add-Friend-Card"
        />
      </div>
    </section>
  );
};

export default Portfolio;
