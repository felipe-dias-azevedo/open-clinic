package com.openclinic.clinicsystem.model;

import com.openclinic.clinicsystem.utils.ConvertGender;
import com.openclinic.clinicsystem.utils.Gender;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.time.LocalDate;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUser;
    @NotBlank
    @Size(min = 3, max = 100)
    private String name;
    @NotBlank
    @Email
    private String email;
    @NotBlank
    private String cellphone;
    @Past
    @NotNull
    private LocalDate birth;
    @Enumerated(EnumType.ORDINAL)
    @NotNull
    private Gender gender;
    @NotBlank
    @Size(min = 5, max = 100)
    private String password;
    @DecimalMin("-90")
    @DecimalMax("90")
    @NotNull
    private Double addressLat;
    @DecimalMin("-180")
    @DecimalMax("180")
    @NotNull
    private Double addressLon;
    @NotNull
    private Boolean insurance;


    public Integer getIdUser() {
        return idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCellphone() {
        return cellphone;
    }

    public void setCellphone(String cellphone) {
        this.cellphone = cellphone;
    }

    public LocalDate getBirth() {
        return birth;
    }

    public void setBirth(LocalDate birth) {
        this.birth = birth;
    }

    public Integer getGender() {
        return gender.getIdentifier();
    }

    public void setGender(Integer identifier) {
        this.gender = ConvertGender.convert(identifier);
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Double getAddressLat() {
        return addressLat;
    }

    public void setAddressLat(Double addressLat) {
        this.addressLat = addressLat;
    }

    public Double getAddressLon() {
        return addressLon;
    }

    public void setAddressLon(Double addressLon) {
        this.addressLon = addressLon;
    }

    public Boolean getInsurance() {
        return insurance;
    }

    public void setInsurance(Boolean insurance) {
        this.insurance = insurance;
    }
}
