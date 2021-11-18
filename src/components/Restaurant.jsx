/** @format */
import "./restaurant.css";
import React from "react";

function Restaurant({
  data,
  filter,
  payment,
  lowToHigh,
  setLowToHigh,
  highToLow,
  setHighToLow,
}) {
  const filterData = (el) => {
    if (filter === 0) {
      return el;
    } else {
      return el.rating >= filter && el.rating < filter + 1;
    }
  };
  const filterDataPay = (el) => {
    if (payment === "all") {
      return el;
    } else if (payment === "cash") {
      return el.payment_methods.cash;
    } else if (payment === "card") {
      return el.payment_methods.card;
    } else {
      return el.payment_methods.upi;
    }
  };
  const sortAscDsc = (a, b) => {
    if (lowToHigh) {
      if (highToLow) {
        setHighToLow(false);
      }
      return a.rating - b.rating;
    } else if (highToLow) {
      if (lowToHigh) {
        setLowToHigh(false);
      }
      return b.rating - a.rating;
    }
  };
  return data
    .filter(filterData)
    .filter(filterDataPay)
    .sort(sortAscDsc)
    .map((el) => {
      return (
        <div>
          <div className='mainRestorant'>
            <div className='main_div'>
              <div className='image_div'>
                <img src={el.imgUrl} alt='img'></img>
              </div>
              <div className='details_div'>
                <b>{el.title}</b>
                <p>{el.description}</p>
              </div>
              <div className='ratings_div'>
                <div className='rating'>
                  <b>{el.rating}</b>
                </div>
                <div>{el.votes} votes</div>
                <div>{el.reviews} reviews</div>
              </div>
            </div>
            <div className='order_online'>
              <button>Order Online</button>
            </div>
          </div>
        </div>
      );
    });
}

export default Restaurant;
