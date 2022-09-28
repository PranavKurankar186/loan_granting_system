package com.app.service;

import java.io.IOException;
import java.util.List;

import com.app.dto.ApplyLoan2DTO;
import com.app.dto.ApplyLoanDTO;
import com.app.dto.DocumentDto;
import com.app.dto.EditDTO;
import com.app.dto.HelpDTO;
import com.app.dto.HelpRequestDTO;
import com.app.dto.LoginDTO;
import com.app.dto.UserDTO;
import com.app.dto.UserFeedbackDTO;
import com.app.entities.Feedback;
import com.app.entities.User;

public interface IUser {

	UserDTO authenticateUser(LoginDTO loginDetails);

	UserDTO saveUser(UserDTO userDto);
	
	UserDTO editProfile(int userId,EditDTO editDTO);
	
	String changePassword(int userId, String pwd);

	List<ApplyLoanDTO> getUserLoanDetails(int userId);

	ApplyLoan2DTO saveLoanDetails(int userId,ApplyLoanDTO loanDto)throws IOException;

	String addFeedBack(int userId,int feedbackId,UserFeedbackDTO userfeedback);

	List<HelpDTO> helpList(int userId);

	HelpRequestDTO helpRequest(int userId,HelpRequestDTO helpDto);

	String checkUser(String email);

	boolean updatePass(LoginDTO userDto);

	List<User> getUserListByName(String userName);

	List<Feedback> getFeedbackQue();

	String saveDocumentDetails(int userId, DocumentDto loanDto);
}
