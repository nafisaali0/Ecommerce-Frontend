import axios from "axios";
import { base_url , config} from "../../utils/axiosConfig";

const regester = async (userData) => {
  const response = await axios.post(`${base_url}user/regester`, userData);
  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
  }
  return response.data;
};
const login = async (logindata) => {
  const response = await axios.post(`${base_url}user/login`, logindata);
  if (response.data) {
    return response.data;
  }
};
const getUserWishlist = async () => {
  const response = await axios.get(`${base_url}user/all-wishlist`, config);
  if (response.data) {
    return response.data;
  }
};

export const authService = {
  regester,
  login,
  getUserWishlist
};
