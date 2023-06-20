// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1(){
    console.log(17);
}
// Utiliser la fonction f1 pour afficher 17 dans la console.
f1();
// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.
function f2(){
    return 17;
}

// Utiliser la fonction f2 pour afficher 17 dans la console.
console.log(f2());
// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?
 console.log('on peut stoker son résultat dans une variable')

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(a) {
    n=a*2;
    console.log(n);     
}

// Utiliser la fonction f3 pour écrire dans la console le double de 99.
f3(99);

// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(a) {
    n=a*2;
    return n;
}

// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f4(f4(99)));
// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
a=f4(99);
console.log(a)

// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.

function f5(a,b) {
    s=a+b;
    console.log(s);
}

// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
f5(42,77);

// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(a,b) {
    s=a+b;
    return s;
}

// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log(f6(42,77));

// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
let a=0;
a += f6(42,77);
// f6(a,f6(42,77));

// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7 (a,b) {
    if (a-b>0) {
        return a;
    } else {
        return b;
    }
}

// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
function f81(a,b,c){
    if (a-b-c>0) {
        return a;
    } else if (b-c>0){
        return b;
    } else {
        return c;
    }
}
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
function f82(a,b,c) {
    if (f7(a,b)-c>0) {
        return f7(a,b);
    } else {
        return c;
    }
}

console.log(f82(42,8,9))

// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.

function f9(a,b) {
    for(let i=0;i<a;i++) {
        console.log(b)
    }
}
f9(4,'patate');