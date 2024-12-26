import React, { useState } from "react";
import { login } from "../services";
import { Link } from "react-router-dom";
import backArrow from "../assets/arrow-back.png";
import triangle from "../assets/Group-2.png";
import ellipse1 from "../assets/Ellipse-1.png";
import ellipse2 from "../assets/Ellipse-2.png";
import googleIcon from "../assets/Google-Icon.png";

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
      <Link to="/"><img src={backArrow} alt="Back Arrow" /></Link>
        <img src={triangle} alt="Triangle" />
        <img src={ellipse1} alt="Ellipse 1" />
        <img src={ellipse2} alt="Ellipse 2" />
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
        <img src={googleIcon} alt="Google Icon" />
        <span>Sign In with Google</span>
      </button>
    <div>
        <p>Don't have an account ?<Link to="/register"> Register Now</Link></p>
    </div>
    </>
  );
};

export default Login;
