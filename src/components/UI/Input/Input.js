import React from "react";
import classes from "../Input/Input.module.css";
import Aux from "../../../hoc/Aux";

const Input = (props) => {
  var inputElement = null;
  const inputClasses = [classes.Inuput];
  var validationMsg = null;
  if (!props.isValid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
    validationMsg = (
      <p className={classes.errorMsg}>please enter valid {props.label}</p>
    );
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.dispalyValue}
              </option>
            );
          })}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <Aux>
      <div className={classes.InputCont}>
        <p className={classes.Label}>{props.label}</p>
        {inputElement}
      </div>
      {validationMsg}
    </Aux>
  );
};
export default Input;
