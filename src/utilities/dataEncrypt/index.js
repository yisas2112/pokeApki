import CryptoJS from "crypto-js"
const SECRET_KEY = import.meta.env.VITE_SECURE_HASH_KEY

const dataEncrypt = (name, data)=>{
  if(data){
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
    sessionStorage.setItem(name, encrypted);
  }
  
}

export default dataEncrypt



