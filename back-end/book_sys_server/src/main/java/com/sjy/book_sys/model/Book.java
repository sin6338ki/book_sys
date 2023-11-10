package com.sjy.book_sys.model;

import java.time.LocalDateTime;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 도서 Entity
 * @author 신지영
 * @since 2023.11.10
 */
@Schema
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Book {

	private String bookId;
	private String bookName;
	private String bookWriter;
	private String bookPublisher;
	private LocalDateTime bookRegDt;
	private LocalDateTime bookModDt;
	private int bookCnt;
	private int bookRentalCnt;

	@Builder
	public Book(String bookId, String bookName, String bookWriter, String bookPublisher, LocalDateTime bookRegDt,
			LocalDateTime bookModDt, int bookCnt, int bookRentalCnt) {
		this.bookId = bookId;
		this.bookName = bookName;
		this.bookWriter = bookWriter;
		this.bookPublisher = bookPublisher;
		this.bookRegDt = bookRegDt;
		this.bookModDt = bookModDt;
		this.bookCnt = bookCnt;
		this.bookRentalCnt = bookRentalCnt;
	}
}
