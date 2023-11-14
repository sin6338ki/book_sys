package com.sjy.book_sys.model;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * Member 조회 response DTO
 * @author 신지영
 * @since 2023.11.11
 * @version 1.0
 */
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class MemberResDto {

	private String member_name;
	private String member_id;
	private int member_rent_cnt;
	
	@Builder
	public MemberResDto(String member_name, String member_id, int member_rent_cnt) {
		this.member_name = member_name;
		this.member_id = member_id;
		this.member_rent_cnt = member_rent_cnt;
	}
}
