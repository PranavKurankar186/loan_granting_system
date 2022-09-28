package com.app.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ApplyLoan2DTO {
private Integer loan_id;
	
	private String name;
   
	private long phone;
	
	private String email;

	private String loan_type;

	private String resume;
	
	private String project_plan;
	
	private String personal_credit_report;
	
	private String business_credit_report;

	private String financial_statement;
	
	private String bank_statement;
	
	private int loan_amount;
	
	private int loan_tenure;

	private String EMI_option;
	
	private String address;
	
	private String status;
}
