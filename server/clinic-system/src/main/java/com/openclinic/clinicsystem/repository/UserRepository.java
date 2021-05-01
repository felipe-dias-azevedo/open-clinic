package com.openclinic.clinicsystem.repository;

import com.openclinic.clinicsystem.model.User;
import com.openclinic.clinicsystem.view.response.UserResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByEmail(String email);

    Boolean existsByEmailAndPassword(String email, String password);

    @Query("select u from User u where u.email = ?1")
    UserResponse findByEmailResponse(String email);
}
