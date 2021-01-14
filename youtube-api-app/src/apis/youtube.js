import axios from "axios";

const KEY = "AIzaSyCyRGs12bonRe6Ng9AIXmoJNzSF59LD0rs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
