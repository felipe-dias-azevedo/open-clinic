package com.openclinic.clinicsystem.utils;

public class ConvertStatus {
    
    public static Status convert(Integer identifier) {
        boolean found = false;
        Status StatusChosen = null;
        for (Status s : Status.values()) {
            if (s.getIdentifier().equals(identifier)) {
                StatusChosen = s;
                found = true;
                break;
            }
        }
        if (!found) {
            return Status.NOT_STARTED;
        } else {
            return StatusChosen;
        }
    }
}
