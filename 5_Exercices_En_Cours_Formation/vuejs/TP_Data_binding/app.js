//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return{
        nameUser: 'Dr.Mario',
        ageUser: 45,
        imageUser:'https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg',
        random : Math.random()
       
    };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        agePlus() {
           this.temp = this.ageUser + 10
           return 'age +10 : '+this.temp+' ans'
        },
        nbreFetiche() {
            return 'NB Fétiche : '+ this.random.toFixed(15)
        }
    },
    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');