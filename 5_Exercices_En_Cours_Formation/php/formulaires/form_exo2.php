<!-- Exercice 2 :
- Créer une page de formulaire dans laquelle on aura 3 champs de formulaire de type nombre :
•	1 champ de formulaire qui demande un prix HT d’un article,
•	1 champ de formulaire qui demande le nombre d’article,
•	1 champ de formulaire qui demande le taux de TVA,

- Afficher dans cette même page le prix TTC (prix HT*taux TVA*quantité) avec un affichage du style :
Le prix TTC est égal à : valeur €. -->


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="form_exo2.php">
        <label for="ht">prix HT :</label>
        <input type="number" name="ht" placeholder=> <br>
        <label for="nbre">Quantité :</label>
        <input type="number" name="nbre" placeholder=> <br>
        <label for="tva">TVA :</label>
        <input type="number" name="tva" placeholder=> <br>
        <input type="submit" value="Envoyer">
    </form>
    <?php
        if(isset($_POST['ht']) && isset($_POST['nbre']) && isset($_POST['tva'])){
            $ht = $_POST['ht'];
            $nbre = $_POST['nbre'];
            $tva = $_POST['tva'];
            $ttc = ($ht+($ht*($tva/100)))*$nbre;
            echo "Le prix TTC est de $ttc €";

        }
    ?>
</body>
</html>