create database if not exists shop_db;
use shop_db;
create user if not exists 'lead'@'localhost' identified by'admin';
create user if not exists 'developer'@'localhost' identified by'user';
grant all privileges on *.* to 'lead'@'localhost';
grant alter,create,drop,index,update on shop_db.* to 'developer'@'localhost';

create table if not exists customers (
	id int primary key not null auto_increment,
    username varchar(16) not null unique,
    email varchar(255) not null unique,
    customer_password varchar(32) not null,
    create_time timestamp
);

create table if not exists addresses (
	id int primary key not null auto_increment,
    road_number int,
    road_name varchar(100) not null,
    zip_code char(5) not null,
    city_name varchar(100) not null,
    country_name varchar(100) not null
);

create table if not exists orders (
	id int primary key not null auto_increment,
    ref varchar(45) not null unique,
    order_date date not null,
    shipping_cost decimal(6,2) default 0.00,
    total_amount decimal(6,2) default 0.00
);

create table if not exists products (
	 ref char(20) primary key ,
     product_name varchar(100) not null,
     price decimal(6,2) not null,
     product_description longtext,
     stock int default 0
);

create table if not exists order_product (
	ref_product char(20),
    id_order int,
    quantity int default 0,
    constraint fk_ref_product foreign key(ref_product) references products(ref),
    constraint fk_id_order foreign key(id_order) references orders(id)
);


     

