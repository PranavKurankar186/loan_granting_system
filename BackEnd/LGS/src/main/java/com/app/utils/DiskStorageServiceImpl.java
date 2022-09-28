package com.app.utils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class DiskStorageServiceImpl implements StorageService {
	@Value("${file.upload.location}")
	private String baseFolder;

	@Override
	public List<String> loadAll() {
		File dirPath = new File(baseFolder);
		return List.of(dirPath.list());
	}

	@Override
	public String store(MultipartFile file) {
		System.out.println(file);
	//	String fileName = UUID.randomUUID().toString().replaceAll("-", "");
		String fileName = baseFolder + File.separator + file.getOriginalFilename();
		System.out.println("complete path " + fileName);
		
		try {
			System.out.println("Copied no of bytes "
					+ Files.copy(file.getInputStream(), Paths.get(fileName), StandardCopyOption.REPLACE_EXISTING));
		} catch (IOException e) {
			e.printStackTrace();
		}
		//File filePath = new File(baseFolder, fileName);
		//try (FileOutputStream out = new FileOutputStream(filePath)) {
			//FileCopyUtils.copy(file.getInputStream(), out);
			return fileName;
		//} catch (Exception e) {
			//e.printStackTrace();
		//}
		//return null;
	}

	
	public byte[] restoreImage(String path) throws IOException{
		
		System.out.println("img path " + path);
		
		return Files.readAllBytes(Paths.get(path));
	}

	
	
	
	@Override
	public Resource load(String fileName) {
		File filePath = new File(baseFolder, fileName);
		if (filePath.exists())
			return new FileSystemResource(filePath);
		return null;
	}

	@Override
	public void delete(String fileName) {
		File filePath = new File(baseFolder, fileName);
		if (filePath.exists())
			filePath.delete();
	}

}
