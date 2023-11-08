package com.sjy.book_sys.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.sjy.book_sys.model.LoginDto;
import com.sjy.book_sys.model.Member;
import com.sjy.book_sys.model.MemberDto;

@Mapper
public interface MemberMapper {

	/**
	 * 회원가입 Mapper
	 * @param memberDto
	 * @return
	 */
	@Insert("insert into member (member_id, member_pw, member_name) values (#{memberId}, #{memberPw}, #{memberName})")
	public int signup(MemberDto member);
	
	/**
	 * 
	 * @param memberId
	 * @return 중복 아이디 있는 경우 id, 없는 경우 null 반환
	 */
	@Select("select member_id from member where member_id=#{memberId}")
	public String checkId(String memberId);
	
	/**
	 * 
	 * @param member
	 * @return memberId
	 */
	@Select("select * from member where member_id=#{memberId} and member_pw=#{memberPw}")
	public Member login(LoginDto member);
}
