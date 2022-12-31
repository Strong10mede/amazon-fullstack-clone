import axios from "axios";

const instance = axios.create({
  default: "...", //the API url(cloud function URL)
});

export { instance };
