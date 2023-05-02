CREATE DATABASE eventos_musicales;

USE eventos_musicales;

CREATE TABLE eventos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    duracion TIME NOT NULL,
    precio_general DECIMAL(10, 2) NOT NULL,
    precio_exclusivo DECIMAL(10, 2) NOT NULL,
    ubicacion VARCHAR(255) NOT NULL,
    imagen VARCHAR(255) NOT NULL
);

INSERT INTO eventos (nombre, fecha, hora, duracion, precio_general, precio_exclusivo, ubicacion, imagen) 
VALUES 
('Cardellino', '2023-07-15', '21:30:00', '01:20:00', 1000.00, 2500.00, 'Arena Maipu', '');
('Abduccion - Bhavi ', '2023-07-22', '22:00:00', '02:00:00', 3000.00, 5500.00, '23 Rios', '');
('Homenaje a Soda Stereo', '2023-12-10', '22:00:00', '02:30:00', 2500.00, 3500.00, 'Estadio Monumental', '');
('Zeballos', '2023-05-10', '20:00:00', '01:00:00', 1000.00, 1000.00, 'Willy´s Bar', '');
('La Skandalosa Tripulacion', '2023-07-27', '19:00:00', '01:30:00', 1500.00, 2500.00, 'Hangar Córdoba', '');

