import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerdemo-reactjs.firebaseio.com/"
});

export default instance;
