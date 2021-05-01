INSERT INTO user (name, email, cellphone, birth, gender, password, address_lat, address_lon, insurance)
VALUES
('Felipe Azevedo', 'felipe@gmail.com', '+5511950277693', '2002-12-06', 0, '123', -23.5578136, -46.6615572, true),
('Mariana Dias', 'mari@gmail.com', '+8108043215010', '2004-08-12', 1, '12345', 35.488461, 137.5258236, false),
('George Smith', 'george@g.co', '+12092004988', '1998-07-30', 0, 'admin', 37.7598757, -122.4752025, false),
('Paul Müller', 'paul@hotmail.com', '+4930729753199', '1980-01-01', 2, 'qwert', 52.5141108, 13.3782868, true),
('Olivia Johnson', 'olivia.johnson@', '+441632960878', '1990-11-18', 1, 'admin', 51.5052304, -0.1902053, false);

INSERT INTO unit (name_unit, unit_lat, unit_lon)
VALUES
('Clinica Azevedo', -23.5511605, -46.6326515),
('Taito Clinico', 35.7132293, 139.7684824),
('Glendale Clinic', 33.5477183, -112.3222527),
('Pankow Clinic', 52.5641889, 13.4090984),
('Thames Clinic', 51.486583, -0.2903697);

INSERT INTO operator (username_op, password_op, fk_unit)
VALUES
('felipe', '123', 1),
('sudo', '12345', 3),
('admin', 'admin', 4);

INSERT INTO exam (fk_user, desc_exam, doc_exam, fk_unit, payment, create_date, schedule_date, status)
VALUES
(1, 'Blood Analysis', NULL, 1, 8.99, '2021-04-01 11:30:00', '2021-04-12 16:00:00', 1),
(1, 'Urinalysis', NULL, 1, 4.99, '2021-03-30 14:45:00', '2021-04-01 08:15:00', 2),
(3, 'Syphilis', NULL, 3, 20.00, '2021-04-01 11:30:00', '2021-04-29 18:00:00', 0),
(3, 'Prenatal Testing', NULL, 3, 12.00, '2021-03-30 14:45:00', '2021-04-12 16:00:00', 1),
(3, 'Liver Function Test', NULL, 3, 100.00, '2021-02-12 17:20:00', '2021-04-01 08:15:00', 2),
(3, 'Kidney Function Test', NULL, 3, 150.00, '2021-01-06 09:30:00', '2021-03-26 12:15:00', 2);