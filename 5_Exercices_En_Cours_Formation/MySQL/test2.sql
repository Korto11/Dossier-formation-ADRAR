create database if not exists test2 ;
use test2;
create table if not exists users (
	id int primary key not null auto_increment,
    name varchar(100),
    email varchar(255) not null,
    birthdate date
);

alter table users
	 add if not exists firstname varchar(100) after name;
    
create index if not exists index_user_birthdate ON users(birthdate);

