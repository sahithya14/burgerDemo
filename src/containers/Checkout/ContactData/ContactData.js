import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "../../Checkout/ContactData/ContactData.module.css";
import axiousInstance from "../../../hoc/axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      pincode: ""
    }
  };
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    var order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name1: "sahithya14",
        address: {
          street: "kukatpally14",
          pinCode: "50547414",
          country: "INDIA143"
        },
        email: "abc14@gmail.com"
      },
      deliveryMethod: "fastest14"
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
    var form = (
      <form>
        <Input
          className={classes.Inuput}
          label="Name"
          inputtype="input"
          type="text"
          name="Name"
          placeholder="Your Name"
        />
        <Input
          className={classes.Inuput}
          inputtype="input"
          label="email"
          type="email"
          name="Email"
          placeholder="example@gmail.com"
        />
        <Input
          className={classes.Inuput}
          inputtype="input"
          label="Street"
          type="text"
          name="Street"
          placeholder="Eg:GandhiNagar"
        />
        <Input
          className={classes.Inuput}
          inputtype="input"
          type="text"
          label="pincode"
          name="pincode"
          placeholder="Eg:505474"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.Contactdata}>
        <h4>Enter your Contact data </h4>
        {form}
      </div>
    );
  }
}
export default ContactData;
