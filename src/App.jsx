import { CartItems } from "./CartItems";
import { Navbar } from "./Navbar";
// components

import cartItems from "./data";

import { useReducer } from "react";

const calTotalAmountAndItems = (items) => {
  return {
    items,
    totalQty: items.reduce((acc, el) => acc + Number(el.amount), 0),
    totalAmount: items
      .reduce((acc, el) => acc + Number(el.price) * Number(el.amount), 0)
      .toFixed(2),
  };
};

const defaultState = calTotalAmountAndItems(cartItems);

const reducer = (state, action) => {
  const { payload } = action;

  console.log(payload);

  if (action.type === "REMOVE_ITEM") {
    const newItems = state.items.filter((el) => el.id !== payload.id);
    return calTotalAmountAndItems(newItems);
  }
  if (action.type === "UPDATE_ITEM_QTY") {
    const item = state.items.find((el) => el.id === payload.id);
    item.amount = payload.newQty;
    return calTotalAmountAndItems(state.items);
  }

  if (action.type === "CLEAR_LIST") return calTotalAmountAndItems([]);

  throw new Error(`no Matching action-type ${action.type}`);
};

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: { id } });
  const updateItemQty = (id, newQty) =>
    dispatch({ type: "UPDATE_ITEM_QTY", payload: { id, newQty } });
  const clearList = () => dispatch({ type: "CLEAR_LIST" });

  const { totalAmount, totalQty, items } = state;

  return (
    <main>
      <Navbar totalQty={totalQty} />

      <section className="cart">
        <div className="section-center">
          <header>
            <h2>your bag</h2>
          </header>

          <CartItems
            items={items}
            removeItem={removeItem}
            updateItemQty={updateItemQty}
          />

          <footer>
            <hr />
            <div className="cart-total">
              <h4>Total</h4>
              <button className="btn">${totalAmount}</button>
            </div>

            <button className="btn btn-hipster" onClick={clearList}>
              Clear Cart
            </button>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default App;
