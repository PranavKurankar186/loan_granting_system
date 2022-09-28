
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

@Table(name = "update_loan_verification")
public class UpdateLoanVerification {

	@Id

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer update_loan_id;
	private String verification_update;
	private String description;
	private String status;
	private String report;

	@ManyToOne

	@JoinColumn(name = "loan_officer_id")
	private AssignLoanVerification loanOfficer;
	
	@ManyToOne
	@JoinColumn(name = "loan_id")
	private ApplyLoan loan;
	
	
}
