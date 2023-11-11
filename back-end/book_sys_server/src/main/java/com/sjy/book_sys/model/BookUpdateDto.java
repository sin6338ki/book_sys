package com.sjy.book_sys.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 책 수정 DTO
 * @author 신지영
 * @since 2023.11.11
 */
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class BookUpdateDto {
	private String bookName;
	private String bookWriter;
	private String bookPublisher;
	private int bookCnt;
	private String bookId;
	
	public BookUpdateDto(String bookName, String bookWriter, String bookPublisher, int bookCnt, String bookId) {
		this.bookName = bookName;
		this.bookWriter = bookWriter;
		this.bookPublisher = bookPublisher;
		this.bookCnt = bookCnt;
		this.bookId = bookId;
	}
}
