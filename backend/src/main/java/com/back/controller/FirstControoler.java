package com.back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.back.entity.Student;
import com.back.repository.StudentRepository;

@CrossOrigin
@RestController
@RequestMapping("/main")
public class FirstControoler {
	
	@Autowired
    private StudentRepository reop;

	
	@PostMapping("/post")
	public ResponseEntity<Student> postData(@ModelAttribute Student student){
		
		return ResponseEntity.ok(reop.save(student));
	}
	
	@GetMapping("/get")
	public List<Student> getAllData() {
		
		return reop.findAll();
	}
	
}
