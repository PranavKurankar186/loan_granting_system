package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.ApplyLoan;
import com.app.entities.UpdateLoanVerification;

public interface UpdateLoanVerificationRepo extends JpaRepository<UpdateLoanVerification, Integer>{

	@Query("select u from UpdateLoanVerification u where u.loan=:loan")
	UpdateLoanVerification findUpdateLoanDetails(ApplyLoan loan);


}
