import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Join = () => {
  const navigate = useNavigate();
  //사용자가 입력한 아이디
  const [inputId, setInputId] = useState("");
  //id 중복체크 확인 완료
  const [isCheckId, setIsCheckId] = useState(false);
  //사용자가 입력한 비밀번호
  const [inputPw, setInputPw] = useState("");
  //비밀번호 재확인 완료
  const [isCheckPw, setIsCheckPw] = useState(false);
  //회원가입 요청 데이터
  const [signupMember, setSignupMember] = useState({});
  //사용자가 입력한 이름
  const [inputName, setInputName] = useState("");

  const saveId = (e) => {
    setInputId(e.target.value);
  };

  const savePw = (e) => {
    setInputPw(e.target.value);
  };

  const saveName = (e) => {
    setInputName(e.target.value);
  };

  //회원가입 요청 데이터 저장
  useEffect(() => {
    setSignupMember({
      memberId: inputId,
      memberPw: inputPw,
      memberName: inputName,
    });
  }, [inputId, inputPw, inputName]);

  //비밀번호 확인 결과
  const checkPw = (e) => {
    if (inputPw === e.target.value) {
      alert("비밀번호가 일치합니다");
      setIsCheckPw(true);
    }
  };

  //isCheckedId와 isCheckedPw가 true일 경우에만 회원가입 가능
  const signup = () => {
    if (!isCheckId) {
      alert("아이디 중복 체크 후 회원가입이 가능합니다!");
    } else if (!isCheckPw) {
      alert("비밀번호 확인 결과 다르게 입력되었습니다!");
    } else if (!isCheckId && !isCheckPw) {
      alert("아이디 중복 체크와 비밀번호를 동일하게 입력해 주세요");
    } else {
      //회원가입 요청
      // console.log("inputId : ", inputId);
      axios
        .post(`${process.env.REACT_APP_API_URL}/member`, signupMember)
        .then((res) => {
          // console.log("signup res : ", res);
          if (res.status === 201) {
            navigate("/");
          } else {
            alert("회원가입에 실패했습니다. 다시 시도해 주세요.");
          }
        })
        .catch((e) => {
          // console.log("signup err : ", e);
        });
    }
  };

  //중복 아이디 체크 메서드
  const checkId = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/member-id/${inputId}`)
      .then((res) => {
        // console.log("checkId res : ", res.data);
        if (res.data === "중복 아이디가 존재합니다") {
          alert(res.data);
        } else {
          alert("아이디를 사용하실 수 있습니다");
          setIsCheckId(true);
        }
      })
      .catch((e) => {
        // console.log("checkId error : ", e);
      });
  };

  return (
    <div className="flex flex-row h-screen w-auto">
      <img
        alt="bg-image-join"
        className="w-2/3"
        src="https://images.unsplash.com/photo-1595509022687-8d8f3a00a46a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img>
      <div className="flex flex-col h-screen w-auto">
        <h4 className="text-[2rem] font-extrabold p-16">회원가입</h4>
        <div className="border border-gray-500 rounded-md p-2 w-[540px] ml-14">
          <p className="text-xs">아이디</p>
          <input
            className="bg-blue-100 w-[520px] p-1 mt-1"
            type="text"
            value={inputId}
            onChange={saveId}
          />
          <button
            className="bg-gray-100 p-2 mt-2 w-[520px] rounded-md text-gray-500"
            onClick={() => {
              checkId();
            }}
          >
            아이디 중복 체크
          </button>
        </div>

        <div className="mt-5 border border-gray-500 rounded-md p-2 w-[540px] ml-14">
          <p className="text-xs">비밀번호</p>
          <input
            className="bg-blue-100 w-[520px] p-1 mt-1"
            type="password"
            value={inputPw}
            onChange={savePw}
          />
        </div>

        <div className="mt-5 border border-gray-500 rounded-md p-2 w-[540px] ml-14">
          <p className="text-xs">비밀번호 확인</p>
          <input
            className="bg-blue-100 w-[520px] p-1 mt-1"
            type="password"
            onChange={checkPw}
          />
        </div>

        <div className="mt-5 border border-gray-500 rounded-md p-2 w-[540px] ml-14">
          <p className="text-xs">이름</p>
          <input
            className="bg-blue-100 w-[520px] p-1 mt-1"
            type="text"
            value={inputName}
            onChange={saveName}
          />
        </div>

        <button
          className="bg-yellow-200 text-lg p-2 mt-5 w-[540px] ml-14 rounded-md text-gray-500"
          onClick={() => {
            signup();
          }}
        >
          가입하기
        </button>
        <Link
          className="bg-gray-300 text-lg text-center p-2 mt-5 w-[540px] ml-14 rounded-md text-gray-500"
          to="/"
        >
          돌아가기
        </Link>
      </div>
    </div>
  );
};

export default Join;
