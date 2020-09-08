import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSumary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      cheese: 1,
      salad: 1,
      meat: 1,
      bacon: 1
    }
  };
  componentDidMount() {
    console.log("Checkout" + this.props);
    // to get params from url passed in burgerBuilder successPurchasingHandler method
    var ingredients = {};
    const query = new URLSearchParams(this.props.location.search);
    for (let params of query.entries()) {
      //params-eg  ['salad','1']
      ingredients[params[0]] = +params[1];
    }
    this.setState({
      ingredients: ingredients
    });
  }

  cancelCheckoutHandler = () => {
    this.props.history.goBack();
  };
  continueCheckoutHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          cancelCheckout={this.cancelCheckoutHandler}
          continueCheckout={this.continueCheckoutHandler}
        />
      </div>
    );
  }
}

export default Checkout;
