package com.openclinic.clinicsystem.repository;

import com.openclinic.clinicsystem.model.Operator;
import com.openclinic.clinicsystem.view.response.OperatorResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface OperatorRepository extends JpaRepository<Operator, Integer> {

    Operator findByUsernameOp(String username);

    Boolean existsByUsernameOpAndPasswordOp(String username, String password);

    @Query("select o from Operator o where o.usernameOp = ?1")
    Operator findByUsername(String usernameOp);
}
