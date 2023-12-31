import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../../asset/home.png";
import RentList from "../bookInfo/BookRentList";

const Return = () => {
  const navigate = useNavigate();
  //로그인 정보
  const loginId = useSelector((state) => state.saveLoginInfo.loginId);
  const memberType = useSelector((state) => state.saveLoginInfo.memberType);
  //rentId
  const [rentId, setRentId] = useState("");
  //memberId
  const [selectMemberId, setSelectMemberId] = useState("");
  //도서명
  const [inputBookName, setInputBookName] = useState("");
  //bookId
  const [bookId, setBookId] = useState("");

  //화면렌더링
  useEffect(() => {
    if (loginId && memberType === 1) {
    } else {
      alert("관리자 계정만 접근이 가능합니다.");
      navigate("/");
    }
  }, [loginId, memberType]);

  //반납 신청 버튼 클릭
  const applyReturn = () => {
    const request = {
      rentId: rentId,
      memberId: selectMemberId,
      bookId: bookId,
    };

    axios
      .put(`${process.env.REACT_APP_API_URL}/return`, request)
      .then((res) => {
        // console.log("applyRent response : ", res);
        if (res.data === "return success") {
          alert("도서 반납이 완료되었습니다!");
          setInputBookName("");
          setSelectMemberId("");
        }
      })
      .catch((e) => {
        // console.log("applyReturn error : ", e);
      });
  };

  return (
    <div className="w-auto">
      <div className="flex flex-row justify-between items-center p-7 bg-yellow-200">
        <h4 className="text-4xl font-extrabold">반납 신청</h4>
        <div>
          {memberType === 1 && (
            <div>
              <button
                className="w-24 h-16"
                onClick={() => {
                  navigate("/");
                }}
              >
                <img src={Home}></img>
                <p className="font-bold">메인메뉴</p>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <div className="m-10 flex flex-col items-center">
          <p className="m-10 font-bold">
            반납 신청을 클릭하면, 도서 반납이 가능합니다.
          </p>
          <button
            onClick={() => {
              navigate("/book-sys");
            }}
            className="bg-yellow-300 text-lg p-2 my-5 w-[540px] rounded-md text-gray-500"
          >
            대출 신청하러 가기
          </button>
          <div className="my-1 border border-gray-500 rounded-md p-2 w-[540px]">
            <p className="text-xs">도서명</p>
            <input
              className="bg-blue-100 w-[520px] p-1 mt-1"
              type="text"
              value={inputBookName}
              disabled="true"
            />
          </div>
          <div className="my-1 border border-gray-500 rounded-md p-2 w-[540px]">
            <p className="text-xs">회원 아이디</p>
            <input
              className="bg-blue-100 w-[520px] p-1 mt-1"
              type="text"
              value={selectMemberId}
              disabled="true"
              onChange={(e) => {
                selectMemberId(e.target.value);
              }}
            />
          </div>
          <button
            onClick={() => {
              applyReturn();
            }}
            className="bg-blue-200 text-lg p-2 mt-5 w-[540px] rounded-md text-gray-500"
          >
            반납 신청
          </button>
        </div>
        <RentList
          setSelectMemberId={setSelectMemberId}
          setInputBookName={setInputBookName}
          setRentId={setRentId}
          setBookId={setBookId}
        />
      </div>
    </div>
  );
};

export default Return;
