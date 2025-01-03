import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getForm } from "../services";
import "../styles/formbot.css";
import send from "../assets/send.png";

const Formbot = () => {
  const { formId } = useParams();
  const [formbotTemplate, setFormbotTemplate] = useState([]);
  const [userResponses, setUserResponses] = useState({});
  const [rating, setRating] = useState(null);

  useEffect(() => {
    getFormById(formId);
  }, []);

  const getFormById = async (formId) => {
    const res = await getForm(formId);
    if (res.status === 200) {
      const data = await res.json(res);
      console.log(data.template);
      setFormbotTemplate(data.template);
    } else {
      const data = await res.json(res);
      alert(data.message);
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
              <input type="text" placeholder="Enter your text" />
              <button>
                <img src={send} alt="Send" />
              </button>
            </div>
          );
        case "Email Input":
          return (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <label>{label}</label>
              <input type="email" placeholder="Enter your email" />
              <button>
                <img src={send} alt="Send" />
              </button>
            </div>
          );
        case "Number Input":
          return (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <label>{label}</label>
              <input type="number" placeholder="Enter a number" />
              <button>
                <img src={send} alt="Send" />
              </button>
            </div>
          );
        case "Phone Input":
          return (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <label>{label}</label>
              <input type="tel" placeholder="Enter your phone" />
              <button>
                <img src={send} alt="Send" />
              </button>
            </div>
          );
        case "Date Input":
          return (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <label>{label}</label>
              <input type="date" placeholder="Select a date" />
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
                    onClick={() => setRating(number)}
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
              <button className="form-submit-btn">{label}</button>
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
      {formbotTemplate.map((template, index) => (
        <div key={index} className="formbot-div">
          {renderTemplate(template)}
        </div>
      ))}
    </div>
  );
};

export default Formbot;
