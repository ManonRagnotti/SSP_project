import React, {useState} from 'react';
import Register from "./Register";


const  RegisterContainer =()=> {
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
                <Register values={values} setValues={setValues} handleSubmit={handleSubmit}/>
        )

}

export default RegisterContainer
