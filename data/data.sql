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



CREATE TABLE vidrio (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(180),
    refri_inicio int(11),
    completo_inicio int(11),
    refri_fin int(180),
    completo_fin
    faltante
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);