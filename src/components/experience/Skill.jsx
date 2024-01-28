const Skill = ({ icon, title, experienceLevel }) => {
  return (
    <article className="experience_details">
      <div className="experience_details-icons">{icon}</div>

      <div>
        <h4>{title}</h4>
        <small className="text-light">{experienceLevel}</small>
      </div>
    </article>
  );
};

export default Skill;
