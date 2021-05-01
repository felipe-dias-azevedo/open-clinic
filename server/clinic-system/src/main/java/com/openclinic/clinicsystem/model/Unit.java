package com.openclinic.clinicsystem.model;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
public class Unit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_unit")
    private Integer idUnit;
    @NotBlank
    @Size(min = 3, max = 255)
    @Column(name="name_unit")
    private String nameUnit;
    @DecimalMin("-90")
    @DecimalMax("90")
    @NotNull
    @Column(name="unit_lat")
    private Double unitLat;
    @DecimalMin("-180")
    @DecimalMax("180")
    @NotNull
    @Column(name="unit_lon")
    private Double unitLon;


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

    public Double getUnitLon() {
        return unitLon;
    }

    public void setUnitLon(Double unitLon) {
        this.unitLon = unitLon;
    }
}
