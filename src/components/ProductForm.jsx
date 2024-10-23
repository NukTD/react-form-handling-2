import { useState } from "react";

function ProductForm() {
  const [productName, setProductName] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  return (
    <form className="post-form">
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={productName}
            onChange={(event) => {
              setProductName(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={productUrl}
            onChange={(event) => {
              setProductUrl(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={productPrice}
            onChange={(event) => {
              setProductPrice(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={productDescription}
            onChange={(event) => {
              setProductDescription(event.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button
          type="submit"
          onClick={() => {
            let data = {
              name: productName,
              price: productPrice,
              image: productUrl,
              descroption: productDescription,
            };
            alert(JSON.stringify(data));
          }}
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
