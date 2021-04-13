package com.openclinic.clinicsystem.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.*;

@Entity
public class Unit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUnit;
    @NotBlank
    @Size(min = 3, max = 255)
    private String nameUnit;
    @DecimalMin("-90")
    @DecimalMax("90")
    @NotNull
    private Double unitLat;
    @DecimalMin("-180")
    @DecimalMax("180")
    @NotNull
    private Double unitLong;


    public Integer getIdUnit() {
        return idUnit;
    }

    public void setIdUnit(Integer idUnit) {
        this.idUnit = idUnit;
    }

    public String getNameUnit() {
        return nameUnit;
    }

    public void setNameUnit(String nameUnit) {
        this.nameUnit = nameUnit;
    }

    public Double getUnitLat() {
        return unitLat;
    }

    public void setUnitLat(Double unitLat) {
        this.unitLat = unitLat;
    }

    public Double getUnitLong() {
        return unitLong;
    }

    public void setUnitLong(Double unitLong) {
        this.unitLong = unitLong;
    }
}
