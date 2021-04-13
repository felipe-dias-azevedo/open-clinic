package com.openclinic.clinicsystem.controller;

import com.openclinic.clinicsystem.model.Unit;
import com.openclinic.clinicsystem.repository.UnitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/units")
public class UnitController {

    @Autowired
    private UnitRepository repository;

    @GetMapping
    public ResponseEntity getUnits() {
        return ResponseEntity.status(200).body(repository.findAll());
    }

    @PostMapping ResponseEntity postUnit(@RequestBody Unit newUnit) {
        repository.save(newUnit);
        return ResponseEntity.status(201).build();
    }
}
