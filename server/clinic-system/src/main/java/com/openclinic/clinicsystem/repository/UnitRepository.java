package com.openclinic.clinicsystem.repository;

import com.openclinic.clinicsystem.model.Unit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UnitRepository extends JpaRepository<Unit, Integer> {

    @Query("select u from Unit u where u.unitLat > ?1 and u.unitLat < ?2 and u.unitLon > ?3 and u.unitLon < ?4")
    List<Unit> findClosestUnits(Double minLat, Double maxLat, Double minLon, Double maxLon);
}
