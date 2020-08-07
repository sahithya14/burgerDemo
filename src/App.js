import React from "react";
import "./styles.css";
import Layout from "./components/Layout/Layout";
import BurgerBudilder from "./containers/BurgerBuilder/BurgerBuilder";

export default function App() {
  return (
    <div>
      <Layout>
        <BurgerBudilder />
      </Layout>
    </div>
  );
}
