package com.openclinic.clinicsystem.view.response;

import com.openclinic.clinicsystem.model.Operator;
import com.openclinic.clinicsystem.model.Unit;

import java.util.List;

public class OperatorResponse {

    private Integer idOperator;
    private String username;
    private Unit unit;

    public OperatorResponse(Operator operator) {
        this.idOperator = operator.getIdOperator();
        this.username = operator.getUsernameOp();
        this.unit = operator.getFkUnit();
    }

    public Integer getIdOperator() {
        return idOperator;
    }

    public String getUsername() {
        return username;
    }

    public Unit getUnit() {
        return unit;
    }
}
