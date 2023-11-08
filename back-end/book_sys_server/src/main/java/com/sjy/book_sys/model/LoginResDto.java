package com.sjy.book_sys.model;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

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
