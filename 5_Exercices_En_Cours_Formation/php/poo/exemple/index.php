<?php
include './exemple.php';
$chat = new Exemple('Chat',40,4);
$chien = new Exemple('chien', 40, 9);
$tigre = new Exemple('tigre', 120, 80);
$chat->crie();
echo '<br>';
$chien->crie();
echo '<br>';
$tigre->crie();

?>