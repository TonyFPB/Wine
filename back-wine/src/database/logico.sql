/* Lógico_1: */

CREATE TABLE Usuario (
    usuario_id INT PRIMARY KEY,
    nome VARCHAR(255)
);

CREATE TABLE Avaliacao (
    comentario VARCHAR(1000),
    nota FLOAT,
    fk_Usuario_usuario_id INT,
    fk_Vinho_vinho_id INT
);

CREATE TABLE Vinho (
    vinho_id INT PRIMARY KEY,
    nome VARCHAR(255),
    variedade_uvas VARCHAR(255),
    safra DATE,
    fk_Vinicola_vinicola_id INT
);

CREATE TABLE Vinicola (
    vinicola_id INT PRIMARY KEY,
    nome VARCHAR(255),
    pais VARCHAR(50),
    provincia VARCHAR(100)
);
 
ALTER TABLE Avaliacao ADD CONSTRAINT FK_Avaliacao_1
    FOREIGN KEY (fk_Usuario_usuario_id)
    REFERENCES Usuario (usuario_id)
    ON DELETE CASCADE;
 
ALTER TABLE Avaliacao ADD CONSTRAINT FK_Avaliacao_2
    FOREIGN KEY (fk_Vinho_vinho_id)
    REFERENCES Vinho (vinho_id)
    ON DELETE CASCADE;
 
ALTER TABLE Vinho ADD CONSTRAINT FK_Vinho_2
    FOREIGN KEY (fk_Vinicola_vinicola_id)
    REFERENCES Vinicola (vinicola_id)
    ON DELETE RESTRICT;