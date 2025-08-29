import CryptoJS from "crypto-js"
const SECRET_KEY = import.meta.env.VITE_SECURE_HASH_KEY

const decryptData = (name) => {
  if(name && sessionStorage.getItem(name)){
    const encrypted = sessionStorage.getItem(name);   
    const decrypted = CryptoJS.AES.decrypt(encrypted, SECRET_KEY).toString(CryptoJS.enc.Utf8);
    
    return JSON.parse(decrypted);
  }
  
  return false
}


export default decryptData;