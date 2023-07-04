create database if not exists db_judo;
use db_judo;

create table if not exists belts(
	id int primary key not null auto_increment,
    color varchar(50)
);
create table if not exists judokas(
	id int primary key not null auto_increment,
    name_judoka varchar(50),
    firstname varchar(50),
    age int not null check (age > 0),
    sex varchar(50),
	id_belt int,
    constraint fk_id_belt foreign key (id_belt) references belts(id)
);
create table if not exists tournaments(
	id int primary key not null auto_increment,
    name_tournament varchar(50),
    start_date date,
    end_date date
);
create table if not exists judoka_tournament( 
	id_judoka int,
    id_tournament int,
    constraint fk_id_judoka foreign key (id_judoka) references judokas(id),
    constraint fk_id_tournament foreign key (id_tournament) references tournaments(id)
);


