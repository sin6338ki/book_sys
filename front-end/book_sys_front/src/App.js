import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Login from "./components/member/Login";
import Join from "./components/member/Join";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
