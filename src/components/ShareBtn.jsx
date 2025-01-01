import React, { useState } from "react";
import { checkUserMode } from "../services";
import close from "../assets/close.png";

const ShareBtn = ({ activeWorkspaceId }) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [sharedMode, setSharedMode] = useState("edit");
  const [sharedEmail, setSharedEmail] = useState("");

  const handleShareBtn = () => {
    setIsShareModalOpen(true);
  };

  const handleSendBtn = async () => {
    const userData ={
        workspaceId: activeWorkspaceId,
        email: sharedEmail,
        mode: sharedMode
    }
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
  }

  return (
    <div>
      <button onClick={() => handleShareBtn()}>Share</button>
      {isShareModalOpen && (
        <div>
          <button onClick={() => setIsShareModalOpen(false)}>
            <img src={close} alt="Close Btn" />
          </button>
          <h2>Invite by Email</h2>
          <select
            name="sharedMode"
            onChange={(e) => setSharedMode(e.target.value)}
            value={sharedMode}
          >
            <option value="edit">Edit</option>
            <option value="view">View</option>
          </select>
          <input type="email" placeholder="Enter email id" onChange={(e) => setSharedEmail(e.target.value)} />
          <button onClick={(e) => handleSendBtn()}>Send Invite</button>
          <h2>Invite by link</h2>
          <button>Copy link</button>
        </div>
      )}
    </div>
  );
};

export default ShareBtn;
