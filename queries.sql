CREATE TABLES authors{
    id_author serial NOT NULL PRIMARY KEY,
    name varchar(45) NOT NULL,
    surname varchar(45) NOT NULL,
    email varchar(100) NOT NULL UNIQUE,
    image varchar(255)
}

CREATE TABLE entries (
  id_entry serial NOT NULL PRIMARY KEY, 
  title varchar(100) NOT NULL, 
  content text NOT NULL, 
  date date DEFAULT CURRENT_DATE,
  id_author int,
  category varchar(15),
  FOREIGN KEY (id_author) REFERENCES authors(id_author)
);