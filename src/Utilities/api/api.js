import { Axios } from "axios";

const client = new Axios({
  baseURL: "http://localhost:5005",
});

export function register(data) {
  return client.post("/register", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
