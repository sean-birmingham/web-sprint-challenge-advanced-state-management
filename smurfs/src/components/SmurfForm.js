import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

const SmurfForm = (props) => {
  const [inputValue, setInputValue] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(inputValue);
    setInputValue({
      name: "",
      age: "",
      height: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={inputValue.name}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            onChange={handleChange}
            value={inputValue.age}
          />
        </label>
        <label>
          Height:
          <input
            type="text"
            name="height"
            onChange={handleChange}
            value={inputValue.height}
          />
        </label>
        <button type="submit">Add Smurf</button>
      </form>
    </div>
  );
};

export default connect(null, { addSmurf })(SmurfForm);
