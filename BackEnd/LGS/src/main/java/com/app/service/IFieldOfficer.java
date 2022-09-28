package com.app.service;

import java.io.IOException;
import java.util.List;

import com.app.dto.ApplyLoanDTO;
import com.app.dto.AssignedBackgroundListDTO;
import com.app.dto.EditDTO;
import com.app.dto.HelpDTO;
import com.app.dto.HelpRequestDTO;
import com.app.dto.UpdateBackgroundVerificationDTO;
import com.app.dto.UpdateBackgroundVerificationDTO2;
import com.app.dto.UserDTO;

public interface IFieldOfficer {

	List<ApplyLoanDTO> getLoanRequests(int fieldofficerId);

	List<AssignedBackgroundListDTO> getAssignedRequest(int fieldofficerId);

	UpdateBackgroundVerificationDTO2 updateBvf(UpdateBackgroundVerificationDTO updateDto);

	HelpRequestDTO helpRequest(int userId, HelpRequestDTO helpDto);

	List<HelpDTO> helpList(int userId);

	List<UpdateBackgroundVerificationDTO2>updateBvfList();

	UserDTO editProfile(int userId, EditDTO editDTO);

	String changePassword(int userId, String pwd);

	byte[] restoreImage(int updateBackgroundId) throws IOException;

	//String imageBvf(MultipartFile updateDto);

}
