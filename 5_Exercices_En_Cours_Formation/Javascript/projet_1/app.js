
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



// let leNom = "Soler";
// let lePrénom = "Corentin";
// let laPhrase=[];
// laPhrase.push(leNom,lePrénom,leNom[0]+lePrénom[0]);
// console.log(laPhrase);

// function fonction(nbre) {
//     console.log(33+nbre);
// }
// function fonction2(n1,n2) {
//     console.log(n1+n2);
// }

// console.log(fonction(7),fonction2(13,27));
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


// function moyenne (notePhilo,coeffPhilo,noteSport,coeffSport) {
//     let moyenne = (notePhilo*coeffPhilo+noteSport*coeffSport) / (coeffSport+coeffPhilo);
//     return moyenne;
// }
// console.log(moyenne(12,2,18,3));

// let notes =[];
// let coeffs =[];
// function Notes (note,coeff) {
//     notes.push(note);
//     coeffs.push(coeff);
// }
// Notes(15,2);
// Notes(13,4);
// Notes(14,2);
// function moyenne () {
//     let sommeNote = 0;
//     let sommeCoeff = 0;
//     for (let i = 0; i<notes.length;i++) {
//         sommeNote += notes[i]*coeffs[i];
//         sommeCoeff += coeffs[i];
//     }
//     let moyenneResult = sommeNote/sommeCoeff;
//     if (moyenneResult >= 15) {
//         console.log("très Bien");
//     }   else if (moyenneResult >= 10 && moyenneResult<15) {
//         console.log("assez Bien");
//     }   else { 
//         console.log("refus");
//     }   
// }
// moyenne ();

// document.addEventListener('click',(clickEvent)=>{
//     console.log(clickEvent);
//     console.log(`Tu as clické ici : 
//     X : ${clickEvent.x} - Y : ${clickEvent.y}
//     à ce moment : ${clickEvent.timeStamp}`);
// });

// ? syntaxe  { uneProprieté:uneValeur } 
// ? dans un objet on assigne avec : plutot qu'avec = 
// let user = {
//     id:3657826,
//     'name':'Seagal',
//     firstname:'Steven',
//     badges:['🎥','👮‍♂️','🎸','🥋','🎤']
// };
// console.log(user);

// console.log(user.name);
// console.log(user.id);
// //*Syntaxe en mode tableau associatif
// console.log(user['id']);

// let name = "Jacky";
// let age = 24;
// let passion = ["couture","peinture"];
// let tabUser = [name,age,passion];
// console.log (tabUser);
// console.log(tabUser[2]);
// console.log(tabUser[2][1]);

let objectUser = {
    name : "Jacky" ,
    age : 24,
}
objectUser.passion = ["nature","peinture"] ;
console.log(objectUser.name);
console.log(objectUser.passion);
console.log(objectUser.passion[1]);

// Bonus 

objectUser.name = "Grontrand";
objectUser.age = 42;
objectUser.passion = ["bagarre","petanque"]
console.log(objectUser.name);
console.log(objectUser.age)
console.log(objectUser.passion);
console.log(objectUser.passion[1]);


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

/**
 * **************************************
 * 7- Les opérateurs
 * **************************************
 */
// //! Les booléens : 2 états possibles TRUE ou FALSE (vrai ou faux)
// let a = 11;
// let b = 99;
// console.log("variable a:",a);
// console.log("variable b:",b);
// //! avec == on demande si a est égal à b
// console.log("c'est égal ? :",a == b);
// //!pour vérifier si a est différent de b on utilise !=
// console.log("C'est inégal ? :",a != b);
// //! Ensuite on retrouve les même opérateurs qu'en Mathématique
// //! ici on demande si a est strictement suppérieur à b
// console.log("Strictement suppérieur ? :",a > b);
// //! ici on demande si a est strictement inférieur à b
// console.log("Strictement inférieur ? :",a < b);
// //! ici on demande si a est inférieur ou égal à b
// console.log("Inférieur ou égal ? :",a <= b);
// //! ici on demande si a est suppérieur ou égal à b
// console.log("suppérieur ou égal ?:",a >= b);
// //? Attention : de base JS ne prend pas en compte le typage des variables : 
// //? ci dessous le nombre 2 est égal au caractère "2" 🤔
// console.log("le chiffre 2 = \"2\"?:",2 == "2");
// //! Pour prendre en compte le type des donnée que l'on compare, on utilise l'opérateur ===
// //! c'est l'égalité stricte
// console.log("égalité stricte ?:",2 === "2");
// //! il y a aussi l'inégalité stricte avec l'opérateur !==
// console.log("inégalité stricte ?:",2 !== "2");
// //? il existe aussi des opérateurs Logiques qui nous permet de combiner des conditions
// //? && pour dire ET
// //? || pour dire OU
// //? ! pour dire Différent de
// console.log(3==3 && 3<4);
// console.log(3==3 || 3<4);

 //!-------CONDITIONS / Operateur TERNAIRES-------
// ? on combine un opérateur de comparaison et l'opérateur ? pour établir une condition qui return une chose ou une autre chose
// ? cela permet de faire une condition if (simple) avec une syntaxe racourcie
// let whatIsYourAge = 6;
// console.log(whatIsYourAge >18 ? '🍹':'👮‍♂️');
// Astuce pour check si une variable est définie (si ya QQchose dans son espace mémoire)
// let userPremium;
// On check si une variable est définie la condition c'est juste uneVariable ?
// console.log(userPremium?'OK 🤙':'Not OK 👺');
// ↑ c'est l'équivalent de ↓
// console.log(userPremium ==true?'OK 🤙':'Not OK 👺');
// on doit lui assigner QQCHOSE
// userPremium = 'YES';
// console.log(userPremium?'OK 🤙':'Not OK 👺');

// ? On peut utiliser des operateur aussi pour combiner des conditions && (pour ET) || (pour OU)
// console.log(3==3&&3<4);
// let typeUtilisateur = 'Extra';
// console.log(typeUtilisateur == 'Extra' || typeUtilisateur == 'Premium');