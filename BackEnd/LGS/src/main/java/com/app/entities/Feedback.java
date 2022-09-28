
package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter

@Setter

@ToString

@Entity

@Table(name = "feedback")
public class Feedback {

	@Id

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer feedback_id;
	private String feedback_question;
}
