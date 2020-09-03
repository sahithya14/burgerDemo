import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "../../Order/CheckoutSumary/CheckoutSummary.module.css";
const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Hope U Like It!!</h1>
      <Burger ingredients={props.ingredients} />
      <Button clicked={props.cancelCheckout} btnType="Danger">
        Cancel
      </Button>
      <Button clicked={props.continueCheckout} btnType="Success">
        Continue
      </Button>
    </div>
  );
};
export default CheckoutSummary;
