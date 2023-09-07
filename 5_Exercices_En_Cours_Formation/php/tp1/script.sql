create database if not exists articles;
use articles;

create table if not exists article (
	id_article int primary key not null auto_increment,
    nom_article varchar(50),
    contenu_article varchar(255),
    id_categorie int
	);
    
create table if not exists categorie (
	id_categorie int primary key not null auto_increment,
    nom_categorie varchar(50) unique not null
    );
    
alter table article
add constraint fk_id_categorie
foreign key (id_categorie) 
references categorie(id_categorie);





