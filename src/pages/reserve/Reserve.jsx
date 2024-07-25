import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Reserve.scss";

const Reserve = () => {
  if (!localStorage.getItem("reserves"))
    localStorage.setItem("reserves", JSON.stringify([]));

  const initialValue = {
    name: "",
    day: new Date().toJSON().slice(0, 10),
    seats: 1,
  };
  const [formData, setFormData] = useState(initialValue);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.name.length < 5) {
      return setMessage("Name must be 5 or more characters longer");
    }

    const reserves = JSON.parse(localStorage.getItem("reserves"));
    reserves.push(formData);
    localStorage.setItem("reserves", JSON.stringify(reserves));

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
    <div className="reserve">
      <h1 className="reserve__title">Make Reserve</h1>
      <p className="reserve__error">{message}</p>
      <form onSubmit={handleSubmit} className="reserve__form">
        <div className="reserve__field">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="reserve__field">
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            name="date"
            id="date"
            min={new Date().toJSON().slice(0, 10)}
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className="reserve__field">
          <label htmlFor="seats">Seats: </label>
          <input
            type="number"
            name="seats"
            id="seats"
            min={1}
            max={10}
            value={formData.seats}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="reserve__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Reserve;
