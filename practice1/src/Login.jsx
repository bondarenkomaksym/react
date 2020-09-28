import React from 'react';

//деструктуризация параметров прямо в аргументах функции
const Login = ({ onLogin }) => {


  return <button className="login btn" onClick={onLogin}>Login</button>
}

export default Login;