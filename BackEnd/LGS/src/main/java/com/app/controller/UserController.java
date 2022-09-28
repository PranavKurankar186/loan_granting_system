package com.app.controller;

import java.io.IOException;
import java.util.Random;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApplyLoanDTO;
import com.app.dto.DocumentDto;
import com.app.dto.EditDTO;
import com.app.dto.HelpRequestDTO;
import com.app.dto.LoginDTO;
import com.app.dto.OTPVerifyUpdatePassword;
import com.app.dto.UserDTO;
import com.app.dto.UserFeedbackDTO;
import com.app.service.UserImpl;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="*")
public class UserController {

	@Autowired  
	UserImpl userServ;
	
	@Autowired
	ModelMapper mapper;
	
	@Autowired
	JavaMailSender mailSender;

	@PostMapping("/signin")
	public ResponseEntity<?> signIn(@RequestBody LoginDTO loginDetails) {
		System.out.println("in signin :: " + loginDetails);
		UserDTO user = userServ.authenticateUser(loginDetails);
		if (user == null)
			return new ResponseEntity<>("User Not Found !!!!", HttpStatus.OK);
		return new ResponseEntity<>(user, HttpStatus.OK);
	}

	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody UserDTO userDto) {
		System.out.println("userDto = " + userDto);
		StringBuilder text=new StringBuilder();
		SimpleMailMessage mail=new SimpleMailMessage();
		mail.setTo(userDto.getEmail());
		mail.setSubject("Registration Mail");
		text.append("Hello " + userDto.getFirst_name()+" "+userDto.getLast_name() + ",\n");
		text.append("You Have Created Your Account Successfully!!!!");
		String message = text.toString();
		mail.setText(message);
		UserDTO u=userServ.saveUser(userDto);
		if(u!=null) {
		mailSender.send(mail);
		return new ResponseEntity<>(u, HttpStatus.CREATED);
		}
		return new ResponseEntity<>("user not added", HttpStatus.OK);
	}
	
	@PutMapping("/edit-profile/{userId}")
	public ResponseEntity<?> editProfile(@PathVariable int userId, @RequestBody EditDTO editDTO){
		   System.out.println("in editProfile: "+editDTO);
		   return ResponseEntity.ok(userServ.editProfile(userId,editDTO));
	}
	
	@PutMapping("/change_pass/{userId}/{pwd}")
	public ResponseEntity<?> changePassword(@PathVariable int userId,@PathVariable String pwd){
		System.out.println("userId = "+userId+" "+"password = "+pwd);
		return ResponseEntity.ok(userServ.changePassword(userId,pwd));
	}
	
	@GetMapping("/user_loan_details/{userId}")
	public ResponseEntity<?>getUserLoan(@PathVariable int userId){
		System.out.println("userId = "+userId);
		return ResponseEntity.ok(userServ.getUserLoanDetails(userId));
	}
	
	@PostMapping("/apply_loan/{userId}")
	public ResponseEntity<?>applyLoan(@PathVariable int userId ,ApplyLoanDTO loanDto)throws IOException{
		
		System.out.println("loan Dto = "+loanDto+"userID = "+userId);
		
		return new ResponseEntity<>(userServ.saveLoanDetails(userId,loanDto), HttpStatus.CREATED);	
	}
	
	//loan applied, ek maila,
	//loan officer verify, --- status change call, mail
	// approved ... status change mail send
	// rrejected status change mail send
	
	
	@PostMapping("/help_request/{userId}")
	public ResponseEntity<?>helpRequest(@PathVariable int userId,@RequestBody HelpRequestDTO helpDto){
		System.out.println("helpDto = "+helpDto+" "+"userId = "+userId);
		return new ResponseEntity<>(userServ.helpRequest(userId,helpDto), HttpStatus.CREATED);
	}
	
	@GetMapping("/help/{userId}")
	public ResponseEntity<?> helpList(@PathVariable int userId) {
		System.out.println("in help list = "+userId);
		return ResponseEntity.ok(userServ.helpList(userId));
	}
	
	
	@GetMapping("/feedbackque")
	public ResponseEntity<?> getFeedbackQue(){
		System.out.println("in feedback question");
		return ResponseEntity.ok(userServ.getFeedbackQue());
	}
	
	@PostMapping("/addfeedback/{userId}/{feedbackId}")
	public ResponseEntity<?>addFeedBack(@PathVariable int userId,@PathVariable int feedbackId,@RequestBody UserFeedbackDTO userfeedback){
		System.out.println("userId = "+userId+"feedback id = "+feedbackId+"userfeedback = "+userfeedback);
		return ResponseEntity.ok(userServ.addFeedBack(userId,feedbackId,userfeedback));
	}
	
	
	@PostMapping("/send_otp")
	public ResponseEntity<?> SendOTP(@RequestBody OTPVerifyUpdatePassword update) {
		String destEmail = update.getDestEmail();
		System.out.println("-----------sending otp-----------");
		System.out.println(" Email " + destEmail);
		SimpleMailMessage mesg = new SimpleMailMessage();
		mesg.setTo(destEmail);
		mesg.setSubject("OTP for verification");
		Random ramdom = new Random();
		int otp = ramdom.nextInt(999999);
		mesg.setText("Enter this OTP for verification : " + otp + "            \nDo not share it with anyone !!!!!");
		mailSender.send(mesg);
		return ResponseEntity.status(HttpStatus.OK).body(otp);
	}

	@PostMapping("/changepass")
	public ResponseEntity<?> changePassword(@RequestBody LoginDTO userDto) {
		if(userServ.updatePass(userDto))
		return new ResponseEntity<>(HttpStatus.OK);
		return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
	}
	
	@PostMapping("/check")
	public ResponseEntity<?> checkUserExists(@RequestBody LoginDTO email) {
		return new ResponseEntity<>(userServ.checkUser(email.getEmail()), HttpStatus.OK);
	}
	
	@PostMapping("/addDocument/{userId}")
	public ResponseEntity<?>savDocument(@PathVariable int userId ,DocumentDto loanDto)throws IOException{
		
		System.out.println("loan Dto = "+loanDto+"userID = "+userId);
		
		return new ResponseEntity<>(userServ.saveDocumentDetails(userId,loanDto), HttpStatus.CREATED);	
	}
    
}
