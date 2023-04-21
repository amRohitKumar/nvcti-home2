import axios from "axios";

const customFetch = axios.create({
  baseURL: "http://localhost:5000", // server url
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:5000", // server url
  },
});

export default customFetch;