import "../css/contact.css";
import { useForm } from "@formspree/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
const Contact = () => {
  const key = import.meta.env.VITE_FORM_ENDPOINT;
  const [state, handleBackedSubmition] = useForm(`${key}`);
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .nullable()
      .matches(
        /^[a-zA-Z\s]*$/,
        "Invalid name. Only letters and spaces are allowed"
      ),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });
  return (
    <div className="contact-co" id="contact">
      <h2>Get in touch</h2>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
          handleBackedSubmition(values);
          resetForm();
          setStatus("Recivied, We will get back to you soon!");
          setSubmitting(false);
          setTimeout(() => {
            setStatus("");
          }, 3000);
        }}
      >
        {({ status }) => (
          <Form className="contact-form">
            <div>
              <label htmlFor="name"> Name </label>
              <Field
                type="text"
                name="name"
                placeholder="ex: Olivia Anderson"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="erro-message"
              />
            </div>
            <div>
              <label htmlFor="email">
                Email address <span>*</span>
              </label>
              <Field
                type="email"
                name="email"
                placeholder="ex: olivia92@gmail.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="erro-message"
              />
            </div>
            <div>
              <label htmlFor="message">
                Message <span>*</span>
              </label>
              <Field
                as="textarea"
                name="message"
                placeholder="ex: Let is connect!"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="erro-message"
              />
            </div>
            <button type="submit">Submit</button>
            {status && <p className="sucess-submition">{status}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
