import React from "react";
import classes from "../Button/Button.module.css";

const button = (props) => {
  return (
    <button
      className={[classes.Button, classes[props.btnType]].join("")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default button;

// className accepts only string so we are using join to convert array into a string
