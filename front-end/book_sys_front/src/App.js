import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/member/Login";
import Join from "./components/member/Join";
import RentList from "./components/bookInfo/BookRentList";
import Return from "./components/Menu/Return";
import BookRentListById from "./components/bookInfo/BookRentListById";

/** 리덕스 설정 */
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import Registration from "./components/Menu/Registration";
import Apply from "./components/Menu/Apply";

function App() {
  //리덕스 발동시 logger 사용
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware())
      : composeWithDevTools(applyMiddleware(logger));

  //reducer 스토어
  const store = createStore(reducers, enhancer);

  return (
    <Provider store={store}>
      <div className="font-Suite">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book-sys" element={<Apply />} />
          <Route path="/return" element={<Return />} />
          <Route path="/rent-list" element={<RentList />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/rent-list/:bookName" element={<BookRentListById />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
