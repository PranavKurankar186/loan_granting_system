package com.app.dao;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.UserFeedback;

public interface UserFeedbackRepository extends JpaRepository<UserFeedback, Integer> {

	
	@Query(value="select a.feedback_question,b.user_feedback from feedback a join user_feedback b ON a.feedback_id=b.feedback_id;",nativeQuery=true)
	Collection<?> findUserFeedback();

}
