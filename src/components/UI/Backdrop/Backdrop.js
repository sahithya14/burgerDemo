import React from "react";
import classes from "../Backdrop/Backdrop.module.css";
const backdrop = (props) => {
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.clickedBackdrop}></div>
  ) : null;
};

export default backdrop;
