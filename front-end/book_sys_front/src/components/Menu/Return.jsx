import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserList from "../../asset/user_list.png";
import Books from "../../asset/books.png";
import Home from "../../asset/home.png";
import RentList from "../bookInfo/BookRentList";

const Return = () => {
  const navigate = useNavigate();
  //로그인 정보
  const loginId = useSelector((state) => state.saveLoginInfo.loginId);
  const memberType = useSelector((state) => state.saveLoginInfo.memberType);
  //member조회
  const showMemberList = () => {
    setShowRentList(false);
  };
  //rentId
  const [rentId, setRentId] = useState("");
  //memberId
  const [selectMemberId, setSelectMemberId] = useState("");
  //도서명
  const [inputBookName, setInputBookName] = useState("");
  //bookId
  const [bookId, setBookId] = useState("");
  const [availableBookCnt, setAvailableBookCnt] = useState();

  // 대출 이력 보기 상태
  const [showRentList, setShowRentList] = useState(true);

  //선택한 책 정보
  const [selectBook, setSelectBook] = useState({
    bookId: "",
    bookName: "",
  });

  useEffect(() => {
    console.log("inputBookName : ", inputBookName);
  }, [inputBookName]);

  useEffect(() => {
    console.log("selectBook : ", selectBook.bookName);
    setInputBookName(selectBook.bookName);
  }, [selectBook]);

  //반납 신청 버튼 클릭
  const applyReturn = (e) => {
    const request = {
      rentId: rentId,
      memberId: selectMemberId,
      bookId: bookId,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/rent`, request)
      .then((res) => {
        console.log("applyRent response : ", res);
        if (res.data === "rent success") {
          console.log("memberType : ", memberType);
          console.log("memberId : ", loginId);
          alert("도서 대출 신청이 완료되었습니다!");
          setInputBookName("");
          setSelectMemberId("");
        }
      })
      .catch((e) => {
        console.log("applyRent error : ", e);
      });
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center p-7 bg-yellow-200">
        <h4 className="text-4xl font-extrabold">반납 신청</h4>
        <div>
          {memberType === 1 && (
            <div>
              <button
                className="w-16 h-16"
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
            onClick={(e) => {
              applyReturn(e);
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
