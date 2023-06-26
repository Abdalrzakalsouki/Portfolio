import "../css/contact.css";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const key = import.meta.env.VITE_FORM_ENDPOINT;
  const [state, handleSubmit] = useForm(`${key}`);
  if (state.succeeded) {
    return (
      <p className="sucess-submition">
        Recivied, We will get back to you soon!
      </p>
    );
  }

  return (
    <div className="contact-co" id="contact">
      <h2>Get in touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="ex: Olivia Anderson"
          />
        </div>
        <div>
          <label htmlFor="email">
            Email address <span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ex: olivia92@gmail.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="message">
            Message <span>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="ex: Let is connect!"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" disabled={state.submitting}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
