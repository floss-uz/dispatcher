import axios, { AxiosInstance } from "axios"

const API: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
})

//JWT logic

API.interceptors.request.use((config) => {
  const token = "" // get token from somewhere
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

API.interceptors.response.use(
  (res) => res, // handle the response if you needed
  (error) => {
    if (error.response && error.response.status === 401) {
      // do something for refresh the token
    }
    return Promise.reject(error)
  }
)

export default API
