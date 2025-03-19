import React, { useState } from "react";
import "../App.css";

const ProductForm = ({ newProductName, newSetProductName }) => {
  const [description, setDescription] = useState("");

  const inputHandler = (e) => {
    setDescription(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { newProductName, description });
  };

  return (
    <div>
      <h1>New Client Form</h1>

      <form className="formCss" onSubmit={submitHandler}>
        <div className="items">
          <label htmlFor="ClientName">Please enter your name:</label>
          <input
            type="text"
            name="name"
            value={newProductName} 
            onChange={(e) => {
              newSetProductName(e.target.value);
            }}
          />
        </div>

        <div className="email">
          <label htmlFor="description">Please enter your email:</label>
          <textarea
            name="email"
            id="email" 
            value={description} 
            onChange={inputHandler}
          ></textarea>
        </div>

        <button type="submit">Submit</button>

        
        <div className="debug-output">
          <p>Entred Name: {newProductName}</p>
          <p>Entered Description: {description}</p>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
