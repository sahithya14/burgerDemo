import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "../../Checkout/ContactData/ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      pincode: ""
    }
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
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}
export default ContactData;
