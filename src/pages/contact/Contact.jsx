import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.scss";

const Contact = () => {
  if (!localStorage.getItem("contacts"))
    localStorage.setItem("contacts", JSON.stringify([]));

  const initialValue = { name: "", email: "", phone: "" };
  const [formData, setFormData] = useState(initialValue);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.name.length < 5) {
      return setMessage("Name must be 5 or more characters longer");
    }

    const contacts = JSON.parse(localStorage.getItem("contacts"));
    contacts.push(formData);
    localStorage.setItem("contacts", JSON.stringify(contacts));

    clearState();

    navigate("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const clearState = () => {
    setFormData({ ...initialValue });
    setMessage("");
  };

  return (
    <div className="contact">
      <h1 className="contact__title">Contact Info</h1>
      <p className="contact__error">{message}</p>
      <form onSubmit={handleSubmit} className="contact__form">
        <div className="contact__field">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="contact__field">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="contact__field">
          <label htmlFor="phone">Phone number: </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="contact__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
