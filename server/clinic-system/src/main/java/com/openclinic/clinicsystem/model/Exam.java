package com.openclinic.clinicsystem.model;

import com.openclinic.clinicsystem.utils.ConvertStatus;
import com.openclinic.clinicsystem.utils.Status;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.time.LocalDateTime;

@Entity
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_exam")
    private Integer idExam;
    @ManyToOne
    @JoinColumn(name = "fk_user")
    @NotNull
    private User fkUser;
    @NotBlank
    @Column(name="desc_exam")
    private String descExam;
    @NotBlank
    @Column(name="doc_exam")
    private String docExam;
    @ManyToOne
    @JoinColumn(name = "fk_unit")
    @NotNull
    private Unit fkUnit;
    @DecimalMin("1.00")
    @DecimalMax("999.00")
    @NotNull
    @Column(name="payment")
    private Double payment;
    @FutureOrPresent
    @NotNull
    @Column(name="create_date")
    private LocalDateTime createDate;
    @PastOrPresent
    @NotNull
    @Column(name="schedule_date")
    private LocalDateTime scheduleDate;
    @Enumerated(EnumType.ORDINAL)
    @NotNull
    @Column(name="status")
    private Status status;


    public Integer getIdExam() {
        return idExam;
    }

    public void setIdExam(Integer idExam) {
        this.idExam = idExam;
    }

    public User getFkUser() {
        return fkUser;
    }

    public void setFkUser(User fkUser) {
        this.fkUser = fkUser;
    }

    public String getDescExam() {
        return descExam;
    }

    public void setDescExam(String descExam) {
        this.descExam = descExam;
    }

    public String getDocExam() {
        return docExam;
    }

    public void setDocExam(String docExam) {
        this.docExam = docExam;
    }

    public Unit getFkUnit() {
        return fkUnit;
    }

    public void setFkUnit(Unit fkUnit) {
        this.fkUnit = fkUnit;
    }

    public Double getPayment() {
        return payment;
    }

    public void setPayment(Double payment) {
        this.payment = payment;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public LocalDateTime getScheduleDate() {
        return scheduleDate;
    }

    public void setScheduleDate(LocalDateTime scheduleDate) {
        this.scheduleDate = scheduleDate;
    }

    public Integer getStatus() {
        return status.getIdentifier();
    }

    public void setStatus(Integer identifier) {
        this.status = ConvertStatus.convert(identifier);
    }
}
