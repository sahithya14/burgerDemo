import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux";

const withErrorHandler = (WrappedComponent, axiousInstance) => {
  return class extends Component {
    /* class name is not mentioned, anonymous component is returned by withErrorHandler function*/

    constructor(props) {
      super(props);
      this.state = {
        error: null
      };
      axiousInstance.interceptors.request.use(
        (request) => {
          this.setState({
            error: null
          });
          return request;
        },
        (error) => {
          this.setState({
            error: error
          });
        }
      );
      axiousInstance.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          console.log(error);
          this.setState({
            error: error
          });
        }
      );
    }
    closeModal = () => {
      this.setState({
        error: null
      });
    };
    render() {
      return (
        <Aux>
          <Modal show={this.state.error} closeModal={this.closeModal}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />;
        </Aux>
      );
    }
  };
};

export default withErrorHandler;

//common method for handling errors using axios. pass the component and axios instance used in that particular component,
//error message is displayed(passes to) in Modal Component

/*
Warning: Can't call setState on a component that is not yet mounted. 
This is a no-op, but it might 
 indicate a bug in your application. Instead, 
 assign to `this.state` directly or define a `state = {};` 
 class property with the desired state in the _temp component.*/

// we are getting the above warning as in constructor we are using setState, but the component is not yet rendered as render() is called after contrctor
