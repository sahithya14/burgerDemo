import React from "react";
import classes from "../Logo/Logo.module.css";
import burgerImage from "../../../src/assets/images/bug.jpeg";
const logo = (props) => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={burgerImage} alt="My burger" />
    </div>
  );
};

export default logo;
