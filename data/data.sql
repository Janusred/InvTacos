CREATE DATABASE tacos;

USE tacos;

CREATE TABLE producto (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(180),
    precio_u int(11),
    cantidad int(11),
    descripcion VARCHAR(180),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


DESCRIBE game;