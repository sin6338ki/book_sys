package com.sjy.book_sys.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 도서 대출 DTO
 * @author 신지영
 * @since 2023.11.11
 * @version 1.0
 */
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class ReturnDto {

	private String rentId;
	private String memberId;
	private String bookId;
	
	public ReturnDto(String rentId, String memberId, String bookId) {
		this.rentId = rentId;
		this.memberId = memberId;
		this.bookId = bookId;
	}
}
