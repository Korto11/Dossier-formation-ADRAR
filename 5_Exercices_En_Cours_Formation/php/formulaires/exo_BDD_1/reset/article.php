<!-- a)	Créer une base de données MYSQL avec les informations suivantes :
	•	Nom de la bdd : « articles »,
	•	une table nommée article qui va posséder les champs suivants :
		i.	id_article (clé primaire),
		ii.	nom_article de type varchar(50),
		iii.	contenu_article de type varchar (255),

b)	Créer une page php qui va contenir un formulaire html avec comme méthode POST (balise form)
	•	A l’intérieur du formulaire rajouter les champs suivants :
		i.	Un champ input avec comme attribut html name = «nom_article »
		ii.	Un champ input avec comme attribut html name = «contenu_article »
		iii.	Un champ input de type submit avec comme attribut html value = «Ajouter» 

c)	Ajouter le code php suivant:
	•	Créer 2 variables $name, $content
	•	-Importer le contenu des 2 super globales $_POST[‘nom_article’], $_POST[‘contenu_article’] et tester les avec la méthode isset() dans les variables créés précédemment ($name et $content),
	•	Ajouter le code de connexion à la base de données en vous inspirant des exemples vus dans ce chapitre,
	•	Ajouter une requête simple qui va insérer le contenu des 2 champs dans un nouvel enregistrement (requête SQL insert),

d)	)Bonus :
	•	Utiliser une requête SQL préparée à la place de la requête simple. -->



<?php
    try {

        if(isset($_POST["nom_article"]) && isset($_POST["contenu_article"])){

                /*Connexion bdd */
                $db = new PDO('mysql:host=docker-lamp-mysql;dbname=articles', 'root','p@ssw0rd',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
                $db ->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
                /* Ajout des input en BDD*/
                
                $name = $_POST["nom_article"];
                $content = $_POST["contenu_article"];
                $categorie = $_POST["id_categorie"];
                $req = $db->prepare("INSERT INTO article(nom_article,contenu_article,id_categorie)VALUES(?,?,?)");
                $req->bindParam(1, $name);
                $req->bindParam(2, $content);
                $req->bindParam(3, $categorie);
                $req->execute();
                echo "Le nom de l'article : <em>$name</em> - et le contenu : <em>$content</em> - ont bien été enregistrées";

            }
    }
    catch (PDOException $e) {
        die ('Erreur : '.$e->getMessage());
    }
        /*Fermeture de la connexion à la bdd */
    unset($db);
    ?>
    <?php   
        try {
                /*Connexion en BDD*/
            $db = new PDO('mysql:host=docker-lamp-mysql;dbname=articles', 'root','p@ssw0rd',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
            $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

            /*Requête SQL */
            $sql = "SELECT * FROM article order by 'id' asc";
            $req = $db -> prepare($sql);
            $req->execute();
                    /*Insertion des données dans un schéma HTML */
                foreach($req as $contenu) { ?>
                    <article>
                    <h1><?php echo $contenu["nom_article"];?></h1>
                    <p><?php echo $contenu["id_article"];?></p>
                    <div><?php echo $contenu["contenu_article"];?></div>
                </article>
            <?php } 
        }

        catch (PDOException $e) {
            die ('Erreur : '.$e->getMessage());
        }
        unset($db);
    ?>
    <?php
    try {

        if(isset($_POST["nom_categorie"])){

                /*Connexion bdd */
                $db = new PDO('mysql:host=docker-lamp-mysql;dbname=articles', 'root','p@ssw0rd',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
                $db ->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
                /* Ajout des input en BDD*/
                
                $categorie = $_POST["nom_categorie"];
                $req = $db->prepare("INSERT INTO categorie(nom_categorie)VALUES(?)");
                $req->bindParam(1, $categorie);
                $req->execute();
                echo "La catégorie : <em>$categorie</em> a bien été enregistrées";

            }
    }
    catch (PDOException $e) {
        die ('Erreur : '.$e->getMessage());
    }
        /*Fermeture de la connexion à la bdd */
    unset($db);
    ?>
