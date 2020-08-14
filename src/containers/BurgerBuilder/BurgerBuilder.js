import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBudilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      salad: 0,
      bacon: 0,
      meat: 0
    }
  };

  removeIngridentHandler = (type) => {
    let ingredients = Object.assign({}, this.state.ingredients);
    ingredients[type] = ingredients[type] - 1;
    if (ingredients[type] >= 0) {
      this.setState({
        ingredients: ingredients
      });
    }
  };
  addIngrdientHandler = (type) => {
    let ingredients = Object.assign({}, this.state.ingredients);
    ingredients[type] = ingredients[type] + 1;
    this.setState({
      ingredients: ingredients
    });
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngrident={(type) => {
            this.addIngrdientHandler(type);
          }}
          removeIngrident={(type) => {
            this.removeIngridentHandler(type);
          }}
        />
      </Aux>
    );
  }
}
export default BurgerBudilder;
