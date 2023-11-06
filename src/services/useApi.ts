// import axios from "axios";

// export function useAPI() {
//   const apiClient = axios.create({
//     baseURL: "https://teclead-ventures.github.io",
//     withCredentials: false,
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   });

//   async function fetchData() {
//     return await apiClient
//       .get("/data/london-events.json")
//       .then((response) => {
//         console.log("Response", response.data);
//         return response.data;
//       })
//       .catch((error) => {
//         console.log("Error", error);
//         throw error;
//       });
//   }
// }

// api.ts

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://teclead-ventures.github.io", // Replace with your API base URL
});

export function fetchData() {
  return axiosInstance
    .get("/data/london-events.json") // Replace with your specific API endpoint
    .then((response) => {
      console.log("Response", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("Error", error);
      throw error;
    });
}
