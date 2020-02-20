import React, {useState} from 'react';
import Login from "./Login";


const  LoginContainer =()=> {
  
  const [logged, setLogged] = useState(false);

  const login = (email, password) => {
    fetch("http://localhost:3000/user/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    .then((response) => {
      response.json().then((result)=> {
        console.log(result);
        localStorage.setItem('token', result.token)  
      })
    });
  }



  return (
          <Login login={login} />
  )
}
export default LoginContainer
