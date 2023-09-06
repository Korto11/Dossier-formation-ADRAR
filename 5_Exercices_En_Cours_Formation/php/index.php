
<!-- 
Exercice 1 :
-Créer 2 variables $a et $b qui ont pour valeur 12 et 10, 
-Stocker le résultat de l’addition de $a et $b dans une variable $total, 
-Afficher le résultat (utilisez la fonction echo)

        // $toto = 10;
        // $tata= 12;
        // $titi = $toto + $tata;
        // echo $titi;
        // echo gettype($titi);

Exercice 2 :
-Créer 3 variables $a, $b et $c qui ont pour valeur $a =5, $b =3 et $c = $a+$b,
-Afficher la valeur de chaque variable (utilisez la fonction echo).,
-passer la valeur de $a à 2,
-Afficher la valeur de $a,
-passer la valeur de $c à $b - $a,
-Afficher la valeur de chaque variable (utilisez la fonction echo). 

 // $a =5;
        // $b =3;
        // $c = $a+$b;
        // echo $a,$b,$c;
        // $a =2;
        // echo $a;
        // $c = $b - $a;
        // echo $a,$b,$c;


Exercice 3 :
-Créer 2 variables $a et $b qui ont pour valeur 15 et 23,
-Afficher la valeur de chaque variable (utilisez la fonction echo)., 
-Intervertissez les valeurs de $a et $b,
-Afficher la valeur de $a et $b (utilisez la fonction echo).

    $a = 15;
    $b = 23;
    function swap($x,$y) {
        $tmp = x$;
        $x = $y;
        $y = $tmp;
    }
    swap($a,$b);
    echo $a,$b;

Exercice 4 :
-Ecrire un programme qui prend le prix HT d’un article (de type float), le nombre d’articles (de type integer) et le taux de TVA (de type float), et qui fournit le prix total TTC (de type float) correspondant. 
-Afficher le prix HT, le nbr d’articles et le taux de TVA (utilisez la fonction echo),
-Afficher le résultat (utilisez la fonction echo). -->

    <!-- function totalttc($ht,$tva,$nbre) {
    $ttc = $ht * $tva * $nbre;
    echo $ht,$ttc,$nbre;
    echo $ttc;
    }

    totalttc(10,1.2,5); -->

<!-- 
    CONCATENATION  -->
<!-- 
    Exercice 1 :
-Créer une variable $a qui a pour valeur « bonjour »,
-Afficher le nom de la variable et sa valeur.

      $a = "bonjour";
      echo "\$a = $a";

Exercice 2 :
-Créer 1 variable $a qui a pour valeur « bon »,
-Créer 1 variable $b qui a pour valeur « jour »,
-Créer 1 variable $c qui a pour valeur 10,
-Concaténer $a, $b et $c + 1,
-Afficher le résultat de la concaténation. 

Exercice 3 :
-Créer une variable $a qui a pour valeur bonjour,
-Afficher un paragraphe (balise html) et à l’intérieur la phrase suivante :
l’adrar
-Ajouter la variable $a avant la phase dans le paragraphe,
-Cela doit donner :
 <p>bonjour l’adrar</p> -->

 <!-- *** FONCTIONS *** -->

 <!-- Exercice 1 :
-Créer une fonction qui soustrait à $a la variable $b (2 paramètres en entrée),
-la fonction doit retourner le résultat (return).

    function minus($a,$b) {
            return $a-$b;
        }
    echo minus(7,3);

Exercice 2 :  
-Créer une fonction qui prend en entrée un nombre à virgule (float),
- la fonction doit retourner l’arrondi (return) du nombre en entrée (utiliser une fonction interne au langage). 
   function arrondi($a){
        return round($a);
    }
    echo arrondi(5.51)

Exercice 3 :
-Créer une fonction qui prend en entrée 3 valeurs et retourne somme des 3 valeurs.
    function somme($a,$b,$c) {
        return $a+$b+$c;
    }
    echo somme(44,2,3);

Exercice 4 :
-Créer une fonction qui prend en entrée 3 valeurs et retourne la valeur moyenne des 3 valeurs (saisies en paramètre). -->
    
        <!-- function moyenne2(array $tab){
                        $resultat2 = array_sum($tab)/ count($tab);
                        return round($resultat2, 2);
                    }
                    echo moyenne2([10,15,12]); -->
        <!-- ALTERNATIF -->
                    <!-- function moyenne($a,$b,$c){
                        $valeurs = [$a,$b,$c];
                        $total = 0;
                        for ( $i = 0 ; $i < count($valeurs) ; $i++) {
                            $total = $total + $valeurs[$i];
                        }
                        $moyenne = $total/count($valeurs);
                        return $moyenne;
                    }
                        echo moyenne(12,36,45); -->

<!--                        
 Conditions

Exercice 1 :
- Créer une fonction qui teste si un nombre est positif ou négatif

 function posneg($num){
            if ($num > 0) {
                echo "Le nombre est positif";
            } else if ($num < 0) {
                echo "Le nombre est négatif";
            } else if ($num == 0) {
                echo "erreur";
            }
        }
        echo posneg(-4),"<br>";
        echo posneg(8);

Exercice 2 :
- Créer une fonction qui prend en entrée 3 valeurs et retourne le nombre le plus grand
         function grand ($a,$b,$c) {
            if ($a>$b && $a>$c) {
                return "$a est le plus grand nombre";
            } else if($b>$c) {
                return "$b est le plus grand nombre ";
            } else {
                return "$c est le plus grand nombre ";
            }
        }
        echo grand(79,78,65);
Exercice 3 :
- Créer une fonction qui prend en entrée 3 valeurs et retourne le nombre le plus petit
           
function petit ($a,$b,$c) {
        if ($a<$b && $a<$c) {
            return "$a est le plus petit nombre";
        } else if($b<$c) {
            return "$b est le plus petit nombre ";
        } else {
            return "$c est le plus petit nombre ";
        }
    }
    echo grand(9,4,65);

Exercice 4 :
- Créer une fonction calculePrixFinal qui prend en entrée un paramètre $prix de type float et retournera le prix final. 
- Si le prix est > à 2000€, la ristourne sera de 20%
- Si le prix est > à 1000€, la ristourne sera de 10%
- Sinon, la ristourne sera de 0

    function calculPrixFinal (float $prix) {
            if ($prix>2000) {
                $final = $prix - ($prix * 0.2);
                echo "le prix final est de $final";
            } else if ($prix<=2000 && $prix>1000) {
                $final = $prix - ($prix * 0.1);
                echo "le prix final est de $final";
            } else {
                echo "pas de ristourne";
            }
            
        }
    echo calculPrixFinal(1458);

Exercice 5 :
- Créer une fonction qui prend en entrée 1 année (entier) et qui affiche « l’année x est une année bissextile » si l’année est bissextile ou « l’année x n’est pas une année bissextile » si ce n’est pas une année bissextile
- Pour rappel une année bissextile est définie de la façon suivante (https://fr.wikipedia.org/wiki/Ann%C3%A9e_bissextile)  : 
	- Les années sont en général bissextiles si elles sont multiples de quatre
	- elles ne sont pas bissextiles si elles sont multiples de cent à l'exception des années multiples de quatre cents qui le sont. -->
        
    <!-- function bisextile(int $an) {
                if ($an%4 == 0 || $an%100 ==! 0 || $an%400 == 0) {
                    echo "l'année $an est une année bissextile";
                } else {
                    echo "l'année $an n'est pas une année bissextile";
                }
            }
            bisextile(1200); -->

<!-- BOUCLES -->

    <!-- Exercice 1 :
- Choisir un nombre compris entre 0 et 999
- A l’aide d’une boucle while, effectuez des tirages aléatoires (utilisation de la fonction PHP « rand() » jusqu’à trouver le bon nombre. 
- Affichez le nombre d’itérations nécessaires pour trouver le nombre

 $num = rand(0,999);
        $try = 0;
        $min = 0;
        $max = 999;
        $guess = null;
        while ( $guess !== $num) {
            $guess = rand($min,$max);
            $try++;
            if ($guess > $num) {
                $max = $guess;
            } else if ($guess < $num) {
                $min = $guess;
            }
        }
        echo "il vous a fallu $try essai pour trouver $num"
       

Exercice 2 :
- Choisir un nombre de lignes
- Choisir un nombre de colonnes
- A l’aide de boucles « for », obtenez le résultat suivant : 
0000000000
1111111111
2222222222
3333333333
4444444444
5555555555
6666666666

        $row = 7;
        $col = 10;
        for ($i = 0; $i < $row ; $i++) {
            for ($j = 0; $j < $col ; $j++) {
                echo ($i);
            }
            echo ("<br>");
        }
 
Exercice 3 :
- Ecrivez des boucles qui affichent ce qui est demandé
- Le nombre de colonne à afficher dépend du n° de ligne, à la ligne i, il faut afficher i colonnes.
- Le résultat attendu est celui-ci :
1
22
333
4444
55555
666666
7777777 -->
<!-- 
               $row = 7;
               for ($i = 0; $i < $row ; $i++) {
                   for ($j = 0; $j < $i ; $j++) {
                       echo ($i);
                   }
                   echo ("<br>");
               } -->



<!-- *** TABLEAUX *** -->
<!-- Exercice 1 :
- Générez un tableau de longueur 50 en injectant des valeurs aléatoires comprises entre -100 et 100
- Une fois les données injectées, affichez la taille du tableau

       $tab = [];
       for ($i = 0; $i<50 ; $i++) {
            $tab[$i] = rand(-100,100);
       }
       echo count($tab);
       var_dump($tab);

Exercice 2 :
- Créer une fonction qui affiche la valeur la plus grande du tableau (from scratch puis en utilisant une fonction interne à PHP).

        $tab = [];
        for ($i = 0; $i<50 ; $i++) {
            $tab[$i] = rand(-100,100);
        }
        echo count($tab);
        var_dump($tab);
        function bigtab($tab) {
            $max = 0;
            for ($i=0 ; $i < count($tab);$i++) {
                if ($tab[$i] > $max) {
                    $max = $tab[$i];
                }
            }
            return $max;
        }
        echo bigtab($tab);




Exercice 3 :
- Créer une fonction qui affiche la moyenne du tableau.

        $tab = [];
        for ($i = 0; $i<50 ; $i++) {
            $tab[$i] = rand(-100,100);
        }
        
        function moytab($tab) {
            $temp = 0;
            $total = 0;
            for ($i=0 ; $i < count($tab);$i++) {
                $temp = $temp + $tab[$i];
            }
            $total = $temp/count($tab);
            return $total;
        }
        echo moytab($tab);

Exercice 4 :
- Créer une fonction qui affiche la valeur la plus petite du tableau (from scratch et en utilisant une fonction interne à PHP). -->

        <!-- $tab = [];
         for ($i = 0; $i<50 ; $i++) {
             $tab[$i] = rand(-100,100);
         }
         
         function smalltab($tab) {
             $min = 0;
             for ($i=0 ; $i < count($tab);$i++) {
                 if ($tab[$i] < $min) {
                     $min = $tab[$i];
                 }
             }
             return $min;
         }
         echo smalltab($tab); -->

 <!-- Exercice 1 :
- A l’aide de la fonction « range » créez un tableau contenant tous les nombres de 0 à 1000.
- Parcourez le tableau et extrayez tous les nombres premiers dans un autre tableau (un nombre premier n’est divisible que par 1 et par lui-même).
- Affichez les nombres premiers ainsi obtenus dans une liste HTML (<ul><li>).  -->



 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
      $tab = range(1,100,1);
      $prems =[];
      function premier(int $i) : bool {
        for ($j = 2; $j<$i ; $j++) {
            if($i%$j === 0) {
                return false;
            }
        }
        return $i > 1;
      }
      foreach ($tab as $value) {
        if (premier($value) == true) {
            array_push($prems,$value);
        }
      }
      var_dump($prems);
      echo "<ul>";
      foreach ($prems as $value) {
        echo "<li>$value</li>";
      }
      echo "</ul>";
    ?>
</body>
</html>