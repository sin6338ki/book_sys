import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Menu = () => {
  const navigate = useNavigate();
  const loginId = useSelector((state) => state.saveLoginInfo.loginId);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-yellow-100 to-pink-100">
      <h1 className="text-4xl self-start ml-36 font-bold">
        셀프 도서 대출 시스템
      </h1>
      <p className="self-start ml-36 mt-3">안녕하세요, {loginId}님!</p>
      <div className="flex flex-row">
        <button
          className="rounded-lg text-4xl font-extrabold px-32 py-40 bg-yellow-300 m-5"
          onClick={() => {
            navigate("/rent");
          }}
        >
          대출
        </button>
        <button
          className="rounded-lg text-4xl font-extrabold px-32 py-40 bg-yellow-300 m-5"
          onClick={() => {
            navigate("/return");
          }}
        >
          반납
        </button>
      </div>
      <button
        className="mt-7 rounded-full text-2xl font-bold w-[680px] py-6 bg-gray-800 text-white"
        onClick={() => {
          navigate("/rent-list");
        }}
      >
        도서별 대출 이력 조회
      </button>
      <button
        className="mt-5 rounded-full text-2xl font-bold w-[680px] py-6 bg-gray-800 text-white"
        onClick={() => {
          navigate("/book-list");
        }}
      >
        책 목록 조회
      </button>
    </div>
  );
};

export default Menu;
