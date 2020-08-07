import React from "react";
import clases from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";

const burgerIngredient = (props) => {
  var ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={clases.breadBottom}>breadBottom</div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={clases.BreadTop}>
          <div className={clases.Seeds1}>breadTop</div>
          <div className={clases.Seeds2}>breadTop</div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={clases.Meat}></div>;
      break;
    case "cheese":
      ingredient = <div className={clases.Cheese}></div>;
      break;
    case "bacon":
      ingredient = <div className={clases.Bacon}></div>;
      break;
    case "salad":
      ingredient = <div className={clases.Salad}></div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};
export default burgerIngredient;
