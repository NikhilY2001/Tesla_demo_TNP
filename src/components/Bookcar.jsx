import React, { useState } from "react";

function BookCar() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [carModel, setCarModel] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Booking Details:", { name, email, carModel, message });
  };

  return (
    <div className="book-car">
      <h2>Book a Car</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Car Model:</label>
          <select
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            required
          >
          //chnages done here
            <option value="">Select a particular car</option>
            <option value="Car A">Car A</option>
            <option value="Car B">Car B</option>
            <option value="Car C">Car C</option>
            <option value="Car D">Car D</option>
            <option value="Car E">Car E</option>
          </select>
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookCar;
