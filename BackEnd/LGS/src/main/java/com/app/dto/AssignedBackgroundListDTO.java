package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.ToString;


@ToString
@AllArgsConstructor
public class AssignedBackgroundListDTO {
	private Integer loan_id;
	private String name;
	
	public Integer getLoan_id() {
		return loan_id;
	}
	public void setLoan_id(Integer loan_id) {
		this.loan_id = loan_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
