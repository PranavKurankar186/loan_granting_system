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
import com.app.dao.UpdateBackgroundVerificationRepo;
import com.app.dao.UserRepository;
import com.app.dto.ApplyLoanDTO;
import com.app.dto.AssignedBackgroundListDTO;
import com.app.dto.EditDTO;
import com.app.dto.HelpDTO;
import com.app.dto.HelpRequestDTO;
import com.app.dto.UpdateBackgroundVerificationDTO;
import com.app.dto.UpdateBackgroundVerificationDTO2;
import com.app.dto.UserDTO;
import com.app.entities.ApplyLoan;
import com.app.entities.AssignBackgroundVerification;
import com.app.entities.Help;
import com.app.entities.UpdateBackgroundVerification;
import com.app.entities.User;
import com.app.utils.StorageService;

@Service
@Transactional
public class FieldOfficerImpl implements IFieldOfficer {

	@Autowired
	UserRepository userDao;

	@Autowired
	ApplyLoanRepository loanDao;

	@Autowired
	AssignLoanOfficerRepository loanOfficerDao;

	@Autowired
	AssignFieldOfficerRepository fieldOfficerDao;

   @Autowired
   UpdateBackgroundVerificationRepo updateFieldDao;
   
   @Autowired
	HelpRepository helpDao;
   
   @Autowired
	StorageService storageServ;

	@Autowired
	ModelMapper mapper;
	
	@Override
	public List<ApplyLoanDTO> getLoanRequests(int userId) {
		User u = userDao.findById(userId).get();
		AssignBackgroundVerification fieldOfficer = fieldOfficerDao.findByUser(u);
		List<ApplyLoan> loan = loanDao.findFieldOfficerDetails(fieldOfficer);
		List<ApplyLoanDTO> temp = new ArrayList<>();
		loan.forEach(e -> temp.add(mapper.map(e, ApplyLoanDTO.class)));
		return temp;
	}

	@Override
	public List<AssignedBackgroundListDTO> getAssignedRequest(int userId) {
		User u =userDao.findById(userId).get();
		AssignBackgroundVerification fieldOfficer = fieldOfficerDao.findByUser(u);
		List<AssignedBackgroundListDTO> loan = loanDao.findFieldOfficerDetails(fieldOfficer).stream().map(i->new AssignedBackgroundListDTO(i.getLoan_id(),i.getName())).collect(Collectors.toCollection(ArrayList::new));
		return loan;
	}

	@Override
	public UpdateBackgroundVerificationDTO2 updateBvf(UpdateBackgroundVerificationDTO updateDto) {
		
		String report = storageServ.store(updateDto.getReport());
		System.out.println(report);
		
		ApplyLoan loan = loanDao.findById(updateDto.getLoan_id()).get();
		AssignBackgroundVerification fieldOfficer = fieldOfficerDao.findById(loan.getFieldOfficer().getField_officer_id()).get();
		UpdateBackgroundVerification updateBackground = mapper.map(updateDto,UpdateBackgroundVerification.class);		
		updateBackground.setReport(report);
		updateBackground.setFieldOfficer(fieldOfficer);
		updateBackground.setLoan(loan);
		System.out.println("updateBackground = "+updateBackground);
	    updateBackground = updateFieldDao.save(updateBackground);
	    loan.setStatus("Verified By Field Officer");
		return mapper.map(updateBackground,UpdateBackgroundVerificationDTO2.class);
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
	public List<UpdateBackgroundVerificationDTO2> updateBvfList() {
		
		List<UpdateBackgroundVerification> list = updateFieldDao.findAll();
		
		List<UpdateBackgroundVerificationDTO2> temp =new ArrayList<>();
		
		list.forEach(e->temp.add(mapper.map(e,UpdateBackgroundVerificationDTO2.class)));
		
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
	public byte[] restoreImage(int updateBackgroundId)throws IOException {
		UpdateBackgroundVerification u = updateFieldDao.findById(updateBackgroundId).get();
		String path=u.getReport();
		System.out.println("img path " + path);
		return Files.readAllBytes(Paths.get(path));
	}

//	@Override
//	public String imageBvf(MultipartFile updateDto) {
//		
//		String report = storageServ.store(updateDto);
//		System.out.println(report);
//		
//		
//		//AssignBackgroundVerification fieldOfficer = fieldOfficerDao.findById(1).get();
//		UpdateBackgroundVerification updateBackground = mapper.map(updateDto,UpdateBackgroundVerification.class);		
//		updateBackground.setReport(report);
//		//updateBackground.setFieldOfficer(fieldOfficer);
//		System.out.println("updateBackground = "+updateBackground);
//	    updateBackground = updateFieldDao.save(updateBackground);
//		return "image uploaded";
//	}

	
	
}
