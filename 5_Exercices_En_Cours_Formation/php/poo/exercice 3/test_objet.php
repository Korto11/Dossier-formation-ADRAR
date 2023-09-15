<?php
       
        include './Personnage.php';
        $dante = new Personnage ('Dante',2000,1,1,1400,5000);
        $vergil = new Personnage ('Vergil',2600,1,1,800,5000);
        $combat1 = new Combat (20);
        $combat1->combat($dante,$vergil);
?>