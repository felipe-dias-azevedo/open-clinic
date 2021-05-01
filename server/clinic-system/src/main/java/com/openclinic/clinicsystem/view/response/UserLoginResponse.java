package com.openclinic.clinicsystem.view.response;

import com.openclinic.clinicsystem.model.User;

public class UserLoginResponse {

    private Integer idUser;
    private String name;
    private String email;

    public UserLoginResponse(User user) {
        this.idUser = user.getIdUser();
        this.name = user.getName();
        this.email = user.getEmail();
    }

    public Integer getIdUser() {
        return idUser;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }
}
