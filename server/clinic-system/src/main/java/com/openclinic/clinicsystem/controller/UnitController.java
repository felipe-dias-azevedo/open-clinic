package com.openclinic.clinicsystem.controller;

import com.openclinic.clinicsystem.model.Unit;
import com.openclinic.clinicsystem.repository.UnitRepository;
import com.openclinic.clinicsystem.utils.Calculus;
import com.openclinic.clinicsystem.view.request.ClosestUnitRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/units")
public class UnitController {

    @Autowired
    private UnitRepository repository;

    @GetMapping
    public ResponseEntity getUnits() {
        return ResponseEntity.status(200).body(repository.findAll());
    }

    @GetMapping("/{idUnit}")
    public ResponseEntity getUnit(@PathVariable Integer idUnit) {
        return ResponseEntity.of(repository.findById(idUnit));
    }

    @PostMapping
    public ResponseEntity postUnit(@RequestBody @Valid Unit newUnit) {
        repository.save(newUnit);
        return ResponseEntity.status(201).build();
    }

    @PostMapping("/closest")
    public ResponseEntity closestUnit(@RequestBody @Valid ClosestUnitRequest unitRequest) {


        Double minLat = unitRequest.getUnitLat() - (180 * 0.1);
        Double maxLat = unitRequest.getUnitLat() + (180 * 0.1);
        Double minLon = unitRequest.getUnitLon() - (360 * 0.05);
        Double maxLon = unitRequest.getUnitLon() + (360 * 0.05);

        List<Unit> units = repository.findClosestUnits(minLat, maxLat, minLon, maxLon);

        double difDistance = Calculus.lineDistance(
                unitRequest.getUnitLon(), (360 * 0.05)*2,
                unitRequest.getUnitLat(), (180 * 0.1)*2
        );
        Unit closestUnitCalc = null;

        for (Unit u : units) {
            Double tempDifDistance = Calculus.lineDistance(
                    unitRequest.getUnitLon(), u.getUnitLon(), unitRequest.getUnitLat(), u.getUnitLat());
            if (tempDifDistance <= difDistance) {
                difDistance = tempDifDistance;
                closestUnitCalc = u;
            }
        }

        if (closestUnitCalc != null) {
            return ResponseEntity.status(200).body(closestUnitCalc);
        } else {
            return ResponseEntity.status(204).build();
        }

    }

    @DeleteMapping("/{idUnit}")
    public ResponseEntity deleteExam(@PathVariable Integer idUnit) {

        Optional<Unit> unit = repository.findById(idUnit);

        if (unit.isPresent()) {
            repository.delete(unit.get());
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }
}
