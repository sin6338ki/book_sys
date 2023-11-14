package com.sjy.book_sys.model;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * Member Entity
 * @author 신지영
 * @since 2023.11.08
 * @version 1.0
 */
@AllArgsConstructor
@Getter
public class Member {
	private String memberId;
	private String memberPw;
	private String memberName;
	private int memberType;
	private LocalDateTime memberRegDt;
	private int memberLoanCnt;
}
