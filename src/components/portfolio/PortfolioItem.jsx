const PortfolioItem = ({ title, image, githubLink, demoLink }) => {
  return (
    <article className="portfolio_items">
      <div className="portfolio_items-image">
        <img src={image} alt="" />
      </div>
      <h3>{title}</h3>
      <div className="portfolio_items-cta">
        <a href={githubLink} className="btn" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href={demoLink}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default PortfolioItem;
