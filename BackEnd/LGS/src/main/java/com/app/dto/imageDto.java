package com.app.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;



@Getter

@Setter

@ToString
public class imageDto {
	private MultipartFile  report;
}
