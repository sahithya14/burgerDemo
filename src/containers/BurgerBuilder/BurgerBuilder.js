import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
const INGRIENDENTS_PRICE = {
  meat: 50.5,
  cheese: 20.1,
  bacon: 10.005,
  salad: 10.1
};
class BurgerBudilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      salad: 0,
      bacon: 0,
      meat: 0
    },
    totalBurgerPrice: 10.5,
    purchaseable: false,
    purchasingOrder: false
  };

  updatePurchaseable = (ingredents) => {
    var totalIngridentsAdded = Object.keys(ingredents)
      .map((igKey) => {
        return ingredents[igKey]; // map returns eg [2, 1,0,0] and reduce adds 2+1+0+0
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({
      purchaseable: totalIngridentsAdded > 0
    });
  };

  removeIngridentHandler = (type) => {
    let ingredients = Object.assign({}, this.state.ingredients);
    ingredients[type] = ingredients[type] - 1;
    let newPrice = this.state.totalBurgerPrice - INGRIENDENTS_PRICE[type];
    if (ingredients[type] >= 0) {
      this.setState({
        ingredients: ingredients,
        totalBurgerPrice: newPrice
      });
    }
    this.updatePurchaseable(ingredients);
  };
  addIngrdientHandler = (type) => {
    let ingredients = Object.assign({}, this.state.ingredients);
    ingredients[type] = ingredients[type] + 1;
    let newPrice = this.state.totalBurgerPrice + INGRIENDENTS_PRICE[type];

    this.setState({
      ingredients: ingredients,
      totalBurgerPrice: newPrice
    });
    this.updatePurchaseable(ingredients);
  };

  orderConfirmHandler = () => {
    this.setState({ purchasingOrder: true });
  };

  cancelPurchasingHandler = () => {
    this.setState({ purchasingOrder: false });
  };
  successPurchasingHandler = () => {
    alert("success");
  };
  render() {
    this.disabledInfo = { ...this.state.ingredients };
    for (var type in this.disabledInfo) {
      this.disabledInfo[type] = this.disabledInfo[type] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <Modal
          show={this.state.purchasingOrder}
          closeModal={this.cancelPurchasingHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalBurgerPrice}
            purchaseCancelled={this.cancelPurchasingHandler}
            purchaseContinued={this.successPurchasingHandler}
          />
        </Modal>
        <BuildControls
          addIngrident={this.addIngrdientHandler}
          removeIngrident={this.removeIngridentHandler}
          totalPrice={this.state.totalBurgerPrice}
          disabledInfo={this.disabledInfo}
          purchaseable={this.state.purchaseable}
          ordered={this.orderConfirmHandler}
        />
      </Aux>
    );
  }
}
export default BurgerBudilder;
