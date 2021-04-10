package com.openclinic.clinicsystem.repository;

import com.openclinic.clinicsystem.model.Operator;
import com.openclinic.clinicsystem.view.OperatorResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OperatorRepository extends JpaRepository<Operator, Integer> {

    Boolean existsByUsernameAndPassword(String username, String password);

    @Query("select o from Operator o where o.username = ?1")
    OperatorResponse findByUsername(String username);
}
