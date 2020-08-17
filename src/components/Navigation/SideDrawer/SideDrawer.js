import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "../SideDrawer/SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

const sideDrawer = (props) => {
  let attachedSideDrawer = [classes.SideDrawer, classes.Close];
  if (props.showSideDrawer) {
    attachedSideDrawer = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop
        show={props.showBackdrop}
        clickedBackdrop={props.backDropClicked}
      />
      <div className={attachedSideDrawer.join(" ")}>
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
