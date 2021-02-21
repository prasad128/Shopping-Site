import { createContext } from "react";
import { items } from "../static-data";
import { useImmerReducer } from "use-immer";

export const ShoppingContext = createContext();
const appState = {
  cart: [],
};

const reducer = (draft, action) => {
  switch (action.type) {
    case "addToCart":
      return void draft.cart.push(action.payload);
    case "removeFromCart":
      return void draft.cart.splice(action.payload, 1);
    default:
  }
};

export const ShoppingProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, appState);
  //   const location = useLocation();
  const handleCart = (item) => {
    dispatch({
      type: "addToCart",
      payload: item,
    });
  };
  const handleRemove = (item) => {
    const index = state.cart.findIndex((i) => i.id === item.id);
    dispatch({
      type: "removeFromCart",
      payload: index,
    });
  };
  console.log(
    state.cart[state.cart.length - 1] && state.cart[state.cart.length - 1].price
  );
  return (
    <ShoppingContext.Provider
      value={{ appState, handleRemove, state, handleCart, items }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
