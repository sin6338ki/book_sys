import React, { useEffect, useState } from "react";
import axios from "axios";

const BookRentList = ({
  setInputBookName,
  setRentId,
  setSelectMemberId,
  setBookId,
}) => {
  //전체 대출 이력
  const [allList, setAllList] = useState([]);
  //검색 도서명
  const [searchBookName, setSearchBookName] = useState("");
  //버튼 Text
  const [btnText, setBtnText] = useState("선택");
  //화면렌더링
  useEffect(() => {
    findAllRentList();
  }, []);

  //전체 조회
  const findAllRentList = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/rent`, {
        params: { bookName: "ALL" },
      })
      .then((res) => {
        console.log("findAllRentList response :", res);
        setAllList(res.data);
      })
      .catch((e) => {
        console.log("findAllRentList error", e);
      });
  };

  //도서명 검색
  const searchRentList = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/rent`, {
        params: { bookName: searchBookName },
      })
      .then((res) => {
        console.log("findAllRentList response :", res);
        if (res.data != "대출이력이 없습니다") {
          setAllList(res.data);
        } else {
          findAllRentList();
        }
      })
      .catch((e) => {
        console.log("findAllRentList error", e);
      });
  };

  //검색 화면 렌더링
  useEffect(() => {
    searchRentList();
  }, [searchBookName]);

  return (
    <div className="mt-10">
      <h4 className="ml-7 text-2xl font-extrabold">도서 대출 리스트</h4>
      <div className="m-7 flex flex-row">
        <p>도서명 검색</p>
        <input
          className="border ml-3 w-[300px] pl-2"
          type="text"
          value={searchBookName}
          onChange={(e) => {
            setSearchBookName(e.target.value);
          }}
        ></input>
      </div>
      <table className="mx-7 text-center border w-[860px]">
        <tr className="border">
          <th className="p-2">NO</th>
          <th className="p-2">도서명</th>
          <th className="p-2">아이디</th>
          <th className="p-2">대출일</th>
          <th className="p-2">반납일</th>
          <th className="p-2">반납 예정일</th>
          <th className="p-2">반납</th>
        </tr>
        <tbody>
          {allList.map((rent, idx) => {
            return (
              <tr>
                <td className="p-2">{idx + 1}</td>
                <td className="p-2">{rent.book_name}</td>
                <td className="p-2">{rent.member_id}</td>
                <td className="p-2">{rent.rent_dt}</td>
                <td className="p-2">{rent.return_dt}</td>
                <td className="p-2">{rent.expected_return_dt}</td>
                <td className="p-2">
                  {rent.return_dt === null ? (
                    <button
                      className="bg-blue-100 px-3"
                      onClick={() => {
                        setRentId(rent.book_id);
                        setSelectMemberId(rent.member_id);
                        setInputBookName(rent.book_name);
                        setBookId(rent.book_id);
                      }}
                    >
                      선택
                    </button>
                  ) : (
                    <button
                      className="bg-gray-100 px-3"
                      onClick={() => {
                        setRentId(rent.book_id);
                        setSelectMemberId(rent.member_id);
                        setInputBookName(rent.book_name);
                        setBookId(rent.book_id);
                      }}
                    >
                      완료
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BookRentList;
