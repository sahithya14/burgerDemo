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
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "example@gmail.com",
          label: "Email"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
          label: "Street"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      pincode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Eg:505474",
          label: "Pincode"
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 7
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "India",
          label: "country"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
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
        validation: {},
        value: "fastest",
        valid: true
      }
    },
    isFormValid: false
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    var formData = {};
    for (var inputIdentifier in this.state.orderForm) {
      formData[inputIdentifier] = this.state.orderForm[inputIdentifier].value;
    }
    var order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData: formData
    };
    //alert("success"); "/order.json  if we arre using fire base we have to add json in the end"
    axiousInstance
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
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
    updatedInputElement.valid = this.checkValidity(
      updatedInputElement.value,
      updatedInputElement.validation
    );
    updatedInputElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedInputElement;
    let isFormValid = true;
    for (var inputIdenti in updatedOrderForm) {
      isFormValid = updatedOrderForm[inputIdenti].valid && isFormValid;
    }
    console.log(updatedOrderForm);
    this.setState({ orderForm: updatedOrderForm, isFormValid: isFormValid });
  };

  checkValidity(value, rules) {
    if (!rules) {
      return true;
    }
    var isValid = true;
    if (rules.required) {
      isValid = value.trim("") !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }

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
              isValid={formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={(event) => {
                this.inputChangedHandler(event, formElement.id);
              }}
            />
          );
        })}
        <Button
          btnType="Success"
          disabled={!this.state.isFormValid}
          clicked={this.orderHandler}
        >
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
