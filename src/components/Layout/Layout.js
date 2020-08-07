import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";

const layout = props => {
  return (
    <Aux>
      <div> tools bar</div>
      <main className={classes.content_cont}>{props.children}</main>
    </Aux>
  );
};

export default layout;
