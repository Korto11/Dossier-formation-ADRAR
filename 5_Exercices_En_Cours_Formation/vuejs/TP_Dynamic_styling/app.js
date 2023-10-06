//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return{
            input1 :"",
            input2 :"",
            trigger1: false,
            trigger2: false,
        };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        input(){
            if (this.input1.value === "hello"){
                this.trigger1 = true;
                console.log(trigger1);
            } else if (this.input2.value === "world"){
                this.trigger2 = true;
            }
        }
    },
    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');