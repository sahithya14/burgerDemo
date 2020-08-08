import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

class BurgerBudilder extends Component {
  state = {
    ingredients: {
      cheese: 2,
      salad: 2,
      bacon: 3,
      meat: 2
    }
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}
export default BurgerBudilder;
