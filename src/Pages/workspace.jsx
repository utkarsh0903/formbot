import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/workspace.css";
import { Link, useNavigate } from "react-router-dom";
import CreateFolderModal from "../components/CreateFolderModal";
import CreateFormModal from "../components/CreateFormModal";
import {
  createFolder,
  getWorkspace,
  workspace,
  createForm,
  getFolder,
  deleteFolder,
  getForm,
  deleteForm,
  createFormInFolder,
  deleteFormInFolder,
} from "../services";
import DeleteFolderModal from "../components/DeleteFolderModal";
import DeleteFormModal from "../components/DeleteFormModal";
import ShareBtn from "../components/ShareBtn";
import folder from "../assets/folder.png";
import plus from "../assets/plus.png";
import deleteIcon from "../assets/delete.png";

const Workspace = () => {
  const navigate = useNavigate();
  const [workspaceMenu, setWorkspaceMenu] = useState([]);
  const [activeWorkspace, setActiveWorkspace] = useState({});
  const [activeFolder, setActiveFolder] = useState({});
  const [activeForm, setActiveForm] = useState({});
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState("");
  const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);
  const [isDeleteFolderModalOpen, setIsDeleteFolderModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDeleteFormModalOpen, setIsDeleteFormModalOpen] = useState(false);
    const [shareBtnStatus, setShareBtnStatus] = useState(true);
    const [isFormShareBtn, setIsFormShareBtn] = useState(false);
  const [folderData, setFolderData] = useState({
    folderName: "",
    activeWorkspaceId: "",
  });
  const [formData, setFormData] = useState({
    formName: "",
    activeWorkspaceId: "",
  });
  const [inFolderFormData, setInFolderFormData] = useState({
    formName: "",
    activeWorkspaceId: "",
    activeFolderId: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    createWorkspace();
  }, []);

  const createWorkspace = async () => {
    const res = await workspace();
    if (res.status === 200) {
      const data = await res.json(res);
      const workspaces = Array.isArray(data.workspace)
        ? data.workspace
        : [data.workspace];
      setActiveWorkspace(workspaces[0]);
      setWorkspaceMenu(workspaces);
    } else {
      const data = await res.json(res);
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
    } else {
      setSelectedWorkspace(value);
      changeWorkspace(value);
    }
  };

  const changeWorkspace = async (username) => {
    const selectedWorkspace = await workspaceMenu.find(
      (workspace) => workspace.owner.username === username
    );
    const workspaceId = selectedWorkspace._id;
    const res = await getWorkspace(workspaceId);
    if (res.status === 200) {
      const data = await res.json(res);
      setActiveWorkspace(data.workspace);
    } else {
      const data = await res.json(res);
      alert(data.message);
    }
  };

  const handleCreateFolder = async (e) => {
    e.preventDefault();
    const res = await createFolder(folderData);
    if (res.status === 200) {
      const data = await res.json(res);
      createWorkspace();
      setIsFolderModalOpen(false);
      setFolderData({
        folderName: "",
        activeWorkspaceId: "",
      });
    } else {
      const data = await res.json(res);
      alert(data.message);
    }
  };

  const handleCreateForm = async (e) => {
    e.preventDefault();
    const res = await (isFolderOpen
      ? createFormInFolder(inFolderFormData)
      : createForm(formData));
    if (res.status === 200) {
      const data = await res.json(res);
      isFolderOpen ? openFolder(data.form.folder) : createWorkspace();
      setIsFormModalOpen(false);
      isFolderOpen
        ? setInFolderFormData({
            formName: "",
            activeWorkspaceId: "",
            activeFolderId: "",
          })
        : setFormData({
            formName: "",
            activeWorkspaceId: "",
          });
    } else {
      const data = await res.json(res);
      alert(data.message);
    }
  };

  const openFolder = async (folderId) => {
    if (isFolderOpen) {
      setActiveFolder({});
    } else {
      const res = await getFolder(folderId);
      if (res.status === 200) {
        const data = await res.json(res);
        setActiveFolder(data);
      } else {
        const data = await res.json(res);
        alert(data.message);
      }
    }

    setIsFolderOpen(!isFolderOpen);
  };

  const openForm = async (formId) => {
    const res = await getForm(formId);
    if (res.status === 200) {
      const data = await res.json(res);
      setActiveForm(data);
    } else {
      const data = await res.json(res);
      alert(data.message);
    }
  };

  const handleDeleteFolderBtn = (folderId) => {
    openFolder(folderId);
    setIsDeleteFolderModalOpen(true);
  };

  const handleDeleteFormBtn = (formId) => {
    openForm(formId);
    setIsDeleteFormModalOpen(true);
  };

  const handleDeleteFolder = async (e, folderData) => {
    e.preventDefault();
    const res = await deleteFolder(folderData);
    if (res.status === 200) {
      setIsFolderOpen(false);
      createWorkspace();
      setIsDeleteFolderModalOpen(false);
    } else {
      const data = await res.json(res);
      alert(data.message);
    }
  };

  const handleDeleteForm = async (e, formData) => {
    e.preventDefault();
    const res = await (isFolderOpen
      ? deleteFormInFolder(formData)
      : deleteForm(formData));
    if (res.status === 200) {
      const data = await res.json();
      alert(data.message);
      isFolderOpen ? openFolder(activeFolder._id) : createWorkspace();
      setIsDeleteFormModalOpen(false);
    } else {
      const data = await res.json(res);
      alert(data.message);
    }
  };

  return (
    <div className="workspace-container">
      <div className="topp-navbar">
        <div className="workspace-btn">
          <select
            onChange={(e) => {
              handleWorkspaceMenu(e, e.target.value);
            }}
            value={selectedWorkspace}
            name="workspace"
            className="select-btn"
          >
            {workspaceMenu.map((workspace, index) => (
              <option
                className="option-btn"
                key={index}
                value={workspace.owner.username}
              >
                {workspace.owner.username} Workspace
              </option>
            ))}
            <option value="settings">Settings</option>
            <option value="logout" id="logout-btn">
              Logout
            </option>
          </select>
        </div>
        <div className="theme-changer">
          <h4>Light</h4>
          <button>Change</button>
          <h4>Dark</h4>
        </div>
        <div className="share-button">
          <ShareBtn activeWorkspaceId={activeWorkspace._id} btnStatus={shareBtnStatus} isFormShareBtn={isFormShareBtn} />
        </div>
      </div>
      <div className="create-folder">
        <button
          className="create-folder-btn"
          onClick={() => setIsFolderModalOpen(true)}
        >
          <img src={folder} alt="Folder" />
          <span>Create a folder</span>
        </button>
        {isFolderModalOpen && (
          <CreateFolderModal
            activeWorkspaceId={activeWorkspace._id}
            folderData={folderData}
            setFolderData={setFolderData}
            setIsFolderModalOpen={setIsFolderModalOpen}
            handleCreateFolder={handleCreateFolder}
          />
        )}
        {isDeleteFolderModalOpen && (
          <DeleteFolderModal
            activeWorkspaceId={activeWorkspace._id}
            folderData={folderData}
            folderName={activeFolder.folderName}
            setIsDeleteFolderModalOpen={setIsDeleteFolderModalOpen}
            handleDeleteFolder={handleDeleteFolder}
          />
        )}
        {activeWorkspace?.folder?.length > 0 &&
          activeWorkspace.folder.map((folder) => (
            <div
              key={folder.folderId}
              className="folders"
              id={
                activeFolder._id === folder.folderId
                  ? "active-folder"
                  : "inactive-folder"
              }
            >
              <button onClick={() => openFolder(folder.folderId)}>
                {folder.folderName}
              </button>
              <button onClick={() => handleDeleteFolderBtn(folder.folderId)}>
                <img src={deleteIcon} alt="Delete Icon" />
              </button>
            </div>
          ))}
      </div>
      <div className="create-form">
        <button
          className="create-form-btn"
          onClick={() => setIsFormModalOpen(true)}
        >
          <img src={plus} alt="Plus" />
          <span>Create a typebot</span>
        </button>
        {isFormModalOpen && (
          <CreateFormModal
            activeWorkspaceId={activeWorkspace._id}
            formData={isFolderOpen ? inFolderFormData : formData}
            setFormData={isFolderOpen ? setInFolderFormData : setFormData}
            handleCreateForm={handleCreateForm}
            activeFolderId={activeFolder ? activeFolder._id : null}
            setIsFormModalOpen={setIsFormModalOpen}
          />
        )}
        {isDeleteFormModalOpen && (
          <DeleteFormModal
            activeWorkspaceId={activeWorkspace._id}
            activeFolderId={activeFolder ? activeFolder._id : null}
            formData={isFolderOpen ? inFolderFormData : formData}
            formName={activeForm.formName}
            setIsDeleteFormModalOpen={setIsDeleteFormModalOpen}
            handleDeleteForm={handleDeleteForm}
          />
        )}
        {isFolderOpen ? (
          activeFolder?.form?.length > 0 ? (
            activeFolder.form.map((form) => (
              <div key={form.formId} className="forms">
                <button onClick={() => navigate(`/form/${form.formId}`)}>
                  {form.formName}
                </button>
                <button onClick={() => handleDeleteFormBtn(form.formId)}>
                  <img src={deleteIcon} alt="Delete Icon" />
                </button>
              </div>
            ))
          ) : (
            <p></p>
          )
        ) : (
          activeWorkspace?.form?.length > 0 &&
          activeWorkspace.form.map((form) => (
            <div key={form.formId} className="forms">
              <button onClick={() => navigate(`/form/${form.formId}`)}>
                {form.formName}
              </button>
              <button onClick={() => handleDeleteFormBtn(form.formId)}>
                <img src={deleteIcon} alt="Delete Icon" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Workspace;
