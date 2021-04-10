package com.openclinic.clinicsystem.view;

import com.openclinic.clinicsystem.model.Operator;

public class OperatorResponse {

    private String username;

    public OperatorResponse(Operator operator) {
        this.username = operator.getUsername();
    }

    public String getUsername() {
        return username;
    }
}
