import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem";
import p1 from "../../assets/portfolio1.png";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <PortfolioItem
          title="Project Title"
          image={p1}
          githubLink="https://github.com"
          demoLink="https://tindog-151fd4.netlify.app"
        />
        <PortfolioItem
          title="Project Title"
          image={p1}
          githubLink="https://github.com"
          demoLink=""
        />
        <PortfolioItem
          title="Project Title"
          image={p1}
          githubLink="https://github.com"
          demoLink=""
        />
        <PortfolioItem
          title="Project Title"
          image={p1}
          githubLink="https://github.com"
          demoLink=""
        />
        <PortfolioItem
          title="Project Title"
          image={p1}
          githubLink="https://github.com"
          demoLink=""
        />
        <PortfolioItem
          title="Project Title"
          image={p1}
          githubLink="https://github.com"
          demoLink=""
        />
      </div>
    </section>
  );
};

export default Portfolio;
