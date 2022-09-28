package com.app.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	
	@Query("select u from User u where u.email=:em and u.password=:pass")
	User authenticateUser(@Param("em")String em, @Param("pass")String pass);
	
	@Query("select u from User u where u.user_category=:uc")
	Page<User>findByUser_Category(@Param("uc")String uc,Pageable request);

	boolean existsByEmail(String email);
	
	@Modifying
	@Query("update User u set u.password = ?2 where u.email = ?1")
	int updatePasswordByEmail(String email, String password);

	@Query("select u from User u where u.first_name LIKE :uName%")
	List<User> getUserListByName(@Param("uName") String userName);

	User findByEmail(String email);


	
	

}
