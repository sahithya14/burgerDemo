import React, { Component } from "react";
import classes from "../Modal/Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

export default class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.show !== this.props.show) {
      console.log("props changed");
      return true;
    } else {
      console.log("props are not changed");
      return false;
    }
  }
  render() {
    return (
      <Aux>
        <Backdrop
          show={this.props.show}
          clickedBackdrop={this.props.closeModal}
        />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}
