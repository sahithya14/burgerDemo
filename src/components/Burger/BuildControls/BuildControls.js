import React from "react";
import classes from "./BuildControls.module.css";
import BuildControlitem from "./BuildControlitem";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" }
];
const burgerControls = (props) => {
  return (
    <div className={classes.buildControls}>
      <p>
        Total Price:<strong>{props.totalPrice.toFixed(2)}</strong>
      </p>
      {controls.map((item) => {
        return (
          <BuildControlitem
            addHandler={() => {
              props.addIngrident(item.type);
            }}
            removeHandler={() => {
              props.removeIngrident(item.type);
            }}
            key={item.label}
            label={item.label}
            type={item.type}
            isDisabled={props.disabledInfo[item.type]}
          />
        );
      })}
    </div>
  );
};
export default burgerControls;
