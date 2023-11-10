import React, { useState } from "react";
import BookListIcon from "../../asset/book_list.png";
import UserList from "../../asset/user_list.png";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BookList from "./BookList";

const Rent = () => {
  const navigate = useNavigate();
  const loginId = useSelector((state) => state.saveLoginInfo.loginId);
  const memberType = useSelector((state) => state.saveLoginInfo.memberType);
  const bookName = useSelector((state) => state.rentBookInfo.bookName);

  //대출 신청 버튼 클릭
  const applyRent = () => {};

  return (
    <div>
      <div className="flex flex-row justify-between items-center p-7 bg-yellow-200">
        <h4 className="text-4xl font-extrabold">대출 신청</h4>
        <div>
          {memberType === 1 && (
            <div>
              <button className="w-16 h-16 mx-10">
                <img src={BookListIcon}></img>
                <p
                  className="font-bold"
                  onClick={() => {
                    navigate("/registration");
                  }}
                >
                  도서 등록
                </p>
              </button>
              <button className="w-16 h-16">
                <img src={UserList}></img>
                <p className="font-bold">회원 목록</p>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <div className="m-10 flex flex-col items-center">
          <p className="m-10 font-bold">
            대출 신청을 클릭하면, 도서 대출이 가능합니다.
          </p>
          <div className="my-1 border border-gray-500 rounded-md p-2 w-[540px]">
            <p className="text-xs">회원 아이디</p>
            <input
              className="bg-blue-100 w-[520px] p-1 mt-1"
              type="text"
              value={loginId}
            />
          </div>
          <div className="my-1 border border-gray-500 rounded-md p-2 w-[540px]">
            <p className="text-xs">도서명</p>
            <input
              className="bg-blue-100 w-[520px] p-1 mt-1"
              type="text"
              value={bookName}
            />
          </div>
          <button
            onClick={() => {
              applyRent();
            }}
            className="bg-yellow-200 text-lg p-2 mt-5 w-[540px] rounded-md text-gray-500"
          >
            대출 신청
          </button>
        </div>
        <BookList />
      </div>
    </div>
  );
};

export default Rent;
