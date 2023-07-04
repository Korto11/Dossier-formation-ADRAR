create database if not exists db_test3;
use db_test3;

create table if not exists products(
	id_product int primary key not null auto_increment,
    name_product varchar(50),
    description_product text,
    price_product real,
    id_category int
);

create table if not exists categorys(
	id_category int primary key not null auto_increment,
    name_category varchar(50)
);

create table if not exists receipts(
	id_receipt int primary key not null auto_increment,
    date_receipt datetime,
    id_seller int
);

create table if not exists sellers(
	id_seller int primary key not null auto_increment,
    name_seller varchar(50),
    first_name_seller varchar(50)
);

create table if not exists to_add(
	id_product int,
    id_receipt int,
    qtx_add int
);

alter table products
add constraint fk_id_category
foreign key(id_category)
references categorys(id_category);

alter table receipts
add constraint fk_id_seller
foreign key(id_seller)
references sellers(id_seller);

alter table to_add
add constraint fk_id_product
foreign key(id_product)
references products(id_product);

alter table to_add
add constraint fk_id_receipt
foreign key(id_receipt)
references receipts(id_receipt);