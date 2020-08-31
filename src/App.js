import React from "react";
import "./styles.css";
import Layout from "./components/Layout/Layout";
import BurgerBudilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "../src/containers/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Layout>
        <Route to="/" exact component={BurgerBudilder} />
        <Route to="/checkout" exact component={Checkout} />
      </Layout>
    </div>
  );
}
