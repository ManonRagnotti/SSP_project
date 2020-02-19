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
//   const handleSubmit = e => {
//     e.preventDefault()
//     console.log(values)
//   }
  const handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
        return (
                <Login values={values} setValues={setValues} handleSubmit={handleSubmit}/>
        )
}
export default LoginContainer
