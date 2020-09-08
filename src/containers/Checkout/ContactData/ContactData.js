import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "../../Checkout/ContactData/ContactData.module.css";
import axiousInstance from "../../../hoc/axios-orders";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      pincode: ""
    }
  };
  orderHandler = () => {
    this.setState({ loading: true });
    var order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name1: "sahithya",
        address: {
          street: "kukatpally",
          pinCode: "505474",
          country: "INDIA"
        },
        email: "abc@gmail.com"
      },
      deliveryMethod: "fastest"
    };
    //alert("success"); "/order.json  if we arre using fire base we have to add json in the end"
    axiousInstance
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        console.log(response);
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log(error);
      });
  };
  render() {
    return (
      <div className={classes.Contactdata}>
        <h4>Enter your Contact data </h4>
        <form>
          <input
            className={classes.Inuput}
            type="text"
            name="Name"
            placeholder="Your Name"
          />
          <input
            className={classes.Inuput}
            type="email"
            name="Email"
            placeholder="example@gmail.com"
          />
          <input
            className={classes.Inuput}
            type="text"
            name="Street"
            placeholder="Eg:GandhiNagar"
          />
          <input
            className={classes.Inuput}
            type="text"
            name="pincode"
            placeholder="Eg:505474"
          />
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}
export default ContactData;
