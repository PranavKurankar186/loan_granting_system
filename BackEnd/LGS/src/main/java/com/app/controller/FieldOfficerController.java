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
import com.app.dto.UpdateBackgroundVerificationDTO;
import com.app.service.IFieldOfficer;

@RestController
@RequestMapping("/fieldofficer")
@CrossOrigin
public class FieldOfficerController {

	@Autowired
	IFieldOfficer officerDao;
	
	@GetMapping("/loan_requests/{userId}")
	public ResponseEntity<?>getLoanRequests(@PathVariable int userId){
		System.out.println("officerId = "+userId);
		return ResponseEntity.ok(officerDao.getLoanRequests(userId));
	}
	
	@GetMapping("/asignbvf/{userId}")
	public ResponseEntity<?>asignBVf(@PathVariable int userId){
		System.out.println("officerId = "+userId);
		return ResponseEntity.ok(officerDao.getAssignedRequest(userId));
	}
	
	@PostMapping("/updatebvf")
	public ResponseEntity<?>updateBVF(UpdateBackgroundVerificationDTO updateDto){
		System.out.println("updateDto =  "+updateDto);
		return ResponseEntity.ok(officerDao.updateBvf(updateDto));
	}
	
	@GetMapping("/updatebvf_list")
	public ResponseEntity<?>updateBvfList(){
	   System.out.println("in updatebvf list");
	   return ResponseEntity.ok(officerDao.updateBvfList());
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
	
//	@PostMapping("/image/imagebvf")
//	public ResponseEntity<?>imageBVF(@RequestBody MultipartFile file)throws IOException{
//		System.out.println("updateDto =  "+file);
//		return ResponseEntity.ok(officerDao.imageBvf(file));
//	}
	
	@GetMapping(value = "/getReport/{updateBackgroundId}", produces = { MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE,
			MediaType.IMAGE_PNG_VALUE })
	public ResponseEntity<?> downloadImage(@PathVariable int updateBackgroundId) throws IOException{
		System.out.println("in img download " + updateBackgroundId);
		byte[] imageContents=officerDao.restoreImage(updateBackgroundId);
		return ResponseEntity.ok(imageContents);
	}
	
}
