<?php
    class Vehicule {
        private ?string $modele;
        private ?int $nbrRoue;
        private ?int $vitesse;

        public function __construct($newModele,$newNbrRoue,$newVitesse) {
            $this->modele = $newModele;
            $this->nbrRoue = $newNbrRoue;
            $this->vitesse = $newVitesse;
        }
        public function getModele():?string{
            return $this->modele;
        }
        public function getNbrRoue():?int{
            return $this->nbrRoue;
        }
        public function getVitesse():?int{
            return $this->vitesse;
        }
        public function setModele(?string $modele):void{
            $this->modele = $modele;
        }
        public function setNbrRoue(?int $nbrRoue):void{
            $this->nbrRoue = $nbrRoue;
        }
        public function setVitesse(?int $vitesse):void{
            $this->vitesse = $vitesse;
        }

        public function detect() {
            if ($this->getNbrRoue() == 2) {
                return 'moto';
            } else if ($this->getNbrRoue() == 4) {
                return 'voiture';
            } else {
                return 'autre véhicule';
            }
        }
        public function boost(){
            $this->setVitesse($this->getVitesse() +50);
            echo $this->getVitesse();
            
        }
        public function plusRapide($a) {
            if ($this->getVitesse() > $a->getVitesse()) {
                return "ça va vite";
            } else if ($this->getVitesse() < $a->getVitesse()) {
                return "ça va pas vite";
            } else {
                return "Accélère cabourd !";
            }
        }
    }
?>