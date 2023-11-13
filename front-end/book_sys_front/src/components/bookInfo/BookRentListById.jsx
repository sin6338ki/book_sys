import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Home from "../../asset/home.png";
import RentIcon from "../../asset/books.png";

const BookRentListById = () => {
  const navigate = useNavigate();
  //bookid
  const { bookName } = useParams();
  //bookId 대출 이력
  const [allList, setAllList] = useState([]);
  //대출 이력 없을 때 출력 텍스트
  const [noneRentListText, setNoneRentListText] = useState("");

  //화면렌더링
  useEffect(() => {
    findAllRentList();
  }, []);

  //전체 조회
  const findAllRentList = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/rent`, {
        params: { bookName: bookName },
      })
      .then((res) => {
        console.log("findAllRentList response :", res);
        if (res.data !== "대출이력이 없습니다") {
          setAllList(res.data);
        } else {
          setNoneRentListText(res.data);
        }
      })
      .catch((e) => {
        console.log("findAllRentList error", e);
      });
  };

  return (
    <div className="w-auto">
      <div className="flex flex-row justify-between items-center p-7 bg-yellow-200">
        <h4 className="text-4xl font-extrabold">도서 대출 리스트</h4>
        <div>
          <button
            className="w-24 h-16 mr-10"
            onClick={() => {
              navigate("/book-sys");
            }}
          >
            <img src={RentIcon}></img>
            <p className="font-bold">대여/대출</p>
          </button>
          <button
            className="w-24 h-16"
            onClick={() => {
              navigate("/");
            }}
          >
            <img alt="home-icon" src={Home}></img>
            <p className="font-bold">메인메뉴</p>
          </button>
        </div>
      </div>
      <div className="m-7 flex flex-row">
        <p className="text-xl font-bold">{bookName}</p>
      </div>
      <table className="mx-7 text-center border w-[860px]">
        <tr className="border">
          <th className="p-2">NO</th>
          <th className="p-2">대출 id</th>
          <th className="p-2">아이디</th>
          <th className="p-2">대출일</th>
          <th className="p-2">반납일</th>
          <th className="p-2">반납 예정일</th>
        </tr>
        <tbody>
          {allList.length > 1 ? (
            allList.map((rent, idx) => {
              return (
                <tr>
                  <td className="p-2">{idx + 1}</td>
                  <td className="p-2">{rent.rent_id}</td>
                  <td className="p-2">{rent.member_id}</td>
                  <td className="p-2">{rent.rent_dt}</td>
                  <td className="p-2">{rent.return_dt}</td>
                  <td className="p-2">{rent.expected_return_dt}</td>
                </tr>
              );
            })
          ) : (
            <p>{noneRentListText}</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookRentListById;
