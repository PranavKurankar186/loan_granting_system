package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.ApplyLoan;
import com.app.entities.UpdateBackgroundVerification;

public interface UpdateBackgroundVerificationRepo extends JpaRepository<UpdateBackgroundVerification, Integer>{

	UpdateBackgroundVerification findByLoan(ApplyLoan loan);

}
