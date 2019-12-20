import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 4b6aafca4d91c444272c8e4650353b98d52adab293104e337704472f26125b48",
  },
});
