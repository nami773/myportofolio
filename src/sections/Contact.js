import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import emailjs from "@emailjs/browser";

export const Contact = ({ update }) => {
  const ref = useRef();
  const form = useRef();
  // 0 for not sent, 1 for sent, 2 for error and 3 for sending
  const [sent, setSent] = useState(0);
  const sendEmail = (e) => {
    e.preventDefault();
    setSent(3);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAIL_API
      )
      .then(
        (result) => {
          setSent(1);
        },
        (error) => {
          setSent(2);
        }
      );
  };
  update(ref, 5);
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2 ref={ref}>Contact</h2>
        </div>

        <div className="row mt-1">
          <div className="col-md mt-5 mt-lg-0">
            <Form
              action="forms/contact.php"
              role="form"
              className="php-email-form"
              onSubmit={sendEmail}
              ref={form}
            >
              <Row>
                <Form.Group className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </Form.Group>
                <Form.Group className="col-md-6 mt-3 mt-md-0">
                  <Form.Control
                    type="email"
                    className="form-control"
                    name="reply_to"
                    id="reply_to"
                    placeholder="Your Email"
                    required
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mt-3">
                <Form.Control
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Control
                  className="form-control"
                  name="message"
                  id="message"
                  as="textarea"
                  rows="5"
                  placeholder="Message"
                  required
                />
              </Form.Group>
              <div className="my-3">
                {sent === 3 && <div className="loading">Loading</div>}
                {sent === 2 && (
                  <div className="error-message">
                    Sorry, the message couldn't be sent. Please try again later.
                  </div>
                )}
                {sent === 1 && (
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                )}
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
