import React from "react";
import { FaCartPlus, FaCaretDown, FaCaretUp } from "react-icons/fa";

export function CartItems({ removeItem, updateItemQty, items }) {
  return (
    <ul className="cart-items">
      {items.map((item) => {
        const { id, title, price, img, amount } = item;
        return (
          <li className="cart-item">
            <img src={img} alt="" />
            <div className="cart-info">
              <h5>{title}</h5>
              <p className="item-price">{`$${price}`}</p>
              <button className="remove-btn" onClick={() => removeItem(id)}>
                remove
              </button>
            </div>

            <div>
              <button className="amount-btn">
                <FaCaretUp
                  onClick={() => updateItemQty(id, Number(amount + 1))}
                />
              </button>

              <span>{amount}</span>
              <button className="amount-btn">
                <FaCaretDown
                  onClick={() =>
                    amount === 1
                      ? removeItem(id)
                      : updateItemQty(id, Number(amount - 1))
                  }
                />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
