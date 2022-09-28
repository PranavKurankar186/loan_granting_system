
package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter

@Setter

@ToString

@AllArgsConstructor

@NoArgsConstructor

@Entity

@Table(name = "update_background_verification")
public class UpdateBackgroundVerification {

	@Id

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer update_background_id;
	private String user_name;
	private String verification_update;
	private String description;
	private String report;

	@ManyToOne

	@JoinColumn(name = "field_officer_id")
	private AssignBackgroundVerification fieldOfficer;
	
	@ManyToOne
	@JoinColumn(name = "loan_id")
	private ApplyLoan loan;
}
