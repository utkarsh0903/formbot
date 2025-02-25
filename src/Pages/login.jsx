import React, { useEffect, useState } from "react";
import "../App.css";
import "../styles/login.css";
import { login } from "../services";
import { Link, useNavigate } from "react-router-dom";
import backArrow from "../assets/arrow-back.png";
import triangle from "../assets/Group-2.png";
import ellipse1 from "../assets/Ellipse-1.png";
import ellipse2 from "../assets/Ellipse-2.png";
import googleIcon from "../assets/Google-Icon.png";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      navigate("/workspace");
    }
  }, [])
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await login(loginData);
    if (res.status === 200) {
      const data = await res.json(res.token)
      localStorage.setItem('token', data.token)
      alert("Login successfully");
      navigate("/workspace");
      setLoginData({
        email: "",
        password: "",
      });
    } else {
      const data = await res.json(res);
      console.log(data);
      alert(data.message);
    }
  };

  return (
    <div className="bg-container">
      <div className="back-btn">
        <Link to="/" className="back-btn-link">
          <img src={backArrow} alt="Back Arrow" />
        </Link>
      </div>

      <div className="user-data">
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
          <button className="blue-btn" type="submit">
            Log In
          </button>
        </form>
        <h4>OR</h4>
        <button className="google-btn blue-btn">
          <img src={googleIcon} alt="Google Icon" />
          <span>Sign In with Google</span>
        </button>
        <div className="change-request">
          <p>
            Don't have an account ?<Link to="/register"> Register Now</Link>
          </p>
        </div>
      </div>
      <div className="bg-images">
        <img className="triangle" src={triangle} alt="Triangle" />
        <img className="ellipse1" src={ellipse1} alt="Ellipse 1" />
        <img className="ellipse2" src={ellipse2} alt="Ellipse 2" />
      </div>
    </div>
  );
};

export default Login;
