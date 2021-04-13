package com.openclinic.clinicsystem.repository;

import com.openclinic.clinicsystem.model.User;
import com.openclinic.clinicsystem.view.OperatorResponse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    Boolean existsByEmailAndPassword(String email, String password);

    User findByEmail(String email);
}
