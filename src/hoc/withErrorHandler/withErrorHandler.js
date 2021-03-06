import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux";

const withErrorHandler = (WrappedComponent, axiousInstance) => {
  return class extends Component {
    /* class name is not mentioned, anonymous component is returned by withErrorHandler function*/
    state = {
      error: null
    };
    UNSAFE_componentWillMount() {
      this.reqInterceptor = axiousInstance.interceptors.request.use(
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
      this.reqInterceptor = axiousInstance.interceptors.response.use(
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

    componentWillUnmount() {
      axiousInstance.interceptors.request.eject(this.reqInterceptor);
      axiousInstance.interceptors.response.eject(this.resInterceptor);
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

/*constructor is used instead of ComponentDidMount becoz.. child components arev  rendered first then only component did mount is called */
