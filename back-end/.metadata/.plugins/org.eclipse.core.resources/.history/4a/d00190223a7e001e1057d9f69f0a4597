package com.sjy.book_sys.model;

import org.apache.commons.lang3.StringUtils;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * Member Entity
 * 사용자 정보를 담는 엔터티
 * 
 * @author 신지영
 * @version 1.0
 */

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class MemberDto {
	private String memberId;
	private String memberPw;
	private String memberName;
	
	/**
	 * 회원가입시 사용하는 생성자
	 * @param memberId
	 * @param memberPw
	 * @param memberName
	 */
	@Builder
	public MemberDto(String memberId, String memberPw, String memberName) {
		this.memberId = memberId;
		this.memberPw = memberPw;
		this.memberName = memberName;
	}
	
	/**
	 * password 인코딩 메서드
	 */
	public void encodingPassword(PasswordEncoder passwordEncoder) {
		if(StringUtils.isEmpty(memberPw)) {
			return;
		}
		memberPw = passwordEncoder.encode(memberPw);
	}
}
