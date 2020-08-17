import React from "react";
import classes from "../Toolbar/Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div
        className={classes.hamburgerCont}
        onClick={props.hamburgerIconClicked}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Logo height="80%" />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
