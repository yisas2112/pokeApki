import axios from "axios"
const VITE_URL_API = import.meta.env.VITE_URL_API

export const fetchData = async(ruta, method = 'get', data,  customHeaders = {} )=>{ 
  //HEADER
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...customHeaders
  };
  try{
    let response = await axios({
    url: `${VITE_URL_API}${ruta}`, 
    data : data , 
    headers: headers, 
    method,
    timeout : 15000 
    })
    return response;
  }catch(error){
    console.error("API Call Error:", error.response?.data || error.message);
    return error
  }
}

  