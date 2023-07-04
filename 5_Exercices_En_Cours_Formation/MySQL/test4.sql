create database if not exists chocoblast_db;
use chocoblast_db;

create table if not exists users(
	id_user int primary key not null auto_increment,
    name_user varchar(50),
    firstname_user varchar(50),
    email_user varchar(50),
    password_user varchar(50),
    image_user varchar(50),
    statut tinyint(1),
    id_role int
);

create table if not exists roles(
	id_role int primary key not null auto_increment,
    name_role varchar(50)
);

create table if not exists chocoblasts(
	id_chocoblast int primary key not null auto_increment,
    slogan text,
    date_creation_chocoblast date,
    statut tinyint(1),
    cible_chocoblast int,
    auteur_chocoblast int
);

create table if not exists comments(
	id_comment int primary key not null auto_increment,
    note_comment int,
    contenu_comment text,
    date_creation_comment datetime,
    statut tinyint(1),
    id_chocoblast int,
    auteur_comment int
);

alter table users
add constraint fk_id_role
foreign key(id_role)
references roles(id_role);

alter table comments
add constraint fk_id_chocoblast
foreign key(id_chocoblast)
references chocoblasts(id_chocoblast),
add constraint fk_auteur_comment
foreign key (auteur_comment)
references users(id_user);

alter table chocoblasts
add constraint fk_id_cible_chocoblast
foreign key (cible_chocoblast)
references users(id_user),
add constraint fk_id_auteur_chocoblast
foreign key(auteur_chocoblast)
references users(id_user);
