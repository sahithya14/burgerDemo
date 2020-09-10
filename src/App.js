import React from "react";
import "./styles.css";
import Layout from "./components/Layout/Layout";
import BurgerBudilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "../src/containers/Checkout/Checkout";
import { Route } from "react-router-dom";
import Orders from "./containers/Orders/Orders";
export default function App() {
  return (
    <div>
      <Layout>
        <Route path="/" exact component={BurgerBudilder} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
      </Layout>
    </div>
  );
}
