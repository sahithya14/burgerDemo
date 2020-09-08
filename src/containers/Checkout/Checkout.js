import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSumary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "../Checkout/ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {
      cheese: 1,
      salad: 1,
      meat: 1,
      bacon: 1
    },
    totalPrice: 10.5,
    loading: false
  };
  componentDidMount() {
    console.log("Checkout" + this.props);
    // to get params from url passed in burgerBuilder successPurchasingHandler method
    var ingredients = {};
    const query = new URLSearchParams(this.props.location.search);
    var totalPrice = 0;
    for (let params of query.entries()) {
      //params-eg  ['salad','1']
      if (params[0] === "price") {
        totalPrice = +params[1];
      } else {
        ingredients[params[0]] = +params[1];
      }
    }
    this.setState({
      ingredients: ingredients,
      totalPrice: totalPrice
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
        <Route
          path={this.props.match.path + "/contact-data"}
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
