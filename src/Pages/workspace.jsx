import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Workspace = () => {
    const navigate = useNavigate();
  const [menuState, setMenuState] = useState(false);

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
                <li>Workspace</li>
                <li>Settings</li>
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
        <button>
          <img src="" alt="" />
          <span>Create a folder</span>
        </button>
      </div>
      <div className="create-form-btn">
        <button>
          <img src="" alt="" />
          <span>Create a typebot</span>
        </button>
      </div>
    </div>
  );
};

export default Workspace;
