import React, { useState, useEffect } from "react";
import axios from "axios";

const MemberList = ({ setInputMemberId, isChange }) => {
  //검색 회원명
  const [inputMemberName, setMemberName] = useState("");
  //검색 결과 응답 데이터
  const [memberList, setMemberList] = useState([]);
  //회원 결과 없을 때 응답 데이터
  const [noneText, setNoneText] = useState("");

  //화면렌더링 - 회원 전체 목록
  useEffect(() => {
    searchMemberName("");
  }, [isChange]);

  //회원 검색 메서드
  const searchMemberName = (keyword) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/member`, {
        params: { keyword: keyword },
      })
      .then((res) => {
        // console.log("searchMember result : ", res);
        if (res.data === "회원 정보가 존재하지 않습니다.") {
          setNoneText(res.data);
          setMemberName("");
        } else {
          setMemberList(res.data);
          setMemberName("");
          setNoneText("");
        }
      })
      .catch((e) => {
        // console.log("searchBook error : ", e);
        alert("검색 결과가 없습니다");
        setMemberName("");
      });
  };

  //대여 버튼 클릭
  const ckRent = (member) => {
    setInputMemberId(member.member_id);
  };

  return (
    <div className="mt-10 w-auto">
      <div className="m-7 flex flex-row">
        <p>회원명 검색</p>
        <input
          type="text"
          className="border ml-3 w-[300px] pl-2"
          onChange={(e) => {
            searchMemberName(e.target.value);
          }}
        ></input>
      </div>
      {noneText !== "" ? (
        <p className="text-center">{noneText}</p>
      ) : (
        <table className="mx-7 text-center border w-[860px]">
          <tr className="border">
            <th className="p-2">NO</th>
            <th className="p-2">회원명</th>
            <th className="p-2">아이디</th>
            <th className="p-2">대여 가능 권수</th>
            <th className="p-2">대출 신청</th>
          </tr>

          {memberList.map((member, idx) => {
            return (
              <tr>
                <td className="p-2" key={member.member_id}>
                  {idx + 1}
                </td>
                <td className="p-2">{member.member_name}</td>
                <td className="p-2">{member.member_id}</td>
                <td className="p-2">
                  {5 - member.member_rent_cnt}
                  <span>/</span>5
                </td>
                <td className="p-2">
                  {5 - member.member_rent_cnt <= 0 ? (
                    <button disabled="false" className="bg-gray-100 px-3">
                      신청불가
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        ckRent(member);
                      }}
                      className="bg-yellow-100 px-3"
                    >
                      대출신청
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </table>
      )}
    </div>
  );
};

export default MemberList;
