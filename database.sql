-- Creation des tables


CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  year INT NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE
);

-- Valeurs test

INSERT INTO users (firstname, lastname, email)
VALUES ('Vincent', 'LEBEL', 'vincent@example.com');

-- Update test

UPDATE users SET email = 'vincent.lebel@example.com' WHERE email = 'vincent@example.com';


INSERT INTO books (title, year, user_id)
VALUES ('Book One', 2025, 1);
 

-- Requetes de test

SELECT * FROM users;
SELECT * FROM books;


