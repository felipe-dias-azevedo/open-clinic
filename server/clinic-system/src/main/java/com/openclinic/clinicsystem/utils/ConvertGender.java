package com.openclinic.clinicsystem.utils;

public class ConvertGender {

    public static Gender convert(Integer identifier) {
        boolean found = false;
        Gender GenderChosen = null;
        for (Gender g : Gender.values()) {
            if (g.getIdentifier().equals(identifier)) {
                GenderChosen = g;
                found = true;
                break;
            }
        }
        if (!found) {
            return Gender.OTHER;
        } else {
            return GenderChosen;
        }
    }
}
