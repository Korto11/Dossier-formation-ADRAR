<?php
    class Personnage {
        public ?string $nom;
        public ?int $for;
        public ?int $def;
        public ?int $dex;
        public ?int $spd;
        public ?int $sta;
        public function __construct($newNom,$newFor,$newDex,$newSpd,$newDef,$newSta) {
            $this->nom = $newNom;
            $this->for = $newFor;
            $this->def = $newDef;
            $this->dex = $newDex;
            $this->spd = $newSpd;
            $this->sta = $newSta;
        }
        public function attaquer($a) {
            $a->sta = $a->sta - ($this->for-$a->def);
            echo $this->nom." attaque ".$a->nom;
            echo '<br>';
            return 'il reste '.$a->sta.' pv à '.$a->nom.'.';
        }

        public function degat($a) {
            
        }









    }

    class Combat {
        public ?int $nbrTour;
        public ?int $score1 = 0;
        public ?int $score2 = 0;
        public function __construct($newNbrTour) {
            $this-> nbrTour = $newNbrTour;
        }
        public function combat(Personnage $J1, Personnage $J2) {
            for ($i=1;$this->nbrTour>= $i;$i++) {
                echo "Tour ".$i;
                echo '<br>';
                echo $J1->attaquer($J2);
                echo '<br>';
                if ($J1->sta <= 0 || $J2->sta <= 0) {
                    echo "le combat est terminé!";
                    echo "<br>";
                    break;
                }
                echo $J2->attaquer($J1);
                echo "<br>";
                if ($J1->sta <= 0 || $J2->sta <= 0) {
                    echo "le combat est terminé!";
                    echo "<br>";
                    break;
                }
            }
            if ( $J1->sta > 0 || $J1->sta > $J2->sta) {
                $this->score1++;
                echo $J1->nom." est le vainqueur du combat et possède ".$this->score1." victoires";
            } else if ($J2->sta > 0 || $J2->sta > $J1->sta) {
                $this->score2++;
                echo $J2->nom. " est le vainqueur du combat et possède ".$this->score2." victoires";  
            } else {
                echo $J1->sta,$J2->sta;
                echo "draw";
            }
        }
       
    }