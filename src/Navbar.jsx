import React from "react";
import {FaCartPlus} from "react-icons/fa"
export function Navbar({
  totalQty
}) {
  return <nav className="nav">
        <div className="nav-center">
          <h3>UseReducer</h3>

          <div className="nav-container">
            <FaCartPlus className="cart-icon" />
            <div className="amount-container">
              <p className="total-amount">{totalQty}</p>
            </div>
          </div>
        </div>
      </nav>;
}
  