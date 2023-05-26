import React from "react";
import "./CardRight.css";
import { FiCreditCard } from "react-icons/fi";
import { AiOutlineWifi } from "react-icons/ai";
import { RiMastercardLine } from "react-icons/ri";
import { AiFillApple } from "react-icons/ai";

const CardRight = () => {
  return (
    <div className="card-right">
      <div className="upper-card">
        <div className="credit-cards">
          <FiCreditCard size={40} />
          <AiOutlineWifi size={40} />
        </div>
        <p className="card-details" id="card-name">
          Jonathan Michael
        </p>
        <p className="card-details" id="card-number">
          ... 3456
        </p>
        <div className="mastercard">
          <p>09/11</p>
          <RiMastercardLine size={40} />
        </div>
      </div>

      <div className="lower-card">
        <div className="company">
          <p>Company</p>
          <p className="apple-container">
            <AiFillApple className="apple" /> <span>Apple</span>
          </p>
        </div>
        <div className="order">
          <p>Order number</p>
          <p>1266301</p>
        </div>
        <div className="product">
          <p>Product</p>
          <p>MacBookAir</p>
        </div>
        <div className="vat">
          <p>Vat(20%)</p>
          <p>#100</p>
        </div>
      </div>
      <div className="last-card">
        <p className="payment-text">You have to pay</p>
        <div className="payment">
          <h1>549.</h1>
          <span>99USD</span>
        </div>
      </div>
    </div>
  );
};

export default CardRight;
