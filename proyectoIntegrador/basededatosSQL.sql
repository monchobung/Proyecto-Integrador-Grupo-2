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

CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT,
    imagen VARCHAR(100),
    nombre_producto VARCHAR(100),
    descripcion VARCHAR(500),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

INSERT INTO productos (usuario_id, imagen, nombre_producto, descripcion) VALUES
(1, 'auto1.jpg', 'Auto1', 'Descripcion de auto 1'),
(1, 'auto2.jpg', 'Auto2', 'Descripcion de auto 2'),
(2, 'auto3.jpg', 'Auto3', 'Descripcion de auto 3'),
(2, 'auto4.jpg', 'Auto4', 'Descripcion de auto 4'),
(3, 'auto5.jpg', 'Auto5', 'Descripcion de auto 5'),
(3, 'auto6.jpg', 'Auto6', 'Descripcion de auto 6'),
(4, 'auto7.jpg', 'Auto7', 'Descripcion de auto 7'),
(4, 'auto8.jpg', 'Auto8', 'Descripcion de auto 8'),
(5, 'auto9.jpg', 'Auto9', 'Descripcion de auto 9'),
(5, 'auto10.jpg', 'Auto10', 'Descripcion de auto 10');

CREATE TABLE comentarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    producto_id INT,
    usuario_id INT,
    texto VARCHAR(300),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

INSERT INTO comentarios (producto_id, usuario_id, texto) VALUES
(1, 2, 'Comentario 1'),
(1, 3, 'Comentario 2'),
(1, 4, 'Comentario 3'),
(2, 2, 'Comentario 4'),
(2, 5, 'Comentario 5'),
(2, 1, 'Comentario 6'),
(3, 4, 'Comentario 7'),
(3, 5, 'Comentario 8'),
(3, 1, 'Comentario 9'),
(4, 3, 'Comentario 10'),
(4, 1, 'Comentario 11'),
(4, 2, 'Comentario 12'),
(5, 2, 'Comentario 13'),
(5, 4, 'Comentario 14'),
(5, 5, 'Comentario 15'),
(6, 1, 'Comentario 16'),
(6, 2, 'Comentario 17'),
(6, 3, 'Comentario 18'),
(7, 1, 'Comentario 19'),
(7, 5, 'Comentario 20'),
(7, 2, 'Comentario 21'),
(8, 3, 'Comentario 22'),
(8, 1, 'Comentario 23'),
(8, 4, 'Comentario 24'),
(9, 2, 'Comentario 25'),
(9, 3, 'Comentario 26'),
(9, 1, 'Comentario 27'),
(10, 4, 'Comentario 28'),
(10, 5, 'Comentario 29'),
(10, 2, 'Comentario 30');