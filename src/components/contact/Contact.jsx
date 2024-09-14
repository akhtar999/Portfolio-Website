import { useRef } from "react";
import "./Contact.css";
import ContactCard from "./ContactCard";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_neascdr",
      "template_4rq3d38",
      form.current,
      "x31AfdNLgcoDRId90"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <ContactCard
            icon={<FiMail />}
            contactBy="Email"
            contactTo="iakhtar.dev@gmail.com"
            contactLink="mailto:itsakhtar999@gmail.com"
          />
          <ContactCard
            icon={<FaWhatsapp />}
            contactBy="WhatsApp"
            contactTo="+91 70XXXXXX14"
            contactLink="https://api.whatsapp.com/send?phone=7002712014"
          />
        </div>
        {/* FORM */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message . ."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
