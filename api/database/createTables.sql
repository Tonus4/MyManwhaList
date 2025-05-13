\i /database/dropTables.sql

CREATE TABLE tags
(
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL

);

CREATE TABLE manwha
(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    description TEXT,
    poster VARCHAR(255)
);

CREATE TABLE manwhatags
(
    manwha_id INT,
    tag_id INT,
    PRIMARY KEY (manwha_id, tag_id),
    FOREIGN KEY (manwha_id) REFERENCES Manwha(id),
    FOREIGN KEY (tag_id) REFERENCES Tags(id)
);