package com.openclinic.clinicsystem.utils;

public class Calculus {

    public static Double lineDistance(Double lonA, Double lonB, Double latA, Double latB) {
        return Math.sqrt((Math.pow(lonA-lonB,2))+(Math.pow(latA-latB,2)));
    }
}
