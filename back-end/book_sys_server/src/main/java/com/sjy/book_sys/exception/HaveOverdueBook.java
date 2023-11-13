package com.sjy.book_sys.exception;

public class HaveOverdueBook extends RuntimeException{
	public HaveOverdueBook(String period) {
		super(period + "일 연체된 도서가 있습니다");
	}
}
