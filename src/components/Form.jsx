/** @format */
import React from "react";
import "./form.css";
import Navbar from "./Navbar";

const intiData = {
  title: "",
  imgUrl: "",
  description: "",
  cost: 0,
  minRs: 50,
  minTime: 30,
  rating: 0,
  payment_methods: {
    card: false,
    cash: true,
    upi: false,
  },
  reviews: 0,
  votes: 0,
};

function Form({ add, showRegister, setShowRegister }) {
  const [formData, setFormData] = React.useState(intiData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add(formData);
    setShowRegister(!showRegister);
  };
  return (
    <div>
      <Navbar />
      <form className='form-div' onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name='title'
          type='text'
          placeholder='Restaurant Name'></input>
        <input
          onChange={handleChange}
          name='description'
          type='text'
          placeholder='description'></input>
        <input
          onChange={handleChange}
          name='imgUrl'
          type='text'
          placeholder='Image Link'></input>
        <input
          onChange={handleChange}
          name='cost'
          type='number'
          placeholder='Price'></input>
        <input
          onChange={handleChange}
          name='rating'
          type='number'
          placeholder='Rating'></input>
        <input
          onChange={handleChange}
          name='reviews'
          type='number'
          placeholder='Review On Your Website'></input>
        <input
          onChange={handleChange}
          name='votes'
          type='number'
          placeholder='Votes On Your Website'></input>
        <input className='last_submit' type='submit'></input>
      </form>
      <div className='button_div'>
        <button
          className='goBack'
          onClick={() => setShowRegister(!showRegister)}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Form;
