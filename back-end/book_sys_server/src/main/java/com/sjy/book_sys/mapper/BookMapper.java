package com.sjy.book_sys.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.sjy.book_sys.model.BookRegDto;
import com.sjy.book_sys.model.BookResDto;
import com.sjy.book_sys.model.BookUpdateDto;


@Mapper
public interface BookMapper {

	/**
	 * 책 등록 mapper
	 * @param bookRegDto
	 * @return
	 */
	@Insert("insert into BOOK (book_name, book_writer, book_publisher, book_cnt) values (#{bookName}, #{bookWriter}, #{bookPublisher}, #{bookCnt})")
	public int regBook(BookRegDto bookRegDto);

	/**
	 * 도서명 검색 mapper
	 * @param bookName
	 * @return BookResDto
	 */
	@Select("select book_id, book_name, book_writer, book_publisher, book_cnt, book_rental_cnt from BOOK where book_name like #{keyword}")
	public List<BookResDto> searchBook(String keyword);
	
	/**
	 * 도서 정보 수정 mapper
	 * @param bookUpdateDto
	 * @return 성공시 1
	 */
	@Update("update BOOK set book_name=#{bookName}, book_writer=#{bookWriter}, book_publisher=#{bookPublisher}, book_mod_dt=SYSDATE(), book_cnt=#{bookCnt} where book_id=#{bookId}")
	public int updateBookInfo(BookUpdateDto bookUpdateDto);
	
}
