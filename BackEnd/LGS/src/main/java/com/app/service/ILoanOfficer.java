 package com.app.service;

import java.io.IOException;
import java.util.List;

import com.app.dto.ApplyLoanDTO;
import com.app.dto.AssignedLoanListDTO;
import com.app.dto.EditDTO;
import com.app.dto.HelpDTO;
import com.app.dto.HelpRequestDTO;
import com.app.dto.UpdateLoanVerificationDTO;
import com.app.dto.UserDTO;

public interface ILoanOfficer {

	List<ApplyLoanDTO> getLoanRequests(int userId);

	List<AssignedLoanListDTO> getAssignedRequest(int userId);

	String updateLvf(UpdateLoanVerificationDTO updateDto);

    List<UpdateLoanVerificationDTO> updateLvfList();

	HelpRequestDTO helpRequest(int userId, HelpRequestDTO helpDto);

	List<HelpDTO>  helpList(int userId);

	UserDTO editProfile(int userId, EditDTO editDTO);

	String changePassword(int userId, String pwd);

	byte[] restoreImage(int updateLoanId) throws IOException;

}
