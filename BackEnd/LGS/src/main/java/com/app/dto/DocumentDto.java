package com.app.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class DocumentDto {
	private MultipartFile resume;

	private MultipartFile project_plan;

	private MultipartFile personal_credit_report;

	private MultipartFile business_credit_report;
	
	private MultipartFile financial_statement;
	
	private MultipartFile bank_statement;
}
