package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@Table(name="apply_loan")
public class ApplyLoan {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private Integer loan_id;
@Column
private String name;
@Column
private long phone;
@Column
private String email;
@Column
private String loan_type;
@Column
private String resume;
@Column
private String project_plan;
@Column
private String personal_credit_report;
@Column
private String business_credit_report;
@Column
private String financial_statement;
@Column
private String bank_statement;
@Column
private int loan_amount;
@Column
private int loan_tenure;
@Column
private String EMI_option;
@Column
private String address;
@Column
private String status;

@ManyToOne(fetch=FetchType.LAZY)
@JoinColumn(name="user_id")
private User user;

@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name="loan_officer_id")
private AssignLoanVerification loanOfficer;

@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name="field_officer_id")
private AssignBackgroundVerification fieldOfficer;

}