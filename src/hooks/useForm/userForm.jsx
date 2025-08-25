import { useState } from "react";

const UserForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  
  const handleChange = (e) => {
    const {name , value} = e.target;
    setValues({
      ...values,
      [name]: value
    });      
  }
  return {
    handleChange,
    values
  }
}

export default UserForm
