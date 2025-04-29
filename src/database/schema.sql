CREATE DATABASE heroisdb;

\c heroisdb

CREATE TABLE editoras (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    photo TEXT
);

CREATE TABLE herois (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    editora_id INTEGER REFERENCES editoras(id) ON DELETE SET NULL
);

INSERT INTO editoras (name) VALUES 
    ('Marvel'),
    ('DC Comics'),
    ('Titan Comics'),
    ('BOOM! Studios'),
    ('spnv');

INSERT INTO herois (name, editora_id) VALUES 
    ('Venom', 1),
    ('Batman', 2),
    ('Ravena', 3),
    ('Plutoniano', 4),
    ('G Hard', 5);
