package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Help;
import com.app.entities.User;

public interface HelpRepository extends JpaRepository<Help, Integer> {

	List<Help> findByUser(User u);
	
}
