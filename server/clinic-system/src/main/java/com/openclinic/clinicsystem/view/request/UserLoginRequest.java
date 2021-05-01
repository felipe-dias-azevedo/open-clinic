package com.openclinic.clinicsystem.view.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class UserLoginRequest {

    @NotBlank
    @Email
    private String email;
    @NotBlank
    @Size(min = 3, max = 100)
    private String password;

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
