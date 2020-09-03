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
    console.log("Cheeckout" + this.props);
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
