insert into category(name_category) values ('alimentaire'),
('produit'),
('loisir');
insert into product(name_product,description_product,price_product,id_category) values
('tomate','paquet de 3 kg de tomates',4.20,1),
('pain','baguette de pain de 350 gr',0.90,1),
('lessive','paquet de lessibe de 1kg',14.30,2),
('livre','livre sur le cinéma',29.99,3);
insert into seller(name_seller,first_name_seller) values
('Dupond','Sophie'),
('Albert','Marc');
insert into receipt(date_receipt,id_seller) values
('2023/02/03',1),
('2023/05/06',2),
('2023/07/14',2);
insert into to_add(id_product,id_receipt,qtx_add) values
(2,1,5),
(1,3,2),
(3,2,1),
(4,1,2);

update category set name_category = 'alimentation' where name_category = 'alimentaire';
update category set name_category = 'autre' where id_category = 2 ;
update product set price_product = 34.99 where name_product = 'livre' ;
update product set description_product = 'Lessive liquide 40 lavages' where name_product = 'lessive' ;
update product set price_product = price_product + 1 ;
update seller set name_seller ='Dupont',first_name_seller = 'Anne' where id_seller = 1;
update seller set name_seller ='Maxime' where name_seller ='Albert';
update receipt set date_receipt = '2023/06/23' where id_receipt = 2;
update receipt set id_seller = 1 where date_receipt = '2023/07/14';
update to_add set qtx_add = qtx_add + 2 where id_receipt = 1 && id_product =2 ;
update to_add set id_product = 3 where id_receipt = 3 && id_product = 1 ;
update to_add set qtx_add = 5 where id_receipt = 3 && id_product = 3 ;

select id_category, name_category from category where name_category not like 'a%';
select id_product, name_product, price_product from product where price_product < 20;
select id_receipt,date_receipt,id_seller from receipt where date_receipt = '2023/02/03';

-- Afficher la liste des catégories (id et nom) dont le nom commence par une lettre plus grande que A
SELECT id_category, name_category FROM category WHERE name_category NOT LIKE 'a%';
SELECT id_category, name_category FROM category WHERE name_category >'b';
-- Afficher la liste des produits (l'id, le nom et le prix) dont le prix est inférieur à 20,
SELECT id_product, name_product, price_product FROM product WHERE price_product <20;
-- Afficher la liste des tickets (id, date, id vendeur) qui ont comme date 2023/02/03, 
SELECT id_receipt, date_receipt, id_seller FROM receipt WHERE date_receipt = '2023/02/03';
-- Afficher la liste des vendeur avec (prenom et le nom).
SELECT first_name_seller, name_seller FROM seller;

select id_product, name_product, description_product, price_product, product.id_category, name_category from 

-- requête qui affiche la liste des produits avec leur catégorie
SELECT id_product, name_product, description_product, price_product, 
product.id_category, name_category FROM product 
INNER JOIN category ON product.id_category = category.id_category;
-- requête qui affiche depuis la table association to_add l'ensemble des données liées
SELECT to_add.id_receipt, to_add.id_product, name_product, description_product,
price_product, qtx_add, date_receipt,seller.first_name_seller, seller.name_seller 
FROM to_add INNER JOIN product ON to_add.id_product = product.id_product
INNER JOIN receipt ON to_add.id_receipt = receipt.id_receipt
INNER JOIN seller ON receipt.id_seller = seller.id_seller
INNER JOIN category ON product.id_category = category.id_category;


