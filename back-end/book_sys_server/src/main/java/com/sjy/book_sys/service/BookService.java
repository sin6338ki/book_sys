package com.sjy.book_sys.service;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.sjy.book_sys.mapper.BookMapper;
import com.sjy.book_sys.model.BookRegDto;
import com.sjy.book_sys.model.BookResDto;
import com.sjy.book_sys.model.BookUpdateDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Book(도서) 관련 Service
 * @author 신지영
 * @since 2023.11.10
 */
@Slf4j
@RequiredArgsConstructor
@Service
public class BookService {
	
	private final BookMapper bookMapper;
	
	/**
	 * 책 등록 service
	 * @param bookRegDto
	 * @return success / fail
	 * @throws SQLIntegrityConstraintViolationException 
	 */
	public String regBook(BookRegDto bookRegDto) {
		try {
			int regResult = bookMapper.regBook(bookRegDto);
	        if(regResult>0) {
	            return "success book registration";
	        } else {
	            return "fail book registration";
	        }			
		}catch(DataIntegrityViolationException e) {
			e.printStackTrace();
			return "occur DataIntegrityViolationException exception";
		}
	}
	
	/**
	 * 검색 결과 조회 service
	 * @param keyword
	 * @return List<BookResDto>
	 * @throws Exception, NullPointerException
	 */
	public List<BookResDto> searchBook(String keyword) throws Exception {
		List<BookResDto> resultList = bookMapper.searchBook("%" + keyword + "%");			
		if(resultList.size() > 0) {
			return resultList;
		}else {
			throw new NullPointerException("검색 결과가 없습니다");
		}
	}
	
	/**
	 * 도서 정보 수정 service
	 * @param bookUpdateDto
	 * @return 성공시 update success
	 */
	public String updateBookInfo(BookUpdateDto bookUpdateDto) {
		int updateResult = bookMapper.updateBookInfo(bookUpdateDto);
		if(updateResult > 0) {
			return "update success";
		}else {
			throw new NullPointerException("bookId가 존재하지 않습니다");
		}
	}
}
