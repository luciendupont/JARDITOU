/*
Objet : Ecrire un programme qui lit le prix HT d’un article, le nombre d’articles et le taux de TVA, et qui fournit le prix total TTC correspondant. Faire en sorte que des libellés apparaissent clairement.
*/

let ht = prompt("prix ht");
let nb = prompt("nb d'articles");
let tva = prompt("taux de TVA");

let ttc = ht*nb*(1+tva)

alert(ttc)
