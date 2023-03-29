import axios from "axios";

export const api = axios.create({
  baseURL: "https://app.aaccent.su/js/",
  headers: {
    "Content-Type": "application/json",
  },
});

// api.defaults.withCredentials = true;

// api.interceptors.request.use((config) => {
//   if (process.browser && config) {
//     const cookies = parseCookies(null);
//     const token = cookies[ACCESS_TOKEN];

//     if (token) config.headers!.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });
