package com.openclinic.clinicsystem.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
    private LocalDate birth;
    private Character gender;
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
    private Boolean insurance;
}
