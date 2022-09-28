package com.app.controller;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.OTPVerifyUpdatePassword;
import com.app.dto.UserDTO;
import com.app.service.UserImpl;

@RestController
@RequestMapping("/")
@CrossOrigin
public class HomeController {

	
	@Autowired
	UserImpl userServ;
	
	@Autowired
	JavaMailSender mailSender;
	
//	@PostMapping("/signin")
//	public ResponseEntity<?> signIn(@RequestBody LoginDTO loginDetails) {
//		System.out.println("in signin :: " + loginDetails);
//		User user = userServ.authenticateUser(loginDetails);
//		if (user == null)
//			return new ResponseEntity<>("User Not Found !!!!", HttpStatus.OK);
//		return new ResponseEntity<>(user, HttpStatus.OK);
//	}
	
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
	
	@PostMapping("loanofficer/signup")
	public ResponseEntity<?> loanOfficersignUp(@RequestBody UserDTO userDto) {
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
	
	@PostMapping("fieldofficer/signup")
	public ResponseEntity<?> fieldOfficersignUp(@RequestBody UserDTO userDto) {
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

//	@PostMapping("/changepass")
//	public ResponseEntity<?> changePassword(@RequestBody UserDTO userDto) {
//		if(userService.updatePass(userDto))
//		return new ResponseEntity<>(HttpStatus.OK);
//		return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
//	}
	
}
