import React from "react";
import classes from "../Input/Input.module.css";

const Input = (props) => {
  var inputElement = null;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={classes.Inuput}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={classes.Inuput}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={classes.Inuput}
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
          className={classes.Inuput}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <div className={classes.InputCont}>
      <p className={classes.Label}>{props.label}</p>
      {inputElement}
    </div>
  );
};
export default Input;
