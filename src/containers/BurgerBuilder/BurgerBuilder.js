import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBudilder extends Component {
  state = {
    ingredients: {
      cheese: 1,
      salad: 1,
      bacon: 1,
      meat: 1
    }
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Aux>
    );
  }
}
export default BurgerBudilder;
