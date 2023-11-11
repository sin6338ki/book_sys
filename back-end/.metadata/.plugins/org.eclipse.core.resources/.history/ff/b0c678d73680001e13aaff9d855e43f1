package com.sjy.book_sys.service;

import org.springframework.stereotype.Service;

import com.sjy.book_sys.mapper.RentMapper;
import com.sjy.book_sys.model.RentDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RentService {
	
	private final RentMapper rentMapper;
	
	public String applyRent(RentDto rentDto) {
		rentMapper.applyRent(rentDto);
		return "test";
	}

}
