//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return{
            p1:"",
            p2:""

       
    };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: { 
        premierInput(event){
            this.p1 = event.target.value;
        },
        deuxiemeInput(event){
            this.p2 = event.target.value;
        },
        alert(){
            window.alert("Alerte")
        }
 
    },
    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');