// import api from "./api.json"
// const getProductsApi = async () => api

import axios from "axios"

const getProductsApi = async (id = "") => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
  return response
}

export default getProductsApi
