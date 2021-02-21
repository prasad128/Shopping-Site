// import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import React from "react";
import { ShoppingProvider } from "../contextAPI/shoppingContext";
// import { createContext } from "react";

function MyApp({ Component, pageProps }) {
  // const ShoppingContext = React.createContext(null);

  return (
    <ShoppingProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ShoppingProvider>
  );
}

export default MyApp;
