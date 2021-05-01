package com.openclinic.clinicsystem.controller;

import com.openclinic.clinicsystem.model.Operator;
import com.openclinic.clinicsystem.repository.OperatorRepository;
import com.openclinic.clinicsystem.view.request.OperatorRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/operators")
public class OperatorController {

    @Autowired
    private OperatorRepository repository;

    List<Operator> operatorsLogged = new ArrayList<Operator>();

    @GetMapping
    public ResponseEntity getOperators() {
        return ResponseEntity.status(200).body(repository.findAll());
    }

    @PostMapping("/login")
    public ResponseEntity showOperator(@RequestBody @Valid OperatorRequest newOperator) {

        Optional<Operator> operator = Optional.ofNullable(repository.findByUsernameOp(newOperator.getUsername()));

        if (operator.isPresent()) {

            if (!repository.existsByUsernameOpAndPasswordOp(newOperator.getUsername(), newOperator.getPassword())) {
                return ResponseEntity.status(403).build();
            } else {

                if (!operatorsLogged.contains(operator.get())) {
                    operatorsLogged.add(operator.get());
                }

                return ResponseEntity.status(200).body(
                        repository.findByUsername(newOperator.getUsername()));
            }
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @PostMapping("/logoff")
    public ResponseEntity logoffOperator(@RequestBody @Valid OperatorRequest newOperator) {

        Optional<Operator> operator = Optional.ofNullable(repository.findByUsernameOp(newOperator.getUsername()));

        if (operator.isPresent()) {

            if (!repository.existsByUsernameOpAndPasswordOp(newOperator.getUsername(), newOperator.getPassword())) {
                return ResponseEntity.status(403).build();
            } else {

                if (!operatorsLogged.contains(operator.get())) {
                    operatorsLogged.add(operator.get());
                }

                return ResponseEntity.status(200).body(
                        repository.findByUsername(newOperator.getUsername()));
            }
        } else {
            return ResponseEntity.status(404).build();
        }
    }
}
