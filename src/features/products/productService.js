import axios from "axios";
import { base_url } from "../../uitls/axiosConfig";

const getProduct = async () => {
  const response = await axios.get(`${base_url}product`);
  if (response.data) {
    return response.data;
  }
};


export const productService = {
    getProduct
};
