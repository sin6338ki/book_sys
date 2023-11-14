package com.sjy.book_sys.exception;

/**
 * 로그인시 관리자 계정 아닐 때 발생하는 Exception
 * @author 신지영
 * @since 2023.11.14
 * @version 1.0
 */
public class NoPermissionException extends RuntimeException{
	public NoPermissionException() {
		super("관리자 계정만 접속 가능합니다.");
	}
}
