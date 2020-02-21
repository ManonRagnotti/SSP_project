import React from 'react';
import Login from "./Login";

const LoginContainer = () => {

  const login = (email, password) => {
    fetch("/api/user/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);
        localStorage.setItem('token', result.token)
      })
    });
  }

  return (<Login login={login}/>)
}
export default LoginContainer
