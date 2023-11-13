import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserList from "../../asset/user_list.png";
import Books from "../../asset/books.png";
import Home from "../../asset/home.png";

const Registration = () => {
  const navigate = useNavigate();
  const memberType = useSelector((state) => state.saveLoginInfo.memberType);
  const [inputBookName, setInputBookName] = useState("");
  const [inputWriter, setInputWriter] = useState("");
  const [inputPublisher, setInputPublisher] = useState("");
  const [inputBookCnt, setInputBookCnt] = useState(1);
  const [inputBookId, setInputBookId] = useState("");
  const [bookList, setBookList] = useState([]);

  //수정, 등록 판단
  const [isUpdate, setIsUpdate] = useState(false);

  //도서 등록 메서드
  const regBook = () => {
    if (inputBookName !== "" && inputWriter !== "" && inputPublisher !== "") {
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
            alert("등록이 완료되었습니다.");
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

  //도서 수정 메서드
  const updateBook = () => {
    const data = {
      bookName: inputBookName,
      bookWriter: inputWriter,
      bookPublisher: inputPublisher,
      bookCnt: inputBookCnt,
      bookId: inputBookId,
    };
    if (inputBookName !== "" && inputWriter !== "" && inputPublisher !== "") {
      axios
        .put(`${process.env.REACT_APP_API_URL}/book`, data)
        .then((res) => {
          console.log("updateBook response : ", res);
          if (res.data === "update success") {
            alert("수정이 완료되었습니다.");
            //입력창 초기화
            setInputBookName("");
            setInputWriter("");
            setInputPublisher("");
            setInputBookCnt(1);
          }
        })
        .catch((e) => {
          console.log("updateBook error : ", e);
        });
    } else {
      alert("모든 항목을 입력해 주세요");
    }
  };

  //도서 검색 메서드
  const searchBook = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/book`, {
        params: { keyword: inputBookName },
      })
      .then((res) => {
        console.log("searchBook result : ", res);
        if (res.data.length > 0) {
          setBookList(res.data);
          setIsUpdate(true);
          setInputBookName(res.data[0].book_name);
          setInputWriter(res.data[0].book_writer);
          setInputPublisher(res.data[0].book_publisher);
          setInputBookCnt(res.data[0].book_cnt);
          setInputBookId(res.data[0].book_id);
        } else {
          alert("검색 결과가 없습니다");
        }
      })
      .catch((e) => {
        console.log("searchBook error : ", e);
        alert("검색 결과가 없습니다");
      });
  };

  return (
    <div className="flex flex-col h-screen w-auto">
      <div className="flex flex-row justify-between items-center p-7 bg-yellow-200">
        <h4 className="text-4xl font-extrabold">도서 등록/수정</h4>
        <div>
          {memberType === 1 && (
            <>
              <button
                className="w-16 h-16 mr-10"
                onClick={() => {
                  navigate("/book-sys");
                }}
              >
                <img alt="rent-icon" src={UserList}></img>
                <p className="font-bold">도서 대출</p>
              </button>
              <button
                className="w-16 h-16 mr-10"
                onClick={() => {
                  navigate("/return");
                }}
              >
                <img alt="return-icon" src={Books}></img>
                <p className="font-bold">도서 반납</p>
              </button>
              <button
                className="w-16 h-16"
                onClick={() => {
                  navigate("/");
                }}
              >
                <img alt="home-icon" src={Home}></img>
                <p className="font-bold">메인메뉴</p>
              </button>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <div>
          <h4 className="text-[2rem] font-extrabold p-16">
            도서 등록/수정하기
          </h4>
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
            <button
              onClick={() => {
                searchBook();
              }}
              className="mt-2 bg-gray-200 w-[520px] rounded-md py-1"
            >
              검색
            </button>
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
          {isUpdate ? (
            <button
              className="bg-yellow-200 text-lg p-2 mt-5 w-[540px] ml-14 rounded-md text-gray-500"
              onClick={() => {
                updateBook();
              }}
            >
              수정하기
            </button>
          ) : (
            <button
              className="bg-yellow-200 text-lg p-2 mt-5 w-[540px] ml-14 rounded-md text-gray-500"
              onClick={() => {
                regBook();
              }}
            >
              등록하기
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
