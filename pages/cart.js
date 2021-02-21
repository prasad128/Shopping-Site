import React, { useContext } from "react";
import { ShoppingContext } from "../contextAPI/shoppingContext";
import Item from "../components/item";
// import { motion } from "framer-motion";
import CountUp from "react-countup";

const CartPage = () => {
  const { state, handleRemove, handleCart } = useContext(ShoppingContext);

  const summarizedCart = (cart) => {
    const groupedItems = cart.reduce((summary, item) => {
      summary[item.id] = summary[item.id] || {
        ...item,
        count: 0,
      };
      summary[item.id].count++;
      return summary;
    }, {});
    return Object.values(groupedItems);
  };
  const items = summarizedCart(state.cart);
  const cartItems = items.map((item) => (
    <div key={item.id}>
      {
        <Item item={item}>
          <button
            onClick={() => handleRemove(item)}
            className="px-2 border focus:outline-none"
          >
            &ndash;
          </button>
          <span className="px-3 py-1 border">{item.count}</span>
          <button
            onClick={() => handleCart(item)}
            className="px-2 border focus:outline-none"
          >
            +
          </button>
        </Item>
      }
    </div>
  ));

  const total = state.cart.reduce(
    (totalPrice, item) => totalPrice + item.price,
    0
  );

  const startTotal =
    total -
    (state.cart.length === 0
      ? total
      : state.cart[state.cart.length - 1] &&
        state.cart[state.cart.length - 1].price);
  console.log("Start", startTotal);

  return (
    <>
      <div
        className={
          state.cart.length > 0
            ? "px-6 sm:px-6 py-6 sm:py-6 grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2"
            : ""
        }
      >
        {state.cart.length > 0 ? cartItems : <EmptyCart />}
      </div>

      {state.cart.length > 0 && (
        <div className="px-4 py-2 text-xl font-semibold text-right text-gray-700 border-t-2 border-gray-400 sm:text-2xl">
          Total:{" "}
          <span>
            <CountUp start={startTotal} end={Math.round(total)} prefix="$" />
          </span>
        </div>
      )}
    </>
  );
};

const EmptyCart = () => (
  <div className="px-4 mt-6 text-2xl font-semibold text-center text-gray-700 md:text-3xl sm:mt-8 md:mt-10">
    <h2>Your cart is empty.</h2>
    <h2>Why not add some expensive products to it.</h2>
  </div>
);

// const TotalDisplay = () => <div>Total</div>;

export default CartPage;
