import React, { useEffect, useState } from "react";
import BookListIcon from "../../asset/book_list.png";
import UserList from "../../asset/user_list.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BookList from "./BookList";
import { saveBookInfo } from "../../rentBookInfo";

const Rent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginId = useSelector((state) => state.saveLoginInfo.loginId);
  const memberType = useSelector((state) => state.saveLoginInfo.memberType);
  const bookName = useSelector((state) => state.rentBookInfo.bookName);
  const bookId = useSelector((state) => state.rentBookInfo.bookId);
  const [inputBookName, setInputBookName] = useState(bookName);
  const [inputMemberId, setInputMemberId] = useState(loginId);
  const [availableBookCnt, setAvailableBookCnt] = useState();

  //대출 신청 버튼 클릭
  const applyRent = () => {
    console.log("inputMemberId : ", inputMemberId);
    const request = {
      bookId: bookId,
      memberId: inputMemberId,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/rent`, request)
      .then((res) => {
        console.log("applyRent response : ", res);
        if (res.data === "rent success") {
          alert("도서 대여 신청이 완료되었습니다!");
          setInputBookName("");
          dispatch(saveBookInfo("", ""));
        }
      })
      .catch((e) => {
        console.log("applyRent error : ", e);
      });
  };

  useEffect(() => {
    setInputBookName(bookName);
  }, [bookName]);

  useEffect(() => {
    loginId && findAvailableBookCnt();
  }, [inputBookName]);

  //도서 대출 가능 권수 조회 메서드
  const findAvailableBookCnt = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/rent/${loginId}`)
      .then((res) => {
        console.log("findAvailableBookCnt response : ", res);
        res.data === "더 이상 도서 대여가 불가능합니다"
          ? setAvailableBookCnt(0)
          : setAvailableBookCnt(res.data);
      })
      .catch((e) => {
        console.log("findAvailableBookCnt error : ", e);
      });
  };

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
              value={inputMemberId}
              onChange={(e) => {
                setInputMemberId(e.target.value);
              }}
              disabled="true"
            />
            <p className="mt-3">가능한 대출 권수 : {availableBookCnt}</p>
            {availableBookCnt === 0 && (
              <p className="text-xs text-red-500 mt-1">
                현재 대여중인 책을 반납 한 후 이용하실 수 있어요
              </p>
            )}
          </div>
          <div className="my-1 border border-gray-500 rounded-md p-2 w-[540px]">
            <p className="text-xs">도서명</p>
            <input
              className="bg-blue-100 w-[520px] p-1 mt-1"
              type="text"
              value={inputBookName}
              disabled="true"
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
        <BookList availableBookCnt={availableBookCnt} />
      </div>
    </div>
  );
};

export default Rent;
