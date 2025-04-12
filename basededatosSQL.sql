CREATE SCHEMA classic_motors;

USE classic_motors;


CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(30),
    contraseña VARCHAR(30),
    fecha_nacimiento DATE,
    dni INT UNSIGNED,
    foto_perfil VARCHAR(100),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO usuarios (email, contraseña, fecha_nacimiento, dni, foto_perfil) VALUES
('juan@mail.com', '123456', '2005-01-01', 12345678, 'juan.jpg'),
('maria@mail.com', 'holahola12', '1922-03-15', 23456789, 'maria.jpg'),
('lucas@mail.com', 'lucas12345', '1988-07-23', 34567890, 'lucas.jpg'),
('carla@mail.com', 'milanesas', '1995-11-10', 45678901, 'carla.jpg'),
('sofia@mail.com', 'panqueques', '1998-05-30', 56789012, 'sofia.jpg');