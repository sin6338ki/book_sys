import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h4>셀프 도서 대출 시스템</h4>
      <Link to="/login">로그인</Link>
      <Link to="/join">회원가입</Link>
    </div>
  );
};

export default Main;
