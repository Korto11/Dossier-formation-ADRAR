// let tamere = document.body.getElementsByTagName('p');
// let pSuper = document.body.getElementsByClassName('super');
// let pSpecial = document.getElementById('special');
// console.log(tamere);
// console.log(pSuper);
// console.log(pSpecial);




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

// let objectUser = {
//     name : "Jacky" ,
//     age : 24,
// }
// objectUser.passion = ["nature","peinture"] ;
// console.log(objectUser.name);
// console.log(objectUser.passion);
// console.log(objectUser.passion[1]);

// // Bonus 

// objectUser.name = "Grontrand";
// objectUser.age = 42;
// objectUser.passion = ["bagarre","petanque"]
// console.log(objectUser.name);
// console.log(objectUser.age);
// console.log(objectUser.passion);
// console.log(objectUser.passion[1]);

// let listeFilm = ['Ultime Décision','Mission Alcatraz','Attack Force'];
// listeFilm.forEach(i => console.log(i)); 
// for (const k of listeFilm) {
//     console.log(k);
// }
// const userData = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     age: 25,
//     dob: '08/02/1989',
//     active: true
// };

// for (let i in userData ) {
//     console.log(`${i}: ${userData[i]}`);
// }

// let lesTxt = document.body.getElementsByTagName('p');
// console.log(lesTxt);
// console.log(lesTxt[0]);

// let textesTab = Array.from(lesTxt);
// console.log(textesTab);

// const k = textesTab.map(x => x.innerText = 'Pomme de terre');
// console.log(k);

// //! Exception constante modif ? 
// const MyTracklist = {
//     track1:'lofteurs up and down',
//     track2:'David Hallyday',
//     track3:'Crazy Frog'
// }
// // console.log(MyTracklist);

// MyTracklist.track1 = 'félicien'
// console.log(MyTracklist);

//! Selectionner des éléments 

// document.body.innerHTML = ''
// //? Une fonction type getElement pour récupérer UN élément par son ID 
// let specialP = document.getElementById('special');
// console.log(specialP);

// //? Une fonction type getElement pour récupérer tous les élément selon une certaine balise dans une HTMLCollection
// let tousLesP = document.getElementsByTagName('p');
// console.log('La HTMLCollection',tousLesP);
// //? Quand on a une HTMLCollection on peut accèder à un certain élément 
// console.log('le 3e <p> dans la HTMLCollection : ',tousLesP[2]);

// //? Une fonction type getElement pour récupérer tous les élément selon une certaine class dans une HTMLCollection
// let tousLesSuper = document.getElementsByClassName('super');
// console.log(tousLesSuper);
// console.log(tousLesSuper[1]);

// let tousLesSuperMaisLePremmierEnFait = document.getElementsByClassName('super')[0];
// console.log('tousLesSuperMaisLePremmierEnFait',tousLesSuperMaisLePremmierEnFait);

// //? Une fonction type querySelector pour récupérer UN élément (le 1er trouvé)
// let lePremierP = document.querySelector('p');
// console.log('lePremierP via querySelector : ',lePremierP);

// //? Une fonction type querySelector pour récupérer UN élément par son ID
// let pSpecial = document.querySelector('#special');
// console.log('pSpecial querySelector + ID',pSpecial);

// //? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par sa classe
// let pSuper = document.querySelector('.super');
// console.log('pSuper querySelector + class',pSpecial);

// //? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par la NodeList
// let allParagraphes = document.querySelectorAll('p');
// console.log('allParagraphes querySelector + balise',allParagraphes);
// console.log('allParagraphes mais on prend le 2e',allParagraphes[1]);

// //! Placer des elements dans une page web
// //? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par la NodeList
// let allParagraphes = document.querySelectorAll('p');
// let laDiv = document.querySelector('.vide');
// let premierH1 = document.querySelector('h1');
// //! insertBefore, on selectionne 2 éléments pour placer l'un avant l'autre
// document.body.insertBefore(allParagraphes[9],premierH1);
// !laDiv.append(`Là c'est JS qui ajoute du texte dans la div`);
// ! Append plutot pensé pour ajouter du contenu à la volé au format string
// si on a crée ou séléctionné un élément que l'on veut placer : ceci peut marcher
// laDiv.append(allParagraphes[4]);
// Mais on a aussi la fonction appendChild;
// laDiv.appendChild(allParagraphes[0]);
// //! On peut aussi supprimer un élément du DOM
// document.body.removeChild(allParagraphes[9]);

// //! Créer des elements de texte
// const newTxt = document.createTextNode('DU texte Youhouuuuu');
// document.body.append(newTxt); //Créer c'est bien mais il faut placer

// //! Créer n'importe quel element HTML
// const newH1 = document.createElement('h1');//phase 1 creation
// newH1.innerText="AZERTYUIOP";//phase 2 remplissage
// newH1.style.backgroundColor ='red';
// document.body.append(newH1);//phase 3 on place dans la pag

// const userData = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     age: 25,
//     dob: '08/02/1989',
//     active: true
// };
// const newDiv = document.createElement('div');
// newDiv.setAttribute('class','data');
// newDiv.innerHTML = "<h1>La Data de Johny</h1>";
// document.body.append(newDiv);
// console.log(newDiv);


// for (let i in userData ) {
//         let dataEntries =  document.createElement('p');
//         dataEntries.innerText = (`${i}: ${userData[i]}`);
//         newDiv.append(dataEntries);
//     }
   
    
//!Correction

    // const userData = {
    //     name: 'John delavega',
    //     email: 'john.doe@example.com',
    //     age: 25,
    //     dob: '08/02/1989',
    //     active: true,
    //     img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
    //   };
      
      // JS qui va customiser la div du profile utilisateur
    //   let divUser = document.querySelector('.userProfile');
    //   divUser.style.backgroundColor = `background-color: #4158D0`;
    //   divUser.style.backgroundImage = `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`;
    //   divUser.style.color = `white`;
    //   divUser.style.width = '500px';
    //   divUser.style.margin = 'auto';
    //   divUser.style.padding = '2rem';
      
      //JS crée une image, renseigne la src , modif taille
    //   const imgTemplate = document.createElement('img');
    //   imgTemplate.src = userData.img;
    //   imgTemplate.style.height = '500px';
    //   imgTemplate.style.width = '500px';
    //   divUser.append(imgTemplate);
      
      // JS crée le titre du name
    //   const nameTemplate = document.createElement('h1');//phase 1 creation
    //   nameTemplate.innerText = userData['name'];
    //   divUser.append(nameTemplate);
      
      // JS crée le titre du email
    //   const emailTemplate = document.createElement('h2');//phase 1 creation
    //   emailTemplate.innerText = userData.email;
    //   divUser.append(emailTemplate);
      
      // JS crée le titre du age
    //   const ageTemplate = document.createElement('h2');//phase 1 creation
    //   ageTemplate.innerText = userData.age;
    //   divUser.append(ageTemplate);
      
      // JS crée le titre du dob
    //   const dobTemplate = document.createElement('h2');//phase 1 creation
    //   dobTemplate.innerText = userData.dob;
    //   divUser.append(dobTemplate);
      
      // JS crée le titre du active
    //   const activeTemplate = document.createElement('h2');//phase 1 creation
    //   activeTemplate.innerText = userData.active;
    //   divUser.append(activeTemplate);

// let ajouterTexte = (pseudo,duTexte) => { 
//     let texte = document.createElement('p');
//     texte.innerHTML = `<strong>${pseudo}</strong> de son magnifique patronyme ${duTexte}`
//     document.body.append(texte);
// }
// ajouterTexte('José','Gracia');
// ajouterTexte('Bastien','le Krakenito');
// ajouterTexte('Florian','ITER');


// class Imc {
//   constructor(nom,poids,taille) {
//     this._nom = nom;
//     this._poids = poids;
//     this._taille = taille;
//   }
//   calculImc() {
//     let imc = this._poids/this._taille**2;
//     let imcr1 = imc.toFixed(2);
//     let imcr2 = Number.parseFloat(imcr1);
//     return imcr2
//   }
//   display() {
//     console.log(`Bonjour ${this._nom} avec une taille de ${this._taille} et un poids de ${this._poids}, votre IMC est de ${this.calculImc()}.`)
//   }
// }

// let list = [
//   new Imc("Sébastien Chabal", 135, 1.7),
//   new Imc("Escaladeuse", 45, 1.68),
//   new Imc("JOJO ", 300, 2),
//   new Imc("Gontrand ", 90, 1.75),
//   new Imc("Colonel Clock ", 200, 1.75),
//   new Imc("JOsiane de la Vega", 99, 1.55),
// ];

// list.forEach(i => i.display());




// let firstLink = document.querySelector('a');
// console.log(firstLink);
// let allLinks = document.querySelectorAll('a');
// console.log(allLinks);

// let firstTitle = document.querySelector('h1');
// console.log(firstTitle);

// let firstImg = document.querySelector('img');
// console.log(firstImg);

// // firstTitle.style.backgroundColor = 'blue';
// // firstTitle.style.color = 'beige';

// firstTitle.className = 'laClasse';
// firstLink.href = 'https://www.google.com'
// firstImg.src = 'https://picsum.photos/200/300'

// firstImg.addEventListener('click',()=>{
//   console.log('CA CLICK A DONF');
// });

// let i = true;
// let firstTitle = document.getElementById("mainTitle");
// console.log(firstTitle);
// firstTitle.addEventListener('click',() => {
//   i == true? firstTitle.innerHTML ='Clique Gourgandine!' : firstTitle.innerHTML ='ouga booga!';
//   i = !i ;
// } )


// EXO Click + classListe

// ** addEventListener - classList.add() - classList.remove() - classList.toggle()
// En CSS on crée une classe maCouleur (vous modifiez ce que vous voulez)
// TODO 1: récupérer le titre dans une variable leTitre
// TODO 2: récupérer tous les liens dans une variable lesLiens
// TODO 3-1: Sur le 1er lien placer un addEventListener qui écoute le "click" et éxecute une fonction
// TODO 3-2: Dans cette fonction on ajoute la classe "maCouleur" sur titre
// TODO 4-1: Sur le 2e lien placer un addEventListener qui écoute le "click" et éxecute une fonction
// TODO 4-2: Dans cette fonction on supprime la classe "maCouleur" sur titre
// TODO 4-1: Sur le 3e lien placer un addEventListener qui écoute le "click" et éxecute une fonction
// TODO 4-2: Dans cette fonction on toggle la classe "maCouleur" sur titre

leTitre = document.getElementById("mainTitle");
lesLiens = document.querySelectorAll("a");
lesLiens[0].addEventListener('click',()=> {leTitre.classList.add("maCouleur")});
lesLiens[1].addEventListener('click',()=> {leTitre.classList.remove("maCouleur")});
lesLiens[2].addEventListener('click',()=> {leTitre.classList.toggle("maCouleur")});
























// **********************************************************
// COURS 
// **********************************************************

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



// //! Syntaxe ES6 Fonction fléchée (c'est beaucoup utilisé nottament dans des framework - librairies)
// let somme = function(a, b) {
//     return a + b;
// };
// //! Avant la => on a les paramètres, Après la => on a ce que ca return
// let leCalcul = (a, b) => a + b;
// console.log(leCalcul(1, 2));



//? L'instruction for...of permet de créer une boucle Array qui parcourt un objet itérable 
//? (ce qui inclut les objets Array, Map, Set, String, TypedArray, l'objet arguments, etc.) 
//? et qui permet d'exécuter une ou plusieurs instructions pour la valeur de chaque propriété.
// on définit une variable temporaire pour parcourir le tableau
// for(let unElementTablo of listeFilm){
//     console.log('boucle FOR...OF : ',unElementTablo);
// };



//? Parcourir les Objet  (Depuis javaScript ES8)
//? La Method .keys() qui convertit les clés d'un objet en tableau
//? La Method .values() qui convertit les valeurs d'un objet en tableau
// //? La Method .entries() qui renvoit un tableau dans un tableau pour combiner clé - valeur
// const keyUser = Object.keys(userData);
// console.log("les clé de l'objet converties en array : ",keyUser);

// const valuesUser = Object.values(userData);
// console.log("les valeur de l'objet converties en array : ",valuesUser);

// const convertedDataUser = Object.entries(userData);
// console.log("les entrées de l'objet converties en array : ",convertedDataUser);


//? bonus syntaxe en ƒ° classic
//! Dans la fonction que l'on passe dans map(), si on met un 2nd param
//! C'est l'index du tableau
// textesTab.map(function(x,i){
    // x.style.color = "red";
    // console.log(i)


//? bonus syntaxe en ƒ° fléchée
// textesTab.map((x,i) => {
//     x.style.color = "red";
//     console.log(i)
// });


//? Bonus II le retour : utilisation de map pour placer un addEventListener sur chaque <p>
// textesTab.map(toto => toto.addEventListener('click',function(){
//     console.log("SUPER CA CLICK")
// }));




/**
 * **************************************
 * 14- Les Classes
 * **************************************
 */
// class UserProfile {
//     //! Pas besoin de déclarer function devant le constructor et méthodes
//     constructor(nameUser, mailUser, phoneUser) {
      // Attribut en IN MODE : Attribut nécéssaire à la construction d'une instance.
//       this.nameUser = nameUser;
//       this.mailUser = mailUser;
//       this.phoneUser = phoneUser;
      // Attribut en outMode
//       this.contact = phoneUser + mailUser;
//       this.resume = this.getProfileInfo();
//     }
//     getProfileInfo() {
//       console.log('this ',this);
//       return `infos de l'utilisateur : 
//               son nom : ${this.nameUser}
//               son mail : ${this.mailUser}
//               son Tél : ${this.phoneUser}`;
//     }
//   }
  
//   const exampleUser1 = new UserProfile("José", "jose@gmail.com", "09876543");
//   const exampleUser2 = new UserProfile("Sarah", "sarah@gmail.com", "063736252");
//   exampleUser2.getProfileInfo();