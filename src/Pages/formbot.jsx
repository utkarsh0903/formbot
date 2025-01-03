import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getForm, increaseFormCount, submitFormbot } from "../services";
import "../styles/formbot.css";
import send from "../assets/send.png";

const Formbot = () => {
  const { formId } = useParams();
  const [formbotTemplate, setFormbotTemplate] = useState([]);
  const [userResponses, setUserResponses] = useState({});
  const [rating, setRating] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [visitCount, setVisitCount] = useState(0);
  const [startCount, setStartCount] = useState(0);
  const [submittedCount, setSubmittedCount] = useState(0);

  useEffect(() => {
    increaseCount("visit");
    getFormById(formId);
  }, []);

  const getFormById = async (formId) => {
    const res = await getForm(formId);
    if (res.status === 200) {
      const data = await res.json(res);
      setFormbotTemplate(data.template);
      setVisitCount(data.visitCount || 0);
      setStartCount(data.startCount || 0);
      setSubmittedCount(data.submittedCount || 0);
    } else {
      const data = await res.json(res);
      alert(data.message);
    }
  };

  const increaseCount = async (type) => {
    const counts = {
        visitCount: type === "visit" ? visitCount + 1 : visitCount,
        startCount: type === "start" ? startCount + 1 : startCount,
        submittedCount: type === "submitted" ? submittedCount + 1 : submittedCount,
      };
    const data = {formId, counts }
    const res = await increaseFormCount(data);
    if (res.status === 200) {
      const data = await res.json();
      setVisitCount(data.visitCount);
      setStartCount(data.startCount);
      setSubmittedCount(data.submittedCount);
    } else {
      console.error("Failed to update counts");
    }
  };

  const handleResponseChange = (key, value) => {
    if (Object.keys(userResponses).length === 0) {
      increaseCount("start");
    }
    setUserResponses((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmitBtn = async () => {
    const userFormResponses = {
      username: username,
      email: email,
      userData: userResponses,
    };
    const data = { formId, userResponses: userFormResponses };
    console.log(data);
    try {
      const res = await submitFormbot(data);
      if (res.status === 200) {
        const data = await res.json();
        alert(data.message);
        increaseCount("submitted");
      } else {
        const data = await res.json();
        alert(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
  };

  const renderTemplate = (template) => {
    const { category, subCategory, labelData, label } = template;

    if (category === "Bubbles") {
      return (
        <div>
          <p>{labelData}</p>
        </div>
      );
    } else if (category === "Inputs") {
      switch (subCategory) {
        case "Text Input":
          return (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <label>{label}</label>
              <input
                type="text"
                placeholder="Enter your text"
                onChange={(e) => handleResponseChange(label, e.target.value)}
              />
              <button>
                <img src={send} alt="Send" />
              </button>
            </div>
          );
        case "Email Input":
          return (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <label>{label}</label>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => handleResponseChange(label, e.target.value)}
              />
              <button>
                <img src={send} alt="Send" />
              </button>
            </div>
          );
        case "Number Input":
          return (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <label>{label}</label>
              <input
                type="number"
                placeholder="Enter a number"
                onChange={(e) => handleResponseChange(label, e.target.value)}
              />
              <button>
                <img src={send} alt="Send" />
              </button>
            </div>
          );
        case "Phone Input":
          return (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <label>{label}</label>
              <input
                type="tel"
                placeholder="Enter your phone"
                onChange={(e) => handleResponseChange(label, e.target.value)}
              />
              <button>
                <img src={send} alt="Send" />
              </button>
            </div>
          );
        case "Date Input":
          return (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <label>{label}</label>
              <input
                type="date"
                placeholder="Select a date"
                onChange={(e) => handleResponseChange(label, e.target.value)}
              />
              <button>
                <img src={send} alt="Send" />
              </button>
            </div>
          );
        case "Rating Input":
          return (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <label>{label}</label>
              <div style={{ display: "flex", gap: "5px" }}>
                {[1, 2, 3, 4, 5].map((number) => (
                  <span
                    key={number}
                    onClick={() => {
                      setRating(number);
                      handleResponseChange(label, number);
                    }}
                    style={{
                      cursor: "pointer",
                      fontSize: "20px",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: rating == number ? "orange" : "blue",
                    }}
                  >
                    {number}
                  </span>
                ))}

                <button>
                  <img src={send} alt="Send" />
                </button>
              </div>
            </div>
          );
        case "Submit Button":
          return (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                className="form-submit-btn"
                onClick={() => handleSubmitBtn()}
              >
                {label}
              </button>
            </div>
          );
        default:
          return <p>Unknown input type</p>;
      }
    }
    return null;
  };

  return (
    <div className="formbot-container">
      <h2 className="formbot-heading">Formbot</h2>
      <div className="formbot-user-info">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      {formbotTemplate.map((template, index) => (
        <div key={index} className="formbot-div">
          {renderTemplate(template)}
        </div>
      ))}
    </div>
  );
};

export default Formbot;
