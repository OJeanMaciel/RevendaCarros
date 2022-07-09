import axios from "axios";

const api = axios.create({
  baseURL: "https://jkflix.herokuapp.com/carros",
});

export default api;