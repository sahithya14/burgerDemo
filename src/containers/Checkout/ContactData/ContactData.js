import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "../../Checkout/ContactData/ContactData.module.css";
import axiousInstance from "../../../hoc/axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your name",
          label: "Name"
        },
        value: ""
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "example@gmail.com",
          label: "Email"
        },
        value: ""
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
          label: "Street"
        },
        value: ""
      },
      pincode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Eg:505474",
          label: "Pincode"
        },
        value: ""
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "India",
          label: "country"
        },
        value: ""
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          label: "deliveryMethod",
          options: [
            { value: "fastest", dispalyValue: "Fastest" },
            { value: "cheapest", dispalyValue: "Cheapest" }
          ]
        },
        value: ""
      }
    }
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    var order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: "sahithya14",
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

  inputChangedHandler = (event, inputIdentifier) => {
    //inputIdentifier->name, email,etc
    console.log(event.target.value);
    var updatedOrderForm = { ...this.state.orderForm };
    var updatedInputElement = { ...updatedOrderForm[inputIdentifier] };
    updatedInputElement.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedInputElement;
    this.setState({ orderForm: updatedOrderForm });
  };

  render() {
    var formElementsArray = [];
    for (var key in this.state.orderForm) {
      formElementsArray.push({ config: this.state.orderForm[key], id: key });
    }

    var form = (
      <form>
        {formElementsArray.map((formElement) => {
          return (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              label={formElement.config.elementConfig.label}
              value={formElement.value}
              changed={(event) => {
                this.inputChangedHandler(event, key);
              }}
            />
          );
        })}
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
