import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookList = ({
  availableBookCnt,
  setSelectBook,
  setUpdateData,
  setIsUpdate,
}) => {
  const navigate = useNavigate();
  //검색한 도서명
  const [searchBookName, setBookName] = useState("");
  //검색 결과 응답 데이터
  const [bookList, setBookList] = useState([]);
  // 도서별 '신청'/'해제' 상태를 나타내는 state
  const [buttonStates, setButtonStates] = useState({});

  //도서 검색 메서드
  const searchBook = (keyword) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/book`, {
        params: { keyword: keyword },
      })
      .then((res) => {
        console.log("searchBook result : ", res);
        if (res.data.length > 0) {
          setBookList(res.data);
          setBookName("");
        } else {
          alert("검색 결과가 없습니다");
        }
      })
      .catch((e) => {
        console.log("searchBook error : ", e);
        alert("검색 결과가 없습니다");
        setBookName("");
      });
  };

  //도서 전체 목록
  useEffect(() => {
    searchBook("");
  }, []);

  //대여 버튼 클릭
  const ckRent = (book) => {
    const newButtonStates = { ...buttonStates };
    if (!newButtonStates[book.book_id]) {
      console.log("신청 버튼 클릭", book);
      setSelectBook({
        bookId: book.book_id,
        bookName: book.book_name,
      });
      newButtonStates[book.book_id] = true;
    } else {
      console.log("해제 버튼 클릭");
      setSelectBook({
        bookId: "",
        bookName: "",
      });
      newButtonStates[book.book_id] = false;
    }
    setButtonStates(newButtonStates);
  };

  return (
    <div className="mt-10">
      <div className="m-7 flex flex-row">
        <p>도서명 검색</p>
        <input
          type="text"
          className="border ml-3 w-[300px] pl-2"
          value={searchBookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        ></input>
        <button
          className="border ml-3 px-3"
          onClick={() => {
            searchBook(searchBookName);
          }}
        >
          검색
        </button>
      </div>
      <table className="mx-7 text-center border w-[920px]">
        <tr className="border">
          <th className="p-2">NO</th>
          <th className="p-2">도서명</th>
          <th className="p-2">저자명</th>
          <th className="p-2">출판사</th>
          <th className="p-2">대여 가능 권수</th>
          <th className="p-2">대출 신청</th>
          <th className="p-2">대출 이력</th>
          <th className="p-2">도서 수정</th>
        </tr>
        <tbody>
          {bookList.map((book, idx) => {
            return (
              <tr>
                <td className="p-2">{idx + 1}</td>
                <td className="p-2">{book.book_name}</td>
                <td className="p-2">{book.book_writer}</td>
                <td className="p-2">{book.book_publisher}</td>
                <td className="p-2">
                  {book.book_cnt - book.book_rental_cnt}
                  <span>/</span>
                  {book.book_cnt}
                </td>
                <td className="p-2">
                  {book.book_cnt - book.book_rental_cnt === 0 ||
                  availableBookCnt === 0 ? (
                    <button disabled="false" className="bg-gray-100 px-3">
                      신청불가
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        ckRent(book);
                      }}
                      className="bg-yellow-100 px-6"
                    >
                      {buttonStates[book.book_id] ? "해제" : "신청"}
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => {
                      navigate("/rent-list");
                    }}
                    className="bg-blue-100 px-6"
                  >
                    이동
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setUpdateData({
                        bookName: book.book_name,
                        bookWriter: book.book_writer,
                        bookPublisher: book.book_publisher,
                        bookCnt: book.book_cnt,
                        bookId: book.book_id,
                      });
                      setIsUpdate(true);
                    }}
                    className="bg-gray-300 px-6"
                  >
                    선택
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
