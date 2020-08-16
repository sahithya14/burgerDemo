import React from "react";
import Aux from "../../hoc/Aux";
import classes from "../Layout/Layout.module.css";
import ToolBar from "../../components/Navigation/Toolbar/Toolbar";

const layout = (props) => {
  return (
    <Aux>
      <ToolBar />
      <main className={classes.content_cont}>{props.children}</main>
    </Aux>
  );
};

export default layout;
