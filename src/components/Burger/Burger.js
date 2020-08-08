import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "../Burger/Burger.module.css";

const burger = (props) => {
  var transformedIngredients = Object.keys(props.ingredients).map(
    (igKey, index) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + 1} type={igKey} />;
      });
    }
  );
  console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
