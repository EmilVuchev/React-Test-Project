import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "170ed82842cc4a74981d73512784d95c",
  },
});
