import "./App.css";
import Register from "./Pages/register.jsx";
import Login from "./Pages/login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home.jsx";
import Workspace from "./Pages/workspace.jsx";
import Settings from "./Pages/settings.jsx";

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/workspace" element={<Workspace />} >
        <Route path="/workspace/settings" element={<Settings />} />
      </Route>
      {/* <Route path="*" element={<NoPage />} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
