import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Login from "./components/member/Login";
import Join from "./components/member/Join";
import RentList from "./components/member/RentList";
import Rent from "./components/Menu/Rent";
import Return from "./components/Menu/Return";
import BookList from "./components/Menu/BookList";

function App() {
  return (
    <div className="font-Suite">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-sys" element={<Menu />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/return" element={<Return />} />
        <Route path="/rent-list" element={<RentList />} />
        <Route path="/book-list" elememt={<BookList />} />
      </Routes>
    </div>
  );
}

export default App;
