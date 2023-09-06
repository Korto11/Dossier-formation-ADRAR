<?php 

$variable = 15;
$prenom = "Antoine";
$bolean = false;
echo "\r\nla variable \"Variable\" contient $variable , et son type est :"; echo gettype($variable); 
echo "\r\nMon prenom est $prenom";
echo "\r\nle type de variable de \"Bolean\" est "; echo gettype($bolean);

/* Exo 1 */
$a = 12;
$b = 10;
$total = $a + $b;
echo "\r\n$total";

/* Exo 2 */
$a = 5;
$b = 3;
$c = $a + $b;
echo "\r\n a = $a  b = $b  c = $c";
$a = 2;
echo "$c";
$c = $b - $a;
echo "\r\n a = $a  b = $b  c = $c";

/* Exo 3 */
$a = 15;
$b = 23;
echo "\r\n a = $a et b = $b";
$c = $a;
$a = $b;
$b = $c;
echo "\r\n a = $a et b = $b";

/* Exo 4 */
$horstaxe = readline("Quel est le prix ?");
readline_add_history($horstaxe);
$tva = 20.00;
$prixtaxe = $horstaxe + (($horstaxe * $tva) / 100);
$nbritem = readline("combien d'article voulez-vous?");
readline_add_history($nbritem);
$total= $prixtaxe * $nbritem;
echo "Vous avez choisi $nbritem article à $horstaxe € HT , soit $prixtaxe € TTC; pour un montant total de $total € !";
?>