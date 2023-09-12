<?php
    include './Maison.php';
    $cabane = new Maison('cabane',10,10,2);
    $cabane->surface();
    $baraddur = new Maison('Bârad-dur',300,300,200);
    $baraddur->surface();
    $manoir = new Maison('Manoir',50,50,3);
    $manoir->surface();
?>