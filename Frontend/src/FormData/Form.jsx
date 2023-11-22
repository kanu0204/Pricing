import React, { useState } from 'react';
import axios from "axios";
import './form.css';

const Form = () => {
 const [information, setInformation] = useState({
  name: "",
  email: "",
  plan: "",
  plans: [], // Initialize plans as an array
 });
 
 const handleChange = (e) => {
   const { name, value } = e.target;
   setInformation({ ...information, [name]: value });
 }
  
 const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    await axios.post(
      "http://localhost:5000/api/pricing",
      { ...information },
    );

    alert("Plan choosen successfully!");
  } catch (error) {
    console.error(error);
  }
};

const handleAddPlans = () => {
  const plans = [...information.plans, ""];
  setInformation({ ...information, plans });
};

return (
  <div className='form'>
    <form onSubmit={handleSubmit} >
      <label>First Name</label>
      <input
        type="text"
        placeholder='Your Name....'
        className='input1'
        value={information.name}
        onChange={handleChange}
      />
      <label>Last Name</label>
      <input
        type="text"
        placeholder='e@mail...'
        className='input1'
        value={information.email}
        onChange={handleChange}
      />
      <label>Plan Category</label>
      <input
        type="text"
        placeholder='Type here'
        className='input1'
        value={information.plan}
        onChange={handleChange}
      />
      <button type="button" onClick={handleAddPlans}>Add Plan</button>
    </form>
  </div>
);
};

export default Form;
