import React, { useContext } from "react";
import { ShoppingContext } from "../contextAPI/shoppingContext";
import Item from "../components/item";
// import "../styles.css";
// import { motion } from "framer-motion";

const ItemsPage = () => {
  // const [addButton, setAddButton] = React.useState(false);
  const { items, handleCart } = useContext(ShoppingContext);

  return (
    <div className="grid grid-cols-1 gap-6 px-6 py-6 sm:px-6 sm:py-6 md:gap-6 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.id}>
          <Item item={item}>
            <button
              id="active"
              onClick={() => handleCart(item)}
              className="px-2 py-px text-sm text-gray-600 border-2 border-gray-600 rounded hover:bg-gray-600 hover:border-transparent hover:text-white focus:outline-none"
            >
              Add To Cart
            </button>
          </Item>
        </div>
      ))}
    </div>
  );
};

export default ItemsPage;
