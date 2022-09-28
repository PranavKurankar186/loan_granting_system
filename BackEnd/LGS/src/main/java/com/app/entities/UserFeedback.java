
package com.app.entities;

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

@Table(name = "user_feedback")
public class UserFeedback {

	@Id

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer user_feedback_id;

	@ManyToOne

	@JoinColumn(name = "user_id")
	private User user;

	@ManyToOne

	@JoinColumn(name = "feedback_id")
	private Feedback feedback;
	
	private String user_feedback;
}
