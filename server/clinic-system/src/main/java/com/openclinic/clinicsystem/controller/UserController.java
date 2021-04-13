package com.openclinic.clinicsystem.controller;

import com.openclinic.clinicsystem.model.User;
import com.openclinic.clinicsystem.repository.UserRepository;
import com.openclinic.clinicsystem.view.UserLoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository repository;

    @GetMapping
    public ResponseEntity getUsers() {
        List<User> users = repository.findAll();

        if (users.isEmpty()) {
            return ResponseEntity.status(204).build();
        } else {
            return ResponseEntity.status(200).body(users);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity getUser(@PathVariable Integer id) {
        return ResponseEntity.of(repository.findById(id));
    }

    @PostMapping
    public ResponseEntity postUser(@RequestBody @Valid User newUser) {
        repository.save(newUser);
        return ResponseEntity.status(201).build();
    }

    @PostMapping("/login")
    public ResponseEntity postUserLogin(@RequestBody UserLoginRequest userLogin) {
        if (repository.existsByEmailAndPassword(userLogin.getEmail(), userLogin.getPassword())) {
            return ResponseEntity.status(200).body(
                    repository.findByEmail(userLogin.getEmail()));
        } else {
            return ResponseEntity.status(404).build();
        }
    }
}
