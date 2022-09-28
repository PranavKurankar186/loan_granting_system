package com.app;

import java.io.File;
import java.util.Properties;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class LgsApplication implements CommandLineRunner {

	@Value("${file.upload.location}")
	private String folderName;
	
	@Value("${spring.mail.protocol}")
	private String protocol;
	
	@Value("${spring.mail.username}")
	private String userName;
	
	@Value("${spring.mail.password}")
	private String password;
	public static void main(String[] args) {
		SpringApplication.run(LgsApplication.class, args);
	}
	
	@Bean
    public JavaMailSender getJavaMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(587);
        
        mailSender.setUsername(userName);
        mailSender.setPassword(password);
        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", protocol);
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.debug", "true");
        
        return mailSender;
    }
	
	@Bean 
	public ModelMapper mapper()
	{
		System.out.println("in mapper");
		return new ModelMapper();
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		PasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder;
	}
	
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("in run "+folderName);
		//create images folder if it doesn't exist
		File dir=new File(folderName);
		if(!dir.exists()) {
			System.out.println("Created folder/s "+dir.mkdirs());
		}
		else 
			System.out.println("folder alrdy exists");		
	}
	

}
