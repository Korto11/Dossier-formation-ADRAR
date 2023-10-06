//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return{
            nbre: 0,
            text:"",
            mystere : Math.floor(Math.random() * (100-1) + 1),
            
    };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: { 
        plusNbre(plus){
            this.nbre = this.nbre + plus
            return this.nbre
        },
        moinsNbre(moins){
            this.nbre = this.nbre - moins
            return this.nbre
        },
        },
    watch : {
        nbre(value) {
            if(value == this.mystere) {
                this.text = "bravo mon khey";
            } else if (value > this.mystere) {
                this.text = "trop loin mon reuf";
                setTimeout(() => this.nbre = 0 ,5000);
            } else {
                this.text = "nope";
            }
        }
    },
    //! L'application est montée sur la balise HTML qui possède l'id app
}).mount('#app');