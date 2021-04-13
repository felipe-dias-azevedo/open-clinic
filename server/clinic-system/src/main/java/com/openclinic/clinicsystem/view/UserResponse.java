package com.openclinic.clinicsystem.view;

import com.openclinic.clinicsystem.model.User;
import com.openclinic.clinicsystem.utils.ConvertGender;
import com.openclinic.clinicsystem.utils.Gender;
import java.time.LocalDate;

public class UserResponse {

    private Integer idUser;
    private String name;
    private String email;
    private String cellphone;
    private LocalDate birth;
    private Gender gender;
    private Double addressLat;
    private Double addressLon;
    private Boolean insurance;

    public UserResponse(User user) {
        this.idUser = user.getIdUser();
        this.name = user.getName();
        this.email = user.getEmail();
        this.cellphone = user.getCellphone();
        this.birth = user.getBirth();
        this.gender = ConvertGender.convert(user.getGender());
        this.addressLat = user.getAddressLat();
        this.addressLon = user.getAddressLon();
        this.insurance = user.getInsurance();
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

    public String getCellphone() {
        return cellphone;
    }

    public LocalDate getBirth() {
        return birth;
    }

    public String getGender() {
        return gender.getDescription();
    }

    public Double getAddressLat() {
        return addressLat;
    }

    public Double getAddressLon() {
        return addressLon;
    }

    public Boolean getInsurance() {
        return insurance;
    }
}
