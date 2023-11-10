import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-yellow-100 to-pink-100">
      <h1 className="text-4xl mb-20 self-start ml-36 font-bold">
        셀프 도서 대출 시스템
      </h1>
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
        대출 이력 조회
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
