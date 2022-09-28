package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.AssignBackgroundVerification;
import com.app.entities.User;

public interface AssignFieldOfficerRepository extends JpaRepository<AssignBackgroundVerification, Integer> {

	@Query(value="select a.loan_id,a.name,b.field_officer_name from apply_loan a join assign_background_verification b ON a.field_officer_id=b.field_officer_id",nativeQuery = true)
	 List<Object> listOfBGVFO();
	
	@Query(value="select a.loan_id,a.name,b.field_officer_name,ub.verification_update,ub.description,ub.report from apply_loan a join assign_background_verification b ON a.field_officer_id=b.field_officer_id join update_background_verification ub ON ub.field_officer_id=b.field_officer_id",nativeQuery = true)
	List<Object>updateBGVFOList();

	@Query("select u from AssignBackgroundVerification u where u.field_officer_name=:un")
	AssignBackgroundVerification findByName(@Param("un")String un);
	
	AssignBackgroundVerification findByUser(User u);
	
}
