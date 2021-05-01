package com.openclinic.clinicsystem.controller;

import com.openclinic.clinicsystem.model.Exam;
import com.openclinic.clinicsystem.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/exams")
public class ExamController {

    @Autowired
    private ExamRepository repository;

    @GetMapping
    public ResponseEntity getExams() {
        return ResponseEntity.status(200).body(repository.findAll());
    }

    @GetMapping("/{idExam}")
    public ResponseEntity getExam(@PathVariable Integer idExam) {
        return ResponseEntity.of(repository.findById(idExam));
    }

    @PostMapping
    public ResponseEntity postExam(@RequestBody @Valid Exam newExam) {
        repository.save(newExam);
        return ResponseEntity.status(201).build();
    }

    @DeleteMapping("/{idExam}")
    public ResponseEntity deleteExam(@PathVariable Integer idExam) {

        Optional<Exam> exam = repository.findById(idExam);

        if (exam.isPresent()) {
            repository.delete(exam.get());
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }
}
