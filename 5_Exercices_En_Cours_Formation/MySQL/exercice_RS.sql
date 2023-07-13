create database if not exists reseau_db;
use reseau_db;

create table if not exists role_utilisateur(
	id_role_utilisateur int primary key not null auto_increment,
    nom_role_utilisateur varchar(50)
    )Engine=InnoDB; -- à renseigner pour les vieux serveurs.
    
create table if not exists message(
	id_message int primary key not null auto_increment,
    contenu_message varchar(200),
    date_message datetime,
    statut_message tinyint(1)
    );
    
create table if not exists media(
	id_media int primary key not null auto_increment,
    url_media varchar(100),
    nom_media varchar(50)
    );

create table if not exists categorie(
	id_categorie int primary key not null auto_increment,
    nom_categorie varchar(50)
    );

create table if not exists groupe(
	id_groupe int primary key not null auto_increment,
    nom_groupe varchar(50)
    );

create table if not exists utilisateur(
	id_utilisateur int primary key not null auto_increment,
    nom_utilisateur varchar(50),
    prenom_utilisateur varchar(50),
    email_utilisateur varchar(50) unique not null,
    password_utilisateur varchar(100),
    statut_utilisateur tinyint(1),
    id_role_utilisateur int
    );
    
create table if not exists commentaire(
	id_commentaire int primary key not null auto_increment,
    message_commentaire varchar(200),
    date_commentaire datetime,
    statut_commentaire tinyint(1),
    id_article int,
    id_utilisateur int
    );

create table if not exists article(
	id_article int primary key not null auto_increment,
    titre_article varchar(50),
    date_article datetime,
    statut_article tinyint(1),
    contenu_article text,
    id_categorie int,
    id_utilisateur int -- on delete cascade : lors de la suppression d'un utilisateur, supprime tout les articles qui lui sont liée --
    );
    
create table if not exists abonner(
	abonne int,
	utilisateur int,
	primary key (abonne, utilisateur)
);

create table if not exists appartenir(
	id_utilisateur int,
    id_groupe int,
    primary key (id_utilisateur, id_groupe)
    );
	
create table if not exists illustrer(
	id_article int,
    id_media int,
    primary key (id_article, id_media)
    );

create table if not exists envoyer(
	destinataire int,
    expediteur int,
    id_message int,
    primary key (destinataire,expediteur,id_message)
    );

alter table utilisateur add constraint fk_id_role_utilisateur foreign key (id_role_utilisateur) references role_utilisateur(id_role_utilisateur); 
alter table commentaire add constraint fk_id_article_commentaire foreign key (id_article) references article(id_article);
alter table commentaire add constraint fk_id_utilisateur_commentaire foreign key (id_utilisateur) references utilisateur(id_utilisateur);
alter table article add constraint fk_id_categorie foreign key (id_categorie) references categorie(id_categorie);
alter table article add constraint fk_id_utilisateur_article foreign key (id_utilisateur) references utilisateur(id_utilisateur);
alter table abonner add constraint fk_abonne foreign key (abonne) references utilisateur(id_utilisateur);
alter table abonner add constraint fk_utilisateur foreign key (utilisateur) references utilisateur(id_utilisateur);
alter table appartenir add constraint fk_id_utilisateur_appartenir foreign key (id_utilisateur) references utilisateur(id_utilisateur);
alter table appartenir add constraint fk_id_groupe foreign key (id_groupe) references groupe(id_groupe);
alter table illustrer add constraint fk_id_article_illustrer foreign key (id_article) references article(id_article);
alter table illustrer add constraint fk_id_media foreign key (id_media) references media(id_media);
alter table envoyer add constraint fk_destinataire foreign key (destinataire) references utilisateur(id_utilisateur);
alter table envoyer add constraint fk_expediteur foreign key (expediteur) references utilisateur(id_utilisateur);
alter table envoyer add constraint fk_id_message foreign key (id_message) references message(id_message);
-- attention, il ne faut pas de doublons de constraint sur la db ex : fk_id_utilisateur doit avoir une extensions pour chaque alter ou il y a une fk utilisateur.
-- il ne fait pas de doublons de foreign key dans la même table, une primary key peut être référencé autant de fois que désirée.



insert into role_utilisateur(nom_role_utilisateur) values
('utilisateur'),
('artiste'),
('admin');
insert into utilisateur(nom_utilisateur,prenom_utilisateur,email_utilisateur,password_utilisateur,statut_utilisateur,id_role_utilisateur) values
('Quispe','Javier','javierelmatador@gmail.com','mequierolaplata',1,1),
('Yamada','Kenichiro','tyger4ever@gmail.com','katanaslayer45',1,1),
('Araveli','Mint','mint.araveli20@gmail.com','@famousgal39',1,2),
('Teller','Daniel','pizzaman99@gmail.com','sonofsp@rda5',1,3);
insert into groupe(nom_groupe) values
('peinture'),
('video'),
('dessin');
insert into categorie (nom_categorie) values ('new'),('actualite'),('oeuvre');
insert into article(titre_article,date_article,statut_article,contenu_article,id_categorie,id_utilisateur) values
('Nouveau tableau','2023-07-10 10:25:00',1,'il e bo le tablo',3,3),
('Nouvelle peinture','2022-11-08 10:25:00',1,'c dur la peintur',3,3),
('evenement','2023-05-21 10:25:00',1,'dsqi qosdjq sd azd',1,1),
('Nouveau film','2022-08-12 10:25:00',1,'dsqd qd aze sqd',3,2);
insert into media(url_media, nom_media)values 
('./img2.png','image2'),
('./video4.mp4','video4'),
('./video122.mp4','video122');
insert into commentaire (message_commentaire, date_commentaire, id_article, id_utilisateur) values
('dssqdsqdsqdsq','2022-10-11',1,2),


