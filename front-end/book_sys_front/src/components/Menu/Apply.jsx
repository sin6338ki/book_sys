import React, { useEffect, useState } from "react";
import BookListIcon from "../../asset/book_list.png";
import UserList from "../../asset/user_list.png";
import Books from "../../asset/books.png";
import Home from "../../asset/home.png";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BookList from "./BookList";
import MemberList from "../member/MemberList";
import Rent from "./Rent";

const Apply = () => {
  const navigate = useNavigate();
  const loginId = useSelector((state) => state.saveLoginInfo.loginId);
  const memberType = useSelector((state) => state.saveLoginInfo.memberType);
  const [inputBookName, setInputBookName] = useState("");
  const [inputMemberId, setInputMemberId] = useState("");
  const [availableBookCnt, setAvailableBookCnt] = useState();
  const [showBookList, setShowBookList] = useState(true);

  //선택한 책 정보
  const [selectBook, setSelectBook] = useState({
    bookId: "",
    bookName: "",
  });

  //화면렌더링
  useEffect(() => {
    if (memberType !== 1) {
      setInputMemberId(loginId);
    }
  }, []);

  useEffect(() => {
    console.log("inputBookName : ", inputBookName);
  }, [inputBookName]);

  useEffect(() => {
    console.log("selectBook : ", selectBook.bookName);
    setInputBookName(selectBook.bookName);
  }, [selectBook]);

  useEffect(() => {
    loginId && findAvailableBookCnt();
  }, [inputBookName, inputMemberId]);

  //도서 대출 가능 권수 조회 메서드
  const findAvailableBookCnt = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/rent/${inputMemberId}`)
      .then((res) => {
        console.log("findAvailableBookCnt response : ", res);
        if (res.data === "더 이상 도서 대여가 불가능합니다") {
          setAvailableBookCnt(0);
        } else if (res.data === "아이디가 존재하지 않습니다.") {
          setAvailableBookCnt(-1);
        } else {
          setAvailableBookCnt(res.data);
        }
      })
      .catch((e) => {
        console.log("findAvailableBookCnt error : ", e);
      });
  };

  //member조회
  const showMemberList = () => {
    setShowBookList(false);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center p-7 bg-yellow-200">
        <h4 className="text-4xl font-extrabold">도서 대출/반납 신청</h4>
        <div>
          {memberType === 1 && (
            <>
              <button
                className="w-16 h-16 mr-10"
                onClick={() => {
                  navigate("/registration");
                }}
              >
                <img src={BookListIcon}></img>
                <p className="font-bold">도서 등록/수정</p>
              </button>
              <button
                className="w-16 h-16 mr-10"
                onClick={() => {
                  showMemberList();
                }}
              >
                <img src={UserList}></img>
                <p className="font-bold">회원 목록</p>
              </button>
              <button
                className="w-16 h-16 mr-10"
                onClick={() => {
                  setShowBookList(true);
                }}
              >
                <img src={Books}></img>
                <p className="font-bold">도서 목록</p>
              </button>
              <button
                className="w-16 h-16"
                onClick={() => {
                  navigate("/");
                }}
              >
                <img src={Home}></img>
                <p className="font-bold">메인메뉴</p>
              </button>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <Rent
          selectBook={selectBook}
          inputBookName={inputBookName}
          availableBookCnt={availableBookCnt}
          setInputBookName={setInputBookName}
        />
        {showBookList ? (
          <BookList
            availableBookCnt={availableBookCnt}
            setSelectBook={setSelectBook}
          />
        ) : (
          <MemberList
            inputMemberId={inputMemberId}
            setInputMemberId={setInputMemberId}
          />
        )}
      </div>
    </div>
  );
};

export default Apply;
