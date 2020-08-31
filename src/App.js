import React from "react";
import "./styles.css";
import Layout from "./components/Layout/Layout";
import BurgerBudilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "../src/containers/Checkout/Checkout";

export default function App() {
  return (
    <div>
      <Layout>
        <BurgerBudilder />
        <Checkout />
      </Layout>
    </div>
  );
}
