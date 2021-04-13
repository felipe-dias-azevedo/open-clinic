package com.openclinic.clinicsystem.utils;

public enum Status {

    NOT_STARTED(0, 'N', "Not Started"),
    ONGOING(1, 'O', "Ongoing"),
    ENDED(2, 'E', "Ended");

    Status(Integer identifier, Character code, String description) {
        this.identifier = identifier;
        this.code = code;
        this.description = description;
    }

    private Integer identifier;
    private Character code;
    private String description;

    public Integer getIdentifier() {
        return identifier;
    }

    public Character getCode() {
        return code;
    }

    public String getDescription() {
        return description;
    }
}
