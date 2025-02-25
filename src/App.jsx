import "./App.css";
import Register from "./Pages/register.jsx";
import Login from "./Pages/login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home.jsx";
import Workspace from "./Pages/workspace.jsx";
import Settings from "./Pages/settings.jsx";
import Form from "./Pages/form.jsx";
import FormbotData from "./Pages/formbotData.jsx";

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/workspace" element={<Workspace />} />
      <Route path="/workspace/:workspaceId" element={<Workspace />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/form/:formId" element={<Form />} />
      <Route path="/form/:formId/formbot" element={<FormbotData />} />
      {/* <Route path="*" element={<NoPage />} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
