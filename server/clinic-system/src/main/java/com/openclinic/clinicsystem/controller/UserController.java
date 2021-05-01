package com.openclinic.clinicsystem.controller;

import com.openclinic.clinicsystem.model.User;
import com.openclinic.clinicsystem.repository.UserRepository;
import com.openclinic.clinicsystem.view.request.UserLoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository repository;

    List<User> usersLogged = new ArrayList<User>();

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
    public ResponseEntity postUserLogin(@RequestBody @Valid UserLoginRequest userLogin) {

        Optional<User> user = Optional.ofNullable(repository.findByEmail(userLogin.getEmail()));

        if (user.isPresent()) {

            if (!repository.existsByEmailAndPassword(userLogin.getEmail(), userLogin.getPassword())) {
                return ResponseEntity.status(403).build();
            } else {

                if (!usersLogged.contains(user.get())) {
                    usersLogged.add(user.get());
                }

                return ResponseEntity.status(200).body(
                        repository.findByEmailResponse(userLogin.getEmail()));
            }
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @PostMapping("/logoff")
    public ResponseEntity postUserLogoff(@RequestBody @Valid UserLoginRequest userLogoff) {

        Optional<User> user = Optional.ofNullable(repository.findByEmail(userLogoff.getEmail()));

        if (user.isPresent()) {

            if (!repository.existsByEmailAndPassword(userLogoff.getEmail(), userLogoff.getPassword())) {
                return ResponseEntity.status(403).build();
            } else {

                if (!usersLogged.contains(user.get())) {
                    usersLogged.add(user.get());
                }

                return ResponseEntity.status(200).body(
                        repository.findByEmailResponse(userLogoff.getEmail()));
            }
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @DeleteMapping("/{idUser}")
    public ResponseEntity deleteExam(@PathVariable Integer idUser) {

        Optional<User> user = repository.findById(idUser);

        if (user.isPresent()) {
            repository.delete(user.get());
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }
}
