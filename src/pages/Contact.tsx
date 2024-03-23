import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "../styles/contact.css";

function Contact() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORM_KEY);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSnackbarClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  // Open snackbar and clear form
  useEffect(() => {
    if (state.succeeded) {
      setOpenSnackbar(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="header-container">
          <div className="header-content">
            <h1 className="page-title">Contact Us</h1>
            <p className="community-description">
              Do you want to become an organizer, partner, or work with us in
              some other way? Please contact us by filling the form below and
              our team will get back to you as soon as possible!
            </p>
          </div>
        </div>

        <div className="form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="info-wrapper">
              <div className="field-wrapper">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="info-input"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div className="field-wrapper">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="info-input"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="message-wrapper">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              className="form-submit"
              type="submit"
              disabled={state.submitting}
            >
              Send Message
            </button>
          </form>

          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            className="snackbar"
          >
            <MuiAlert
              elevation={6}
              variant="filled"
              onClose={handleSnackbarClose}
              severity="success"
              className="snackbar"
            >
              Thanks for reaching out! We will be in touch as soon as possible!
            </MuiAlert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}

export default Contact;
