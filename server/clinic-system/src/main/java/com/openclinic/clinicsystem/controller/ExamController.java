package com.openclinic.clinicsystem.controller;

import com.openclinic.clinicsystem.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/exams")
public class ExamController {

    @Autowired
    private ExamRepository repository;

    @GetMapping
    public ResponseEntity getExams() {
        return ResponseEntity.status(200).body(repository.findAll());
    }
}
