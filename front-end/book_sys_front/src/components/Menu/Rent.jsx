import React from "react";
import BookList from "../../asset/book_list.png";
import UserList from "../../asset/user_list.png";

const Rent = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center p-7 bg-yellow-200">
        <h4 className="text-4xl font-extrabold">셀프 대출 신청하기</h4>
        <div>
          <button className="w-16 h-16 mx-10">
            <img src={BookList}></img>
            <p className="font-bold">도서 목록</p>
          </button>
          <button className="w-16 h-16">
            <img src={UserList}></img>
            <p className="font-bold">회원 목록</p>
          </button>
        </div>
      </div>
      <p className="mx-7 my-3 text-xl font-bold">
        회원ID님, 대출 하고 싶은 도서를 선택해 주세요.
      </p>
      <div>
        <p>도서명 검색</p>
        <input type="text"></input>
      </div>
      <table>
        <tr>
          <th>NO</th>
          <th>도서명</th>
          <th>저자명</th>
          <th>출판사</th>
          <th>대여 가능 권수</th>
          <th>대출 신청</th>
        </tr>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Rent;
