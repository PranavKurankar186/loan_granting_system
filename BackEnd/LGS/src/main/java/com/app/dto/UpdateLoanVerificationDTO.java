package com.app.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter

@Setter

@ToString

public class UpdateLoanVerificationDTO {
	private int update_loan_id;
	private Integer loan_id;
	private String verification_update;
	private String description;
	private String status;
	private MultipartFile report;
}
