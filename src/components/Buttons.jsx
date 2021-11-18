/** @format */
import React from "react";

function Button({
  setFilter,
  setPayment,
  lowToHigh,
  setLowToHigh,
  highToLow,
  setHighToLow,
}) {
  return (
    <div>
      <div className='buttons-filter'>
        <button onClick={() => setFilter(0)} className='filter'>
          All
        </button>
        <button onClick={() => setFilter(4)} className='filter'>
          4 Star
        </button>
        <button onClick={() => setFilter(3)} className='filter'>
          3 Star
        </button>
        <button onClick={() => setFilter(2)} className='filter'>
          2 Star
        </button>
        <button onClick={() => setFilter(1)} className='filter'>
          1 Star
        </button>
      </div>
      <div className='buttons-payment'>
        <button onClick={() => setPayment("all")} className='filter'>
          All Payments
        </button>
        <button onClick={() => setPayment("cash")} className='filter'>
          Cash Only
        </button>
        <button onClick={() => setPayment("card")} className='filter'>
          Card Only
        </button>
        <button onClick={() => setPayment("upi")} className='filter'>
          UPI Only
        </button>
      </div>
      <div className='buttons-filterLtoH'>
        <button
          onClick={() => setLowToHigh(!lowToHigh)}
          className='filter pop_btn'>
          Low to High
        </button>
        <button
          onClick={() => setHighToLow(!highToLow)}
          className='filter pop_btn'>
          High to Low
        </button>
      </div>
    </div>
  );
}

export default Button;
