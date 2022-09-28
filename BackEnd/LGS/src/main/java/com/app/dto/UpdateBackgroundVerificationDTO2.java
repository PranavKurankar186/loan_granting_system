package com.app.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter

@Setter

@ToString

public class UpdateBackgroundVerificationDTO2 {
	private int update_background_id;
	private Integer loan_id;
	private String user_name;
	private String verification_update;
	private String description;
	private String  report;
}
