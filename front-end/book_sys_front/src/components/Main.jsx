import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveInfo } from "../saveLoginInfo";

const Main = () => {
  const dispatch = useDispatch();
  const memberType = useSelector((state) => state.saveLoginInfo.memberType);

  //로그아웃 메서드
  const logout = () => {
    //redux 로그인 정보 초기화
    dispatch(saveInfo("", ""));
  };
  return (
    <div className="flex flex-col items-center h-screen w-auto">
      <img
        alt="background-image"
        className="w-full h-1/2"
        src="https://images.unsplash.com/photo-1602722053020-af31042989d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <h4 className="text-8xl mt-14 font-extrabold">도서 대출 시스템</h4>
      {memberType !== 1 ? (
        <>
          <Link
            to="/login"
            className="mt-14 text-4xl rounded-full bg-black py-3 w-[560px] text-center text-white"
          >
            로그인
          </Link>
          <Link
            to="/join"
            className="mt-7 text-4xl rounded-full bg-gray-500 py-3 w-[560px] text-center text-white"
          >
            회원 등록
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/book-sys"
            className="mt-14 text-4xl rounded-full bg-black py-3 w-[560px] text-center text-white"
          >
            도서 대출/반납 페이지로 이동
          </Link>
          <button
            onClick={() => {
              logout();
            }}
            className="mt-7 text-4xl rounded-full bg-black py-3 w-[560px] text-center text-white"
          >
            로그아웃
          </button>
        </>
      )}
    </div>
  );
};

export default Main;
