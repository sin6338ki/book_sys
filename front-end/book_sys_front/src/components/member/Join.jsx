import React from "react";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div>
      <h4>회원가입</h4>
      <div>아이디</div>
      <input type="text" name="member_id" />
      <button>아이디 중복 체크</button>
      <div>비밀번호</div>
      <input type="password" name="member_pw" />
      <div>비밀번호 확인</div>
      <input type="password" name="member_pw_check" />
      <div>이름</div>
      <input type="text" name="member_name" />
      <button>가입하기</button>
      <Link to="/">돌아가기</Link>
    </div>
  );
};

export default Join;
