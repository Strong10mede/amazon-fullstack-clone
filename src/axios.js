import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-688fc/us-central1/api",
  //the API url(cloud function URL)
});

export default instance;
