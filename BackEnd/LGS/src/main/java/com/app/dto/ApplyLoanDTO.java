package com.app.dto;

import javax.validation.constraints.NotBlank;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ApplyLoanDTO {
	
	private Integer loan_id;
	
	private String name;
   
	private long phone;
	@NotBlank
	
	private String email;
	@NotBlank
	private String loan_type;
	@NotBlank
	private MultipartFile resume;
	@NotBlank
	private MultipartFile project_plan;
	@NotBlank
	private MultipartFile personal_credit_report;
	@NotBlank
	private MultipartFile business_credit_report;
	@NotBlank
	private MultipartFile financial_statement;
	@NotBlank
	private MultipartFile bank_statement;
	@NotBlank
	private int loan_amount;
	@NotBlank
	private int loan_tenure;
	@NotBlank
	private String EMI_option;
	@NotBlank
	private String address;
	@NotBlank
	private String status;
}
