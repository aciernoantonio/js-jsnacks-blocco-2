//chiedi all'utente un numero per 5 volte

sum = 0;

//ciclo for

/* for (let i = 0; i < 5; i++) {
    

    sum = sum + num;
}

console.log(sum); */

//ciclo while

let i = 0;



while (i < 5) {
    let num = parseInt(prompt("inserisci un numero"));

    sum = sum + num;

    i++
}

console.log(sum);