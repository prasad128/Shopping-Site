import React, { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { ShoppingContext } from "../contextAPI/shoppingContext";
import Link from "next/link";

import CountUp from "react-countup";

const Navbar = () => {
  const { state } = useContext(ShoppingContext);
  const [active, setActive] = React.useState("items");
  const itemClass = (tabName) =>
    `${
      active === tabName
        ? "block text-gray-900 text-lg sm:text-xl font-medium hover:text-gray-600 border-b-4 px-2 tracking-wide border-gray-600 focus:outline-none"
        : "block text-gray-900 text-lg sm:text-xl font-medium hover:text-gray-600 px-2 border-b-4 border-transparent tracking-wide focus:outline-none"
    }`;
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
    <div className="sticky top-0 left-0 right-0 z-10 flex items-center justify-between max-w-md px-6 py-2 mx-auto bg-white bg-opacity-100 border-b-2 border-gray-400 sm:px-6 sm:pt-4 md:pt-8 sm:max-w-4xl">
      <Link href="/">
        <button
          onClick={() => setActive("items")}
          className={itemClass("items")}
        >
          Items
        </button>
      </Link>
      <div className="flex items-center text-gray-900 sm:text-lg">
        <div className="mr-px">
          <MdShoppingCart className="" />
        </div>
        <div className="flex items-center">
          <div>{state.cart.length} items</div>
          <div className="ml-1">
            (<CountUp start={startTotal} end={Math.round(total)} prefix="$" />)
          </div>
        </div>
      </div>
      {/* <CountUp start={total} end={Math.round(total)}/> */}
      <Link href="/cart">
        <button onClick={() => setActive("cart")} className={itemClass("cart")}>
          Cart
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
