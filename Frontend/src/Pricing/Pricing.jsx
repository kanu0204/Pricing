import React, { useState } from 'react';
import './pricing.css';
import PriceDetails from '../PricingComponents/PriceDetails';



  const Pricing = () => {
    const [clickPricing, setClickPricing] = useState(null);
  
    const handleClick = (component) => {
      setClickPricing(component);
    };
  
    return (
      <div>
        <button className="clickme" onClick={() => handleClick(<PriceDetails />)}>
          Pricing
        </button>
    

  
        {clickPricing && <div>{clickPricing}</div>}
      </div>
  );
};

export default Pricing;
