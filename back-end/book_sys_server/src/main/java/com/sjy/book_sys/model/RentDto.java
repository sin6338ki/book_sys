package com.sjy.book_sys.model;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 도서 대출 신청 DTO
 * @author 신지영
 * @since 2023.11.10
 */
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class RentDto {
	
	private String bookId;
	private String memberId;
	
	@Builder
	public RentDto(String bookId, String memberId) {
		this.bookId = bookId;
		this.memberId = memberId;
	}
}
