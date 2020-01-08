import axios from "axios";

const KEY = "AIzaSyDtrbfQSOmzspdZidB5xvL7yslMz_wkiX8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxReasults: 5,
    key: KEY,
  },
});
