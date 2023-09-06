<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="resultat.php">
        <label for="num1">Première valeure</label>
        <input type="number" step="0.01" name="num1" placeholder=> <br>
        <label for="num2">Deuxième valeure</label>
        <input type="number" step= "0.01" name="num2" placeholder=> <br>
        <select name="operator" id="op-select">
            <option value="">--Please choose an option--</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="submit" value="Calculer">
    </form>
    <?php
       
    ?>
</body>
</html>