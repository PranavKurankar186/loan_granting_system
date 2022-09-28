package com.app.controller;

import java.io.IOException;
import java.util.List;

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

import com.app.dto.AddCommentDTO;
import com.app.dto.ApplyLoanDTO;
import com.app.dto.AssignFieldOfficerDTO;
import com.app.dto.AssignLoanVerificationDTO;
import com.app.dto.EditDTO;
import com.app.dto.FeedbackDTO;
import com.app.dto.StatusDTO;
import com.app.entities.Feedback;
import com.app.entities.User;
import com.app.service.AdminServiceImpl;
import com.app.service.UserImpl;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

	@Autowired
	AdminServiceImpl adminServ;
	
	@Autowired
	UserImpl userServ;

	@GetMapping("/customerlist/{pageNo}")
	public ResponseEntity<?> getCustomerList(@PathVariable int pageNo) {
		System.out.println("in getCustomerList: ");
		return ResponseEntity.ok(adminServ.getAllCustomers(pageNo));
	}
	
	@PostMapping("/update_status/{userId}")
	public ResponseEntity<?>updateStatus(@PathVariable int userId,@RequestBody StatusDTO status){
		System.out.println("userId = "+userId+" "+"status = "+status);
		return ResponseEntity.ok(adminServ.updateStatus(userId,status));
	}
	
	
	@PostMapping("/update_loan_status/{loanId}")
	public ResponseEntity<?>updateLoanStatus(@PathVariable int loanId,@RequestBody StatusDTO status){
		System.out.println("loanId = "+loanId+" "+"status = "+status);
		return ResponseEntity.ok(adminServ.updateLoanStatus(loanId,status));
	}

	@GetMapping("/loanofficerlist/{pageNo}")
	public ResponseEntity<?> getLoanOfficerList(@PathVariable int pageNo) {
		System.out.println("in getLoanOfficerList: ");
		return ResponseEntity.ok(adminServ.getAllLoanOfficer(pageNo));
	}

	@GetMapping("/fieldofficerlist/{pageNo}")
	public ResponseEntity<?> getFieldOfficerList(@PathVariable int pageNo) {
		System.out.println("in getFieldOfficerList: ");
		return ResponseEntity.ok(adminServ.getAllFieldOfficer(pageNo));
	}

	@GetMapping("/loanrequestlist")
	public ResponseEntity<?> getLoanRequestList() {
		System.out.println("in getLoanRequestList: ");
		List<ApplyLoanDTO> list = adminServ.getAllLoanRequest();
		if (list.isEmpty())
			return new ResponseEntity<>("Empty List", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@PostMapping("/assignfieldofficer")
	public ResponseEntity<?> assignFieldOfficer(@RequestBody AssignFieldOfficerDTO fieldOfficer) {
		System.out.println("assignFieldOfficer = " + fieldOfficer);
		return ResponseEntity.ok(adminServ.assignFieldOfficer(fieldOfficer));
	}

	@GetMapping("/listbgvfo")
	public ResponseEntity<?> listOfBGVFO() {
		System.out.println("in list of Background verification officer ");
		List<Object> list = adminServ.listOfBGVFO();
		if (list.isEmpty())
			return new ResponseEntity<>("Empty List", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@GetMapping("/updateBGverification")
	public ResponseEntity<?> updateBGVFO() {
		System.out.println("in update of Background verification officer ");
		return ResponseEntity.ok(adminServ.updateBGVFOList());
	}

	@PostMapping("/assignloanofficer")
	public ResponseEntity<?> assignLoanOfficer(@RequestBody AssignLoanVerificationDTO loanOfficer) {
		System.out.println("assignLoanOfficer = " + loanOfficer);
		return ResponseEntity.ok(adminServ.assignLoanOfficer(loanOfficer));
	}

	@GetMapping("/listlvfo")
	public ResponseEntity<?> listOfLVFO() {
		System.out.println("in list of Loan verification officer ");
		List<Object> list = adminServ.listOfLVFO();
		if (list.isEmpty())
			return new ResponseEntity<>("Empty List", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@GetMapping("/updateloanverification")
	public ResponseEntity<?> updateLVFO() {
		System.out.println("in update of Loan verification officer ");
		return ResponseEntity.ok(adminServ.updateLVFOList());
	}

	@GetMapping("/helplist")
	public ResponseEntity<?> helpList() {
		System.out.println("in help list");
		return ResponseEntity.ok(adminServ.helpList());
	}

	@PostMapping("/addfeedback")
	public ResponseEntity<?> addFeedback(@RequestBody FeedbackDTO feedbackDto) {
		System.out.println("feedbackDto" + feedbackDto);
		return ResponseEntity.ok(adminServ.addFeedback(feedbackDto));
	}

	@GetMapping("/feedbackquestions")
	public ResponseEntity<?> getFeedbackQuestions() {
		System.out.println("in feedback question");

		List<Feedback> list = adminServ.getFeedbackQue();
		if (list.isEmpty())
			return new ResponseEntity<>("Empty List", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@PostMapping("/add_comment/{requestId}")
	public ResponseEntity<?> addComment(@PathVariable int requestId,@RequestBody AddCommentDTO comment){
		System.out.println("requestId = "+requestId+"comment = "+comment);
		//return ResponseEntity.ok(adminServ.addComment(requestId,comment));
		return new ResponseEntity<>(adminServ.addComment(requestId,comment), HttpStatus.CREATED);
	}
	
	@GetMapping("/userfeedback")
	public ResponseEntity<?> userFeedback() {
		System.out.println("in user feedback question");
		return ResponseEntity.ok(adminServ.userFeedback());
	}   
	
	@PutMapping("/edit-profile/{userId}")
	public ResponseEntity<?> editProfile(@PathVariable int userId, @RequestBody EditDTO editDTO){
		   System.out.println("in editProfile: "+editDTO);
		   return ResponseEntity.ok(adminServ.editProfile(userId,editDTO));
	}
	
	@PutMapping("/change_pass/{userId}/{pwd}")
	public ResponseEntity<?> changePassword(@PathVariable int userId,@PathVariable String pwd){
		System.out.println("userId = "+userId+" "+"password = "+pwd);
		return ResponseEntity.ok(adminServ.changePassword(userId,pwd));
	}
	
	@GetMapping("/searchbyname/{userName}")
	public ResponseEntity<?> getUserListByName(@PathVariable String userName){
		System.out.println("in getUserListByName: "+userName);
		    List<User> u =userServ.getUserListByName(userName);
				if(u.isEmpty())
					return new ResponseEntity<>("User List Not Added",HttpStatus.INTERNAL_SERVER_ERROR);
			return new ResponseEntity<>(u,HttpStatus.OK);
	
	}
	
	
	@GetMapping(value = "/getResume/{loanId}", produces = { MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE,
			MediaType.IMAGE_PNG_VALUE })
	public ResponseEntity<?> downloadResume(@PathVariable int loanId) throws IOException{
		System.out.println("in img download " + loanId);
		byte[] imageContents=adminServ.restoreImage(loanId);
		return ResponseEntity.ok(imageContents);
	}
	
	@GetMapping(value = "/getProjectPlan/{loanId}", produces = { MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE,
			MediaType.IMAGE_PNG_VALUE })
	public ResponseEntity<?> downloadProjectPlan(@PathVariable int loanId) throws IOException{
		System.out.println("in img download " + loanId);
		byte[] imageContents=adminServ.restoreProject(loanId);
		return ResponseEntity.ok(imageContents);
	}
	
	@GetMapping(value = "/getPersonalCredit/{loanId}", produces = { MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE,
			MediaType.IMAGE_PNG_VALUE })
	public ResponseEntity<?> downloadPersonalCredit(@PathVariable int loanId) throws IOException{
		System.out.println("in img download " + loanId);
		byte[] imageContents=adminServ.restorePersonal(loanId);
		return ResponseEntity.ok(imageContents);
	}
	
	@GetMapping(value = "/getBussinessCredit/{loanId}", produces = { MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE,
			MediaType.IMAGE_PNG_VALUE })
	public ResponseEntity<?> downloadBussinessCredit(@PathVariable int loanId) throws IOException{
		System.out.println("in img download " + loanId);
		byte[] imageContents=adminServ.restoreBussiness(loanId);
		return ResponseEntity.ok(imageContents);
	}
	
	@GetMapping(value = "/getFinancialStatement/{loanId}", produces = { MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE,
			MediaType.IMAGE_PNG_VALUE })
	public ResponseEntity<?> downloadFinancialStatement(@PathVariable int loanId) throws IOException{
		System.out.println("in img download " + loanId);
		byte[] imageContents=adminServ.restoreFinancial(loanId);
		return ResponseEntity.ok(imageContents);
	}
	
	@GetMapping(value = "/getBankStatement/{loanId}", produces = { MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE,
			MediaType.IMAGE_PNG_VALUE })
	public ResponseEntity<?> downloadBankStatment(@PathVariable int loanId) throws IOException{
		System.out.println("in img download " + loanId);
		byte[] imageContents=adminServ.restoreBank(loanId);
		return ResponseEntity.ok(imageContents);
	}
	
	@GetMapping(value = "/getReportAdmin/{loanId}", produces = { MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE,
			MediaType.IMAGE_PNG_VALUE })
	public ResponseEntity<?> downloadImage(@PathVariable int loanId) throws IOException{
		System.out.println("in img download " + loanId);
		byte[] imageContents=adminServ.restoreReport(loanId);
		return ResponseEntity.ok(imageContents);
	}
	
	@GetMapping(value = "/getFieldReportAdmin/{loanId}", produces = { MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE,
			MediaType.IMAGE_PNG_VALUE })
	public ResponseEntity<?> downloadFieldReport(@PathVariable int loanId) throws IOException{
		System.out.println("in img download " + loanId);
		byte[] imageContents=adminServ.restoreFieldReport(loanId);
		return ResponseEntity.ok(imageContents);
	}
	
	
		
}
