import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const [inputBookName, setInputBookName] = useState("");
  const [inputWriter, setInputWriter] = useState("");
  const [inputPublisher, setInputPublisher] = useState("");
  const [inputBookCnt, setInputBookCnt] = useState(1);

  const regBook = () => {
    if (inputBookName != "" && inputWriter != "" && inputPublisher != "") {
      const data = {
        bookName: inputBookName,
        bookWriter: inputWriter,
        bookPublisher: inputPublisher,
        bookCnt: inputBookCnt,
      };
      axios
        .post(`${process.env.REACT_APP_API_URL}/book`, data)
        .then((res) => {
          console.log("regBook response : ", res);
          if (res.data === "success book registration") {
            //입력창 초기화
            setInputBookName("");
            setInputWriter("");
            setInputPublisher("");
            setInputBookCnt(1);
          }
        })
        .catch((e) => {
          console.log("regBook error : ", e);
        });
    } else {
      alert("모든 항목을 입력해 주세요");
    }
  };

  return (
    <div className="flex flex-col h-screen w-auto">
      <h4 className="text-[2rem] font-extrabold p-16">도서 등록하기</h4>
      <div className="border border-gray-500 rounded-md p-2 w-[540px] ml-14">
        <p className="text-xs">도서명</p>
        <input
          className="bg-blue-100 w-[520px] p-1 mt-1"
          type="text"
          value={inputBookName}
          onChange={(e) => {
            setInputBookName(e.target.value);
          }}
        />
      </div>

      <div className="mt-5 border border-gray-500 rounded-md p-2 w-[540px] ml-14">
        <p className="text-xs">저자명</p>
        <input
          className="bg-blue-100 w-[520px] p-1 mt-1"
          type="text"
          value={inputWriter}
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
        />
      </div>

      <div className="mt-5 border border-gray-500 rounded-md p-2 w-[540px] ml-14">
        <p className="text-xs">출판사</p>
        <input
          className="bg-blue-100 w-[520px] p-1 mt-1"
          type="text"
          value={inputPublisher}
          onChange={(e) => {
            setInputPublisher(e.target.value);
          }}
        />
      </div>

      <div className="mt-5 border border-gray-500 rounded-md p-2 w-[540px] ml-14">
        <p className="text-xs">등록 권수</p>
        <input
          className="bg-blue-100 w-[520px] p-1 mt-1"
          type="number"
          value={inputBookCnt}
          min="1"
          onChange={(e) => {
            setInputBookCnt(e.target.value);
          }}
        />
      </div>

      <button
        className="bg-yellow-200 text-lg p-2 mt-5 w-[540px] ml-14 rounded-md text-gray-500"
        onClick={() => {
          regBook();
        }}
      >
        등록하기
      </button>
      <Link
        className="bg-gray-300 text-lg text-center p-2 mt-5 w-[540px] ml-14 rounded-md text-gray-500"
        to="/book-list"
      >
        도서 목록으로 돌아가기
      </Link>
    </div>
  );
};

export default Registration;
