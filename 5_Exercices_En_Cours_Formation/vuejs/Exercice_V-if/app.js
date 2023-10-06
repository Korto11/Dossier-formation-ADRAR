//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
        mesFilms: [],
        monFilm: '',
        desFilms:false,
    };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        ajouterFilm() {
        this.mesFilms.push(this.monFilm);
        this.monFilm = '';
        },
        listeFilm() {
            if (this.mesFilms.length =! 0) {
                this.desFilms = true;
            } else {
                this.desFilms = false;
            }
            return this.desFilms;
        }

    },
    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');