package com.sjy.book_sys.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.sjy.book_sys.mapper.MemberMapper;
import com.sjy.book_sys.model.LoginDto;
import com.sjy.book_sys.model.LoginResDto;
import com.sjy.book_sys.model.Member;
import com.sjy.book_sys.model.MemberDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 회원 관련 서비스 
 * 
 * @author 신지영
 * @version 1.0
 */
@Slf4j
@RequiredArgsConstructor
@Service
public class MemberService {
	
	private final MemberMapper memberMapper;
	private final PasswordEncoder passwordEncoder;
	
	/**
	 * 회원가입 메소드
	 * 
	 * @return 회원가입 성공시 "success", 실패시 "fail"
	 */
	public String signup(MemberDto member) {
		member.encodingPassword(passwordEncoder);
		int isSuccess = memberMapper.signup(member);
		if(isSuccess > 0) {
			return "success";
		}else {
			return "fail";
		}
	}
	
	/**
	 * 중복 id 확인 메서드
	 * 
	 * @return 중복 아이디 있는 경우 true, 없는 경우 false
	 */
	public boolean checkId(String memberId) {
		String sameId = memberMapper.checkId(memberId);
		log.info("sameId : ", sameId);
		
		if(sameId == null) {
			return false;
		}else {
			return true;
		}
	}
	
	public LoginResDto login(LoginDto member) {
		member.encodingPassword(passwordEncoder);
		log.info("pw : {}", member.getMemberPw());
		Member loginResult = memberMapper.login(member);
		return LoginResDto.builder().memberId(loginResult.getMemberId()).memberType(loginResult.getMemberType()).build();
	}
	
}
