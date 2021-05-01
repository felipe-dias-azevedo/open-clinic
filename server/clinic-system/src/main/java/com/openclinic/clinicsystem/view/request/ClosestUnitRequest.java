package com.openclinic.clinicsystem.view.request;

import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;

public class ClosestUnitRequest {

    @DecimalMin("-90")
    @DecimalMax("90")
    @NotNull
    private Double unitLat;
    @DecimalMin("-180")
    @DecimalMax("180")
    @NotNull
    private Double unitLon;

    public Double getUnitLat() {
        return unitLat;
    }

    public Double getUnitLon() {
        return unitLon;
    }
}
