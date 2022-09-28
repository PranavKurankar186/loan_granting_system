package com.app.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ApplyLoanRepository;
import com.app.dao.FeedbackRepository;
import com.app.dao.HelpRepository;
import com.app.dao.UserFeedbackRepository;
import com.app.dao.UserRepository;
import com.app.dto.ApplyLoan2DTO;
import com.app.dto.ApplyLoanDTO;
import com.app.dto.DocumentDto;
import com.app.dto.EditDTO;
import com.app.dto.HelpDTO;
import com.app.dto.HelpRequestDTO;
import com.app.dto.LoginDTO;
import com.app.dto.UserDTO;
import com.app.dto.UserFeedbackDTO;
import com.app.entities.ApplyLoan;
import com.app.entities.Feedback;
import com.app.entities.Help;
import com.app.entities.User;
import com.app.entities.UserFeedback;
import com.app.utils.StorageService;

@Service
@Transactional
public class UserImpl implements IUser {

	@Autowired
	UserRepository userDao;

	@Autowired
	ApplyLoanRepository loanDao;

	@Autowired
	FeedbackRepository feedbackDao;

	@Autowired
	UserFeedbackRepository userfeedbackDao;

	@Autowired
	HelpRepository helpDao;
	
	@Autowired
	StorageService storageServ;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	ModelMapper mapper;

	@Override
	public UserDTO authenticateUser(LoginDTO loginDetails) {
       User u =userDao.findByEmail(loginDetails.getEmail());
       String rawPassword = loginDetails.getPassword();
       if(u != null && passwordEncoder.matches(rawPassword, u.getPassword())) {
			UserDTO result = mapper.map(u,UserDTO.class);
			result.setPassword("********");
			System.out.println(result);
			return result;
		}
		return null;
		//User u =userDao.authenticateUser(loginDetails.getEmail(), loginDetails.getPassword());
		//UserDTO result = mapper.map(u,UserDTO.class);
		//return result ;

	}

	@Override
	public UserDTO saveUser(UserDTO userDto) {
		String rawPassword =userDto.getPassword();
		String encPassword = passwordEncoder.encode(rawPassword);
		userDto.setPassword(encPassword);
		User user = mapper.map(userDto, User.class);
		System.out.println("user : " + user);
		user = userDao.save(user);
		UserDTO u =mapper.map(user, UserDTO.class);
		u.setPassword("*******");
		return u;
	}

	@Override
	public UserDTO editProfile(int userId, EditDTO editDTO) {
		User user = userDao.findById(userId).get();
		System.out.println("earlier user :: " + user);

		user.setFirst_name(editDTO.getFirst_name());
		user.setLast_name(editDTO.getLast_name());
		user.setContact(editDTO.getContact());
		user.setEmail(editDTO.getEmail());

		System.out.println("user = " + user.getFirst_name() + "  " + user.getLast_name());
		return mapper.map(user, UserDTO.class);
	}

	@Override
	public String changePassword(int userId, String pwd) {
		User u = userDao.findById(userId).get();
		u.setPassword(pwd);
		return "Password Changed Successfully";
	}

	@Override
	public List<ApplyLoanDTO> getUserLoanDetails(int userId) {
		User u = userDao.findById(userId).get();
		List<ApplyLoan> loan = loanDao.findUserLoanDetails(u);
		List<ApplyLoanDTO> temp = new ArrayList<>();
		loan.forEach(e -> temp.add(mapper.map(e, ApplyLoanDTO.class)));
		return temp;
	}

	@Override
	public ApplyLoan2DTO saveLoanDetails(int userId, ApplyLoanDTO loanDto)throws IOException {
		ApplyLoan loan = mapper.map(loanDto, ApplyLoan.class);
		
		String resume=storageServ.store(loanDto.getResume());

		String project_plan=storageServ.store(loanDto.getProject_plan());

		String personal_credit_report=storageServ.store(loanDto.getPersonal_credit_report());

		String business_credit_report=storageServ.store(loanDto.getBusiness_credit_report());

		String financial_statement=storageServ.store(loanDto.getFinancial_statement());

		String bank_statement=storageServ.store(loanDto.getBank_statement());

		User u = userDao.findById(userId).get();
		loan.setUser(u);
		loan.setResume(resume);
		loan.setProject_plan(project_plan);
		loan.setPersonal_credit_report(personal_credit_report);
		loan.setBusiness_credit_report(business_credit_report);
		loan.setFinancial_statement(financial_statement);
		loan.setBank_statement(bank_statement);
		String status="Applied For Loan";
		loan.setStatus(status);
		System.out.println("loan = " + loan);
		loan = loanDao.save(loan);
		return mapper.map(loan,ApplyLoan2DTO.class);
	}

	@Override
	public String addFeedBack(int userId, int feedbackId, UserFeedbackDTO userfeedback) {

		User u = userDao.findById(userId).get();
		Feedback feedback = feedbackDao.findById(feedbackId).get();
		UserFeedback uf = mapper.map(userfeedback, UserFeedback.class);
		uf.setFeedback(feedback);
		uf.setUser(u);
		// uf.setUser_feedback(userfeedback.getUser_feedback());

		uf = userfeedbackDao.save(uf);
		System.out.println("user feed back = " + uf);

		return "User Feedback Added Successfully";
	}

	@Override
	public List<HelpDTO> helpList(int userId) {

		User u=userDao.findById(userId).get();
		
		List<Help> list = helpDao.findByUser(u);

		List<HelpDTO> temp = new ArrayList<>();

		list.forEach(e -> temp.add(mapper.map(e, HelpDTO.class)));

		return temp;
	}

	@Override
	public HelpRequestDTO helpRequest(int userId, HelpRequestDTO helpDto) {
		Help h = mapper.map(helpDto, Help.class);
		User user = userDao.findById(userId).get();
		h.setUser(user);
		h = helpDao.save(h);
		return mapper.map(h, HelpRequestDTO.class);
	}
     @Override
	public String checkUser(String email) {
    	 String msg="NO";
 		if(userDao.existsByEmail(email)) {
 			msg="YES";
 		}		
 		return msg;
	}

     @Override
	public boolean updatePass(LoginDTO userDto) {
    	 if(userDao.updatePasswordByEmail(userDto.getEmail(),userDto.getPassword())==1) {
    		 System.out.println("updating pass");
 		return true;
    	 }
 		return false;
	}

    @Override
	public List<User> getUserListByName(String userName) {
		List<User> list = userDao.getUserListByName(userName);
		//List<User> lt = new ArrayList<User>();
//		int index = 0;
//		for(index = 0; index < list.size(); index++) {
//			Product p = list.get(index);
//			if(p.getQty() > 0)
//				lt.add(p);
//		}
		return list;
	}

    @Override
	public List<Feedback> getFeedbackQue() {
		List<Feedback> list =feedbackDao.findAll();
		return list;
	}

    @Override
	public String saveDocumentDetails(int userId, DocumentDto loanDto) {
		
		
        ApplyLoan loan = mapper.map(loanDto, ApplyLoan.class);
		
		String resume=storageServ.store(loanDto.getResume());

		String project_plan=storageServ.store(loanDto.getProject_plan());

		String personal_credit_report=storageServ.store(loanDto.getPersonal_credit_report());

		String business_credit_report=storageServ.store(loanDto.getBusiness_credit_report());

		String financial_statement=storageServ.store(loanDto.getFinancial_statement());

		String bank_statement=storageServ.store(loanDto.getBank_statement());
		
		User u = userDao.findById(userId).get();
		loan.setUser(u);
		loan.setResume(resume);
		loan.setProject_plan(project_plan);
		loan.setPersonal_credit_report(personal_credit_report);
		loan.setBusiness_credit_report(business_credit_report);
		loan.setFinancial_statement(financial_statement);
		loan.setBank_statement(bank_statement);
		System.out.println("loan = " + loan);
		loan = loanDao.save(loan);
		
		return "document added successfully";
	}

}
