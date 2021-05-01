package com.openclinic.clinicsystem.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Operator {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_operator")
    private Integer idOperator;
    @Size(min = 3, max = 100)
    @NotBlank
    @Column(name="username_op")
    private String usernameOp;
    @Size(min = 5, max = 100)
    @NotBlank
    @Column(name="password_op")
    private String passwordOp;
    @ManyToOne
    @JoinColumn(name = "fk_unit")
    @NotNull
    private Unit fkUnit;


    public Integer getIdOperator() {
        return idOperator;
    }

    public void setIdOperator(Integer idOperator) {
        this.idOperator = idOperator;
    }

    public String getUsernameOp() {
        return usernameOp;
    }

    public void setUsernameOp(String usernameOp) {
        this.usernameOp = usernameOp;
    }

    public String getPasswordOp() {
        return passwordOp;
    }

    public void setPasswordOp(String passwordOp) {
        this.passwordOp = passwordOp;
    }

    public Unit getFkUnit() {
        return fkUnit;
    }

    public void setFkUnit(Unit fkUnit) {
        this.fkUnit = fkUnit;
    }
}
