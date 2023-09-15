<?php
class Admin extends Utilisateur{
    private ?array $bans;

    public function __construct(?string $nom, ?string $prenom   ){
        $this->setNom($nom);
        $this->setPrenom($prenom);
        $this->bans = [];
    }
    public function banUser(Utilisateur $user){
        array_push($this->bans,$user);
    }
    public function getBans() {
      return $this->bans;
    }
    public function debanUser(Utilisateur $user) {
        // unset($this->bans[array_search($user,$this->bans)]);
        foreach ($this->bans as $key => $value) {
            if ($value == $user) {
                unset($this->bans[$key]);
                
            }
            
        }
    }
    
}
?>