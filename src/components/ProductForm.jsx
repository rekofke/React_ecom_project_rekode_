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
      <h1>Product Form</h1>

      <form className="formCss" onSubmit={submitHandler}>
        <div className="items">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            name="productName"
            value={newProductName} 
            onChange={(e) => {
              newSetProductName(e.target.value);
            }}
          />
        </div>

        <div className="items">
          <label htmlFor="description">Product Description</label>
          <textarea
            name="description"
            id="description" 
            value={description} 
            onChange={inputHandler}
          ></textarea>
        </div>

        <button type="submit">Submit</button>

        
        <div className="debug-output">
          <p>Current Product Name: {newProductName}</p>
          <p>Current Description: {description}</p>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
