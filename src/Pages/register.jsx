import React, { useState } from "react";
import { register } from "../services";

const Register = () => {
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
      setRegisterData({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
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
        />
        <button type="submit">Sign Up</button>
      </form>
      <h4>OR</h4>
      <button>
        <img src="" alt="" />
        <span>Sign Up with Google</span>
      </button>
    <div>
        <p>Already have an account ? Login</p>
    </div>
    </>
  );
};

export default Register;
