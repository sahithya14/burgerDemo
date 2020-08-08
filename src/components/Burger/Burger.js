import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "../Burger/Burger.module.css";

const burger = (props) => {
  var transformedIngredients = Object.keys(props.ingredients)
    .map((igKey, index) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        /*
        Array(props.ingredients[igKey])- if we just use this without [...], it will not come insie 2nd map
        */
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((prevVal, curVal) => {
      /*when ingredients passed are empty, then we get any array which contain empty arrays ,
   so we cant check lenth=0 cond, so using reduce*/
      return prevVal.concat(curVal);
    }, []); //initial value-[] , so initially prevVal=[];;

  console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = "Add burgrer items";
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
