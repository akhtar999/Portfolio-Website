const ContactCard = ({ contactBy, contactTo, contactLink, icon }) => {
  return (
    <article className="contact_option">
      <div className="contact_icon">{icon}</div>
      <h4>{contactBy}</h4>
      <h5>{contactTo}</h5>
      <a href={contactLink} target="_blank" rel="noreferrer">
        Send a message
      </a>
    </article>
  );
};

export default ContactCard;
