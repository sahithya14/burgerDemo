import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axiosInstance from "../../hoc/axios-orders";

class Orders extends Component {
  state = {
    ordersArr: null
  };
  componentDidMount() {
    axiosInstance
      .get("orders.json")
      .then((res) => {
        console.log(res.data);
        var orderArr = [];
        for (var key in res.data) {
          orderArr.push({ ...res.data[key], key: key });
        }
        console.log(orderArr);
        this.setState({ ordersArr: orderArr });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    if (this.state.ordersArr) {
      var Orders = this.state.ordersArr.map((order) => {
        return (
          <Order
            key={order.key}
            price={order.price}
            ingredients={order.ingredients}
          />
        );
      });
    }
    return <div>{Orders}</div>;
  }
}
export default Orders;
