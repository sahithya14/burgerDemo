import React from "react";
import classes from "./buildControlitem.module.css";
const buildControlitem = (props) => {
  function addIngrident(type) {
    props.addHandler(type);
  }
  function removeIngrident(type) {
    props.removeHandler(type);
  }
  return (
    <div>
      <div className={classes.buildControlitem}>
        <div className={classes.Label}>{props.label}</div>
        <button
          className={classes.Less}
          onClick={() => {
            removeIngrident(props.type);
          }}
        >
          Remove
        </button>
        <button
          className={classes.More}
          onClick={() => {
            addIngrident(props.type);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default buildControlitem;
