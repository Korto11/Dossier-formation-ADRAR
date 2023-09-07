<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="addArticle.php">
        <label for="nom_article">Nom</label>
        <input type="text" name="nom_article" placeholder="Nom">
        <label for="prix_article">Prix</label>
        <input type="text" name="prix_article" placeholder="Prix">
        <input type="submit" value="Ajouter">
    </form>
<?php 
    if (isset($_GET['addArticle'])) {
       $bool = $_GET['addArticle'];
       if ($bool = true) {
        echo "L'article a bien été enregistré" ;
       } else {
        echo "erreur";
       }
    }
?>
</body>
</html>