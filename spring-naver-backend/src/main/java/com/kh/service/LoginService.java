package com.kh.service;

import org.springframework.data.repository.query.Param;

import com.kh.dto.NaverUser;

public interface LoginService {
	NaverUser login(String id, String password);
}
