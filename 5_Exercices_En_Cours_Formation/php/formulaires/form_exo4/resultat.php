<?php
       if(isset($_POST['num1']) && is_numeric($_POST['num1']) && isset($_POST['num2']) && is_numeric($_POST['num2']) && isset($_POST['operator'])){
            $num1 = (float)$_POST['num1'];
            $num2 = (float)$_POST['num2'];
            $operator = $_POST['operator'];
            $total = null;
            // if ($operator == "+") {
            //     $total = round($num1 + $num2,2);
            //     echo "$num1 $operator $num2 est égal à $total";
            // }
            // if ($operator == "-") {
            //     $total = round($num1 - $num2,2);
            //     echo "$num1 $operator $num2 est égal à $total";
            // }
            // if ($operator == "*") {
            //     $total = round($num1 * $num2,2);
            //     echo "$num1 $operator $num2 est égal à $total";
            // }
            // if ($operator == "/") {
            //     $total = round($num1 / $num2,2);
            //     echo "$num1 $operator $num2 est égal à $total";
            // }

            
        }
// Méthode 1
        $total = round(eval("return $num1 $operator $num2;"),2);
        echo("La résultat de $num1 $operator $num2 est égal à : $total");
// Méthode 2
    //     switch ($operator) {
    //         case '+':
    //             $total = $num1+$num2;
    //             echo("La somme de $num1 et $num2 est égale à : $total");  
    //             break;
    //         case '-':
    //             $total = $num1-$num2;
    //             echo("La différence de $num1 et $num2 est égale à : $total");  
    //             break;
    //         case '*':
    //             $total = $num1*$num2;
    //             echo("La multiplication de $num1 par $num2 est égale à : $total");  
    //             break;

    //         case '/':
    //             $total = $num1/$num2;
    //             echo("La division de $num1 par $num2 est égale à : $total");  
    //             break;
    //         default:
    //             alert("Erreur, formulaire invalide");
    //             break;
    //     }
// Méthode 3
    // ?>