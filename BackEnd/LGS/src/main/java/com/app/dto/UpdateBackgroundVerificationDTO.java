package com.app.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter

@Setter

@ToString

public class UpdateBackgroundVerificationDTO {
	private Integer loan_id;
	private String user_name;
	private String verification_update;
	private String description;
	private MultipartFile  report;
}
