package com.kh.dto;

import java.time.LocalDateTime;

import lombok.*;

@Getter
@Setter
@ToString // DB에서 값이 제대로 넘어왔는지 체크용
@NoArgsConstructor
@AllArgsConstructor
public class UserProfile {
	private int userId;
	private String username;
	private String profileImageUrl;
	private LocalDateTime createdAt;
	// Local 맛집 = 현재 현지맛집
	// Localhost = 현재 내 주소
	// LocalDateTime = 현재 날짜와 시간
}
