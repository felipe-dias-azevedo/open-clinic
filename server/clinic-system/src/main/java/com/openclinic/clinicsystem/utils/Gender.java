package com.openclinic.clinicsystem.utils;

public enum Gender {

    MAN(0, 'M', "Man"),
    WOMAN(1, 'W', "Woman"),
    OTHER(2, 'O', "Other");


    Gender(Integer identifier, Character type, String description) {
        this.identifier = identifier;
        this.type = type;
        this.description = description;
    }

    private Integer identifier;
    private Character type;
    private String description;

    public Integer getIdentifier() {
        return identifier;
    }

    public Character getType() {
        return type;
    }

    public String getDescription() {
        return description;
    }
}
