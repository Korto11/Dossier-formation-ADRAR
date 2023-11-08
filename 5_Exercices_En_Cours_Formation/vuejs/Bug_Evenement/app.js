//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return{
            nbre: 0,
            userName:"",
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
        pouet(){
            console.log("execute")
            if(this.userName == ""){
                return "test";
            } else {
                return "un autre test";
            }
        },
    },
    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');