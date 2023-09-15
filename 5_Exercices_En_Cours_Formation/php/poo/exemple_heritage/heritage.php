<?php
    include '../../vendor/autoload.php';
    include './Utilisateur.php';
    include './Admin.php';
    $user1 = new Utilisateur('user1', 'users1');
    $user2 = new Utilisateur('user2', 'users2');
    $user3 = new Utilisateur('user3', 'users3');
    $user4 = new Utilisateur('user4', 'users4');
    $admin = new Admin('admin', 'admin',);
    $admin->banUser($user1);
    $admin->banUser($user2);
    $admin->banUser($user2);
    $admin->banUser($user3);
    $admin->banUser($user4);
    $admin->banUser($user3);
    $admin->banUser($user3);
    $admin->debanUser($user2);
    foreach ($admin->getBans() as $key => $values) {
        echo $values->getNom()." ".$values->getPrenom()."<br>";
    }

      
   
?>