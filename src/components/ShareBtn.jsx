import React, { useState } from "react";
import { checkUserMode } from "../services";
import close from "../assets/close.png";
import "../styles/shareBtn.css";
import "../styles/form.css";

const ShareBtn = ({ activeWorkspaceId, btnStatus, isFormShareBtn }) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [sharedMode, setSharedMode] = useState("edit");
  const [sharedEmail, setSharedEmail] = useState("");

  const handleShareBtn = () => {
    setIsShareModalOpen(true);
    if(!btnStatus) setIsShareModalOpen(false);
  };

  const handleSendBtn = async () => {
    const userData = {
      workspaceId: activeWorkspaceId,
      email: sharedEmail,
      mode: sharedMode,
    };
    await shareWorkspace(userData);
  };

  const shareWorkspace = async (userData) => {
    const res = await checkUserMode(userData);
    if (res.status === 200) {
      const data = await res.json();
      setIsShareModalOpen(false);
      alert(data.message);
    } else {
      const data = await res.json(res);
      alert(data.message);
    }
  };

  const handleCopyBtn = () => {
    const linkToCopy =isFormShareBtn ? `${window.location.href}/formbot` : `${window.location.href}/${activeWorkspaceId}`;
    console.log(linkToCopy)
    navigator.clipboard.writeText(linkToCopy)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch(() => {
        alert("Failed to copy the link.");
      });
  };

  return (
    <div>
      <button
        className={btnStatus ? "share-btn" : "disable-shareBtn"}
        onClick={() => handleShareBtn()}
      >
        Share
      </button>
      {isShareModalOpen && (
        <div className="share-overlay">
          <div className="share-container">
            <button
              className="close-btn"
              onClick={() => setIsShareModalOpen(false)}
            >
              <img src={close} alt="Close Btn" />
            </button>
            {!isFormShareBtn && <div className="share-mode">
              <h2>Invite by Email</h2>
              <select
                name="sharedMode"
                onChange={(e) => setSharedMode(e.target.value)}
                value={sharedMode}
              >
                <option value="edit">Edit</option>
                <option value="view">View</option>
              </select>
            </div>}
            {!isFormShareBtn && <input
              type="email"
              placeholder="Enter email id"
              onChange={(e) => setSharedEmail(e.target.value)}
            />}
            {!isFormShareBtn && <button className="send-btn" onClick={(e) => handleSendBtn()}>
              Send Invite
            </button>}
            <h2>Invite by link</h2>
            <button className="copy-btn" onClick={() => handleCopyBtn()}>Copy link</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareBtn;
