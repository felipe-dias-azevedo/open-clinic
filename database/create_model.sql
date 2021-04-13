CREATE TABLE user (
    id_user INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    cellphone VARCHAR(16),
    birth DATE,
    gender INT,
    password VARCHAR(255),
    address_lat DOUBLE(9,7),
    address_lon DOUBLE(9,7),
    insurance BOOLEAN
);

CREATE TABLE exam (
    id_exam INT PRIMARY KEY AUTO_INCREMENT,
    fk_user INT,
    desc_exam VARCHAR(64),
    doc_exam VARCHAR(255),
    fk_unit INT,
    payment DOUBLE(5,2),
    schedule_exam DATETIME,
    when_scheduled_exam DATETIME,
    status INT,
    foreign key (fk_user) references user (id_user),
    foreign key (fk_unit) references unit (id_unit)
);

CREATE TABLE unit (
    id_unit INT PRIMARY KEY AUTO_INCREMENT,
    name_unit VARCHAR(255),
    unit_lat DOUBLE(9,7),
    unit_lon DOUBLE(9,7)
);

CREATE TABLE operator (
    id_operator INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100),
    password VARCHAR(100)
)