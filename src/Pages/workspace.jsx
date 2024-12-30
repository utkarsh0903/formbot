import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreateFolderModal from "../components/CreateFolderModal";
import CreateFormModal from "../components/CreateFormModal";
import { workspace } from "../services";

const Workspace = () => {
  const navigate = useNavigate();
  const [workspaceMenu, setWorkspaceMenu] = useState([]);
  const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [folderName, setFolderName] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    console.log(1);
    createWorkspace();
  }, []);

  const createWorkspace = async () => {
    const res = await workspace();
    if (res.status === 200) {
      const data = await res.json(res);
      const workspaces = Array.isArray(data.workspace)
        ? data.workspace
        : [data.workspace];
      setWorkspaceMenu(workspaces);
      console.log(data.workspace);
    } else {
      const data = await res.json(res);
      console.log(data);
      alert(data.message);
    }
  };

  const handleLogout = () => {
    localStorage.clear("token");
    navigate("/");
  };

  const handleWorkspaceMenu = (e, value) => {
    e.preventDefault();
    if (value == "logout") {
      handleLogout();
    } else if (value == "settings") {
      navigate("/settings");
    }
  };

  const createFolder = () => {
    setIsFolderModalOpen(true);
  };

  const createForm = () => {
    setIsFormModalOpen(true);
  };

  return (
    <div>
      <div className="top-navbar">
        <div className="workspace-btn">
          <select
            onChange={(e) => {
              handleWorkspaceMenu(e, e.target.value);
            }}
            value={
              workspaceMenu.length > 0 ? workspaceMenu[0]?.owner?.username : ""
            }
            name="workspace"
          >
            {workspaceMenu.map((workspace, index) => (
              <option key={index} value={workspace.owner.username}>
                {workspace.owner.username} Workspace
              </option>
            ))}
            <option value="settings">Settings</option>
            <option value="logout">Logout</option>
          </select>
        </div>
        <div className="theme-changer">
          <h4>Light</h4>
          <button>Change</button>
          <h4>Dark</h4>
        </div>
        <div className="share-btn">
          <button>Share</button>
        </div>
      </div>
      <hr />
      <div className="create-folder-btn">
        <button onClick={createFolder}>
          <img src="" alt="" />
          <span>Create a folder</span>
          {isFolderModalOpen && <CreateFolderModal />}
        </button>
      </div>
      <div className="create-form-btn">
        <button onClick={createForm}>
          <img src="" alt="" />
          <span>Create a typebot</span>
          {isFormModalOpen && <CreateFormModal />}
        </button>
      </div>
    </div>
  );
};

const Folder = () => {
  return <></>;
};

const Form = () => {
  return <></>;
};

export default Workspace;
