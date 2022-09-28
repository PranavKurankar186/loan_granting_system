package com.app.service;

import java.io.IOException;
import java.util.Collection;
import java.util.List;

import com.app.dto.AddCommentDTO;
import com.app.dto.ApplyLoanDTO;
import com.app.dto.AssignFieldOfficerDTO;
import com.app.dto.AssignLoanVerificationDTO;
import com.app.dto.EditDTO;
import com.app.dto.FeedbackDTO;
import com.app.dto.HelpDTO;
import com.app.dto.StatusDTO;
import com.app.dto.UserDTO;
import com.app.entities.Feedback;
import com.app.entities.User;

public interface IAdminService {

	List<User> getAllCustomers(int pageNo);
	
    List<User> getAllLoanOfficer(int pageNo);
	
	List<User> getAllFieldOfficer(int pageNo);
	
	List<ApplyLoanDTO>getAllLoanRequest();

	String assignLoanOfficer(AssignLoanVerificationDTO loanOfficer);
	
	List<Object> listOfBGVFO();
	
	List<Object> updateBGVFOList();

	String assignFieldOfficer(AssignFieldOfficerDTO fieldOfficer);

	List<Object> listOfLVFO();

	List<Object> updateLVFOList();

	List<HelpDTO> helpList();

	FeedbackDTO addFeedback(FeedbackDTO feedbackDto);

	List<Feedback> getFeedbackQue();

	Collection<?> userFeedback();

	AddCommentDTO addComment(int requestId, AddCommentDTO comment);

	StatusDTO updateStatus(int userId, StatusDTO status);

	UserDTO editProfile(int userId, EditDTO editDTO);

	String changePassword(int userId, String pwd);

	byte[] restoreImage(int loanId) throws IOException;

	byte[] restoreProject(int loanId) throws IOException;

	byte[] restorePersonal(int loanId) throws IOException;

	byte[] restoreBussiness(int loanId) throws IOException;

	byte[] restoreFinancial(int loanId) throws IOException;

	byte[] restoreBank(int loanId) throws IOException;

	byte[] restoreReport(int loanId) throws IOException;

	byte[] restoreFieldReport(int loanId) throws IOException;

	StatusDTO updateLoanStatus(int loanId, StatusDTO status);

	//List<AdminUserFeedbackDTO> userFeedback();
}
