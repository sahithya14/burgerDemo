import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";

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
      <div>
        <h4>Enter your Contact data </h4>
        <form>
          <input type="text" name="Name" placeholder="Your Name" />
          <input type="email" name="Email" placeholder="example@gmail.com" />
          <input type="text" name="Street" placeholder="Eg:GandhiNagar" />
          <input type="text" name="pincode" placeholder="Eg:505474" />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}
export default ContactData;
