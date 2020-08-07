import React from "react";
import clases from "./BurgerIngredient.module.css";

const burgerIngredient = (props) => {
  var ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={clases.breadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={clases.breadTop}>
          <div className={clases.Seeds1}></div>
          <div className={clases.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={clases.meat}></div>;
      break;
    case "cheese":
      ingredient = <div className={clases.cheese}></div>;
      break;
    case "bacon":
      ingredient = <div className={clases.bacon}></div>;
      break;
    case "salad":
      ingredient = <div className={clases.salad}></div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

export default burgerIngredient;
