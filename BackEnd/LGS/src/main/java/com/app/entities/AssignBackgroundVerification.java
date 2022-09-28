
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

@Table(name = "assign_background_verification")
public class AssignBackgroundVerification {

	@Id

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer field_officer_id;
	private String field_officer_name;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
}
