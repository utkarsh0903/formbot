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
import { addContentInForm, showResponses } from "../services";
import { useParams } from "react-router-dom";

const Form = () => {
  const [shareBtnStatus, setShareBtnStatus] = useState(false);
  const [isFormShareBtn, setIsFormShareBtn] = useState(true);
  const [isFormTabActive, setIsFormTabActive] = useState(true);
  const [isResponse, setIsRespone] = useState(false);
  const [templates, setTemplates] = useState([]);
  const { formId } = useParams();
  const [responses, setResponses] = useState([]);
  const [visitCount, setVisitCount] = useState(0);
  const [startCount, setStartCount] = useState(0);
  const [submittedCount, setSubmittedCount] = useState(0);

  const handleAddTemplate = (type) => {
    setTemplates((prev) => [...prev, { id: Date.now(), type }]);
  };

  const renderTemplate = (template) => {
    const { label, placeholder } = getLabel(template.type);
    return (
      <div key={template.id} className="new-template">
        <label htmlFor={label}>{label}</label>
        {template.type == "bubbleText" || template.type == "bubbleImage" ? (
          <input type="text" placeholder={placeholder} required />
        ) : (
          ""
        )}
        <button onClick={() => handleDeleteTemplate(template.id)}>
          <img src={deleteBtn} alt="Delete" />
        </button>
      </div>
    );
  };

  const getLabel = (type) => {
    const labels = {
      bubbleText: {
        label: "Bubble Text",
        category: "Bubbles",
        placeholder: "Click here to edit",
      },
      bubbleImage: {
        label: "Bubble Image",
        category: "Bubbles",
        placeholder: "Click to add link",
      },
      text: {
        label: "Text Input",
        category: "Inputs",
        placeholder: "",
      },
      number: {
        label: "Number Input",
        category: "Inputs",
        placeholder: "",
      },
      email: {
        label: "Email Input",
        category: "Inputs",
        placeholder: "",
      },
      phone: {
        label: "Phone Input",
        category: "Inputs",
        placeholder: "",
      },
      date: {
        label: "Date Input",
        category: "Inputs",
        placeholder: "",
      },
      rating: {
        label: "Rating Input",
        category: "Inputs",
        placeholder: "",
      },
      sendBtn: {
        label: "Submit Button",
        category: "Inputs",
        placeholder: "",
      },
    };

    return (
      labels[type] || {
        label: "",
        category: "",
        placeholder: "",
      }
    );
  };

  const handleDeleteTemplate = (id) => {
    setTemplates((prev) => prev.filter((template) => template.id !== id));
  };

  const handleSaveBtn = async (e) => {
    e.preventDefault();
    setShareBtnStatus(true);
    const formTemplate = templates.map((template) => ({
      category: getLabel(template.type).category,
      subCategory: getLabel(template.type).label,
      label: getLabel(template.type).label,
      labelData: getLabel(template.type).placeholder,
    }));
    const data = {
      formId: formId,
      formTemplate: formTemplate,
    };
    const res = await addContentInForm(data);

    if (res.status === 200) {
      const data = await res.json();
      alert(data.message);
    } else {
      const data = await res.json(res);
      alert(data.message);
    }
  };

  const handleFlow = () => {
    setIsFormTabActive(true);
  };

  const handleResponse = async () => {
    setIsFormTabActive(false);
    const res = await showResponses(formId);
    if (res.status === 200) {
      const data = await res.json();
      setVisitCount(data.visitCount);
      setStartCount(data.startCount);
      setSubmittedCount(data.submittedCount);
        setResponses(data.responses);
        setIsRespone(true);
    } else {
      const data = await res.json(res);
      alert(data.message);
    }
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
          <button className="flow" onClick={() => handleFlow()}>
            Flow
          </button>
          <button className="response" onClick={() => handleResponse()}>
            Response
          </button>
        </div>
        <div className="navbar-btns">
          {/* <div className="theme-changer">
          <span>Light</span>
          <button onClick={toggleTheme} className="toggle-btn">
            {isDarkMode ? "Dark" : "Light"}
          </button>
        </div> */}
          <ShareBtn
            btnStatus={shareBtnStatus}
            isFormShareBtn={isFormShareBtn}
          />
          <button className="save-btn" onClick={(e) => handleSaveBtn(e)}>
            Save
          </button>
          <button className="close-btn">
            <img src={close} alt="Close Btn" />
          </button>
        </div>
      </div>
      {isFormTabActive ? (
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
              <button onClick={() => handleAddTemplate("sendBtn")}>
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
      ) : (
        <div className="response-content">
          {!isResponse ? (
            <h1 className="no-response">No Response yet collected</h1>
          ) : (
            <div className="form-responses">
                <div className="response-stats">
                    <div className="view-stat">
                        <h2>Views</h2>
                        <h3>{visitCount}</h3>
                    </div>
                    <div className="start-stat">
                        <h2>Starts</h2>
                        <h3>{startCount}</h3>
                    </div>
                </div>
                <div className="responses-data">
                    {console.log(responses)}
                    {responses.map((response, index) => {
                        
                        return <div className="responses" key={index}>
                             <h4>Submitted At :- {response.submittedAt}</h4>
                        {Object.keys(response.data[0]).map((key, index) => {
                            if (key === "_id" || key === "email" || key === "username") {
                                return null; // Skip this key
                            }
                            const value = response.data[0][key]; // Get the value for the current key
                            return (
                                <div key={index}>
                                    <h3 className="response-value">{key}: {value}</h3>
                                </div>
                            );
                        })}
                        </div>

                    })}
                </div>
                <div className="submit-stats">
                    <div className="pie-chart">

                    </div>
                    <div className="submission-percentage">
                        <h2>Completion rate</h2>
                        <h3>{submittedCount}</h3>
                    </div>
                </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Form;
