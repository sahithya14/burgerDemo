import React from "react";
import classes from "../Input/Input.module.css";

const Input = (props) => {
  var inputElement = null;
  switch (props.inputtype) {
    case "input":
      inputElement = <input {...props} />;
      break;
  }

  return (
    <div className={classes.InputCont}>
      <p className={classes.Label}>{props.label}</p>
      {inputElement}
    </div>
  );
};
export default Input;
