import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";
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
      <p>
        <strong>Total price: {props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>A delicious burger with following ingrdients</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
