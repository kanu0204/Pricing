import React, { Component, useState } from 'react';
import './plans.css';



const PriceDetails = () => {
  const [clickPricing, setClickPricing] = useState(false);

  const handleClick = () => {
    setClickPricing(Component);
  };

  return (
    <div className='main'>
      <div className='detail__box1'>
        <h2 className='basic'>Basic Plan</h2>
        <div className='title1'>
          <h3> . 30 job posting</h3>
          <h3> . 3 featured job </h3>
          <h3>.job displayed for 15 days</h3>
          <h3>.Premium Support 24/7</h3>
        </div>
        <h3>Basic </h3>
      </div>
      <div className='detail__box2'>
        <h2 className='standard'>Standard Plan</h2>
        <div className='title2'>
          <h3> . 30 job posting</h3>
          <h3> . 3 featured job </h3>
          <h3>.job displayed for 15 days</h3>
          <h3>.Premium Support 24/7</h3>
        </div>
        <h3>Standard </h3>
      </div>
      <div className='detail__box3'>
        <h2 className='extended'>Extended Plan</h2>
        <div className='title3'>
          <h3> . 30 job posting</h3>
          <h3> . 3 featured job </h3>
          <h3>.job displayed for 15 days</h3>
          <h3>.Premium Support 24/7</h3>
        </div>
        <h3>Extended </h3>
      </div>
    </div>
  );
};

export default PriceDetails;
