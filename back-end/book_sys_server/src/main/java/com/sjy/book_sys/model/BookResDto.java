package com.sjy.book_sys.model;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 도서 검색 결과 Response DTO
 * @author 신지영
 * @since 2023.11.10
 */
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class BookResDto {
	private String book_id;
	private String book_name;
	private String book_writer;
	private String book_publisher;
	private int book_cnt;
	private int book_rental_cnt;
	
	@Builder
	public BookResDto(String book_id, String book_name, String book_writer, String book_publisher, int book_cnt, int book_rental_cnt) {
		this.book_id = book_id;
		this.book_name = book_name;
		this.book_writer = book_writer;
		this.book_publisher = book_publisher;
		this.book_cnt = book_cnt;
		this.book_rental_cnt = book_rental_cnt;
	}
}
