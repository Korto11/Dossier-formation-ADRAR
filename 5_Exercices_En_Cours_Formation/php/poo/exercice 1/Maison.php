<?php
class Maison {
        public $nom;
        public $longueur;
        public $largeur;
        public $nbrEtage;
        public function __construct($newNom,$newLongueur,$newLargeur,$newNbrEtage){
            $this->nom = $newNom;
            $this->longueur = $newLongueur;
            $this->largeur = $newLargeur;
            $this->nbrEtage = $newNbrEtage;

        }
        public function surface(){
            $surface = $this->longueur*$this->largeur*(1+$this->nbrEtage);
            echo "<p>la surface de ".$this->nom." est égale à ".$surface." m²</p>";
        }
        public function boost(){
            $this->vitesse = $this->vitesse +50;
            return $this->vitesse;
        }
    }
?>