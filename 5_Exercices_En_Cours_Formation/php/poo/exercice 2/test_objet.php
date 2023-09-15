<?php
    include './Vehicule.php';
    $voiture = new Vehicule('Mercedes CLK',4,250);
    $moto = new Vehicule('Honda CBR',2,280);
    echo $voiture->detect();
    echo $moto->detect();
    echo $moto->boost();
    echo $voiture->plusRapide($moto);
?>