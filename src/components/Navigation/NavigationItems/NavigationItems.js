import React from "react";
import classes from "../NavigationItems/NavigationItems.module.css";
import NavigationItem from "../../Navigation/NavigationItems/NavigationItem/NavigationItem";

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" Active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/orders">My Orders</NavigationItem>
    </ul>
  );
};

export default navigationItems;
