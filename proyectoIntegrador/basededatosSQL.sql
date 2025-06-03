CREATE SCHEMA classic_motors;

USE classic_motors;

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_usuario VARCHAR(50),
    email VARCHAR(50),
    contraseña VARCHAR(100),
    fecha_nacimiento DATE,
    dni INT UNSIGNED,
    foto_perfil VARCHAR(100),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

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

INSERT INTO usuarios (nombre_usuario, email, contraseña, fecha_nacimiento, dni, foto_perfil) VALUES
('nico300', 'nico@mail.com', 'clave123', '2001-04-10', 10101010, 'perfil1.jpg'),
('juanceto09', 'juan@mail.com', 'clave456', '1999-06-20', 20202020, 'perfil2.jpg'),
('fanautos', 'auto@mail.com', 'clave789', '1995-11-15', 30303030, 'perfil3.jpg'),
('pedro123', 'pedro@mail.com', 'clave321', '1988-01-01', 40404040, 'perfil4.jpg'),
('pablito', 'pablo@mail.com', 'clave654', '2003-08-25', 50505050, 'perfil5.jpg');


INSERT INTO productos (usuario_id, imagen, nombre_producto, descripcion) VALUES
(1, 'porsche.jpg', 'Porsche 911 Carrera 1990', 'El Porsche 911 Carrera de 1990 es un deportivo con un motor que rugía áspero y una cabina envolvente. El auto esta en perfecto estado, solo requiere cambio de frenos.'),
(2, 'mercedes300sl.jpg', 'Mercedes Benz 300 SL 1954', 'El Mercedes Benz 300 SL de 1954 es un ícono de la ingeniería automotriz...'),
(3, 'mc12.jpg', 'Maserati MC12 2004', 'El Maserati MC12 de 2004 es un superdeportivo...'),
(4, 'jaguar.jpg', 'Jaguar E-Type 1963', 'El Jaguar E-Type de 1963 es un ícono del diseño automotriz...'),
(5, 'f40.jpg', 'Ferrari F40', 'La Ferrari F40 es un superdeportivo icónico lanzado en 1987...'),
(1, 'countach.jpg', 'Lamborghini Countach', 'El Lamborghini Countach es un superdeportivo...'),
(2, 'bugattieb100.jpg', 'Bugatti EB100', 'El Bugatti EB110 es un superdeportivo de los 90...'),
(3, 'lotusespirit.jpg', 'Lotus Espirit', 'El Lotus Esprit es un deportivo británico...'),
(4, 'jaguarxj220.jpg', 'Jaguar XJ220', 'El Jaguar XJ220 es un superdeportivo británico de los 90...'),
(5, 'bmw507.jpg', 'BMW 507', 'Es un roadster de lujo de los años ‘50...');


INSERT INTO comentarios (producto_id, usuario_id, texto) VALUES
(1, 1, 'Buen producto'),
(1, 2, 'Qué nave'),
(1, 3, 'El auto de mis sueños'),
(1, 4, 'Pero qué bicho...'),
(1, 5, 'Qué lindo que es!'),

(2, 2, 'Me encanta este modelo'),
(2, 3, 'Lo vi en un museo, increíble'),
(2, 4, 'Mi abuelo tenía uno'),
(2, 5, 'Una joya '),
(2, 1, 'Impecable'),

(3, 1, 'Potencia pura'),
(3, 2, 'que diseño'),
(3, 3, 'Mi favorito'),
(3, 4, 'Increíble en pista'),
(3, 5, 'Es una bestia'),

(4, 1, 'Clásico'),
(4, 2, 'fua loco!'),
(4, 3, 'Tremendo'),
(4, 4, 'Me gustaría manejar uno'),
(4, 5, 'Exquisito'),

(5, 1, 'Ferrari'),
(5, 2, 'Mi sueño de chico'),
(5, 3, 'Turbo bestial'),
(5, 4, 'Belleza roja'),
(5, 5, 'Una leyenda');

INSERT INTO comentarios (producto_id, usuario_id, texto) VALUES
(6, 1, 'Diseño loco, me encanta'),
(6, 2, 'Me hace acordar a los 80s'),
(6, 3, 'Tuve un póster de este auto'),
(6, 4, 'Es una nave especial'),
(6, 5, 'Rompe cuellos este Lambo'),

(7, 1, 'Bugatti siempre top'),
(7, 2, 'Quadriturbo? Es una locura'),
(7, 3, 'Tecnología adelantada a su época'),
(7, 4, 'Un monstruo en pista'),
(7, 5, 'Increíble ingeniería francesa'),

(8, 1, 'Ligero y ágil, como un kart'),
(8, 2, 'Nunca vi uno en persona'),
(8, 3, 'Me encanta lo simple que es'),
(8, 4, 'Un clásico británico'),
(8, 5, 'James Bond vibes'),

(9, 1, 'Uno de los autos más rápidos de los 90'),
(9, 2, 'Diseño elegante y agresivo a la vez'),
(9, 3, 'Jaguar se pasó con este modelo'),
(9, 4, 'Un misil inglés'),
(9, 5, 'Solo para entendidos'),

(10, 1, 'La joya alemana de los años 50'),
(10, 2, 'El auto más hermoso de BMW'),
(10, 3, 'Clásico absoluto'),
(10, 4, 'Quiero uno en blanco'),
(10, 5, 'Icono retro con mucha clase');

ALTER TABLE usuarios CHANGE contraseña contrasena VARCHAR(100);

