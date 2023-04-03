import axios from "axios";
import { base_url } from "../../uitls/axiosConfig";


const regester= async (userData)=>{
    const response = await axios.post(`${base_url}user/regester`, userData);
    if(response.data){
        return response.data;
    }
}

export const authService={
    regester
}