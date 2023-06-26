import "../css/contact.css";
const Contact = () => {
  return (
    <div className="contact-co">
      <h2>Get in touch</h2>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name"> Name </label>
          <input type="text" id="name" placeholder="ex: Olivia Anderson" />
        </div>
        <div>
          <label htmlFor="email">
            {" "}
            Email address <span>*</span>
          </label>
          <input type="email" id="email" placeholder="ex: olivia92@gmail.com" />
        </div>
        <div>
          <label htmlFor="message">
            {" "}
            Message <span>*</span>{" "}
          </label>
          <textarea id="message" placeholder="ex: Let is connect!"></textarea>
        </div>
        <button type="submit">Send </button>
      </form>
    </div>
  );
};

export default Contact;
