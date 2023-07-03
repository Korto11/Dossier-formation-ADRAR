create database if not exists test;
use test;
create user if not exists 'corentin'@'127.0.0.1' identified by 'mdpguez1234';
grant all privileges on *.* to 'corentin'@'localhost';
create table if not exists users (
	id int primary key not null auto_increment,
    name varchar(100),
    email varchar(255) not null,
    birthdate date
);

create index if not exists index_users_birthdate on users(birthdate);

create table employes(
	id int not null,
    nom varchar(100) not null,
    email varchar(100) not null unique,
    age int not null check (age >= 18),
    salaire decimal (18,2) default 3000.0,
    primary key (id)
);
create table conges(
	id int primary key not null auto_increment,
	date_debut date not null,
	date_fin date not null,
	id_employe int,
	-- foreign key (id_employe) references employes (id) on delete cascade
	-- Pour pouvoir nommer la contrainte, utiliser la syntaxe suivante
	constraint fk_id_employe foreign key (id_employe) references employes(id) 
);

/* supprimer une contrante 
alter table table_name
col
