import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  //사용자가 입력한 아이디, 패스워드
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  //로그인
  const login = () => {
    const loginMember = {
      memberId: inputId,
      memberPw: inputPw,
      memberName: "",
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, loginMember)
      .then((res) => {
        console.log("login res : ", res);
      })
      .catch((e) => {
        console.log("login error : ", e);
      });
  };

  return (
    <div>
      <h4>Login</h4>
      <input
        type="text"
        placeholder="아이디를 입력하세요"
        onChange={(e) => {
          setInputId(e.target.value);
        }}
        value={inputId}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        onChange={(e) => {
          setInputPw(e.target.value);
        }}
        value={inputPw}
      />
      <button
        onClick={() => {
          login();
        }}
      >
        로그인
      </button>
    </div>
  );
};

export default Login;
