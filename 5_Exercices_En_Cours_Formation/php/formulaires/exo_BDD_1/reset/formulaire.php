<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="article.php">
        <label for="nom_article">nom_article</label>
        <input type="text" name="nom_article" placeholder="nom_article">
        <label for="contenu_article">contenu_article</label>
        <input type="text" name="contenu_article" placeholder="contenu_article">
        <label for="id_categorie">categorie_article</label>
        <select name="id_categorie" id="categorie_article">
            <option value="default">Veuillez choisir une option</option>
            <?php       
                try {
                        /*Connexion en BDD*/
                    $db = new PDO('mysql:host=docker-lamp-mysql;dbname=articles', 'root','p@ssw0rd',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
                    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

                    /*Requête SQL */
                    $sql = "SELECT * FROM categorie order by 'id' asc";
                    $req = $db -> prepare($sql);
                    $req->execute();
                            /*Insertion des données dans un schéma HTML */
                        foreach($req as $contenu) {
                        echo "<option value = ".$contenu['id_categorie'].">".$contenu['nom_categorie']."</option>";
                    } 
                }

                catch (PDOException $e) {
                    die ('Erreur : '.$e->getMessage());
                }
                unset($db);
            ?>
        </select>
        <input type="submit" value="Ajouter">
    </form>
    
</body>
</html>

