package com.sjy.book_sys.exception;

/**
 * 대여중인책 Exception
 * @author 신지영
 * @since 2023.11.13
 * @version 1.0
 */
public class AlreadyRentException extends RuntimeException{
	public AlreadyRentException(String expectedReturnDt) {
		super("대여 중인 책입니다. (반납 예정일 : " + expectedReturnDt + ")");
	}
}
