package com.openclinic.clinicsystem.controller;

import com.openclinic.clinicsystem.repository.OperatorRepository;
import com.openclinic.clinicsystem.view.OperatorRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/operators")
public class OperatorController {

    @Autowired
    private OperatorRepository repository;

    @GetMapping
    public ResponseEntity getOperators() {
        return ResponseEntity.status(200).body(repository.findAll());
    }

    @PostMapping
    public ResponseEntity showOperator(@RequestBody OperatorRequest newOperator) {
        if (repository.existsByUsernameAndPassword(newOperator.getUsername(), newOperator.getPassword())) {
            return ResponseEntity.status(200).body(
                    repository.findByUsername(newOperator.getUsername()));
        } else {
            return ResponseEntity.status(404).build();
        }
    }
}
