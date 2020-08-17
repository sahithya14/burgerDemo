import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "../Layout/Layout.module.css";
import ToolBar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class layout extends Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerCloseHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  };

  sidebarOpenHandler = () => {
    this.setState({
      showSideDrawer: true
    });
  };
  render() {
    return (
      <Aux>
        <ToolBar hamburgerIconClicked={this.sidebarOpenHandler} />
        <SideDrawer
          showBackdrop={this.state.showSideDrawer} // when side drawer is ther we show backdrop
          showSideDrawer={this.state.showSideDrawer}
          backDropClicked={this.sideDrawerCloseHandler}
        />
        <main className={classes.content_cont}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default layout;
