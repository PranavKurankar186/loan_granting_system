package com.app.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class EditDTO {

	
	private String first_name;
	
	private String last_name;
	
	private String email;
	
	private long contact;
	
	public EditDTO() {
		System.out.println("in ctor of "+getClass().getName());
	}

	public EditDTO(String first_name, String last_name, String email, long contact) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.contact = contact;
	}

	
	
}
