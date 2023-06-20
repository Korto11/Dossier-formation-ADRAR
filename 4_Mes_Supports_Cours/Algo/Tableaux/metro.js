// Créer un tableau qui contient les temps de passage d'une ligne de métro à une station (en secondes), sachant qu'il passe toutes les 10 minutes entre 9h05 (32700 secondes) et  17h05 (61500 secondes).
// C'est-à-dire que le tableau devra être : [32700, 33300, 33900, 34500, ..., 60900, 61500]
console.log("Bonjour");
let underground = [];/* TODO */
let perturbation = (13*3600+41*60);
let reprise = (14*3600+26*60);
let intervalle = 600;

for (let i=32700;i<=61500;i+=intervalle) {
    underground.push(i);
}
console.log(underground);
// À 13h41, il y a eu un incident sur la ligne, qui a retardé l'ensemble du métro pendant 3 minutes. Les perturbations ont cessé à 14h26.
// Modifier le tableau pour refléter ces perturbations.
// let p=Math.ceil((perturbation-32700)/intervalle);
// let r=Math.floor((reprise-32700)/intervalle);
// console.log(underground[p+1]+180);
// console.log(underground[r]);
// while (underground[r]-underground[p]>=0) {
//     underground[p]=underground[p]+180;
//     p++;
// }
// console.log(underground);

for (let i=0;underground[i]<reprise;i++) {
    if (underground[i]>perturbation && underground[i]<reprise){
        underground[i]=underground[i]+180;
    }
}
console.log(underground);