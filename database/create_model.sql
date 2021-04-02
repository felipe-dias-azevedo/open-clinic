CREATE TABLE User (
    idUser INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(100),
    lastName VARCHAR(150),
    email VARCHAR(255),
    cellphone VARCHAR(16),
    birth DATE,
    gender CHAR(1),
    password VARCHAR(255),
    addressLat DOUBLE(9,7),
    addressLon DOUBLE(9,7),
    insurance BIT
);

CREATE TABLE Exam (
    idExam INT PRIMARY KEY AUTO_INCREMENT,
    fkUser INT,
    docExam VARCHAR(255),
    fkUnit INT,
    payment DOUBLE(5,2),
    schedule DATETIME,
    status CHAR(1),
    foreign key (fkUser) references User (idUser),
    foreign key (fkUnit) references Unit (idUnit)
);

CREATE TABLE Unit (
    idUnit INT PRIMARY KEY AUTO_INCREMENT,
    unitLat DOUBLE(9,7),
    unitLon DOUBLE(9,7)
);