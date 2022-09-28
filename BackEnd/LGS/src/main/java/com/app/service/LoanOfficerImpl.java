 package com.app.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ApplyLoanRepository;
import com.app.dao.AssignFieldOfficerRepository;
import com.app.dao.AssignLoanOfficerRepository;
import com.app.dao.HelpRepository;
import com.app.dao.UpdateLoanVerificationRepo;
import com.app.dao.UserRepository;
import com.app.dto.ApplyLoanDTO;
import com.app.dto.AssignedLoanListDTO;
import com.app.dto.EditDTO;
import com.app.dto.HelpDTO;
import com.app.dto.HelpRequestDTO;
import com.app.dto.UpdateLoanVerificationDTO;
import com.app.dto.UserDTO;
import com.app.entities.ApplyLoan;
import com.app.entities.AssignLoanVerification;
import com.app.entities.Help;
import com.app.entities.UpdateLoanVerification;
import com.app.entities.User;
import com.app.utils.StorageService;

@Service
@Transactional
public class LoanOfficerImpl implements ILoanOfficer {

	@Autowired
	UserRepository userDao;

	@Autowired
	ApplyLoanRepository loanDao;

	@Autowired
	AssignLoanOfficerRepository loanOfficerDao;

	@Autowired
	AssignFieldOfficerRepository fieldOfficerDao;
	
	@Autowired
	UpdateLoanVerificationRepo updateLoanDao;
	
	 @Autowired
	 HelpRepository helpDao;
	 
	 @Autowired
	 StorageService storageServ;

	@Autowired
	ModelMapper mapper;

	@Override
	public List<ApplyLoanDTO> getLoanRequests(int userId) {
		User u = userDao.findById(userId).get();
		AssignLoanVerification loanOfficer = loanOfficerDao.findByUser(u);
		List<ApplyLoan> loan = loanDao.findLoanOfficerDetails(loanOfficer);
		List<ApplyLoanDTO> temp = new ArrayList<>();
		loan.forEach(e -> temp.add(mapper.map(e, ApplyLoanDTO.class)));
		return temp;
	}

	@Override
	public List<AssignedLoanListDTO> getAssignedRequest(int userId) {
		User u = userDao.findById(userId).get();
		AssignLoanVerification loanOfficer = loanOfficerDao.findByUser(u);
		List<AssignedLoanListDTO> loan = loanDao.findLoanOfficerDetails(loanOfficer).stream().map(i->new AssignedLoanListDTO(i.getLoan_id(),i.getName())).collect(Collectors.toCollection(ArrayList::new));
		return loan;
	}

	@Override
	public String updateLvf(UpdateLoanVerificationDTO updateDto) {
		String report = storageServ.store(updateDto.getReport());
		System.out.println(report);
		
		ApplyLoan loan = loanDao.findById(updateDto.getLoan_id()).get();
		AssignLoanVerification loanOfficer = loanOfficerDao.findById(loan.getLoanOfficer().getLoan_officer_id()).get();
		UpdateLoanVerification updateLoan = mapper.map(updateDto,UpdateLoanVerification.class);		
		updateLoan.setReport(report);
		updateLoan.setLoanOfficer(loanOfficer);
		loan.setStatus("verification done by loan officer");
		updateLoan.setLoan(loan);
		System.out.println("updateBackground = "+updateLoan);
	    updateLoan = updateLoanDao.save(updateLoan);
	    loan.setStatus("Verified By Loan Officer");
		return "updated successfully";
	}

	@Override
	public List<UpdateLoanVerificationDTO> updateLvfList() {
		
		List<UpdateLoanVerification> list = updateLoanDao.findAll();
		List<UpdateLoanVerificationDTO> temp = new ArrayList<>();
		
		list.forEach(e->temp.add(mapper.map(e,UpdateLoanVerificationDTO.class)));
		
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
	public List<HelpDTO> helpList(int userId) {
		
         User user = userDao.findById(userId).get();
		
		List<Help> list = helpDao.findByUser(user);
       
		List<HelpDTO> temp = new ArrayList<>();
 	
        list.forEach(e -> temp.add(mapper.map(e, HelpDTO.class)));

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
	public byte[] restoreImage(int updateLoanId) throws IOException {
		UpdateLoanVerification u = updateLoanDao.findById(updateLoanId).get();
		String path=u.getReport();
		System.out.println("img path " + path);
		return Files.readAllBytes(Paths.get(path));
	}

}
