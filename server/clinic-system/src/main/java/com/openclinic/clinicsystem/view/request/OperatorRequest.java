package com.openclinic.clinicsystem.view.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class OperatorRequest {

    @Size(min = 3, max = 100)
    @NotBlank
    private String username;
    @Size(min = 3, max = 100)
    @NotBlank
    private String password;

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
