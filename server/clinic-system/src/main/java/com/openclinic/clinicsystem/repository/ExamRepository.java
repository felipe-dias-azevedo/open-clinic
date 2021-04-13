package com.openclinic.clinicsystem.repository;

import com.openclinic.clinicsystem.model.Exam;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamRepository extends JpaRepository<Exam, Integer> {
}
