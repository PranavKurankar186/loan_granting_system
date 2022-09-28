package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.AssignLoanVerification;
import com.app.entities.User;

public interface AssignLoanOfficerRepository extends JpaRepository<AssignLoanVerification,Integer>{

	@Query("select u from AssignLoanVerification u where u. loan_officer_name=:un")
       AssignLoanVerification findByName(@Param("un")String un);
	
	@Query(value="select a.loan_id,a.name,b.loan_officer_name from apply_loan a join assign_loan_verification b ON a.loan_officer_id=b.loan_officer_id",nativeQuery = true)
	 List<Object> listOfLVFO();
	
	@Query(value="select a.loan_id,a.name,b.loan_officer_name,ul.verification_update,ul.description,ul.status,ul.report from apply_loan a join assign_loan_verification b ON a.loan_officer_id=b.loan_officer_id join update_loan_verification ul ON ul.loan_officer_id=b.loan_officer_id",nativeQuery = true)
	List<Object>updateLVFOList();
	
	AssignLoanVerification findByUser(User u);

	
}
