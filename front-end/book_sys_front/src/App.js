import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Login from "./components/member/Login";
import Join from "./components/member/Join";

function App() {
  return (
    <div className="font-Suite">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-sys" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
