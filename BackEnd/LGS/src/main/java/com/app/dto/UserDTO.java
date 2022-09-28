package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.Email;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserDTO {

	private Integer	user_id;
	//@NotBlank
	@Range(min = 0, max = 9, message = "Invalid Contact")
	private long contact;
	
	@NotBlank(message = "designation is required")
	private String designation;
	//@NotBlank
	@Future(message = "join date must be in future")
	private LocalDate dob;
	
	@NotBlank
	@Email(message = "Invalid Email")
	private String email;
	@NotBlank
	@NotEmpty(message = "First name must be supplied")
	@Length(min = 4, max = 30, message = "Invalid First name length")
	private String first_name;
	
	@NotBlank
	private String gender;
	
	@NotBlank(message = "Last name must be supplied")
	private String last_name;
	@NotBlank
	private String pan;
	@NotBlank
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
	
	//@NotBlank
	private int role_id;
	
	//@NotBlank
	private String role_name;

	//@NotBlank
	private String status;

	@NotBlank
	private String user_category;
	
	//@NotBlank
	private String login_id;
}
