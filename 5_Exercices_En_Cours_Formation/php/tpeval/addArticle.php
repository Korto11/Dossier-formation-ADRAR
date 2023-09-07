<?php 
        try {
            if(isset($_POST["nom_article"]) && isset($_POST["prix_article"])){  
                $addArticle = false;
                addArticle();
            }
            if ($addArticle = true){
                header('location: ./index.php?addArticle=true');
            } else {
                header('location: ./index.php?addArticle=false');  
            }
          
        }
        catch (PDOException $e) {
            die ('Erreur : '.$e->getMessage());
        }
        unset($db);

        function addArticle () {
            $db = new PDO('mysql:host=docker-lamp-mysql;dbname=evaluation', 'root','p@ssw0rd',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
            $db ->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            $name = $_POST["nom_article"];
            $price = $_POST["prix_article"];
            $req = $db->prepare("INSERT INTO article(nom_article,prix_article)VALUES(?,?)");
            $req->bindParam(1, $name);
            $req->bindParam(2, $price);
            $req->execute();
            $addArticle=true;
        }
    ?>
    
