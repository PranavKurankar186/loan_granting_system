package com.app.service;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ApplyLoanRepository;
import com.app.dao.AssignFieldOfficerRepository;
import com.app.dao.AssignLoanOfficerRepository;
import com.app.dao.FeedbackRepository;
import com.app.dao.HelpRepository;
import com.app.dao.UpdateBackgroundVerificationRepo;
import com.app.dao.UpdateLoanVerificationRepo;
import com.app.dao.UserFeedbackRepository;
import com.app.dao.UserRepository;
import com.app.dto.AddCommentDTO;
import com.app.dto.ApplyLoanDTO;
import com.app.dto.AssignFieldOfficerDTO;
import com.app.dto.AssignLoanVerificationDTO;
import com.app.dto.EditDTO;
import com.app.dto.FeedbackDTO;
import com.app.dto.HelpDTO;
import com.app.dto.StatusDTO;
import com.app.dto.UserDTO;
import com.app.entities.ApplyLoan;
import com.app.entities.AssignBackgroundVerification;
import com.app.entities.AssignLoanVerification;
import com.app.entities.Feedback;
import com.app.entities.Help;
import com.app.entities.UpdateBackgroundVerification;
import com.app.entities.UpdateLoanVerification;
import com.app.entities.User;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {

	@Autowired
	UserRepository userDao;

	@Autowired
	ApplyLoanRepository loanDao;

	@Autowired
	AssignLoanOfficerRepository loanOfficerDao;

	@Autowired
	AssignFieldOfficerRepository fieldOfficerDao;

	@Autowired
	HelpRepository helpDao;
	
	@Autowired
	FeedbackRepository feedbackDao;
	
	@Autowired
	UserFeedbackRepository userFeedbackDao;

	@Autowired
	UpdateLoanVerificationRepo updateLoanDao;
	
	@Autowired
	UpdateBackgroundVerificationRepo updateFieldDao;
	
	@Autowired
	ModelMapper mapper;

	@Override
	public List<User> getAllCustomers(int pageNo) {
		
		int pageSize=5;
		String property ="user_id";
	    Pageable request = PageRequest.of(pageNo, pageSize,Direction.ASC,property);
		Page<User> page = userDao.findByUser_Category("user",request);
		return page.getContent();
	}

	@Override
	public List<User> getAllLoanOfficer(int pageNo) {
		
		int pageSize=5;
		String property ="user_id";
	    Pageable request = PageRequest.of(pageNo, pageSize,Direction.ASC,property);
		Page<User> page = userDao.findByUser_Category("loanofficer",request);
		return page.getContent();
	}

	@Override
	public List<User> getAllFieldOfficer(int pageNo) {

		int pageSize=5;
		String property ="user_id";
	    Pageable request = PageRequest.of(pageNo, pageSize,Direction.ASC,property);
		Page<User> page = userDao.findByUser_Category("fieldofficer",request);
		return page.getContent();
	}

	@Override
	public List<ApplyLoanDTO> getAllLoanRequest() {
		List<ApplyLoan> loan = loanDao.findAll();
		List<ApplyLoanDTO> temp = new ArrayList<>();
		loan.forEach(e -> temp.add(mapper.map(e, ApplyLoanDTO.class)));
		return temp;
	}

	@Override
	public String assignLoanOfficer(AssignLoanVerificationDTO loanOfficer) {
         User u =userDao.findById(loanOfficer.getUser_id()).get();
         //System.out.println("user = "+u);
		ApplyLoan loan = loanDao.findById(loanOfficer.getLoan_id()).get();
		//User u2 =userDao.findById(loan.getUser().getUser_id()).get();
		AssignLoanVerification loanOfficer1 = loanOfficerDao.findByUser(u);
		System.out.println("loan officer = "+loanOfficer1);
		if(loanOfficer1!=null) {
		loan.setLoanOfficer(loanOfficer1);
		}else if(loanOfficer1==null) {
			AssignLoanVerification l = mapper.map(loanOfficer,AssignLoanVerification.class);
			l.setUser(u);
			l=loanOfficerDao.save(l);
			loan.setLoanOfficer(l);
			loan.setStatus("Assigned To Loan Officer");
			//u2.setStatus("Assigned to Loan Officer");
		}

		return "Loan Officer Assigned Successfully";
	}

	@Override
	public List<Object> listOfBGVFO() {

		return fieldOfficerDao.listOfBGVFO();
	}

	@Override
	public List<Object> updateBGVFOList() {

		return fieldOfficerDao.updateBGVFOList();
	}

	@Override
	public String  assignFieldOfficer(AssignFieldOfficerDTO fieldOfficer) {

		 User u =userDao.findById(fieldOfficer.getUser_id()).get();
		ApplyLoan loan = loanDao.findById(fieldOfficer.getLoan_id()).get();
		AssignBackgroundVerification fieldOfficer1 = fieldOfficerDao.findByUser(u);
		System.out.println("field officer = "+fieldOfficer1);
		if(fieldOfficer1!=null) {
		loan.setFieldOfficer(fieldOfficer1);
		}else if(fieldOfficer1==null) {
			AssignBackgroundVerification f = mapper.map(fieldOfficer,AssignBackgroundVerification.class);
			f.setUser(u);
			f=fieldOfficerDao.save(f);
			loan.setFieldOfficer(f);
			loan.setStatus("Assigned To Field Officer");
			//return mapper.map(f,AssignFieldOfficerDTO.class);
		}
		return "Field Officer Assigned Successfully !!!!!!";
	}

	@Override
	public List<Object> listOfLVFO() {

		return loanOfficerDao.listOfLVFO();
	}

	@Override
	public List<Object> updateLVFOList() {

		return loanOfficerDao.updateLVFOList();
	}

	@Override
	public List<HelpDTO> helpList() {

		List<Help> list = helpDao.findAll();

		List<HelpDTO> temp = new ArrayList<>();

		list.forEach(e -> temp.add(mapper.map(e,HelpDTO.class)));

		return temp;
	}

	@Override
	public FeedbackDTO addFeedback(FeedbackDTO feedbackDto) {
		Feedback feedback = mapper.map(feedbackDto,Feedback.class);
		System.out.println("feedback = "+feedback);
		feedback = feedbackDao.save(feedback);
		return mapper.map(feedback,FeedbackDTO.class);
	}

	@Override
	public List<Feedback> getFeedbackQue() {
		return feedbackDao.findAll();
	}
	
	
	/*@Override
	public List<Object> userFeedback(){
		List<Object> list = userFeedbackDao.findUserFeedback();
		return list;
	}*/

	@Override
	public AddCommentDTO addComment(int requestId, AddCommentDTO comment) {
		Help help = helpDao.findById(requestId).get();
		help.setComment(comment.getComment());
		help=helpDao.save(help);
		return mapper.map(help,AddCommentDTO.class);
	}

	@Override
	public StatusDTO updateStatus(int userId, StatusDTO status) {
		System.out.println("user Id = "+userId);
		User u = userDao.findById(userId).get();
		System.out.println(status.getStatus());
		u.setStatus(status.getStatus());
		u=userDao.save(u);
		return mapper.map(u,StatusDTO.class);
	}
	
	@Override
	public StatusDTO updateLoanStatus(int loanId, StatusDTO status) {
		System.out.println("loan Id = "+loanId);
		ApplyLoan loan = loanDao.findById(loanId).get();
		System.out.println(status.getStatus());
		loan.setStatus(status.getStatus());
		loan=loanDao.save(loan);
		return mapper.map(loan,StatusDTO.class);
	}
	

	@Override
	public Collection<?> userFeedback() {
		
		//List<Feedback> feedback=feedbackDao.findAll();
	    //List<UserFeedback> UF =userFeedbackDao.findAll();
	
		//List<AdminUserFeedbackDTO> temp = new ArrayList<>();
			
		Collection<?> temp=userFeedbackDao.findUserFeedback();
			
		//UF.forEach(e -> temp.add(mapper.map(e,AdminUserFeedbackDTO.class)));
		//feedback.forEach(e -> temp.add(mapper.map(e,AdminUserFeedbackDTO.class)));

		System.out.println("temp = "+temp.getClass());
		
		return temp;
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
	public byte[] restoreImage(int loanId) throws IOException {
		ApplyLoan loan = loanDao.findById(loanId).get();
		String path=loan.getResume();
		System.out.println("img path " + path);
		return Files.readAllBytes(Paths.get(path));
	}

	@Override
	public byte[] restoreProject(int loanId) throws IOException {
		ApplyLoan loan = loanDao.findById(loanId).get();
		String path=loan.getProject_plan();
		System.out.println("img path " + path);
		return Files.readAllBytes(Paths.get(path));
	}

	@Override
	public byte[] restorePersonal(int loanId) throws IOException {
		ApplyLoan loan = loanDao.findById(loanId).get();
		String path=loan.getPersonal_credit_report();
		System.out.println("img path " + path);
		return Files.readAllBytes(Paths.get(path));
	}
 
	@Override
	public byte[] restoreBussiness(int loanId) throws IOException {
		ApplyLoan loan = loanDao.findById(loanId).get();
		String path=loan.getBusiness_credit_report();
		System.out.println("img path " + path);
		return Files.readAllBytes(Paths.get(path));
	}

	@Override
	public byte[] restoreFinancial(int loanId) throws IOException {
		ApplyLoan loan = loanDao.findById(loanId).get();
		String path=loan.getFinancial_statement();
		System.out.println("img path " + path);
		return Files.readAllBytes(Paths.get(path));
	}

	@Override
	public byte[] restoreBank(int loanId) throws IOException {
		ApplyLoan loan = loanDao.findById(loanId).get();
		String path=loan.getBank_statement();
		System.out.println("img path " + path);
		return Files.readAllBytes(Paths.get(path));
	}

	@Override
	public byte[] restoreReport(int loanId) throws IOException {
		//ApplyLoan loan =loanDao.findById(loanId).get();
		UpdateLoanVerification u = updateLoanDao.findById(loanId).get();
		String path=u.getReport();
		System.out.println("img path " + path);
		return Files.readAllBytes(Paths.get(path));
	}

	@Override
	public byte[] restoreFieldReport(int loanId) throws IOException {
		
		//ApplyLoan loan =loanDao.findById(loanId).get();
		UpdateBackgroundVerification u = updateFieldDao.findById(loanId).get();
		String path=u.getReport();
		System.out.println("img path " + path);
		return Files.readAllBytes(Paths.get(path));
	}

	

	
}
