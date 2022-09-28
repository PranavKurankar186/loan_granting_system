package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class AssignLoanVerificationDTO {
	
	private int loan_id;
	private int user_id; 
	private String loan_officer_name;
	
	
}
