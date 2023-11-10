package com.sjy.book_sys.model;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 로그인 Response DTO
 * @author 신지영
 * @since 2023.11.08
 */
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class LoginResDto {
	private String memberId;
	private int memberType;
	
	@Builder
	public LoginResDto(String memberId, int memberType) {
		this.memberId = memberId;
		this.memberType = memberType;
	}

}
