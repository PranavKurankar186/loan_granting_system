package com.app.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter

@Setter

@ToString
public class HelpRequestDTO {
	private String issue;
	private LocalDate date;
	private String description;
}
