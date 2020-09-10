import React from "react";
import classes from "../Order/Order.module.css";

const order = (props) => {
  var ingredients = [];
  function getIngredients() {
    for (var key in props.ingredients) {
      var temp = (
        <div key={props.key}>
          <strong>{key}:</strong>
          {props.ingredients[key]}
        </div>
      );
      ingredients.push(temp);
    }
    return ingredients;
  }

  return (
    <div className={classes.Order}>
      {getIngredients()}
      <p>
        Price:<strong>{props.price}</strong>
      </p>
    </div>
  );
};

export default order;
