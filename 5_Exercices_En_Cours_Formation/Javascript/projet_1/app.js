
// function pizza () {
//     let pizzaQuantité;
//     let pizzaTaille;
//     let pizzaType;
//     return {"Qté":pizzaQuantité,"taille":pizzaTaille,"type":pizzaType};
// }
// let pizzaOrder= [];
// pizzaOrder.push(pizza);

// let pizza = {
// quantité : 2,
// taille : "moyenne",
// type : "regina"
// }
// let SumUpOrderPhrase = `Voici le récapitulatif de votre commande :
// Pizza : ${pizza.type}. 
// Taille : ${pizza.taille}.
// Quantité : ${pizza.quantité}.
// Merci d'avoir commandé chez "La Pizzeria Raffinata"
// Qu'est ce que qu'une pizza dit à une autre pizza qui lui fait de l'ombre ?
// "Arrête de me trancher la route!"`
// console.log(SumUpOrderPhrase);



// let bonjour = 'Bonjour';
// let unMessage = "Bienvenue";
// let welcome = `Bienvenue`;
// console.log(bonjour,unMessage);
// let unTexte = "Bonjour \"MR Gingle\"";
// let unTxt = 'Aujourd\'hui';
// console.log(unTexte,unTxt);
// let concatenation = bonjour + " et " + unMessage +', il fait beau temps' + unTxt;
// console.log(concatenation);
// let uneTemplateString = `Hello ! ${bonjour} et ${unMessage}
// on retourne à la "ligne" plus besoin des 'antislash'`;
// console.log(uneTemplateString);

// //* Exemple la "Pizzeria Rafinata"
// let product = 'Pizza Hawaienne';
// let nomUser = 'Jean Jack';
// let date = '12-12-2012';
// let nomPizzeria = `"La Pizzeria Rafinata"`
// let SumUpOrderPhrase = `le ${date} Bonjour cher ${nomUser}, merci d'avoir passé commande chez ${nomPizzeria}, votre pizza :  ${product}, arrive sous 30 minutes


// Qu'est-ce qu'une pizza dit à une autre pizza qui lui demandait 
// des conseils ? "Suis ta pate et tout ira bien"`;

// console.log(SumUpOrderPhrase);

// let name = "Jacky";
// let age = 24;
// let passion = ["couture","peinture"];
// let tabUser = [name,age,passion];
// console.log (tabUser);
// console.log(tabUser[2]);
// console.log(tabUser[2][1]);

let leNom = "Soler";
let lePrénom = "Corentin";
let laPhrase=[];
laPhrase.push(leNom,lePrénom,leNom[0]+lePrénom[0]);
console.log(laPhrase);



// console.log('Bienvenue dans Javascript');
// let string = "bonjour";
// let int = 42;
// let float = 420.69;
// let array = [4,6,9];
// let object = {nom:"Jotaro",prénom:"Kujo",age:17};
// function helloworld(text) {
//     console.log(text);
// }
// console.log(string);
// console.log(int);
// console.log(float);
// console.log(array);
// console.log(object);
// let hello = helloworld("Hello World");
/**
 * **************************************
 * 1-SETUP : DEFER
 * **************************************
 ** Antérieur à la vague HTML5, l'attribut defer existait déjà dans les "anciennes" versions
 ** d'Internet Explorer. Il signifie que le navigateur 
 *! peut charger le(s) script(s) en parallèle, sans stopper le rendu de la page HTML.
 *! Contrairement à async, l'ordre d'exécution des scripts est préservé,
 *! en fonction de leur apparition dans le code source HTML. 
 *? Il est par ailleurs reporté à la fin du parsing du DOM (avant l'événement DOMContentLoaded).
 * De nos jours, cet attribut présente moins d'intérêt car les navigateurs
 * disposent par défaut de techniques internes pour télécharger les 
 * ressources en parallèle sans nécessairement attendre les autres.
 */

/**
 * **************************************
 * SETUP : ASYNC
 * **************************************
 * *Nouveau venu dans HTML5, async signifie que le script pourra être exécuté de façon asynchrone,
 ** dès qu'il sera disponible (téléchargé). Cela signifie aussi que le navigateur 
 ** n'attendra pas de suivre un ordre particulier si plusieurs balises <script> sont présentes,
 ** et ne bloquera pas le chargement du reste des ressources, notamment la page HTML. 
 *? L'exécution aura lieu avant l'événement load lancé sur window 
 *? et ne sera valable que pour les scripts externes au document, 
 *? c'est-à-dire ceux dont l'attribut src mentionne l'adresse.
 *? Ce comportement est bien pratique pour gagner en temps de chargement,
 *! il faut cependant l'utiliser avec prudence : si l'ordre n'est pas respecté,
 *! un fichier exécuté de façon asynchrone ne pourra attendre le chargement d'un précédent,
 *! par exemple s'il en utilise des fonctions voire un framework.
 *! Il ne faudra pas non plus compter appeler document.write() pour écrire dans le document HTML
 *! puisqu'il sera impossible de savoir à quel moment les actions seront déclenchées.
 */ 