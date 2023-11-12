import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Rent = ({
  inputMemberId,
  setInputMemberId,
  availableBookCnt,
  inputBookName,
  selectBook,
  setInputBookName,
  setButtonStates,
}) => {
  const navigate = useNavigate();
  const loginId = useSelector((state) => state.saveLoginInfo.loginId);
  const memberType = useSelector((state) => state.saveLoginInfo.memberType);

  //대출 신청 버튼 클릭
  const applyRent = (e) => {
    console.log("inputMemberId : ", inputMemberId);
    const request = {
      bookId: selectBook.bookId,
      memberId: inputMemberId,
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
          setInputMemberId("");
          setButtonStates("신청");
        }
      })
      .catch((e) => {
        console.log("applyRent error : ", e);
        alert(e.response.data);
        setInputBookName("");
        setButtonStates("신청");
      });
  };

  //반납 신청 버튼 클릭
  const applyReturn = (e) => {
    navigate("/return");
  };

  return (
    <div className="w-auto">
      <div className="flex flex-row justify-around">
        <div className="m-10 flex flex-col items-center">
          <p className="m-10 font-bold">
            대출 신청을 클릭하면, 도서 대출이 가능합니다.
          </p>
          <button
            onClick={(e) => {
              applyReturn(e);
            }}
            className="bg-blue-300 text-lg p-2 my-5 w-[540px] rounded-md text-gray-500"
          >
            반납 신청하러 가기
          </button>
          <div className="my-1 border border-gray-500 rounded-md p-2 w-[540px]">
            <p className="text-xs">회원 아이디</p>
            {memberType === 0 ? (
              <input
                className="bg-blue-100 w-[520px] p-1 mt-1"
                type="text"
                value={loginId}
                disabled="true"
              />
            ) : (
              <input
                className="bg-blue-100 w-[520px] p-1 mt-1"
                type="text"
                value={inputMemberId}
                onChange={(e) => {
                  setInputMemberId(e.target.value);
                }}
              />
            )}
            {availableBookCnt === -1 ? (
              <p className="mt-3 text-red-500">아이디가 존재하지 않습니다.</p>
            ) : (
              <p className="mt-3">가능한 대출 권수 : {availableBookCnt}</p>
            )}
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
            onClick={(e) => {
              applyRent(e);
            }}
            className="bg-yellow-200 text-lg p-2 mt-5 w-[540px] rounded-md text-gray-500"
          >
            대출 신청
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rent;
