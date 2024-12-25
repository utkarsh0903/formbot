import React, { useState } from "react";
import { login } from "../services";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await login(loginData);
    if (res.status === 200) {
      alert("Login successfully");
      setLoginData({
        email: "",
        password: ""
      })
    } else {
      console.log(res);
      alert("error");
    }
  };

  return (
    <>
      <button>Back button</button>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      <form onSubmit={handleLogin}>
      <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({
              ...loginData,
              [e.target.name]: e.target.value,
            })
          }
          placeholder="Enter your email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({
              ...loginData,
              [e.target.name]: e.target.value,
            })
          }
          placeholder="**********"
          required
        />
        <button type="submit">Log In</button>
      </form>
      <h4>OR</h4>
      <button>
        <img src="" alt="" />
        <span>Sign In with Google</span>
      </button>
    <div>
        <p>Don't have an account ?<Link to="/register"> Register Now</Link></p>
    </div>
    </>
  );
};

export default Login;
