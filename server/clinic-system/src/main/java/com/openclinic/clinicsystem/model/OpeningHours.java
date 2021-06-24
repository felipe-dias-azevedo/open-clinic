package com.openclinic.clinicsystem.model;

import javax.persistence.*;
import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
public class OpeningHours {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_openhours")
    private Integer idOpenHours;
    @ManyToOne
    @JoinColumn(name = "fk_unit")
    @NotNull
    private User fkUnit;
    @NotBlank
    @Column(name="day_name")
    private String docExam;
    @NotNull
    @Column(name="open_hour")
    private LocalDateTime openHour;
    @NotNull
    @Column(name="close_hour")
    private LocalDateTime closeHour;

    public Integer getIdOpenHours() {
        return idOpenHours;
    }

    public void setIdOpenHours(Integer idOpenHours) {
        this.idOpenHours = idOpenHours;
    }

    public User getFkUnit() {
        return fkUnit;
    }

    public void setFkUnit(User fkUnit) {
        this.fkUnit = fkUnit;
    }

    public String getDocExam() {
        return docExam;
    }

    public void setDocExam(String docExam) {
        this.docExam = docExam;
    }

    public LocalDateTime getOpenHour() {
        return openHour;
    }

    public void setOpenHour(LocalDateTime openHour) {
        this.openHour = openHour;
    }

    public LocalDateTime getCloseHour() {
        return closeHour;
    }

    public void setCloseHour(LocalDateTime closeHour) {
        this.closeHour = closeHour;
    }
}
