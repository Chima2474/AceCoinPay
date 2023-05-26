import React from "react";
import "./CardLeft.css";
import { HiCash } from "react-icons/hi";
import { MdEdit } from "react-icons/md";
import { MdGppGood } from "react-icons/md";
import { RiMastercardLine } from "react-icons/ri";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

const CardLeft = () => {
  return (
    <div className="card-left">
      <div className="left-header">
        <div className="icon">
          <HiCash size={30} className="hicash" /> <strong>Acecoinpay</strong>
        </div>
        <p className="">
          <span className="timer">01</span>:<span className="timer">19</span>
        </p>
      </div>

      <div className="card">
        <div>
          <p className="card-number">Card Number</p>
          <p className="digits"> Enter the 16-digit card number of the card</p>
        </div>
        <div className="edit">
          <MdEdit />
          <span>Edit</span>
        </div>
      </div>

      <div className="card-input">
        <RiMastercardLine size={20} />
        <input
          type="text"
          name="cardinput"
          placeholder="2412 - 7512 - 3412 - 3456"
        />
        <MdGppGood size={20} className="good" />
      </div>

      <div className="cvv-number">
        <div>
          <p className="card-number">Cvv Number</p>
          <p className="digits">Enter your 3 or 4 digit number on the card</p>
        </div>
        <div className="cvv-input">
          <input type="text" />
          <BsFillGrid3X3GapFill size={20} className="grid" />
        </div>
      </div>

      <div className="cvv-number">
        <div>
          <p className="card-number">Expiry data</p>
          <p className="digits">Enter the expiry date on the card</p>
        </div>
        <div className="expiry-date">
          <input type="number" />
          <span>/</span>
          <input type="number" />
        </div>
      </div>

      <div className="cvv-number">
        <div>
          <p className="card-number">Password</p>
          <p className="digits">Enter your Dynamic password</p>
        </div>
        <div className="cvv-input">
          <input type="password" />
          <BsFillGrid3X3GapFill size={20} className="grid" />
        </div>
      </div>
      <div className="pay-btn">
        <button className="btn">Pay now</button>
      </div>
    </div>
  );
};

export default CardLeft;
