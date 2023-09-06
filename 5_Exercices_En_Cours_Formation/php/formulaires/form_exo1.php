<!-- Exercice 1 :
- Créer une page de formulaire dans laquelle on aura 2 champs de formulaire de type nombre.

- Afficher dans cette même page la somme des 2 champs avec un affichage du style :
La somme est égale à : valeur -->





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="form.php">
        <label for="num1">num1 :</label>
        <input type="number" name="num1" placeholder="num1"> <br>
        <label for="num2">num2 :</label>
        <input type="number" name="num2" placeholder="num2"> <br>
        <input type="submit" value="Envoyer">
    </form>
    <?php
        if(isset($_POST['num1']) && isset($_POST['num2'])){
            $num1 = $_POST['num1'];
            $num2 = $_POST['num2'];
            $total = $num1 + $num2;
            echo "la valeur 1 est $num1 et la valeur 2 est $num2 <br>";
            echo "la somme des 2 est $total";

        }
    ?>
</body>
</html>