import { useState } from "react";

function ProductForm() {

  const [productName,setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productDesc, setProductDesc] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();

    const newProductData = {
      name: productName,
      price: productPrice,
      image: productImage,
      description: productDesc
    };

    alert(JSON.stringify(newProductData))

    setProductName('')
    setProductPrice('')
    setProductImage('')
    setProductDesc('')
  }

  return (
    <form className="post-form"  onSubmit={handleSubmit}>
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
            onChange={(e) => {setProductName(e.target.value)}}
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
            value={productImage}
            onChange={(e) => {setProductImage(e.target.value)}}
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
            onChange={(e) => {setProductPrice(e.target.value)}}
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
            value={productDesc}
            onChange={(e) => {setProductDesc(e.target.value)}}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
