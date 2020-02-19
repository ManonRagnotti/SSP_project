import React, {useState} from 'react';
import Login from "./Login";
const  LoginContainer =()=> {
  const initialValue = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  }
  const [values, setValues]= useState(initialValue)
  const handleSubmit = e => {
    e.preventDefault()
    console.log(values)
  }
        return (
                <Login values={values} setValues={setValues} handleSubmit={handleSubmit}/>
        )
}
export default LoginContainer
