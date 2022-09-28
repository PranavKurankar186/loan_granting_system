package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.ApplyLoan;
import com.app.entities.AssignBackgroundVerification;
import com.app.entities.AssignLoanVerification;
import com.app.entities.User;

public interface ApplyLoanRepository extends JpaRepository<ApplyLoan, Integer> {

	@Query("select u from ApplyLoan u where u.user=:user")
	List<ApplyLoan> findUserLoanDetails(User user);

	@Query("select u from ApplyLoan u where u.loanOfficer=:loanOfficer")
	List<ApplyLoan> findLoanOfficerDetails(AssignLoanVerification loanOfficer);

	//@Query("select u.loan_id,u.name from ApplyLoan u where u.loanOfficer=:loanOfficer")
	//List<Object> findAssignLVFDetails(AssignLoanVerification loanOfficer);
	
	@Query("select u from ApplyLoan u where u.fieldOfficer=:fieldOfficer")
	List<ApplyLoan> findFieldOfficerDetails(AssignBackgroundVerification fieldOfficer);

	//@Query("select u.loan_id,u.name from ApplyLoan u where u.fieldOfficer=:fieldOfficer")
	//List<ApplyLoanDTO> findAssignBVFDetails(AssignBackgroundVerification fieldOfficer);
	

}
