import React from "react";
import classes from "./buildControlitem.module.css";
const buildControlitem = (props) => {
  return (
    <div>
      <div className={classes.buildControlitem}>
        <div className={classes.Label}>{props.label}</div>
        <button
          className={classes.Less}
          disabled={props.isDisabled}
          onClick={props.removeHandler}
        >
          Remove
        </button>
        <button className={classes.More} onClick={props.addHandler}>
          Add
        </button>
      </div>
    </div>
  );
};

export default buildControlitem;
