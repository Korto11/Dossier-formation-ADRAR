//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
        toto:'',
        random: Math.random()
       
    };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        // randomNumber(){
        //     randomMath.random()
        //     return this.random
        // },

        randomPhrase(){ 
            
            if (this.random > 0.5){
                this.toto = 'pistache'
            } else {
                this.toto = 'cacahuète'
            }
            return this.toto
        }
    },
    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');