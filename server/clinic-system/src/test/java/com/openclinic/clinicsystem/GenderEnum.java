package com.openclinic.clinicsystem;

import com.openclinic.clinicsystem.utils.Gender;

public class GenderEnum {



    public static void main(String[] args) {
        int identifier = 0;

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
            System.out.println(Gender.OTHER);
        } else {
            System.out.println(GenderChosen);
        }
    }
}