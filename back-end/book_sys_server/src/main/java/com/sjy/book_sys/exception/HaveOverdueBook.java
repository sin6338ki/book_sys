package com.sjy.book_sys.exception;

/**
 * 연체 도서 여부 Exception
 * @author 신지영
 * @since 2023.11.13
 * @version 1.0
 */
public class HaveOverdueBook extends RuntimeException{
	public HaveOverdueBook(String period) {
		super(period + "일 연체된 도서가 있습니다");
	}
}
