package com.openclinic.clinicsystem.model;

import com.openclinic.clinicsystem.utils.Status;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.time.LocalDate;

@Entity
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idExam;
    @ManyToOne(targetEntity = User.class)
    @NotNull
    private Integer fkUser;
    @NotBlank
    private String descExam;
    @NotBlank
    private String docExam;
    @ManyToOne(targetEntity = Unit.class)
    @NotNull
    private Integer fkUnit;
    @DecimalMin("1.00")
    @DecimalMax("999.00")
    @NotNull
    private Double payment;
    @FutureOrPresent
    @NotNull
    private LocalDate scheduleExam;
    @PastOrPresent
    @NotNull
    private LocalDate whenScheduledExam;
    @Enumerated(EnumType.ORDINAL)
    @NotNull
    private Status status;


}
