/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function area(l1, l2) {
    let result = l1 * l2;
  
    return result;
  }
  
  console.log(area(10, 15)); */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function crazySum(a, b) {
  let result = a + b;

  if (result % 2 === 0) {
    console.log(result * 3);
  } else {
    console.log("This is not a problem");
  }
}

console.log(crazySum(10, 10)); */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

//to be continued
/* SCRIVI QUI LA TUA RISPOSTA */

/* let globalNum = 17;
function crazyDiff(b) {
  let newNum = b - globalNum;
  let result = newNum;

  if (globalNum > b) {
    console.log(result * 3);
  } else {
    console.log("nothing to see here");
  }
}

console.log(crazyDiff(b)); */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function boundary(n) {
  let number = n;

  if (number >= 20 && number <= 100) {
    console.log(true);
  } else if (number === true) {
    console.log(true);
  } else {
    console.log("this calculation is incorrect");
  }

  //return number;
}

console.log(boundary(27)); */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function epify(string) {
  let result = string;

  if (result.startsWith("EPICODE")) {
    return result;
    //console.log(result)
  } else {
    return "EPICODE" + " " + result;
  }
}

console.log(epify("Woman"));
console.log(epify("EPICODE"));
console.log(epify("Boy"));
console.log(epify("Girl"));
console.log(epify("Gender")); */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function check3and7(num) {
  let parameter = num;

  if (parameter % 3 === 0 || parameter % 7 === 0) {
    console.log(parameter);
  } else {
    console.log("nothing to see here");
  }
}

console.log(check3and7(20));
console.log(check3and7(21));
console.log(check3and7(79)); */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function reverseString(string) {
  let parameter = string;
  let empty;

  empty = parameter.split("");
  let newString = empty.reverse();

  return newString;
}

console.log(reverseString("EPICODE")); */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//unfinished
/* function upperFirst(str) {
  let stringToModify = str;

  let checkingString = stringToModify.split(" ");

  for (let i = 0; i < checkingString.length; i++) {
    checkingString[i] = checkingString.charAt(0).toUpperCase() + checkingString[i].slice(1);
  }

  let confirmedString = checkingString.join();

  return confirmedString;
}

console.log(upperFirst("prepare your mind")); */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function cutString(string) {
  let stringNewArray = string;

  let wordsToSeparate = stringNewArray.split("");
  //console.log(wordsToSeparate);

  //wordsToSeparate.pop();
  //wordsToSeparate.shift();

  //or 

  //let separatedWords = wordsToSeparate.splice(1, 3);

  return separatedWords;
}

console.log(cutString("happy")); */
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function giveMeRandom(n) {
  let random = Math

 for ( let i = 0; i < arr.length; i++) {

 }

  return random;
}

console.log(giveMeRandom(10)); */
