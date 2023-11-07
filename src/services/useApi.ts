import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://teclead-ventures.github.io",
});

export function fetchData() {
  return axiosInstance
    .get("/data/london-events.json")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Error", error);
      throw error;
    });
}
