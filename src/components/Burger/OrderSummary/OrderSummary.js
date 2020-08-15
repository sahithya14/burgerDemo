import React from "react";
import Aux from "../../../hoc/Aux";
const orderSummary = (props) => {
  var ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <p>Your Order</p>
      <p>A delicious burger with following ingrdients</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout</p>
    </Aux>
  );
};

export default orderSummary;
