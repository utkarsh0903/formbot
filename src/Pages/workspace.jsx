import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreateFolderModal from "../components/CreateFolderModal";
import CreateFormModal from "../components/CreateFormModal";

const Workspace = () => {
    const navigate = useNavigate();
  const [menuState, setMenuState] = useState(false);
  const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [folderName, setFolderName] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token){
        navigate('/login');
    }
  }, [])
  
  const handleLogout = () =>{
    localStorage.clear('token');
    navigate('/');
  }

  const createFolder = () => {
    setIsFolderModalOpen(true);
  }

  const createForm = () => {
    setIsFormModalOpen(true);
  }

  return (
    <div>
      <div className="top-navbar">
        <div className="workspace-btn">
          <span>
            Utkarsh Workspace{" "}
            <button onClick={() => setMenuState(!menuState)} >Click Me</button>
          </span>
          {menuState && (
            <div className="workspace-menu">
              <ul>
                <li><button>Workspace</button></li>
                <li><Link to="/workspace/settings">Settings</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          )}
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
    return (
        <>
        </>
    )
}

const Form = ()=>{
    return <>
    </>
}

export default Workspace;