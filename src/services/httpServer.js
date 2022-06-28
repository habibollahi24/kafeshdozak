import axios from "axios";

// axios.defaults.baseURL = "http://localhost:5000/api";
axios.defaults.baseURL = "https://nodejs-post-app.herokuapp.com/api";

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
