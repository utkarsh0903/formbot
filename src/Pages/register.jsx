import React, { useEffect, useState } from "react";
import "../app.css";
import "../styles/register.css";
import { register } from "../services";
import { Link, useNavigate } from "react-router-dom";
import backArrow from "../assets/arrow-back.png";
import triangle from "../assets/Group-2.png";
import ellipse1 from "../assets/Ellipse-1.png";
import ellipse2 from "../assets/Ellipse-2.png";
import googleIcon from "../assets/Google-Icon.png";

const Register = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     navigate("/workspace");
  //   }
  // }, []);

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await register(registerData);
    if (res.status === 200) {
      alert("registered successfully");
      navigate("/login");
      setRegisterData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      const data = await res.json(res);
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

      <div className="user-data" id="user-container">
        <form onSubmit={handleRegister}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={registerData.username}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                [e.target.name]: e.target.value,
              })
            }
            placeholder="Enter a username"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={registerData.email}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
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
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                [e.target.name]: e.target.value,
              })
            }
            placeholder="**********"
            required
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={registerData.confirmPassword}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                [e.target.name]: e.target.value,
              })
            }
            placeholder="**********"
            required
          />
          <button className="blue-btn" type="submit">
            Sign Up
          </button>
        </form>
        <h4>OR</h4>
        <button className="google-btn blue-btn">
          <img src={googleIcon} alt="Google Icon" />
          <span>Sign Up with Google</span>
        </button>
        <div className="change-request">
          <p>
            Already have an account ?<Link to="/login"> Login</Link>
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

export default Register;
