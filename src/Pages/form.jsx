import React, { useState } from "react";
import "../styles/form.css";
import close from "../assets/close.png";
import bubbleText from "../assets/bubbleText.png";
import bubbleImage from "../assets/bubbleImage.png";
import video from "../assets/video.png";
import gif from "../assets/gif.png";
import flag from "../assets/flag.png";
import sendBtn from "../assets/sendBtn.png";
import date from "../assets/date.png";
import rating from "../assets/rating.png";
import phone from "../assets/phone.png";
import number from "../assets/number.png";
import email from "../assets/email.png";
import text from "../assets/text.png";
import ShareBtn from "../components/ShareBtn";
import deleteBtn from "../assets/delete.png";

const Form = () => {
  const [shareBtnStatus, setShareBtnStatus] = useState(false);
  const [templates, setTemplates] = useState([]);

  const handleAddTemplate = (type) => {
    setTemplates((prev) => [...prev, { id: Date.now(), type }]);
  };

  const renderTemplate = (template) => {
    return (
      <div key={template.id} className="new-template">
        <label htmlFor={template.type}>{getLabel(template.type)}</label>
        <input type="text" placeholder="Click here to edit" required />
        <button onClick={() => handleDeleteTemplate(template.id)}>
          <img src={deleteBtn} alt="Delete" />
        </button>
      </div>
    );
  };

  const getLabel = (type) => {
    const labels = {
      bubbleText: "Bubble Text",
      bubbleImage: "Bubble Image",
      text: "Text Input",
      number: "Number Input",
      email: "Email Input",
      phone: "Phone Input",
      date: "Date Input",
      rating: "Rating Input",
    };
    return labels[type] || "Unknown";
  };

  const handleDeleteTemplate = (id) => {
    setTemplates((prev) => prev.filter((template) => template.id !== id));
  };

  return (
    <div className="form-container">
      <div className="form-navbar">
        <div className="form-name">
          <input
            className="formname-input"
            type="text"
            placeholder="Enter Form Name"
          />
        </div>
        <div className="navbar-list">
          <button className="flow">Flow</button>
          <button className="response">Response</button>
        </div>
        <div className="navbar-btns">
          {/* <div className="theme-changer">
          <span>Light</span>
          <button onClick={toggleTheme} className="toggle-btn">
            {isDarkMode ? "Dark" : "Light"}
          </button>
        </div> */}
          <ShareBtn btnStatus={shareBtnStatus} />
          <button className="save-btn">Save</button>
          <button className="close-btn">
            <img src={close} alt="Close Btn" />
          </button>
        </div>
      </div>
      <div className="form-content">
        <div className="leftbar">
          <h3 className="bubbles-title">Bubbles</h3>
          <div className="leftbar-btns">
            <button onClick={() => handleAddTemplate("bubbleText")}>
              <img src={bubbleText} alt="Bubble Text" /> Text
            </button>
            <button onClick={() => handleAddTemplate("bubbleImage")}>
              <img src={bubbleImage} alt="Bubble Image" /> Image
            </button>
            <button>
              <img src={video} alt="Video" /> Video
            </button>
            <button>
              <img src={gif} alt="GIF" /> GIF
            </button>
          </div>
          <h3 className="inputs-title">Inputs</h3>
          <div className="leftbar-btns">
            <button onClick={() => handleAddTemplate("text")}>
              <img src={text} alt="Text" /> Text
            </button>
            <button onClick={() => handleAddTemplate("number")}>
              <img src={number} alt="Number" />
              Number
            </button>
            <button onClick={() => handleAddTemplate("email")}>
              <img src={email} alt="Email" />
              Email
            </button>
            <button onClick={() => handleAddTemplate("phone")}>
              <img src={phone} alt="Phone" />
              Phone
            </button>
            <button onClick={() => handleAddTemplate("date")}>
              <img src={date} alt="Date" />
              Date
            </button>
            <button onClick={() => handleAddTemplate("rating")}>
              <img src={rating} alt="Rating" />
              Rating
            </button>
            <button onClick={() => handleAddTemplate("bubbleText")}>
              <img src={sendBtn} alt="SendBtn" />
              Buttons
            </button>
          </div>
        </div>
        <div className="right-content">
          <div className="flag-starter">
            <img src={flag} alt="Flag" />
            <h3 className="start-flag">Start</h3>
          </div>
          <div className="new-templates-container">
            {templates.map((template) => renderTemplate(template))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
