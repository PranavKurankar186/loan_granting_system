package com.app.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.EditDTO;
import com.app.dto.HelpRequestDTO;
import com.app.dto.UpdateLoanVerificationDTO;
import com.app.service.ILoanOfficer;

@RestController
@RequestMapping("/loanofficer")
@CrossOrigin
public class LoanOfficerController {
	
@Autowired
ILoanOfficer officerDao;

	@GetMapping("/loan_requests/{userId}")
	public ResponseEntity<?>getLoanRequests(@PathVariable int userId){
		System.out.println("officerId = "+userId);
		return ResponseEntity.ok(officerDao.getLoanRequests(userId));
	}
	
	@GetMapping("/asignlvf/{userId}")
	public ResponseEntity<?>asignLVf(@PathVariable int userId){
		System.out.println("officerId = "+userId);
		return ResponseEntity.ok(officerDao.getAssignedRequest(userId));
	}
	
	@PostMapping("/updatelvf")
	public ResponseEntity<?>updateLvf(UpdateLoanVerificationDTO updateDto){
		System.out.println("updateDto =  "+updateDto);
		return ResponseEntity.ok(officerDao.updateLvf(updateDto));
	}
	
	@GetMapping("/updatelvf_list")
	public ResponseEntity<?>updateLvfList(){
	   System.out.println("in updatelvf list");
	   return ResponseEntity.ok(officerDao.updateLvfList());
	}
	
	@PostMapping("/help_request/{userId}")
	public ResponseEntity<?>helpRequest(@PathVariable int userId,@RequestBody HelpRequestDTO helpDto){
		System.out.println("helpDto = "+helpDto+" "+"userId = "+userId);
		return new ResponseEntity<>(officerDao.helpRequest(userId,helpDto), HttpStatus.CREATED);
	}
	
	@GetMapping("/help/{userId}")
	public ResponseEntity<?> helpList(@PathVariable int userId) {
		System.out.println("in help list = "+userId);
		return ResponseEntity.ok(officerDao.helpList(userId));
	}
	
	@PutMapping("/edit-profile/{userId}")
	public ResponseEntity<?> editProfile(@PathVariable int userId, @RequestBody EditDTO editDTO){
		   System.out.println("in editProfile: "+editDTO);
		   return ResponseEntity.ok(officerDao.editProfile(userId,editDTO));
	}
	
	@PutMapping("/change_pass/{userId}/{pwd}")
	public ResponseEntity<?> changePassword(@PathVariable int userId,@PathVariable String pwd){
		System.out.println("userId = "+userId+" "+"password = "+pwd);
		return ResponseEntity.ok(officerDao.changePassword(userId,pwd));
	}
	
	@GetMapping(value = "/getLoanReport/{updateLoanId}", produces = { MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE,
			MediaType.IMAGE_PNG_VALUE })
	public ResponseEntity<?> downloadImage(@PathVariable int updateLoanId) throws IOException{
		System.out.println("in img download " + updateLoanId);
		byte[] imageContents=officerDao.restoreImage(updateLoanId);
		return ResponseEntity.ok(imageContents);
	}
	
}
