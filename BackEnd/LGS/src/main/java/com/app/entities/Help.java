
package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter

@Setter

@ToString

@Entity

@Table(name = "help")
public class Help {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer request_id;
	private String issue;
	private LocalDate date;
	private String description;
	private String comment;

	@ManyToOne

	@JoinColumn(name = "user_id")
	private User user;
}
