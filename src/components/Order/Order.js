import React from "react";
import classes from "../Order/Order.module.css";

const order = (props) => {
  var ingredients = [];
  for (var key in props.Ingredients) {
    var temp = (
      <p>
        <strong>{key}</strong>
        {props.Ingredients[key]}
      </p>
    );
    ingredients.push(temp);
  }
  return (
    <div className={classes.Order}>
      {ingredients}
      <p>
        Price:<strong>{props.price}</strong>
      </p>
    </div>
  );
};

export default order;
