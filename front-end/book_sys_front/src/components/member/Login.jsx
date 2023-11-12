import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveInfo } from "../../saveLoginInfo";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //사용자가 입력한 아이디, 패스워드
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  //로그인
  const login = () => {
    const loginMember = {
      memberId: inputId,
      memberPw: inputPw,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, loginMember)
      .then((res) => {
        console.log("login res : ", res.data);
        //리덕스에 로그인한 사용자 아이디 저장
        if (res.status === 200) {
          dispatch(saveInfo(res.data.memberId, res.data.memberType));
          navigate("/book-sys");
        }
      })
      .catch((e) => {
        console.log("login error : ", e);
        const message = e.response.data;
        alert(message);
      });
  };

  return (
    <div className="flex flex-row h-screen w-auto">
      <img
        className="w-2/3"
        src="https://plus.unsplash.com/premium_photo-1661905921900-a8b49e65feeb?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img>
      <div className="flex flex-col items-start h-screen">
        <h4 className="text-[2rem] font-extrabold p-16">
          <span className="text-yellow-400">로그인</span>을 통해 <br />
          책을 대여하고 반납할 수 있어요
        </h4>
        <div className="border border-gray-500 rounded-md p-2 w-[540px] ml-14">
          <p className="text-xs">아이디</p>
          <input
            className="bg-blue-100 w-[520px] p-1 mt-1"
            type="text"
            placeholder="book1234"
            onChange={(e) => {
              setInputId(e.target.value);
            }}
            value={inputId}
          />
        </div>
        <div className="border border-gray-500 rounded-md p-2 w-[540px] ml-14 mt-3">
          <p className="text-xs">비밀번호 입력</p>
          <input
            className="bg-blue-100 w-[520px] p-1 mt-1"
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={(e) => {
              setInputPw(e.target.value);
            }}
            value={inputPw}
          />
        </div>
        <button
          className="bg-yellow-200 text-lg p-2 mt-5 w-[540px] ml-14 rounded-md text-gray-500"
          onClick={() => {
            login();
          }}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
