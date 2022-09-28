package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name="user")
public class User {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer	user_id;

@Column
private long contact;

@Column
private String designation;

@Column
private LocalDate dob;

@Column(unique=true)
private String email;

@Column
private String first_name;

@Column
private String gender;

@Column
private String last_name;

@Column
private String pan;

@Column
private String password;

@Column
private int role_id;

@Column
private String role_name;

@Column
private String status;

@Column
private String user_category;

@Column
private String login_id;

}
